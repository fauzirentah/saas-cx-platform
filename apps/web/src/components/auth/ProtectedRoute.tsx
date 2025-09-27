'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

interface ProtectedRouteProps {
  children: React.ReactNode
  requiredRole?: 'USER' | 'ADMIN' | 'SUPER_ADMIN'
  fallback?: React.ReactNode
}

export function ProtectedRoute({
  children,
  requiredRole = 'USER',
  fallback
}: ProtectedRouteProps) {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === 'loading') return // Still loading

    if (!session) {
      router.push('/auth/signin')
      return
    }

    // Check role-based access
    if (requiredRole === 'ADMIN' && session.user.role !== 'ADMIN' && session.user.role !== 'SUPER_ADMIN') {
      router.push('/dashboard?error=unauthorized')
      return
    }

    if (requiredRole === 'SUPER_ADMIN' && session.user.role !== 'SUPER_ADMIN') {
      router.push('/dashboard?error=unauthorized')
      return
    }
  }, [session, status, router, requiredRole])

  if (status === 'loading') {
    return fallback || (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center space-y-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          <p className="text-gray-600 dark:text-gray-300">Loading...</p>
        </div>
      </div>
    )
  }

  if (!session) {
    return fallback || (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Access Denied
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Please sign in to access this page.
          </p>
        </div>
      </div>
    )
  }

  // Check role access
  const hasAccess =
    requiredRole === 'USER' ||
    (requiredRole === 'ADMIN' && (session.user.role === 'ADMIN' || session.user.role === 'SUPER_ADMIN')) ||
    (requiredRole === 'SUPER_ADMIN' && session.user.role === 'SUPER_ADMIN')

  if (!hasAccess) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Unauthorized
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            You don't have permission to access this page.
          </p>
        </div>
      </div>
    )
  }

  return <>{children}</>
}