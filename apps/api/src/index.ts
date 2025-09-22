import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import dotenv from 'dotenv'
import { healthRouter } from './routes/health'
import { databaseRouter } from './routes/database'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3001

// Middleware
app.use(helmet())
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true
}))
app.use(morgan('combined'))
app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ extended: true }))

// Routes
app.use('/api/health', healthRouter)
app.use('/api/database', databaseRouter)

// Root endpoint - Hello World
app.get('/', (req, res) => {
  res.json({
    message: 'Hello World from SaaS CX Platform API! 🚀',
    version: '1.0.0',
    status: 'running',
    timestamp: new Date().toISOString(),
    tech_stack: {
      runtime: 'Node.js 18.17+',
      framework: 'Express.js 5.0',
      language: 'TypeScript 5.7',
      database: 'PostgreSQL with Prisma 6',
      deployment: 'Railway (Free Tier)'
    },
    endpoints: {
      health: '/api/health',
      database: '/api/database/test',
      seed: '/api/database/seed',
      docs: '/api/docs (coming soon)',
      auth: '/api/auth (coming soon)'
    }
  })
})

// 404 handler
app.use((req: express.Request, res: express.Response) => {
  res.status(404).json({
    error: 'Route not found',
    message: `Cannot ${req.method} ${req.originalUrl}`,
    timestamp: new Date().toISOString()
  })
})

// Error handler
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error('Error:', err.stack)
  res.status(500).json({
    error: 'Internal server error',
    message: process.env.NODE_ENV === 'development' ? err.message : 'Something went wrong!',
    timestamp: new Date().toISOString()
  })
})

app.listen(PORT, () => {
  console.log(`🚀 SaaS CX Platform API server running on port ${PORT}`)
  console.log(`📚 Environment: ${process.env.NODE_ENV || 'development'}`)
  console.log(`🌐 Health check: http://localhost:${PORT}/api/health`)
})