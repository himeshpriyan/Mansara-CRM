// frontend/src/mock/mockDb.js
// Persistent In-Browser Mock Database for Mansara Foods B2B CRM

import * as initialData from './mockData';

const DB_PREFIX = 'mansara_mock_db_';

class MockDatabase {
  constructor() {
    this.init();
  }

  init(forceReset = false) {
    const keys = [
      ['users', initialData.initialUsers],
      ['categories', initialData.initialCategories],
      ['products', initialData.initialProducts],
      ['dealers', initialData.initialDealers],
      ['stores', initialData.initialStores],
      ['warehouses', initialData.initialWarehouses],
      ['inventory', initialData.initialInventory],
      ['transfers', initialData.initialTransfers],
      ['invoices', initialData.initialInvoices],
      ['ledger', initialData.initialLedgerEntries],
      ['margins', initialData.initialMargins],
      ['requests', initialData.initialRequests],
      ['returns', initialData.initialReturns],
      ['tickets', initialData.initialTickets],
      ['notifications', initialData.initialNotifications],
      ['ecomOrders', initialData.initialEcomOrders],
      ['ecomCustomers', initialData.initialEcomCustomers],
      ['ecomCombos', initialData.initialEcomCombos],
      ['ecomBanners', initialData.initialEcomBanners],
      ['ecomReviews', initialData.initialEcomReviews],
      ['ecomContent', initialData.initialEcomContent],
      ['ecomSettings', initialData.initialEcomSettings],
      ['stalls', initialData.initialStalls],
      ['fieldSales', initialData.initialFieldSales],
      ['storeVisits', initialData.initialStoreVisits],
      ['expenses', initialData.initialExpenses],
      ['offers', initialData.initialOffers],
      ['vendors', initialData.initialVendors],
      ['purchaseOrders', initialData.initialPurchaseOrders],
      ['rndProjects', initialData.initialRnDProjects],
      ['analytics', initialData.initialAnalyticsData]
    ];

    keys.forEach(([key, defaultVal]) => {
      const storageKey = DB_PREFIX + key;
      if (forceReset || !localStorage.getItem(storageKey)) {
        try {
          localStorage.setItem(storageKey, JSON.stringify(defaultVal));
        } catch (e) {
          console.warn(`[MockDB] Storage write error for ${key}:`, e);
        }
      }
    });
  }

  get(collection) {
    try {
      const raw = localStorage.getItem(DB_PREFIX + collection);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      console.error(`[MockDB] Read error for ${collection}:`, e);
      return [];
    }
  }

  set(collection, data) {
    try {
      localStorage.setItem(DB_PREFIX + collection, JSON.stringify(data));
      return data;
    } catch (e) {
      console.error(`[MockDB] Save error for ${collection}:`, e);
      return data;
    }
  }

  find(collection, predicate = () => true) {
    const list = this.get(collection);
    return Array.isArray(list) ? list.filter(predicate) : [];
  }

  findById(collection, id) {
    const list = this.get(collection);
    if (!Array.isArray(list)) return null;
    return list.find(item => item.id === id || item._id === id) || null;
  }

  insert(collection, item) {
    const list = this.get(collection);
    const newId = item.id || item._id || `${collection.slice(0, 3)}_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`;
    const newItem = {
      ...item,
      id: newId,
      _id: newId,
      createdAt: item.createdAt || new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    if (Array.isArray(list)) {
      list.unshift(newItem);
      this.set(collection, list);
    }
    return newItem;
  }

  update(collection, id, updates) {
    const list = this.get(collection);
    if (!Array.isArray(list)) return null;
    const index = list.findIndex(item => item.id === id || item._id === id);
    if (index === -1) return null;
    
    list[index] = {
      ...list[index],
      ...updates,
      updatedAt: new Date().toISOString()
    };
    this.set(collection, list);
    return list[index];
  }

  delete(collection, id) {
    const list = this.get(collection);
    if (!Array.isArray(list)) return false;
    const filtered = list.filter(item => item.id !== id && item._id !== id);
    this.set(collection, filtered);
    return true;
  }

  reset() {
    this.init(true);
    console.log('🔄 [MockDB] Local mock database has been reset to factory defaults.');
  }
}

export const mockDb = new MockDatabase();
export default mockDb;
