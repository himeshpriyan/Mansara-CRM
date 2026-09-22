// frontend/src/mock/mockData.js
// Comprehensive, realistic mock dataset for Mansara Foods B2B CRM & E-Commerce Suite

export const initialUsers = [
  {
    id: 'usr_admin_001',
    _id: 'usr_admin_001',
    name: 'Admin Director (Mansara)',
    email: 'admin@mansarafoods.com',
    role: 'ADMIN',
    staffRole: 'ADMIN',
    phone: '+91 98400 12345',
    isActive: true,
    lastLogin: new Date().toISOString(),
    createdAt: '2024-01-01T00:00:00.000Z'
  },
  {
    id: 'usr_dealer_001',
    _id: 'usr_dealer_001',
    name: 'Rajesh Kumar (Sri Lakshmi Stores)',
    email: 'dealer@mansarafoods.com',
    role: 'DEALER',
    staffRole: 'VIEWER',
    phone: '+91 98410 99887',
    isActive: true,
    dealerId: 'dlr_001',
    lastLogin: new Date().toISOString(),
    createdAt: '2024-02-15T00:00:00.000Z'
  },
  {
    id: 'usr_ecom_001',
    _id: 'usr_ecom_001',
    name: 'Priya Sundaram (E-Com Lead)',
    email: 'ecom@mansarafoods.com',
    role: 'ADMIN',
    staffRole: 'ECOM_MANAGER',
    phone: '+91 94440 55667',
    isActive: true,
    lastLogin: new Date().toISOString(),
    createdAt: '2024-03-01T00:00:00.000Z'
  },
  {
    id: 'usr_sales_001',
    _id: 'usr_sales_001',
    name: 'Karthik Raja (Field Sales Lead)',
    email: 'sales@mansarafoods.com',
    role: 'ADMIN',
    staffRole: 'B2B_MANAGER',
    phone: '+91 97890 33445',
    isActive: true,
    lastLogin: new Date().toISOString(),
    createdAt: '2024-03-10T00:00:00.000Z'
  }
];

export const initialCategories = [
  { id: 'cat_01', _id: 'cat_01', name: 'Millets & Grains', code: 'MKT-GRAIN', description: 'Unpolished traditional grains and millets', productCount: 8, isActive: true },
  { id: 'cat_02', _id: 'cat_02', name: 'Cold Pressed Oils', code: 'MKT-OIL', description: 'Wood and cold pressed pure edible oils', productCount: 6, isActive: true },
  { id: 'cat_03', _id: 'cat_03', name: 'Breakfast & Mixes', code: 'MKT-BF', description: 'Ready-to-cook healthy dosa and idli mixes', productCount: 7, isActive: true },
  { id: 'cat_04', _id: 'cat_04', name: 'Healthy Noodles & Vermicelli', code: 'MKT-NDL', description: 'Non-maida millet noodles and pastas', productCount: 6, isActive: true },
  { id: 'cat_05', _id: 'cat_05', name: 'Superfoods & Spices', code: 'MKT-SPF', description: 'Organic turmeric, moringa, and herbal powders', productCount: 5, isActive: true },
  { id: 'cat_06', _id: 'cat_06', name: 'Natural Sweeteners', code: 'MKT-SWT', description: 'Pure palm jaggery, brown sugar, honey', productCount: 4, isActive: true }
];

export const initialProducts = [
  {
    id: 'prod_001',
    _id: 'prod_001',
    name: 'Multi-Millet Noodles (No Maida)',
    code: 'MF-NDL-001',
    sku: 'MF-NDL-001-180G',
    category: 'Healthy Noodles & Vermicelli',
    categoryId: 'cat_04',
    weight: '180g',
    unit: 'Pack',
    mrp: 95,
    basePrice: 65,
    dealerPrice: 68,
    gstRate: 5,
    hsnCode: '19023000',
    stock: 1450,
    minStockAlert: 200,
    isPublished: true,
    isEcomActive: true,
    image: 'https://images.unsplash.com/photo-1612927601601-6638404737ce?auto=format&fit=crop&w=600&q=80',
    description: 'Made with 5 super millets (Ragi, Foxtail, Little, Kodo, Barnyard). Zero maida, zero preservatives.',
    nutritionalInfo: { calories: '360 kcal', protein: '11.5g', fiber: '8.2g', carbs: '72g' },
    shelfLifeMonths: 9,
    barcode: '8906001234011'
  },
  {
    id: 'prod_002',
    _id: 'prod_002',
    name: 'Wood Pressed Groundnut Oil (Marachekku)',
    code: 'MF-OIL-001',
    sku: 'MF-OIL-GND-1L',
    category: 'Cold Pressed Oils',
    categoryId: 'cat_02',
    weight: '1 Litre',
    unit: 'Bottle',
    mrp: 360,
    basePrice: 250,
    dealerPrice: 265,
    gstRate: 5,
    hsnCode: '15089091',
    stock: 820,
    minStockAlert: 100,
    isPublished: true,
    isEcomActive: true,
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=600&q=80',
    description: 'Traditional vaagai wood-pressed groundnut oil, 100% pure and unrefined.',
    nutritionalInfo: { energy: '884 kcal', fats: '100g', saturatedFat: '17g', vitaminE: '15.7mg' },
    shelfLifeMonths: 12,
    barcode: '8906001234028'
  },
  {
    id: 'prod_003',
    _id: 'prod_003',
    name: 'Cold Pressed Sesame Oil (Gingelly)',
    code: 'MF-OIL-002',
    sku: 'MF-OIL-SES-1L',
    category: 'Cold Pressed Oils',
    categoryId: 'cat_02',
    weight: '1 Litre',
    unit: 'Bottle',
    mrp: 440,
    basePrice: 310,
    dealerPrice: 330,
    gstRate: 5,
    hsnCode: '15155091',
    stock: 540,
    minStockAlert: 80,
    isPublished: true,
    isEcomActive: true,
    image: 'https://images.unsplash.com/photo-1607672632458-9eb56696346b?auto=format&fit=crop&w=600&q=80',
    description: 'Extracted with palm jaggery in wooden chekku. Rich in antioxidants and healthy fats.',
    nutritionalInfo: { energy: '884 kcal', fats: '100g', sesamin: '0.5g' },
    shelfLifeMonths: 12,
    barcode: '8906001234035'
  },
  {
    id: 'prod_004',
    _id: 'prod_004',
    name: 'Finger Millet (Ragi) Vermicelli',
    code: 'MF-NDL-002',
    sku: 'MF-VRM-RAG-200G',
    category: 'Healthy Noodles & Vermicelli',
    categoryId: 'cat_04',
    weight: '200g',
    unit: 'Pack',
    mrp: 65,
    basePrice: 42,
    dealerPrice: 45,
    gstRate: 5,
    hsnCode: '19023000',
    stock: 1950,
    minStockAlert: 250,
    isPublished: true,
    isEcomActive: true,
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80',
    description: 'High calcium and high fiber breakfast vermicelli for quick upma and sweet payasam.',
    nutritionalInfo: { calories: '328 kcal', calcium: '344mg', protein: '7.3g', fiber: '11.5g' },
    shelfLifeMonths: 9,
    barcode: '8906001234042'
  },
  {
    id: 'prod_005',
    _id: 'prod_005',
    name: 'Instant Sprouted Multi-Millet Dosa Mix',
    code: 'MF-MIX-001',
    sku: 'MF-MIX-DOSA-500G',
    category: 'Breakfast & Mixes',
    categoryId: 'cat_03',
    weight: '500g',
    unit: 'Pouch',
    mrp: 140,
    basePrice: 92,
    dealerPrice: 98,
    gstRate: 5,
    hsnCode: '21069099',
    stock: 1200,
    minStockAlert: 150,
    isPublished: true,
    isEcomActive: true,
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80',
    description: 'Sprouted millets with urad dal and fenugreek. Just add water, stir and make crispy dosas.',
    nutritionalInfo: { calories: '350 kcal', protein: '13.2g', fiber: '9.8g' },
    shelfLifeMonths: 6,
    barcode: '8906001234059'
  },
  {
    id: 'prod_006',
    _id: 'prod_006',
    name: 'Organic Moringa Leaf Powder',
    code: 'MF-SPF-001',
    sku: 'MF-SPF-MRG-100G',
    category: 'Superfoods & Spices',
    categoryId: 'cat_05',
    weight: '100g',
    unit: 'Jar',
    mrp: 180,
    basePrice: 115,
    dealerPrice: 125,
    gstRate: 5,
    hsnCode: '12119029',
    stock: 640,
    minStockAlert: 80,
    isPublished: true,
    isEcomActive: true,
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80',
    description: 'Sun-dried organically grown drumstick leaves, packed with natural iron, vitamins and calcium.',
    nutritionalInfo: { iron: '28mg', vitaminA: '16.3mg', protein: '27g' },
    shelfLifeMonths: 12,
    barcode: '8906001234066'
  },
  {
    id: 'prod_007',
    _id: 'prod_007',
    name: 'Natural Country Palm Jaggery (Karupatti)',
    code: 'MF-SWT-001',
    sku: 'MF-SWT-JAG-500G',
    category: 'Natural Sweeteners',
    categoryId: 'cat_06',
    weight: '500g',
    unit: 'Pack',
    mrp: 220,
    basePrice: 150,
    dealerPrice: 160,
    gstRate: 0,
    hsnCode: '17011300',
    stock: 780,
    minStockAlert: 100,
    isPublished: true,
    isEcomActive: true,
    image: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=600&q=80',
    description: '100% chemical-free palm tree extract, unrefined and nutrient-rich sweetener.',
    nutritionalInfo: { iron: '11mg', magnesium: '80mg', potassium: '1050mg' },
    shelfLifeMonths: 12,
    barcode: '8906001234073'
  },
  {
    id: 'prod_008',
    _id: 'prod_008',
    name: 'Red Rice Poha / Flakes (Sigappu Aval)',
    code: 'MF-GRAIN-001',
    sku: 'MF-FLK-RED-500G',
    category: 'Millets & Grains',
    categoryId: 'cat_01',
    weight: '500g',
    unit: 'Pack',
    mrp: 90,
    basePrice: 58,
    dealerPrice: 62,
    gstRate: 5,
    hsnCode: '19041020',
    stock: 1600,
    minStockAlert: 200,
    isPublished: true,
    isEcomActive: true,
    image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=600&q=80',
    description: 'Thick traditional red rice flakes for healthy breakfast upma and porridge.',
    nutritionalInfo: { calories: '340 kcal', anthocyanins: '32mg', fiber: '6.5g' },
    shelfLifeMonths: 9,
    barcode: '8906001234080'
  }
];

export const initialDealers = [
  {
    id: 'dlr_001',
    _id: 'dlr_001',
    dealerCode: 'DLR-TN-001',
    name: 'Sri Lakshmi Organic Supermarket',
    contactPerson: 'Rajesh Kumar',
    email: 'dealer@mansarafoods.com',
    phone: '+91 98410 99887',
    zone: 'South Chennai',
    state: 'Tamil Nadu',
    city: 'Chennai',
    pincode: '600028',
    address: '42/1, RK Mutt Road, Mandaveli',
    gstin: '33AABCM1234K1ZV',
    marginTier: 'Tier 1 (Premium)',
    marginDiscount: 18,
    creditLimit: 250000,
    creditUsed: 68500,
    outstandingBalance: 68500,
    status: 'ACTIVE',
    approvalStatus: 'APPROVED',
    kycVerified: true,
    totalOrdersCount: 38,
    lifetimePurchases: 1450000,
    storeCount: 3,
    createdAt: '2024-01-10T00:00:00.000Z'
  },
  {
    id: 'dlr_002',
    _id: 'dlr_002',
    dealerCode: 'DLR-TN-002',
    name: 'Nalam Natural Foods & Organics',
    contactPerson: 'S. Meenakshi Sundaram',
    email: 'nalam.foods@gmail.com',
    phone: '+91 94433 11223',
    zone: 'Coimbatore West',
    state: 'Tamil Nadu',
    city: 'Coimbatore',
    pincode: '641002',
    address: '15, DB Road, RS Puram',
    gstin: '33BBBCM5678L1ZW',
    marginTier: 'Tier 1 (Premium)',
    marginDiscount: 18,
    creditLimit: 300000,
    creditUsed: 120000,
    outstandingBalance: 120000,
    status: 'ACTIVE',
    approvalStatus: 'APPROVED',
    kycVerified: true,
    totalOrdersCount: 52,
    lifetimePurchases: 2200000,
    storeCount: 5,
    createdAt: '2024-01-15T00:00:00.000Z'
  },
  {
    id: 'dlr_003',
    _id: 'dlr_003',
    dealerCode: 'DLR-KA-001',
    name: 'Arogya Wellness Mart',
    contactPerson: 'Venkatesh Rao',
    email: 'arogya.blr@gmail.com',
    phone: '+91 98860 44556',
    zone: 'Bangalore Central',
    state: 'Karnataka',
    city: 'Bengaluru',
    pincode: '560034',
    address: '77, 80 Feet Road, 4th Block Koramangala',
    gstin: '29CCCDK9876M1ZX',
    marginTier: 'Tier 2 (Standard)',
    marginDiscount: 14,
    creditLimit: 200000,
    creditUsed: 42000,
    outstandingBalance: 42000,
    status: 'ACTIVE',
    approvalStatus: 'APPROVED',
    kycVerified: true,
    totalOrdersCount: 29,
    lifetimePurchases: 980000,
    storeCount: 2,
    createdAt: '2024-02-01T00:00:00.000Z'
  },
  {
    id: 'dlr_004',
    _id: 'dlr_004',
    dealerCode: 'DLR-TN-003',
    name: 'Vaigai Organic Bazaar',
    contactPerson: 'Murugesan K.',
    email: 'vaigai.bazaar@yahoo.com',
    phone: '+91 97900 88776',
    zone: 'Madurai Central',
    state: 'Tamil Nadu',
    city: 'Madurai',
    pincode: '625001',
    address: '88, West Masi Street',
    gstin: '33DDDDM3456N1ZY',
    marginTier: 'Tier 2 (Standard)',
    marginDiscount: 14,
    creditLimit: 150000,
    creditUsed: 0,
    outstandingBalance: 0,
    status: 'ACTIVE',
    approvalStatus: 'APPROVED',
    kycVerified: true,
    totalOrdersCount: 19,
    lifetimePurchases: 640000,
    storeCount: 2,
    createdAt: '2024-02-20T00:00:00.000Z'
  },
  {
    id: 'dlr_005',
    _id: 'dlr_005',
    dealerCode: 'DLR-KL-001',
    name: 'Prakrithi Ayur & Organic Hub',
    contactPerson: 'Anjali Menon',
    email: 'prakrithi.cochin@gmail.com',
    phone: '+91 94470 66554',
    zone: 'Kochi Marine Drive',
    state: 'Kerala',
    city: 'Ernakulam',
    pincode: '682011',
    address: '24, Shanmugham Road',
    gstin: '32EEEEM7890P1ZZ',
    marginTier: 'Tier 3 (Retail Growth)',
    marginDiscount: 10,
    creditLimit: 100000,
    creditUsed: 15400,
    outstandingBalance: 15400,
    status: 'ACTIVE',
    approvalStatus: 'APPROVED',
    kycVerified: true,
    totalOrdersCount: 12,
    lifetimePurchases: 320000,
    storeCount: 1,
    createdAt: '2024-03-05T00:00:00.000Z'
  }
];

export const initialStores = [
  {
    id: 'str_001',
    _id: 'str_001',
    storeName: 'Sri Lakshmi Stores - Mandaveli Branch',
    dealerId: 'dlr_001',
    dealerName: 'Sri Lakshmi Organic Supermarket',
    ownerName: 'Rajesh Kumar',
    phone: '+91 98410 99887',
    address: '42/1, RK Mutt Road, Mandaveli',
    city: 'Chennai',
    state: 'Tamil Nadu',
    pincode: '600028',
    zone: 'South Chennai',
    monthlyTarget: 150000,
    currentMonthSales: 89000,
    status: 'ACTIVE',
    latitude: 13.0245,
    longitude: 80.2605
  },
  {
    id: 'str_002',
    _id: 'str_002',
    storeName: 'Sri Lakshmi Stores - Adyar Outlet',
    dealerId: 'dlr_001',
    dealerName: 'Sri Lakshmi Organic Supermarket',
    ownerName: 'Sundar R.',
    phone: '+91 98410 22334',
    address: '18, LB Road, Adyar',
    city: 'Chennai',
    state: 'Tamil Nadu',
    pincode: '600020',
    zone: 'South Chennai',
    monthlyTarget: 120000,
    currentMonthSales: 64000,
    status: 'ACTIVE',
    latitude: 13.0012,
    longitude: 80.2565
  },
  {
    id: 'str_003',
    _id: 'str_003',
    storeName: 'Nalam Natural Foods - RS Puram Flagship',
    dealerId: 'dlr_002',
    dealerName: 'Nalam Natural Foods & Organics',
    ownerName: 'S. Meenakshi Sundaram',
    phone: '+91 94433 11223',
    address: '15, DB Road, RS Puram',
    city: 'Coimbatore',
    state: 'Tamil Nadu',
    pincode: '641002',
    zone: 'Coimbatore West',
    monthlyTarget: 200000,
    currentMonthSales: 165000,
    status: 'ACTIVE',
    latitude: 11.0118,
    longitude: 76.9558
  }
];

export const initialWarehouses = [
  { id: 'wh_01', name: 'Chennai Central Hub', code: 'WH-CHN-01', location: 'Guindy Industrial Estate, Chennai', manager: 'Suresh V.', capacity: '100,000 units', utilization: '68%' },
  { id: 'wh_02', name: 'Coimbatore Regional Depot', code: 'WH-CBE-01', location: 'Peelamedu, Coimbatore', manager: 'Ramesh K.', capacity: '60,000 units', utilization: '54%' },
  { id: 'wh_03', name: 'Madurai Southern Hub', code: 'WH-MDU-01', location: 'Kappalur, Madurai', manager: 'Balamurugan M.', capacity: '45,000 units', utilization: '42%' }
];

export const initialInventory = [
  { id: 'inv_01', productId: 'prod_001', productName: 'Multi-Millet Noodles (No Maida)', sku: 'MF-NDL-001-180G', warehouseId: 'wh_01', warehouseName: 'Chennai Central Hub', batchNo: 'BN-2024-08-01', qty: 950, reservedQty: 80, reorderLevel: 200, status: 'IN_STOCK', mfgDate: '2024-08-01', expDate: '2025-05-01' },
  { id: 'inv_02', productId: 'prod_001', productName: 'Multi-Millet Noodles (No Maida)', sku: 'MF-NDL-001-180G', warehouseId: 'wh_02', warehouseName: 'Coimbatore Regional Depot', batchNo: 'BN-2024-08-01', qty: 500, reservedQty: 30, reorderLevel: 150, status: 'IN_STOCK', mfgDate: '2024-08-01', expDate: '2025-05-01' },
  { id: 'inv_03', productId: 'prod_002', productName: 'Wood Pressed Groundnut Oil', sku: 'MF-OIL-GND-1L', warehouseId: 'wh_01', warehouseName: 'Chennai Central Hub', batchNo: 'BN-2024-07-15', qty: 520, reservedQty: 40, reorderLevel: 100, status: 'IN_STOCK', mfgDate: '2024-07-15', expDate: '2025-07-15' },
  { id: 'inv_04', productId: 'prod_002', productName: 'Wood Pressed Groundnut Oil', sku: 'MF-OIL-GND-1L', warehouseId: 'wh_02', warehouseName: 'Coimbatore Regional Depot', batchNo: 'BN-2024-07-15', qty: 300, reservedQty: 20, reorderLevel: 80, status: 'IN_STOCK', mfgDate: '2024-07-15', expDate: '2025-07-15' },
  { id: 'inv_05', productId: 'prod_003', productName: 'Cold Pressed Sesame Oil', sku: 'MF-OIL-SES-1L', warehouseId: 'wh_01', warehouseName: 'Chennai Central Hub', batchNo: 'BN-2024-08-10', qty: 380, reservedQty: 50, reorderLevel: 80, status: 'IN_STOCK', mfgDate: '2024-08-10', expDate: '2025-08-10' },
  { id: 'inv_06', productId: 'prod_004', productName: 'Finger Millet (Ragi) Vermicelli', sku: 'MF-VRM-RAG-200G', warehouseId: 'wh_01', warehouseName: 'Chennai Central Hub', batchNo: 'BN-2024-08-05', qty: 1250, reservedQty: 100, reorderLevel: 250, status: 'IN_STOCK', mfgDate: '2024-08-05', expDate: '2025-05-05' },
  { id: 'inv_07', productId: 'prod_005', productName: 'Instant Sprouted Multi-Millet Dosa Mix', sku: 'MF-MIX-DOSA-500G', warehouseId: 'wh_01', warehouseName: 'Chennai Central Hub', batchNo: 'BN-2024-08-12', qty: 850, reservedQty: 60, reorderLevel: 150, status: 'IN_STOCK', mfgDate: '2024-08-12', expDate: '2025-02-12' }
];

export const initialTransfers = [
  {
    id: 'trf_001',
    _id: 'trf_001',
    transferNumber: 'TRF-2024-0012',
    fromWarehouse: 'Chennai Central Hub',
    toWarehouse: 'Coimbatore Regional Depot',
    fromWarehouseId: 'wh_01',
    toWarehouseId: 'wh_02',
    requestedBy: 'Ramesh K.',
    status: 'COMPLETED',
    items: [
      { productId: 'prod_001', productName: 'Multi-Millet Noodles (No Maida)', qty: 300, batchNo: 'BN-2024-08-01' },
      { productId: 'prod_002', productName: 'Wood Pressed Groundnut Oil', qty: 150, batchNo: 'BN-2024-07-15' }
    ],
    dispatchDate: '2024-08-14',
    deliveredDate: '2024-08-16',
    vehicleNo: 'TN 09 CB 4421',
    driverPhone: '+91 98400 77112',
    notes: 'Urgent festival stock replenishment'
  },
  {
    id: 'trf_002',
    _id: 'trf_002',
    transferNumber: 'TRF-2024-0013',
    fromWarehouse: 'Chennai Central Hub',
    toWarehouse: 'Madurai Southern Hub',
    fromWarehouseId: 'wh_01',
    toWarehouseId: 'wh_03',
    requestedBy: 'Balamurugan M.',
    status: 'IN_TRANSIT',
    items: [
      { productId: 'prod_004', productName: 'Finger Millet (Ragi) Vermicelli', qty: 400, batchNo: 'BN-2024-08-05' },
      { productId: 'prod_005', productName: 'Instant Sprouted Multi-Millet Dosa Mix', qty: 250, batchNo: 'BN-2024-08-12' }
    ],
    dispatchDate: '2024-08-20',
    deliveredDate: null,
    vehicleNo: 'TN 58 AA 9081',
    driverPhone: '+91 97900 11442',
    notes: 'South zone dealer stock expansion'
  }
];

export const initialInvoices = [
  {
    id: 'invc_001',
    _id: 'invc_001',
    invoiceNumber: 'INV-MF-2024-0101',
    dealerId: 'dlr_001',
    dealerName: 'Sri Lakshmi Organic Supermarket',
    dealerGstin: '33AABCM1234K1ZV',
    invoiceDate: '2024-08-10',
    dueDate: '2024-09-09',
    subTotal: 65000,
    taxAmount: 3250,
    totalAmount: 68250,
    paidAmount: 68250,
    balanceAmount: 0,
    status: 'PAID',
    paymentMode: 'NEFT / RTGS',
    isCredit: true,
    items: [
      { productId: 'prod_001', productName: 'Multi-Millet Noodles', qty: 500, price: 68, gstRate: 5, total: 35700 },
      { productId: 'prod_002', productName: 'Wood Pressed Groundnut Oil', qty: 120, price: 265, gstRate: 5, total: 33390 }
    ],
    createdAt: '2024-08-10T10:30:00.000Z'
  },
  {
    id: 'invc_002',
    _id: 'invc_002',
    invoiceNumber: 'INV-MF-2024-0128',
    dealerId: 'dlr_001',
    dealerName: 'Sri Lakshmi Organic Supermarket',
    dealerGstin: '33AABCM1234K1ZV',
    invoiceDate: '2024-08-25',
    dueDate: '2024-09-24',
    subTotal: 65238,
    taxAmount: 3262,
    totalAmount: 68500,
    paidAmount: 0,
    balanceAmount: 68500,
    status: 'OPEN',
    paymentMode: 'CREDIT_30_DAYS',
    isCredit: true,
    items: [
      { productId: 'prod_003', productName: 'Cold Pressed Sesame Oil', qty: 100, price: 330, gstRate: 5, total: 34650 },
      { productId: 'prod_005', productName: 'Instant Sprouted Dosa Mix', qty: 320, price: 98, gstRate: 5, total: 32928 }
    ],
    createdAt: '2024-08-25T14:20:00.000Z'
  },
  {
    id: 'invc_003',
    _id: 'invc_003',
    invoiceNumber: 'INV-MF-2024-0130',
    dealerId: 'dlr_002',
    dealerName: 'Nalam Natural Foods & Organics',
    dealerGstin: '33BBBCM5678L1ZW',
    invoiceDate: '2024-08-18',
    dueDate: '2024-09-17',
    subTotal: 114285,
    taxAmount: 5715,
    totalAmount: 120000,
    paidAmount: 0,
    balanceAmount: 120000,
    status: 'OPEN',
    paymentMode: 'CREDIT_30_DAYS',
    isCredit: true,
    items: [
      { productId: 'prod_001', productName: 'Multi-Millet Noodles', qty: 1000, price: 68, gstRate: 5, total: 71400 },
      { productId: 'prod_004', productName: 'Ragi Vermicelli', qty: 1000, price: 45, gstRate: 5, total: 47250 }
    ],
    createdAt: '2024-08-18T11:00:00.000Z'
  }
];

export const initialLedgerEntries = [
  { id: 'ldg_001', dealerId: 'dlr_001', date: '2024-08-10', type: 'INVOICE', reference: 'INV-MF-2024-0101', description: 'B2B Dispatch Invoice', debit: 68250, credit: 0, balance: 68250 },
  { id: 'ldg_002', dealerId: 'dlr_001', date: '2024-08-14', type: 'PAYMENT', reference: 'PAY-HDFC-99120', description: 'Bank Transfer Payment Received', debit: 0, credit: 68250, balance: 0 },
  { id: 'ldg_003', dealerId: 'dlr_001', date: '2024-08-25', type: 'INVOICE', reference: 'INV-MF-2024-0128', description: 'B2B Dispatch Invoice', debit: 68500, credit: 0, balance: 68500 }
];

export const initialMargins = [
  { id: 'mar_01', tierName: 'Tier 1 (Premium / Mega Distributor)', minMonthlyVolume: 100000, discountPercentage: 18, creditDays: 30, benefits: 'Priority dispatch, dedicated key account manager, co-op marketing support', isActive: true },
  { id: 'mar_02', tierName: 'Tier 2 (Standard Partner)', minMonthlyVolume: 50000, discountPercentage: 14, creditDays: 21, benefits: 'Weekly scheduled deliveries, POS promotional kits', isActive: true },
  { id: 'mar_03', tierName: 'Tier 3 (Retail Growth)', minMonthlyVolume: 15000, discountPercentage: 10, creditDays: 14, benefits: 'Standard distributor margin and digital catalogs', isActive: true }
];

export const initialRequests = [
  {
    id: 'req_001',
    _id: 'req_001',
    requestNumber: 'REQ-2024-0045',
    dealerId: 'dlr_001',
    dealerName: 'Sri Lakshmi Organic Supermarket',
    type: 'STOCK_ORDER',
    status: 'APPROVED',
    totalEstimatedAmount: 48000,
    items: [
      { productId: 'prod_001', productName: 'Multi-Millet Noodles', qty: 300, expectedPrice: 68 },
      { productId: 'prod_002', productName: 'Wood Pressed Groundnut Oil', qty: 100, expectedPrice: 265 }
    ],
    remarks: 'Pre-Diwali stock booking',
    createdAt: '2024-08-28T09:15:00.000Z'
  },
  {
    id: 'req_002',
    _id: 'req_002',
    requestNumber: 'REQ-2024-0046',
    dealerId: 'dlr_003',
    dealerName: 'Arogya Wellness Mart',
    type: 'CREDIT_LIMIT_ENHANCEMENT',
    status: 'PENDING',
    requestedLimit: 350000,
    currentLimit: 200000,
    remarks: 'Opening new branch in Indiranagar Bengaluru. Requesting limit upgrade.',
    createdAt: '2024-08-29T11:45:00.000Z'
  }
];

export const initialReturns = [
  {
    id: 'ret_001',
    _id: 'ret_001',
    returnNumber: 'RET-2024-0008',
    dealerId: 'dlr_001',
    dealerName: 'Sri Lakshmi Organic Supermarket',
    invoiceRef: 'INV-MF-2024-0101',
    reason: 'Damaged in transit packaging',
    status: 'APPROVED',
    items: [{ productId: 'prod_001', productName: 'Multi-Millet Noodles', qty: 15, unitPrice: 68, totalRefund: 1020 }],
    refundAmount: 1020,
    creditNoteNumber: 'CN-2024-0004',
    createdAt: '2024-08-15T16:00:00.000Z'
  }
];

export const initialTickets = [
  {
    id: 'tkt_001',
    _id: 'tkt_001',
    ticketNumber: 'TKT-1082',
    subject: 'Request for marketing standees and posters for new store',
    dealerName: 'Sri Lakshmi Organic Supermarket',
    dealerId: 'dlr_001',
    priority: 'MEDIUM',
    category: 'MARKETING_SUPPORT',
    status: 'RESOLVED',
    messages: [
      { sender: 'Rajesh Kumar (Dealer)', message: 'Can you please send 3 vertical rollup banners for millet noodles?', time: '2024-08-12 10:30' },
      { sender: 'Admin Support', message: 'Dispatched via DTDC courier with docket #448921. Reaching tomorrow.', time: '2024-08-12 14:20' }
    ],
    createdAt: '2024-08-12T10:30:00.000Z'
  },
  {
    id: 'tkt_002',
    _id: 'tkt_002',
    ticketNumber: 'TKT-1083',
    subject: 'Batch certificate required for Sesame Oil Export quality audit',
    dealerName: 'Nalam Natural Foods',
    dealerId: 'dlr_002',
    priority: 'HIGH',
    category: 'QUALITY_COMPLIANCE',
    status: 'IN_PROGRESS',
    messages: [
      { sender: 'Meenakshi Sundaram', message: 'Need lab test CoA for batch BN-2024-08-10.', time: '2024-08-27 15:10' }
    ],
    createdAt: '2024-08-27T15:10:00.000Z'
  }
];

export const initialNotifications = [
  { id: 'notif_001', title: 'Payment Due in 3 Days', message: 'Invoice INV-MF-2024-0128 for ₹68,500 is due on 24th September.', type: 'PAYMENT_ALERT', read: false, createdAt: '2024-09-01T08:00:00.000Z' },
  { id: 'notif_002', title: 'New Stock Transfer Dispatched', message: 'Transfer TRF-2024-0013 has been dispatched to Madurai Hub.', type: 'LOGISTICS', read: true, createdAt: '2024-08-20T12:00:00.000Z' },
  { id: 'notif_003', title: 'E-Commerce Surge Alert', message: 'Family Millet Combo order volume +45% this weekend.', type: 'SALES_MILESTONE', read: false, createdAt: '2024-09-02T10:00:00.000Z' }
];

export const initialEcomOrders = [
  {
    id: 'eord_001',
    _id: 'eord_001',
    orderNumber: 'MF-ORD-88901',
    customerName: 'Ananya Sharma',
    customerEmail: 'ananya.s@outlook.com',
    customerPhone: '+91 98200 44332',
    shippingAddress: 'Flat 402, Green Meadows, Indiranagar, Bengaluru, 560038',
    items: [
      { productId: 'prod_001', productName: 'Multi-Millet Noodles', qty: 3, price: 95 },
      { productId: 'prod_002', productName: 'Wood Pressed Groundnut Oil 1L', qty: 2, price: 360 }
    ],
    subTotal: 1005,
    shippingFee: 0,
    discountAmount: 100,
    totalAmount: 905,
    paymentMethod: 'RAZORPAY_UPI',
    paymentStatus: 'PAID',
    orderStatus: 'DELIVERED',
    trackingNumber: 'BLUEDART-8829104',
    createdAt: '2024-08-26T11:20:00.000Z'
  },
  {
    id: 'eord_002',
    _id: 'eord_002',
    orderNumber: 'MF-ORD-88902',
    customerName: 'Dr. Vivek Swaminathan',
    customerEmail: 'dr.vivek@gmail.com',
    customerPhone: '+91 94441 88990',
    shippingAddress: '12/4, 2nd Main Road, Anna Nagar East, Chennai, 600102',
    items: [
      { productId: 'prod_003', productName: 'Cold Pressed Sesame Oil 1L', qty: 1, price: 440 },
      { productId: 'prod_006', productName: 'Organic Moringa Leaf Powder', qty: 2, price: 180 },
      { productId: 'prod_007', productName: 'Palm Jaggery Karupatti 500g', qty: 2, price: 220 }
    ],
    subTotal: 1240,
    shippingFee: 0,
    discountAmount: 0,
    totalAmount: 1240,
    paymentMethod: 'RAZORPAY_CARD',
    paymentStatus: 'PAID',
    orderStatus: 'PROCESSING',
    trackingNumber: 'DELHIVERY-9941203',
    createdAt: '2024-08-28T14:40:00.000Z'
  },
  {
    id: 'eord_003',
    _id: 'eord_003',
    orderNumber: 'MF-ORD-88903',
    customerName: 'Kavitha Radhakrishnan',
    customerEmail: 'kavitha.rk@gmail.com',
    customerPhone: '+91 98400 66778',
    shippingAddress: 'Plot 45, Saravanampatti, Coimbatore, 641035',
    items: [
      { productId: 'prod_005', productName: 'Instant Sprouted Dosa Mix 500g', qty: 4, price: 140 }
    ],
    subTotal: 560,
    shippingFee: 50,
    discountAmount: 0,
    totalAmount: 610,
    paymentMethod: 'CASH_ON_DELIVERY',
    paymentStatus: 'PENDING',
    orderStatus: 'SHIPPED',
    trackingNumber: 'EKART-440192',
    createdAt: '2024-08-29T16:10:00.000Z'
  }
];

export const initialEcomCustomers = [
  { id: 'ecust_01', name: 'Ananya Sharma', email: 'ananya.s@outlook.com', phone: '+91 98200 44332', city: 'Bengaluru', totalOrders: 6, totalSpent: 5840, lastOrderDate: '2024-08-26', status: 'ACTIVE' },
  { id: 'ecust_02', name: 'Dr. Vivek Swaminathan', email: 'dr.vivek@gmail.com', phone: '+91 94441 88990', city: 'Chennai', totalOrders: 9, totalSpent: 11200, lastOrderDate: '2024-08-28', status: 'VIP' },
  { id: 'ecust_03', name: 'Kavitha Radhakrishnan', email: 'kavitha.rk@gmail.com', phone: '+91 98400 66778', city: 'Coimbatore', totalOrders: 3, totalSpent: 2450, lastOrderDate: '2024-08-29', status: 'ACTIVE' }
];

export const initialEcomCombos = [
  {
    id: 'cmbo_01',
    _id: 'cmbo_01',
    name: 'Super Millet Breakfast & Noodles Mega Combo',
    badge: 'BESTSELLER',
    mrp: 580,
    price: 469,
    savings: '19% OFF',
    image: 'https://images.unsplash.com/photo-1612927601601-6638404737ce?auto=format&fit=crop&w=600&q=80',
    description: 'Includes 2x Multi-Millet Noodles, 2x Ragi Vermicelli, 1x Sprouted Dosa Mix 500g.',
    itemsIncluded: ['2x Multi-Millet Noodles', '2x Ragi Vermicelli', '1x Sprouted Dosa Mix 500g'],
    isActive: true,
    salesCount: 420
  },
  {
    id: 'cmbo_02',
    _id: 'cmbo_02',
    name: 'Cold-Pressed Heritage Cooking Duo (Groundnut + Sesame 1L)',
    badge: 'HEALTH CHOICE',
    mrp: 800,
    price: 699,
    savings: '13% OFF',
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=600&q=80',
    description: '100% wood-pressed traditional groundnut oil and palm-jaggery sesame oil duo pack.',
    itemsIncluded: ['1L Wood Pressed Groundnut Oil', '1L Cold Pressed Sesame Oil'],
    isActive: true,
    salesCount: 680
  }
];

export const initialEcomBanners = [
  {
    id: 'bnr_01',
    _id: 'bnr_01',
    title: 'Celebrate Clean Eating with 100% Native Millets',
    subtitle: 'Zero Maida • Zero Chemical Preservatives • Traditional Goodness',
    buttonText: 'Shop Millets Now',
    link: '/products',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=80',
    displayOrder: 1,
    isActive: true
  },
  {
    id: 'bnr_02',
    _id: 'bnr_02',
    title: 'Pure Wood Pressed Chekku Oils for Heart Health',
    subtitle: 'Extracted slowly with traditional Vaagai tree timber pestles',
    buttonText: 'Explore Oils',
    link: '/products',
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=1200&q=80',
    displayOrder: 2,
    isActive: true
  }
];

export const initialEcomReviews = [
  {
    id: 'rev_01',
    _id: 'rev_01',
    customerName: 'Sunita Ramanathan',
    rating: 5,
    title: 'Best millet noodles for kids!',
    review: 'My kids love noodles but I always hesitated because of maida. Mansara Multi-Millet noodles taste amazing and are completely guilt-free.',
    productName: 'Multi-Millet Noodles (No Maida)',
    verifiedPurchase: true,
    status: 'APPROVED',
    createdAt: '2024-08-20'
  },
  {
    id: 'rev_02',
    _id: 'rev_02',
    customerName: 'Girish Chandran',
    rating: 5,
    title: 'Authentic aroma of wood-pressed groundnut oil',
    review: 'Reminds me of traditional cold pressed oil from my village. Perfect for deep frying and south Indian gravies.',
    productName: 'Wood Pressed Groundnut Oil (Marachekku)',
    verifiedPurchase: true,
    status: 'APPROVED',
    createdAt: '2024-08-22'
  }
];

export const initialEcomContent = [
  {
    id: 'cnt_01',
    _id: 'cnt_01',
    title: '5 Reasons to Switch from Refined Wheat to Native Millets',
    category: 'Nutrition & Health',
    slug: '5-reasons-switch-native-millets',
    excerpt: 'Discover the glycemic benefits, gut health improvements, and essential minerals packed in ancient Indian millets.',
    featuredImage: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80',
    author: 'Mansara Nutrition Team',
    publishedAt: '2024-08-15',
    readTime: '4 min read',
    status: 'PUBLISHED'
  },
  {
    id: 'cnt_02',
    _id: 'cnt_02',
    title: 'Traditional Wood-Pressed Oil vs Refined Industrial Oil',
    category: 'Heritage Cooking',
    slug: 'wood-pressed-vs-refined-oil',
    excerpt: 'How low-temperature timber chekku pressing retains natural Vitamin E and micronutrients without trans fats.',
    featuredImage: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=600&q=80',
    author: 'Dr. S. Sivakumar',
    publishedAt: '2024-08-20',
    readTime: '6 min read',
    status: 'PUBLISHED'
  }
];

export const initialEcomSettings = {
  storeName: 'Mansara Foods Official Online Store',
  supportEmail: 'care@mansarafoods.com',
  supportPhone: '+91 98400 12345',
  currency: 'INR (₹)',
  freeShippingThreshold: 799,
  defaultShippingFee: 50,
  enableCod: true,
  enableRazorpay: true,
  razorpayKeyId: 'rzp_live_mock_mansara',
  shiprocketEnabled: true,
  gstin: '33AABCM1234K1ZV',
  fssaiNumber: '12423999000142',
  facebookUrl: 'https://facebook.com/mansarafoods',
  instagramUrl: 'https://instagram.com/mansarafoods',
  twitterUrl: 'https://twitter.com/mansarafoods'
};

export const initialStalls = [
  {
    id: 'stl_001',
    _id: 'stl_001',
    stallName: 'Island Grounds Organic Fair 2024 (Stall #14)',
    location: 'Island Grounds, Chennai',
    cashierName: 'Dinesh V.',
    startDate: '2024-08-20',
    endDate: '2024-09-05',
    dailyTarget: 35000,
    currentSales: 218400,
    status: 'ACTIVE',
    cashInHand: 14200,
    upiSales: 204200
  },
  {
    id: 'stl_002',
    _id: 'stl_002',
    stallName: 'CODISSIA Agri Expo Coimbatore (Stall B-22)',
    location: 'CODISSIA Complex, Coimbatore',
    cashierName: 'Naveen Raj',
    startDate: '2024-08-25',
    endDate: '2024-09-02',
    dailyTarget: 45000,
    currentSales: 312000,
    status: 'ACTIVE',
    cashInHand: 28500,
    upiSales: 283500
  }
];

export const initialFieldSales = [
  {
    id: 'fs_001',
    executiveName: 'Karthik Raja',
    phone: '+91 97890 33445',
    zone: 'South Chennai',
    todayVisitsCount: 6,
    targetVisits: 8,
    monthBookedOrdersAmount: 485000,
    monthTargetAmount: 600000,
    currentLocation: 'Adyar Shastri Nagar',
    lastCheckIn: '11:45 AM'
  },
  {
    id: 'fs_002',
    executiveName: 'Saravanan M.',
    phone: '+91 98402 11456',
    zone: 'Coimbatore Urban',
    todayVisitsCount: 7,
    targetVisits: 7,
    monthBookedOrdersAmount: 540000,
    monthTargetAmount: 500000,
    currentLocation: 'Gandhipuram 5th Cross',
    lastCheckIn: '12:15 PM'
  }
];

export const initialStoreVisits = [
  {
    id: 'vst_001',
    executiveName: 'Karthik Raja',
    storeName: 'Sri Lakshmi Stores - Mandaveli Branch',
    dealerName: 'Sri Lakshmi Organic Supermarket',
    checkInTime: '2024-09-01 10:15 AM',
    checkOutTime: '2024-09-01 11:00 AM',
    purpose: 'Stock audit & Diwali combo order booking',
    stockStatus: 'Multi-millet noodles low stock (12 packs left)',
    orderBooked: true,
    bookedAmount: 45000,
    photos: ['https://images.unsplash.com/photo-1612927601601-6638404737ce?auto=format&fit=crop&w=400&q=80'],
    notes: 'Store manager requested 50 extra flyers and sample tasting sachets.'
  }
];

export const initialExpenses = [
  { id: 'exp_01', date: '2024-08-28', title: 'DTDC Courier Dispatch for Marketing Standees', category: 'Logistics & Shipping', amount: 3450, claimedBy: 'Suresh V. (Warehouse Lead)', status: 'APPROVED', receiptUrl: 'https://placehold.co/400x600?text=DTDC+Receipt' },
  { id: 'exp_02', date: '2024-08-30', title: 'Fuel & Toll for Field Sales Visits (South Chennai Beat)', category: 'Travel & Conveyance', amount: 1850, claimedBy: 'Karthik Raja', status: 'APPROVED', receiptUrl: 'https://placehold.co/400x600?text=Fuel+Bill' },
  { id: 'exp_03', date: '2024-09-01', title: 'CODISSIA Stall Electricity & Lighting Setup', category: 'Events & Expos', amount: 6200, claimedBy: 'Naveen Raj', status: 'PENDING', receiptUrl: 'https://placehold.co/400x600?text=Expo+Invoice' }
];

export const initialOffers = [
  { id: 'off_01', name: 'Diwali B2B Pre-Booking 5% Extra Margin', code: 'DIWALI-B2B-5', discountPercent: 5, minOrderValue: 50000, validFrom: '2024-08-15', validTill: '2024-10-31', appliesTo: 'ALL_DEALERS', status: 'ACTIVE' },
  { id: 'off_02', name: 'New Store Launch Welcome Scheme (Buy 10 Get 1 Free)', code: 'LAUNCH-10PLUS1', discountPercent: 9.1, minOrderValue: 25000, validFrom: '2024-08-01', validTill: '2024-12-31', appliesTo: 'TIER_3', status: 'ACTIVE' }
];

export const initialVendors = [
  { id: 'vnd_01', name: 'Kaveri Delta Organic Millet Farmers Collective', contactPerson: 'Selvam R.', phone: '+91 94420 88991', email: 'selvam.kaveri@gmail.com', city: 'Thanjavur', category: 'Raw Millets & Grains', rating: 4.9, activePOs: 2, totalSuppliedValue: 3400000, gstin: '33AAACK4412M1Z1' },
  { id: 'vnd_02', name: 'Pollachi Virgin Cold Press Millers', contactPerson: 'K. Balasubramaniam', phone: '+91 98422 33441', email: 'pollachi.oils@gmail.com', city: 'Pollachi', category: 'Bulk Edible Oils', rating: 4.8, activePOs: 1, totalSuppliedValue: 4800000, gstin: '33BBBCP7789N1Z2' },
  { id: 'vnd_03', name: 'EcoPack India Bio-Degradable Cartons', contactPerson: 'P. Anand', phone: '+91 98400 99112', email: 'sales@ecopackindia.com', city: 'Chennai', category: 'Packaging Materials', rating: 4.7, activePOs: 3, totalSuppliedValue: 950000, gstin: '33CCCPE9988P1Z3' }
];

export const initialPurchaseOrders = [
  {
    id: 'po_01',
    poNumber: 'PO-MF-2024-0089',
    vendorId: 'vnd_01',
    vendorName: 'Kaveri Delta Organic Millet Farmers Collective',
    issueDate: '2024-08-20',
    expectedDelivery: '2024-09-05',
    items: [
      { rawMaterial: 'Unpolished Ragi Grain (Grade A)', qty: '2,000 kg', unitPrice: 34, total: 68000 },
      { rawMaterial: 'Barnyard Millet (Kuthiraivali)', qty: '1,500 kg', unitPrice: 48, total: 72000 }
    ],
    totalAmount: 140000,
    status: 'IN_TRANSIT',
    paymentTerms: '50% Advance, 50% on Lab Quality Approval'
  },
  {
    id: 'po_02',
    poNumber: 'PO-MF-2024-0090',
    vendorId: 'vnd_03',
    vendorName: 'EcoPack India Bio-Degradable Cartons',
    issueDate: '2024-08-25',
    expectedDelivery: '2024-09-08',
    items: [
      { rawMaterial: 'Printed Noodles Outer Mono-Cartons (180g)', qty: '10,000 units', unitPrice: 4.5, total: 45000 }
    ],
    totalAmount: 45000,
    status: 'APPROVED',
    paymentTerms: 'Net 30 Days'
  }
];

export const initialRnDProjects = [
  { id: 'rnd_01', title: 'High-Protein Multi-Millet Pasta (Gluten Free)', leadFoodTechnologist: 'Dr. Mythili K.', phase: 'SHELF_LIFE_STUDY', estimatedLaunch: 'Q4 2024', nutritionalTarget: '14g Protein per 100g', sensoryScore: 9.2, status: 'ON_TRACK' },
  { id: 'rnd_02', title: 'Low-GI Diabetic Friendly Sprouted Millet Beverage Mix', leadFoodTechnologist: 'R. Senthil', phase: 'PILOT_BATCH_TRIAL', estimatedLaunch: 'Q1 2025', nutritionalTarget: 'GI < 45 with zero added sugar', sensoryScore: 8.8, status: 'IN_PROGRESS' }
];

export const initialAnalyticsData = {
  kpis: {
    monthlyRevenue: 4850000,
    revenueGrowth: '+22.4%',
    activeDealersCount: 64,
    dealersGrowth: '+8 new this month',
    totalB2BOrders: 184,
    avgB2BOrderValue: 26358,
    ecomRevenue: 640000,
    ecomOrdersCount: 520,
    outstandingReceivables: 312000
  },
  monthlySalesTrend: [
    { month: 'Apr', revenue: 3200000, b2b: 2750000, ecom: 450000 },
    { month: 'May', revenue: 3600000, b2b: 3100000, ecom: 500000 },
    { month: 'Jun', revenue: 3950000, b2b: 3400000, ecom: 550000 },
    { month: 'Jul', revenue: 4200000, b2b: 3620000, ecom: 580000 },
    { month: 'Aug', revenue: 4650000, b2b: 4050000, ecom: 600000 },
    { month: 'Sep (Proj)', revenue: 4850000, b2b: 4210000, ecom: 640000 }
  ],
  categoryShare: [
    { name: 'Healthy Noodles & Vermicelli', value: 38, amount: 1843000 },
    { name: 'Cold Pressed Oils', value: 32, amount: 1552000 },
    { name: 'Breakfast & Mixes', value: 16, amount: 776000 },
    { name: 'Millets & Grains', value: 8, amount: 388000 },
    { name: 'Natural Sweeteners & Superfoods', value: 6, amount: 291000 }
  ],
  zonePerformance: [
    { zone: 'Chennai Metro & North TN', revenue: 2150000, dealers: 28, targetAchievement: 108 },
    { zone: 'Coimbatore & Western TN', revenue: 1420000, dealers: 18, targetAchievement: 104 },
    { zone: 'Madurai & Southern TN', revenue: 780000, dealers: 11, targetAchievement: 96 },
    { zone: 'Bangalore & Karnataka', revenue: 500000, dealers: 7, targetAchievement: 92 }
  ]
};
