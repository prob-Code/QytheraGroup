# Qythera Group Platform

A modern, scalable web application featuring a React front-end (Vite, TailwindCSS) and a Node.js/Express backend.

## Project Structure
- `/frontend` - React/Vite single-page application
- `/backend` - Node.js/Express API server with JWT Authentication

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn

### 1. Frontend Setup
```bash
cd frontend
npm install
```
Create a `.env.local` file in the `frontend` directory:
```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_API_URL=http://localhost:5000
```
Run the frontend:
```bash
npm run dev
```

### 2. Backend Setup
```bash
cd backend
npm install
```
Create a `.env` file in the `backend` directory:
```env
PORT=5000
JWT_SECRET=your_super_secret_jwt_key
FRONTEND_URL=http://localhost:5173
```
Run the backend:
```bash
node index.js
```

## Deployment
- **Frontend** is optimized for deployment on Netlify or Vercel. Ensure you configure the build command to `npm run build` and publish directory to `dist`.
- **Backend** is optimized for Render or Railway. Set the Node version and environment variables accordingly. 
