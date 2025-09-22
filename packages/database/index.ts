export * from '@prisma/client'
export { PrismaClient } from '@prisma/client'

// Re-export types for better developer experience
export type {
  User,
  Account,
  Session,
  Organization,
  Customer,
  Ticket,
  UserRole,
  OrganizationSize,
  CustomerStatus,
  CustomerTier,
  TicketStatus,
  TicketPriority
} from '@prisma/client'