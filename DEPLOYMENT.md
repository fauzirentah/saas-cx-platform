# 🚀 SaaS CX Platform - Deployment Guide

## Quick Production Deployment

### Prerequisites
- GitHub account
- Vercel account (free)
- Railway account (free)
- Neon PostgreSQL database (already set up ✅)

### Step 1: GitHub Repository
1. Go to [github.com](https://github.com) and create a new repository
2. Name it: `saas-cx-platform` (or your preferred name)
3. Keep it **public** for free CI/CD
4. **Don't** initialize with README (we already have one)

### Step 2: Push to GitHub
```bash
git remote add origin https://github.com/YOUR_USERNAME/saas-cx-platform.git
git branch -M main
git push -u origin main
```

### Step 3: Deploy Frontend (Vercel)
1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click "New Project" → Import your repository
3. **Framework Preset**: Next.js
4. **Root Directory**: `apps/web`
5. **Build Command**: `cd ../.. && npm run build --workspace=@saas-cx/web`
6. **Output Directory**: `apps/web/.next`

#### Environment Variables (Vercel):
```
NEXTAUTH_URL=https://your-app.vercel.app
NEXTAUTH_SECRET=your-production-nextauth-secret
DATABASE_URL=your-neon-database-url
NEXT_PUBLIC_API_URL=https://your-api.railway.app
```

### Step 4: Deploy Backend (Railway)
1. Go to [railway.app](https://railway.app) and sign in with GitHub
2. Click "New Project" → "Deploy from GitHub repo"
3. Select your repository
4. **Root Directory**: `apps/api`
5. **Start Command**: `npm start --workspace=@saas-cx/api`

#### Environment Variables (Railway):
```
NODE_ENV=production
PORT=3001
DATABASE_URL=your-neon-database-url
FRONTEND_URL=https://your-app.vercel.app
JWT_SECRET=your-production-jwt-secret
```

### Step 5: Update CORS Settings
After deployment, update your backend CORS to allow your Vercel domain:
- Frontend URL: `https://your-app.vercel.app`
- Backend URL: `https://your-api.railway.app`

### Step 6: Database Migration
Your database is already set up! The tables and sample data are ready.

## Free Tier Limits
- **Vercel**: 100GB bandwidth/month
- **Railway**: $5 credit/month
- **Neon**: 3GB storage, 1 compute unit
- **GitHub Actions**: 2000 minutes/month

## Production URLs
- Frontend: `https://your-app.vercel.app`
- Backend API: `https://your-api.railway.app`
- Health Check: `https://your-api.railway.app/api/health`
- Database Test: `https://your-api.railway.app/api/database/test`

## CI/CD Pipeline
Your GitHub Actions workflow will automatically:
- ✅ Run tests and linting
- ✅ Build both frontend and backend
- ✅ Deploy to Vercel and Railway on every push to main
- ✅ Create preview deployments for pull requests

🎉 **Your SaaS platform will be live in minutes!**