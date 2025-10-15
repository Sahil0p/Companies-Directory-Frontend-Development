# 🚀 Companies Directory

## 🌟 Overview
Welcome to **Companies Directory** — a modern React application to browse, filter, and sort companies seamlessly with **infinite scrolling**.
Built with **Material UI** for a sleek, responsive UI and **React Context API** for clean state management.

---

## 🌐 Live Link
```bash
https://companiesdirectoryfrontend.netlify.app/
```

## 🛠️ Features
- 🔍  Dynamic Filtering — by name, industry, location, and employee count range
- ↕️  Infinite Scrolling — load more companies as you scroll, no pagination clicks
- ↔️  Sorting — by company name (A–Z, Z–A) or employee count (asc/desc)
- 🗂️  Responsive Grid Layout — 4 equal cards per row with consistent sizing
- 🖼️  Details Modal — view full company info on card click
- 🌓  Dark Mode — toggle between light/dark themes
- 🏷️  Static Data — loads from local JSON for simplicity and performance
- ⚙️  Clean Architecture — separate Context, custom hooks, and modular components  

---

## 📂 Project Structure
```text
src/
├── api/
│   └── companyService.js        # Data fetching from static JSON
├── assets/                      # Images, icons, assets
├── components/
│   ├── AppBar.jsx               # Header + theme toggle
│   ├── CompanyCard.jsx          # Company display card
│   ├── CompanyFilters.jsx       # Filters and sort inputs with dropdowns
│   ├── CompanyModal.jsx         # Modal with company details
│   ├── LoadingSkeleton.jsx      # Loading placeholders
│   └── PaginationControls.jsx   # Classic pagination UI (optional)
├── context/
│   └── CompanyContext.js        # State and logic management via React Context
├── hooks/
│   └── useCompanies.js          # Custom hook for consuming company context
├── pages/
│   └── HomePage.jsx             # Layout, infinite scroll, and integration assembly
├── public/
│   └──db.json                   # Static JSON with all company data
├── theme/
│   └── index.js                 # MUI theme config for light/dark mode
├── App.jsx                      # Root React component
└── index.js                     # Entry point
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository
```bash
git clone https://github.com/Sahil0p/Companies-Directory-Frontend-Development
cd Companies-Directory-Frontend-Development
```

### 2️⃣ Install dependencies
```bash
npm install
```
### 3️⃣ Run the app
```bash
npm start

Then open 👉 http://localhost:3000
```
---

## 🧰 Technologies
- ⚛️  React 18 & Hooks
- 🎨  Material UI v6 (MUI)
- 🧩  React Context API
- 👁️  Intersection Observer API (infinite scroll)
- 💾  Static JSON Data

---

## 🏗️ Architecture Insights
- 📌  Centralized data via CompanyContext
- 🧱  Reusable stateless components (CompanyCard, CompanyFilters)
- 🌀  Infinite scroll using useRef + IntersectionObserver
- ⚡  Client-side filtering/sorting for instant response
- 🗃️  Clean folder structure with separation of concerns

---

## 🎯 How To Use
- 📝  Use the filter panel to narrow down companies
- 🔀  Change sorting order via the “Sort by” dropdown
- 👇  Scroll down to load more companies seamlessly
- 🔍  Click a company card for detailed modal view
- 🌓  Toggle light/dark mode from the header

---
