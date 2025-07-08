# Dev Samurai Client

A modern frontend application built with **Vite + React + TypeScript**, styled using **Tailwind CSS** and **ShadCN UI**, designed for authentication and dashboard features. The app uses **React Router**, **TanStack Query**, and **React Hook Form + Zod** for robust form handling and data fetching.

---

## ✨ Features Implemented

### 🔐 Authentication Flow (Sign Up / Sign In)

- Form validation using react-hook-form and zod

- Email format and required field validation

- ShadCN components for input, button, and alerts

- Backend error handling displayed clearly to the user

- JWT tokens managed via useContext and persisted securely

### 🧭 Authenticated Layout

- Layout with navbar shown only to logged-in users

- Displays basic user info (name, avatar) in the navbar

### 📊 Dashboard Home Page

- Static UI mimicking reference dashboard

- Fetches user-specific data using TanStack Query

- Modular design with reusable components

## 🚀 Setup Instructions

### Prerequisites

- Node.js >= 18
- npm

### Install dependencies

```bash
git clone https://github.com/ldthien203/dev-samurai-client.git
cd dev-samurai-client
npm install
```

### Start development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## ⚙️ Assumptions and Trade-offs

- React + Vite used for fast build and modern tooling.

- Tailwind CSS provides utility-first styling, enhanced by ShadCN UI for accessible components.

- React Hook Form + Zod ensures declarative, schema-based form validation.

- JWT authentication: Token-based auth with protected routes and user persistence.

- TanStack Query is used for data fetching and caching.

- React Router v6 handles client-side routing with protected routes.

- Lightweight global state handled via useContext.
