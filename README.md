# SaaS CX Platform 🚀

A modern, full-stack SaaS platform for customer experience management, built with the latest technologies and optimized for free-tier deployment.

## ✨ Features

- **🔥 Modern Tech Stack**: Next.js 15, React 19, TypeScript 5.7, Express.js 5.0
- **⚡ Blazing Fast**: Turborepo monorepo with Turbopack bundling
- **🎨 Beautiful UI**: Tailwind CSS v4 with Shadcn/ui components
- **🔐 Authentication**: NextAuth.js with multiple providers
- **📊 Database**: PostgreSQL with Prisma 6 ORM
- **🚀 CI/CD**: GitHub Actions with auto-deployment
- **☁️ Free Tier Optimized**: Vercel + Railway deployment

## 🏗️ Architecture

```
saas-cx-platform/
├── apps/
│   ├── web/                 # Next.js frontend (Vercel)
│   └── api/                 # Express.js backend (Railway)
├── packages/
│   ├── ui/                  # Shared UI components
│   ├── database/            # Prisma schema & client
│   └── typescript-config/   # Shared TypeScript configs
├── .github/workflows/       # CI/CD pipelines
└── docs/                   # Documentation
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18.17.0+
- npm 10.0.0+
- PostgreSQL database (Neon free tier recommended)

### Local Development

1. **Clone and install dependencies**
   ```bash
   git clone <your-repo>
   cd saas-cx-platform
   npm install
   ```

2. **Set up environment variables**
   ```bash
   cp apps/api/.env.example apps/api/.env
   cp apps/web/.env.example apps/web/.env
   ```

3. **Start the development servers**
   ```bash
   npm run dev
   ```

   This starts:
   - Frontend: http://localhost:3000
   - Backend: http://localhost:3001

### Database Setup

1. **Configure your database URL in apps/api/.env**
   ```bash
   DATABASE_URL="postgresql://username:password@host:5432/database?sslmode=require"
   ```

2. **Generate Prisma client and push schema**
   ```bash
   npm run db:generate
   npm run db:push
   ```

## 📦 Tech Stack

### Frontend
- **Next.js 15.5.3** - React framework with App Router
- **React 19** - Latest React with concurrent features
- **TypeScript 5.7** - Type safety
- **Tailwind CSS v4** - Utility-first CSS framework
- **Shadcn/ui** - Beautiful, accessible components

### Backend
- **Express.js 5.0** - Fast, minimalist web framework
- **Prisma 6** - Next-generation ORM
- **PostgreSQL** - Robust relational database
- **NextAuth.js** - Complete authentication solution

### DevOps
- **Turborepo 2.3** - High-performance build system
- **GitHub Actions** - CI/CD automation
- **Vercel** - Frontend deployment (free tier)
- **Railway** - Backend deployment (free tier)

## 🎯 Free Tier Limits

| Service | Free Tier Limits | Upgrade Threshold |
|---------|------------------|-------------------|
| Vercel | 100GB bandwidth/month | ~10K users |
| Railway | $5 credit/month | ~1K API calls/day |
| Neon PostgreSQL | 3GB storage | ~100K records |
| GitHub Actions | 2000 minutes/month | Large teams |

## 🔧 Available Scripts

### Root Level
- `npm run dev` - Start all development servers
- `npm run build` - Build all packages and apps
- `npm run lint` - Lint all packages
- `npm run type-check` - Type check all packages

### Frontend (apps/web)
- `npm run dev --workspace=@saas-cx/web` - Start Next.js dev server
- `npm run build --workspace=@saas-cx/web` - Build Next.js app

### Backend (apps/api)
- `npm run dev --workspace=@saas-cx/api` - Start Express dev server
- `npm run build --workspace=@saas-cx/api` - Build Express app

### Database
- `npm run db:generate` - Generate Prisma client
- `npm run db:push` - Push schema to database
- `npm run db:studio` - Open Prisma Studio

## 🚀 Deployment

### Automatic Deployment
- **Push to main** → Auto-deploy to production
- **Open PR** → Create preview deployment
- **Merge PR** → Deploy to production

### Manual Deployment

#### Frontend (Vercel)
```bash
npm install -g vercel
vercel --prod
```

#### Backend (Railway)
```bash
npm install -g railway
railway login
railway up
```

## 🔐 Environment Variables

### Frontend (.env.local)
```bash
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-nextauth-secret
DATABASE_URL=your-database-url
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

### Backend (.env)
```bash
NODE_ENV=development
PORT=3001
DATABASE_URL=your-database-url
JWT_SECRET=your-jwt-secret
FRONTEND_URL=http://localhost:3000
```

## 📚 Database Schema

The platform includes models for:
- **Users** - Authentication and user management
- **Organizations** - Multi-tenant support
- **Customers** - Customer relationship management
- **Tickets** - Support ticket system

See `packages/database/prisma/schema.prisma` for the complete schema.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- 📖 [Documentation](./docs)
- 🐛 [Report Issues](https://github.com/your-username/saas-cx-platform/issues)
- 💬 [Discussions](https://github.com/your-username/saas-cx-platform/discussions)

---

Built with ❤️ using the latest web technologies. Ready to scale from MVP to enterprise! 🚀