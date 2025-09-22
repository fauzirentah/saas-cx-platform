import { Router } from 'express'

export const healthRouter = Router()

healthRouter.get('/', (req, res) => {
  const healthCheck = {
    status: 'OK',
    message: 'SaaS CX Platform API is healthy! ✅',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    memory: {
      used: Math.round(process.memoryUsage().heapUsed / 1024 / 1024 * 100) / 100,
      total: Math.round(process.memoryUsage().heapTotal / 1024 / 1024 * 100) / 100,
      external: Math.round(process.memoryUsage().external / 1024 / 1024 * 100) / 100
    },
    versions: {
      node: process.version,
      platform: process.platform,
      arch: process.arch
    },
    environment: process.env.NODE_ENV || 'development'
  }

  res.status(200).json(healthCheck)
})

healthRouter.get('/ping', (req, res) => {
  res.status(200).json({
    message: 'pong! 🏓',
    timestamp: new Date().toISOString()
  })
})