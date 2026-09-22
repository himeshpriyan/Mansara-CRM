// frontend/src/mock/mockServer.js
// Universal In-Browser Mock API Server for Mansara Foods CRM & E-Commerce Suite

import axios from 'axios';
import mockDb from './mockDb';

// Utility to simulate network delay for realistic UI spinners
const delay = (ms = 120) => new Promise(resolve => setTimeout(resolve, ms));

// Helper for standard API responses
const success = (data, message = 'Success', pagination = null) => ({
  data: {
    success: true,
    message,
    data,
    ...(pagination ? { pagination } : {})
  },
  status: 200,
  statusText: 'OK',
  headers: { 'content-type': 'application/json' }
});

const errorResponse = (message = 'Error', status = 400) => ({
  data: { success: false, message },
  status,
  statusText: status === 404 ? 'Not Found' : 'Bad Request',
  headers: { 'content-type': 'application/json' }
});

// Helper to parse query parameters
const parseQueryParams = (url) => {
  const queryIndex = url.indexOf('?');
  if (queryIndex === -1) return {};
  const searchParams = new URLSearchParams(url.substring(queryIndex));
  const params = {};
  for (const [k, v] of searchParams.entries()) {
    params[k] = v;
  }
  return params;
};

// Main Mock Request Dispatcher
export const handleMockRequest = async (method, rawUrl, data = null, headers = {}) => {
  await delay(120);

  // Normalize URL to remove baseURL / protocol / hostname
  let url = rawUrl
    .replace(/^https?:\/\/[^/]+/, '')
    .replace(/^\/api/, '');
  
  if (!url.startsWith('/')) url = '/' + url;
  
  const [pathname] = url.split('?');
  const params = parseQueryParams(rawUrl);
  const upperMethod = method.toUpperCase();

  // Parse payload data if stringified
  let body = data;
  if (typeof data === 'string') {
    try { body = JSON.parse(data); } catch (_) {}
  }

  // -------------------------------------------------------------
  // 1. AUTHENTICATION
  // -------------------------------------------------------------
  if (pathname === '/auth/login' && upperMethod === 'POST') {
    const { email, password } = body || {};
    const users = mockDb.get('users');
    const user = users.find(u => u.email.toLowerCase() === (email || '').toLowerCase()) || users[0];
    
    // Simulate token
    const token = 'mock_jwt_token_' + btoa(JSON.stringify({ id: user.id, email: user.email, role: user.role }));
    localStorage.setItem('mansara_token', token);
    
    return success({
      token,
      user: {
        id: user.id,
        _id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        staffRole: user.staffRole,
        phone: user.phone,
        dealer: user.role === 'DEALER' ? mockDb.findById('dealers', user.dealerId || 'dlr_001') : null
      }
    }, 'Login successful');
  }

  if (pathname === '/auth/me' && upperMethod === 'GET') {
    const token = localStorage.getItem('mansara_token');
    const users = mockDb.get('users');
    let user = users[0]; // default admin

    if (token && token.includes('dealer')) {
      user = users.find(u => u.role === 'DEALER') || users[1];
    }

    return success({
      id: user.id,
      _id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      staffRole: user.staffRole,
      phone: user.phone,
      dealer: user.role === 'DEALER' ? mockDb.findById('dealers', user.dealerId || 'dlr_001') : null
    });
  }

  if (pathname === '/auth/forgot-password' && upperMethod === 'POST') {
    return success({ message: 'Password reset link sent to registered email' });
  }

  if (pathname === '/auth/reset-password' && upperMethod === 'POST') {
    return success({ message: 'Password reset successful' });
  }

  // -------------------------------------------------------------
  // 2. PRODUCTS & CATEGORIES
  // -------------------------------------------------------------
  if (pathname === '/products/categories' || pathname === '/categories') {
    if (upperMethod === 'GET') return success(mockDb.get('categories'));
    if (upperMethod === 'POST') return success(mockDb.insert('categories', body), 'Category created');
  }

  if (pathname === '/products' || pathname.startsWith('/products/')) {
    const id = pathname.replace('/products/', '');
    
    if (pathname === '/products') {
      if (upperMethod === 'GET') {
        let items = mockDb.get('products');
        if (params.search) {
          const q = params.search.toLowerCase();
          items = items.filter(p => p.name.toLowerCase().includes(q) || (p.code && p.code.toLowerCase().includes(q)));
        }
        if (params.category) {
          items = items.filter(p => p.category === params.category || p.categoryId === params.category);
        }
        return success(items);
      }
      if (upperMethod === 'POST') {
        const item = mockDb.insert('products', {
          ...body,
          image: body.image || 'https://images.unsplash.com/photo-1612927601601-6638404737ce?auto=format&fit=crop&w=600&q=80',
          stock: Number(body.stock) || 100,
          mrp: Number(body.mrp) || 100,
          basePrice: Number(body.basePrice) || 70,
          dealerPrice: Number(body.dealerPrice) || 75
        });
        return success(item, 'Product created successfully');
      }
    } else if (id && !id.includes('/')) {
      if (upperMethod === 'GET') {
        const item = mockDb.findById('products', id);
        return item ? success(item) : errorResponse('Product not found', 404);
      }
      if (upperMethod === 'PUT' || upperMethod === 'PATCH') {
        const updated = mockDb.update('products', id, body);
        return success(updated, 'Product updated successfully');
      }
      if (upperMethod === 'DELETE') {
        mockDb.delete('products', id);
        return success({ id }, 'Product deleted successfully');
      }
    }
  }

  // -------------------------------------------------------------
  // 3. DEALERS & STORES
  // -------------------------------------------------------------
  if (pathname === '/dealers/pincode-lookup' || pathname.startsWith('/dealers/pincode-lookup/')) {
    return success({
      city: 'Chennai',
      state: 'Tamil Nadu',
      zone: 'South Chennai',
      district: 'Chennai'
    });
  }

  if (pathname === '/dealers/profile/update' && (upperMethod === 'PUT' || upperMethod === 'POST')) {
    const updated = mockDb.update('dealers', 'dlr_001', body);
    return success(updated, 'Profile updated');
  }

  if (pathname === '/dealers' || pathname.startsWith('/dealers/')) {
    const id = pathname.replace('/dealers/', '');
    if (pathname === '/dealers') {
      if (upperMethod === 'GET') return success(mockDb.get('dealers'));
      if (upperMethod === 'POST') {
        const item = mockDb.insert('dealers', {
          ...body,
          creditUsed: 0,
          outstandingBalance: 0,
          status: 'ACTIVE',
          approvalStatus: 'APPROVED',
          kycVerified: true
        });
        return success(item, 'Dealer registered successfully');
      }
    } else if (id && !id.includes('/')) {
      if (upperMethod === 'GET') return success(mockDb.findById('dealers', id) || mockDb.get('dealers')[0]);
      if (upperMethod === 'PUT' || upperMethod === 'PATCH') return success(mockDb.update('dealers', id, body), 'Dealer updated');
      if (upperMethod === 'DELETE') {
        mockDb.delete('dealers', id);
        return success({ id }, 'Dealer removed');
      }
    }
  }

  if (pathname === '/stores' || pathname.startsWith('/stores/')) {
    const id = pathname.replace('/stores/', '');
    if (pathname === '/stores') {
      if (upperMethod === 'GET') return success(mockDb.get('stores'));
      if (upperMethod === 'POST') return success(mockDb.insert('stores', body), 'Store created');
    } else if (id && !id.includes('/')) {
      if (upperMethod === 'PUT') return success(mockDb.update('stores', id, body), 'Store updated');
      if (upperMethod === 'DELETE') {
        mockDb.delete('stores', id);
        return success({ id }, 'Store deleted');
      }
    }
  }

  // -------------------------------------------------------------
  // 4. INVENTORY & WAREHOUSES
  // -------------------------------------------------------------
  if (pathname === '/inventory/dealer') {
    return success(mockDb.get('inventory'));
  }

  if (pathname === '/inventory/transfers' || pathname.startsWith('/inventory/transfers/')) {
    const id = pathname.replace('/inventory/transfers/', '').split('/')[0];
    if (pathname === '/inventory/transfers') {
      if (upperMethod === 'GET') return success(mockDb.get('transfers'));
      if (upperMethod === 'POST') {
        const transfer = mockDb.insert('transfers', {
          ...body,
          transferNumber: 'TRF-2024-' + Math.floor(1000 + Math.random() * 9000),
          status: 'IN_TRANSIT',
          dispatchDate: new Date().toISOString().split('T')[0]
        });
        return success(transfer, 'Transfer created');
      }
    } else if (pathname.endsWith('/status')) {
      const updated = mockDb.update('transfers', id, { status: body.status || 'COMPLETED' });
      return success(updated, 'Transfer status updated');
    }
  }

  if (pathname === '/inventory' || pathname.startsWith('/inventory/')) {
    if (upperMethod === 'GET') {
      return success({
        items: mockDb.get('inventory'),
        warehouses: mockDb.get('warehouses'),
        stats: {
          totalProducts: mockDb.get('products').length,
          totalStockUnits: 8450,
          lowStockCount: 2,
          outOfStockCount: 0
        }
      });
    }
    if (upperMethod === 'POST') return success(mockDb.insert('inventory', body), 'Stock updated');
  }

  // -------------------------------------------------------------
  // 5. BILLING, INVOICES & LEDGER
  // -------------------------------------------------------------
  if (pathname.includes('/pdf')) {
    // Generate simulated PDF blob response
    const mockPdfBlob = new Blob(['%PDF-1.4 Mock Mansara Foods Invoice PDF Stream'], { type: 'application/pdf' });
    return {
      data: mockPdfBlob,
      status: 200,
      statusText: 'OK',
      headers: { 'content-type': 'application/pdf' }
    };
  }

  if (pathname === '/billing' || pathname.startsWith('/billing/')) {
    const id = pathname.replace('/billing/', '').split('/')[0];
    if (pathname === '/billing') {
      if (upperMethod === 'GET') return success(mockDb.get('invoices'));
      if (upperMethod === 'POST') {
        const invNumber = 'INV-MF-2024-0' + Math.floor(100 + Math.random() * 900);
        const subTotal = (body.items || []).reduce((acc, it) => acc + (it.qty * it.price), 0) || Number(body.totalAmount) || 5000;
        const taxAmount = Math.round(subTotal * 0.05);
        const totalAmount = subTotal + taxAmount;

        const newInv = mockDb.insert('invoices', {
          ...body,
          invoiceNumber: invNumber,
          subTotal,
          taxAmount,
          totalAmount,
          paidAmount: body.isCredit ? 0 : totalAmount,
          balanceAmount: body.isCredit ? totalAmount : 0,
          status: body.isCredit ? 'OPEN' : 'PAID',
          invoiceDate: new Date().toISOString().split('T')[0]
        });

        // Also add ledger entry
        mockDb.insert('ledger', {
          dealerId: body.dealerId || 'dlr_001',
          date: new Date().toISOString().split('T')[0],
          type: 'INVOICE',
          reference: invNumber,
          description: 'Sales Order Invoice',
          debit: totalAmount,
          credit: 0,
          balance: totalAmount
        });

        return success(newInv, 'Invoice generated successfully');
      }
    } else if (pathname.endsWith('/close')) {
      const updated = mockDb.update('invoices', id, { status: 'PAID', balanceAmount: 0, paidAmount: 68500 });
      return success(updated, 'Invoice marked as settled');
    } else if (upperMethod === 'DELETE') {
      mockDb.delete('invoices', id);
      return success({ id }, 'Invoice removed');
    }
  }

  // -------------------------------------------------------------
  // 6. MARGINS, REQUESTS, RETURNS, TICKETS, NOTIFICATIONS
  // -------------------------------------------------------------
  if (pathname === '/margins' || pathname.startsWith('/margins/')) {
    if (upperMethod === 'GET') return success(mockDb.get('margins'));
    if (upperMethod === 'POST') return success(mockDb.insert('margins', body), 'Margin tier created');
  }

  if (pathname === '/requests' || pathname.startsWith('/requests/')) {
    if (upperMethod === 'GET') return success(mockDb.get('requests'));
    if (upperMethod === 'POST') {
      const item = mockDb.insert('requests', {
        ...body,
        requestNumber: 'REQ-2024-0' + Math.floor(100 + Math.random() * 900),
        status: 'PENDING'
      });
      return success(item, 'Request submitted');
    }
  }

  if (pathname === '/returns' || pathname.startsWith('/returns/')) {
    if (upperMethod === 'GET') return success(mockDb.get('returns'));
    if (upperMethod === 'POST') return success(mockDb.insert('returns', body), 'Return logged');
  }

  if (pathname === '/tickets' || pathname.startsWith('/tickets/')) {
    if (upperMethod === 'GET') return success(mockDb.get('tickets'));
    if (upperMethod === 'POST') return success(mockDb.insert('tickets', body), 'Ticket opened');
  }

  if (pathname === '/notifications' || pathname.startsWith('/notifications/')) {
    return success(mockDb.get('notifications'));
  }

  // -------------------------------------------------------------
  // 7. E-COMMERCE & STATS SUITE
  // -------------------------------------------------------------
  if (pathname === '/orders' || pathname.startsWith('/orders/') || pathname.includes('/ecom/orders')) {
    if (upperMethod === 'GET') return success(mockDb.get('ecomOrders'));
    if (upperMethod === 'POST') return success(mockDb.insert('ecomOrders', body), 'Order placed');
  }

  if (pathname.includes('/stats') || pathname.includes('/reports')) {
    if (pathname.includes('/sales')) {
      const sales = Array.from({ length: 14 }).map((_, i) => {
        const d = new Date();
        d.setDate(d.getDate() - (13 - i));
        return {
          date: d.toLocaleDateString('en-IN', { month: 'short', day: 'numeric' }),
          sales: Math.floor(18000 + (i * 1200) + Math.sin(i) * 5000),
          orders: Math.floor(8 + (i % 5) + 3)
        };
      });
      return success(sales);
    }
    if (pathname.includes('/products')) {
      const prods = mockDb.get('products').slice(0, 10).map((p, idx) => ({
        id: p.id,
        name: p.name,
        totalSold: 120 - idx * 10,
        sold: 120 - idx * 10,
        revenue: (120 - idx * 10) * (p.dealerPrice || 70),
        image: p.image || p.imageUrl
      }));
      return success(prods);
    }
    if (pathname.includes('/customers')) {
      const custs = mockDb.get('ecomCustomers').slice(0, 10).map((c, idx) => ({
        id: c.id,
        name: c.name,
        totalOrders: 15 - idx,
        totalSpent: 18500 - idx * 1200
      }));
      return success(custs);
    }
    if (pathname.includes('/categories')) {
      return success([
        { name: 'Millets & Grains', revenue: 145000, orders: 120 },
        { name: 'Cold Pressed Oils', revenue: 198000, orders: 165 },
        { name: 'Breakfast & Mixes', revenue: 84000, orders: 95 },
        { name: 'Healthy Noodles', revenue: 112000, orders: 110 },
        { name: 'Natural Sweeteners', revenue: 76000, orders: 70 }
      ]);
    }
    if (pathname.includes('/payment-methods')) {
      return success([
        { method: 'UPI / QR Code', count: 320, percentage: 62 },
        { method: 'Credit / Debit Cards', count: 125, percentage: 24 },
        { method: 'Net Banking', count: 45, percentage: 9 },
        { method: 'Cash on Delivery', count: 26, percentage: 5 }
      ]);
    }
    if (pathname.includes('/stock-health')) {
      return success({ inStock: 38, lowStock: 6, outOfStock: 2 });
    }
    if (pathname.includes('/inactive-customers')) {
      return success([
        { id: 'c_01', name: 'Ravi Teja', email: 'ravi.t@example.com', lastOrder: '45 days ago', totalOrders: 3 },
        { id: 'c_02', name: 'Ananya Rao', email: 'ananya.r@example.com', lastOrder: '60 days ago', totalOrders: 5 }
      ]);
    }
    if (pathname.includes('/slow-moving')) {
      return success([
        { id: 'prod_sm1', name: 'Organic Barnyard Flour 500g', stock: 140, daysWithoutSale: 28 },
        { id: 'prod_sm2', name: 'Herbal Moringa Tea 100g', stock: 85, daysWithoutSale: 35 }
      ]);
    }
    // Main stats summary
    const orders = mockDb.get('ecomOrders');
    const customers = mockDb.get('ecomCustomers');
    return success({
      totalRevenue: 645800,
      totalOrders: orders.length || 52,
      totalCustomers: customers.length || 38,
      averageOrderValue: 1240,
      topSelling: mockDb.get('products').slice(0, 3)
    });
  }

  if (pathname.includes('/ecom') || pathname.startsWith('/ecom/')) {
    if (pathname.includes('/customers')) return success(mockDb.get('ecomCustomers'));
    if (pathname.includes('/combos')) {
      if (upperMethod === 'GET') return success(mockDb.get('ecomCombos'));
      if (upperMethod === 'POST') return success(mockDb.insert('ecomCombos', body), 'Combo created');
    }
    if (pathname.includes('/banners')) {
      if (upperMethod === 'GET') return success(mockDb.get('ecomBanners'));
      if (upperMethod === 'POST') return success(mockDb.insert('ecomBanners', body), 'Banner saved');
    }
    if (pathname.includes('/reviews')) return success(mockDb.get('ecomReviews'));
    if (pathname.includes('/content')) return success(mockDb.get('ecomContent'));
    if (pathname.includes('/settings')) {
      if (upperMethod === 'GET') return success(mockDb.get('ecomSettings'));
      if (upperMethod === 'PUT' || upperMethod === 'POST') {
        mockDb.set('ecomSettings', body);
        return success(body, 'Settings updated');
      }
    }
  }

  // -------------------------------------------------------------
  // 8. STALLS, FIELD SALES, EXPENSES, OFFERS, VENDORS, PROCUREMENT
  // -------------------------------------------------------------
  if (pathname === '/stalls' || pathname.startsWith('/stalls/')) {
    if (upperMethod === 'GET') return success(mockDb.get('stalls'));
    if (upperMethod === 'POST') return success(mockDb.insert('stalls', body), 'Stall added');
  }

  if (pathname === '/field-sales/visits' || pathname.startsWith('/field-sales/')) {
    if (pathname.includes('/visits')) return success(mockDb.get('storeVisits'));
    return success(mockDb.get('fieldSales'));
  }

  if (pathname === '/expenses' || pathname.startsWith('/expenses/')) {
    if (upperMethod === 'GET') return success(mockDb.get('expenses'));
    if (upperMethod === 'POST') return success(mockDb.insert('expenses', body), 'Expense submitted');
  }

  if (pathname === '/offers' || pathname.startsWith('/offers/')) {
    if (upperMethod === 'GET') return success(mockDb.get('offers'));
    if (upperMethod === 'POST') return success(mockDb.insert('offers', body), 'Offer saved');
  }

  if (pathname === '/b2c-stores' || pathname.startsWith('/b2c-stores/')) {
    return success(mockDb.get('stores'));
  }

  if (pathname === '/vendors' || pathname.startsWith('/vendors/')) {
    if (upperMethod === 'GET') return success(mockDb.get('vendors'));
    if (upperMethod === 'POST') return success(mockDb.insert('vendors', body), 'Vendor created');
  }

  if (pathname === '/procurement' || pathname.startsWith('/procurement/')) {
    return success({
      purchaseOrders: mockDb.get('purchaseOrders'),
      vendors: mockDb.get('vendors'),
      categories: ['Raw Millets & Grains', 'Bulk Edible Oils', 'Packaging Materials']
    });
  }

  if (pathname === '/crm/users' || pathname === '/users') {
    return success(mockDb.get('users'));
  }

  // -------------------------------------------------------------
  // 9. ANALYTICS & DASHBOARD
  // -------------------------------------------------------------
  if (pathname.includes('/analytics')) {
    return success(mockDb.get('analytics'));
  }

  // -------------------------------------------------------------
  // 10. MOCK FILE UPLOAD
  // -------------------------------------------------------------
  if (pathname.includes('/upload') || pathname.includes('/bulk-upload')) {
    return success({
      url: 'https://images.unsplash.com/photo-1612927601601-6638404737ce?auto=format&fit=crop&w=600&q=80',
      filePath: '/uploads/mock_image.jpg',
      processedCount: 15
    }, 'Uploaded successfully');
  }

  // Default fallback for any unmatched route
  console.log(`[MockServer] Unmatched route: ${upperMethod} ${pathname}, returning standard mock payload`);
  return success({ id: 'mock_' + Date.now(), success: true });
};

// Setup Axios Interceptors and Custom Adapter to guarantee NO network errors
export const setupMockServer = () => {
  // Custom adapter handles all Axios requests in-memory
  axios.defaults.adapter = async (config) => {
    try {
      const response = await handleMockRequest(
        config.method || 'get',
        config.url,
        config.data,
        config.headers
      );
      return {
        ...response,
        config
      };
    } catch (err) {
      console.error('[MockServer Error]', err);
      return {
        data: { success: false, message: err.message },
        status: 500,
        statusText: 'Internal Error',
        headers: {},
        config
      };
    }
  };

  // Monkey-patch window.fetch to route any direct fetch() calls through mock handler
  const originalFetch = window.fetch;
  window.fetch = async (input, init = {}) => {
    const url = typeof input === 'string' ? input : input.url;
    // Intercept our API calls
    if (
      url.includes('localhost:5000') ||
      url.includes('onrender.com') ||
      url.includes('mansarafoods.com') ||
      url.startsWith('/api') ||
      url.includes('/api/') ||
      url.includes('/products') ||
      url.includes('/orders') ||
      url.includes('/stats') ||
      url.includes('/reports') ||
      url.includes('/categories') ||
      url.includes('/ecom')
    ) {
      const method = (init.method || 'GET').toUpperCase();
      const res = await handleMockRequest(method, url, init.body, init.headers);
      
      // Adapt payload so both direct array/object access and envelope access (.data) succeed
      let payload = res.data;
      if (res.data && res.data.data !== undefined) {
        if (Array.isArray(res.data.data)) {
          payload = res.data.data;
          // Also allow .data access if caller treats array response as an object
          payload.data = res.data.data;
        } else if (typeof res.data.data === 'object' && res.data.data !== null) {
          payload = { ...res.data.data, ...res.data };
        }
      }

      return new Response(JSON.stringify(payload), {
        status: res.status || 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    return originalFetch(input, init);
  };

  console.log('⚡ [MockServer] In-browser Mock API Server initialized. Backend / Database dependency completely removed.');
};
