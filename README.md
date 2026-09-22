# Mansara Foods B2B Distributor CRM, Inventory & Billing System
### Standalone In-Browser Mock Edition

A comprehensive, fully-featured B2B Distributor CRM + Inventory + Billing + Dealer Management System built with React, Vite, Tailwind CSS, and Zustand.

This edition runs **100% client-side** using an in-browser mock API server and persistent `localStorage` database. **No backend server, Docker, or external database is required.**

---

## Key Features

- **Centralized Admin Portal:** Dashboard metrics, category & product catalogs, inventory management, warehouse transfers, store visits, invoices, expenses, offers, vendors, and R&D pipelines.
- **Dedicated Dealer Partner Portal:** Catalog browsing, real-time cart compiler, stock levels, GST tax invoicing, account ledgers, and order tracking.
- **E-Commerce Operations Suite:** Order management, combos, banners, product reviews, content manager, and sales performance analytics.
- **Offline & Standalone Ready:** Persistent in-browser state with instant responses and realistic mock delays.

---

## Quick Start Guide

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (v18+) installed.

### Step 1: Install Dependencies
```bash
cd frontend
npm install
```

### Step 2: Start Development Server
```bash
npm run dev
```
Open your browser at [http://localhost:5173](http://localhost:5173).

Or from the root directory:
```bash
npm run dev
```

---

## Demo Credentials

Click the one-click login buttons on the login screen, or use:

| Role | Email | Password |
| :--- | :--- | :--- |
| **Super Admin** | `admin@mansarafoods.com` | `admin123` |
| **Dealer Partner** | `dealer@mansarafoods.com` | `dealer123` |

---

## Deployment to Vercel

This repository is pre-configured for one-click deployment to [Vercel](https://vercel.com):
- **Framework Preset:** Vite
- **Root Directory:** `./` (or `frontend`)
- **Build Command:** `npm run build`
- **Output Directory:** `frontend/dist` (or `dist`)
