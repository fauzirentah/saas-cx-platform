import { Router } from 'express'
import { PrismaClient } from '@saas-cx/database'

export const databaseRouter = Router()
const prisma = new PrismaClient()

databaseRouter.get('/test', async (req, res) => {
  try {
    // Test database connection
    await prisma.$connect()

    // Get table counts to verify schema creation
    const [users, organizations, customers, tickets] = await Promise.all([
      prisma.user.count(),
      prisma.organization.count(),
      prisma.customer.count(),
      prisma.ticket.count()
    ])

    res.status(200).json({
      status: 'Database connection successful! ✅',
      message: 'All tables created and accessible',
      timestamp: new Date().toISOString(),
      database: {
        provider: 'PostgreSQL (Neon)',
        schema: 'public',
        tables: {
          users: users,
          organizations: organizations,
          customers: customers,
          tickets: tickets
        }
      },
      version: 'Prisma 6.16.2'
    })
  } catch (error) {
    console.error('Database test error:', error)
    res.status(500).json({
      status: 'Database connection failed ❌',
      error: error instanceof Error ? error.message : 'Unknown error',
      timestamp: new Date().toISOString()
    })
  } finally {
    await prisma.$disconnect()
  }
})

databaseRouter.post('/seed', async (req, res) => {
  try {
    // Create a sample organization
    const org = await prisma.organization.create({
      data: {
        name: 'Demo Organization',
        slug: 'demo-org',
        description: 'A sample organization for testing',
        industry: 'Technology',
        size: 'STARTUP'
      }
    })

    // Create a sample user
    const user = await prisma.user.create({
      data: {
        email: 'demo@example.com',
        name: 'Demo User',
        role: 'ADMIN',
        organizationId: org.id
      }
    })

    // Create a sample customer
    const customer = await prisma.customer.create({
      data: {
        email: 'customer@example.com',
        name: 'Demo Customer',
        status: 'ACTIVE',
        tier: 'STANDARD',
        organizationId: org.id
      }
    })

    // Create a sample ticket
    const ticket = await prisma.ticket.create({
      data: {
        title: 'Welcome to your SaaS CX Platform!',
        description: 'This is a sample support ticket to demonstrate the system.',
        status: 'OPEN',
        priority: 'MEDIUM',
        category: 'General',
        customerId: customer.id,
        organizationId: org.id,
        assigneeId: user.id
      }
    })

    res.status(201).json({
      status: 'Sample data created successfully! ✅',
      message: 'Database seeded with demo data',
      timestamp: new Date().toISOString(),
      created: {
        organization: org.name,
        user: user.email,
        customer: customer.email,
        ticket: ticket.title
      }
    })
  } catch (error) {
    console.error('Database seed error:', error)
    res.status(500).json({
      status: 'Database seeding failed ❌',
      error: error instanceof Error ? error.message : 'Unknown error',
      timestamp: new Date().toISOString()
    })
  } finally {
    await prisma.$disconnect()
  }
})