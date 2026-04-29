import { PrismaClient } from '@prisma/client'
import { PrismaNeon } from '@prisma/adapter-neon'

// Lazy Prisma client. Instantiating on import would crash the build's
// "collect page data" step whenever DATABASE_URL isn't present (CI dummies,
// Preview deploys without env vars). We only need a real connection at
// request time, so defer construction until first access.

const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient }

function createPrismaClient() {
  const connectionString = process.env.DATABASE_URL
  if (!connectionString) {
    throw new Error('DATABASE_URL is not set')
  }
  const adapter = new PrismaNeon({ connectionString })
  return new PrismaClient({ adapter })
}

function getPrisma(): PrismaClient {
  if (!globalForPrisma.prisma) {
    globalForPrisma.prisma = createPrismaClient()
  }
  return globalForPrisma.prisma
}

// Proxy that defers construction until a property is actually accessed.
export const prisma = new Proxy({} as PrismaClient, {
  get(_target, prop, receiver) {
    return Reflect.get(getPrisma(), prop, receiver)
  },
})
