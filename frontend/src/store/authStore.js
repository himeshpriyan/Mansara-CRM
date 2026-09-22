import { create } from 'zustand';
import axios from 'axios';

// Standalone In-Browser Mock API Configuration
export const API_URL = '/api';
export const BACKEND_URL = '';

// Set default base URL for API requests
axios.defaults.baseURL = API_URL;

// Configure interceptor to inject Authorization header dynamically
axios.interceptors.request.use((config) => {
  const token = localStorage.getItem('mansara_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

// Response interceptor to handle 401 Unauthorized gracefully
axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      const currentPath = window.location.pathname;
      if (!currentPath.includes('/login') && !currentPath.includes('/forgot-password')) {
        localStorage.removeItem('mansara_token');
        window.location.href = '/login';
      }
    }
    return Promise.reject(error);
  }
);

export const useAuthStore = create((set, get) => ({
  user: null,
  token: localStorage.getItem('mansara_token') || null,
  isAuthenticated: !!localStorage.getItem('mansara_token'),
  loading: false,
  error: null,

  // Actions
  login: async (email, password) => {
    set({ loading: true, error: null });
    try {
      const response = await axios.post('/auth/login', { email, password });
      const { token, user } = response.data.data;
      
      localStorage.setItem('mansara_token', token);
      set({ token, user, isAuthenticated: true, loading: false });
      return { success: true, role: user.role };
    } catch (err) {
      const message = err.response?.data?.message || 'Login failed. Please check credentials.';
      set({ error: message, loading: false });
      return { success: false, message };
    }
  },

  logout: () => {
    localStorage.removeItem('mansara_token');
    set({ user: null, token: null, isAuthenticated: false, error: null });
  },

  fetchCurrentUser: async () => {
    const token = get().token;
    if (!token) return;
    
    set({ loading: true });
    try {
      const response = await axios.get('/auth/me');
      set({ user: response.data.data, isAuthenticated: true, loading: false });
    } catch (err) {
      // Token probably invalid/expired
      localStorage.removeItem('mansara_token');
      set({ user: null, token: null, isAuthenticated: false, loading: false });
    }
  },

  clearError: () => set({ error: null })
}));
