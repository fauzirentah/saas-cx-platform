import { auth } from './lib/auth'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Protected routes that require authentication
const protectedRoutes = [
  '/dashboard',
  '/customers',
  '/tickets',
  '/analytics',
  '/settings',
  '/profile'
]

// Admin-only routes
const adminRoutes = [
  '/admin',
  '/admin/users',
  '/admin/organizations',
  '/admin/settings'
]

// Public routes that don't need authentication
const publicRoutes = [
  '/',
  '/auth/signin',
  '/auth/error',
  '/api/auth',
  '/api/health',
  '/api/database'
]

export default auth((req) => {
  const { pathname } = req.nextUrl
  const isAuthenticated = !!req.auth?.user
  const userRole = req.auth?.user?.role

  // Check if route is protected
  const isProtectedRoute = protectedRoutes.some(route =>
    pathname.startsWith(route)
  )

  // Check if route is admin-only
  const isAdminRoute = adminRoutes.some(route =>
    pathname.startsWith(route)
  )

  // Check if route is public
  const isPublicRoute = publicRoutes.some(route =>
    pathname.startsWith(route) || pathname === route
  )

  // Allow public routes and API routes
  if (isPublicRoute || pathname.startsWith('/api/')) {
    return NextResponse.next()
  }

  // Redirect to signin if not authenticated and trying to access protected route
  if (isProtectedRoute && !isAuthenticated) {
    const signInUrl = new URL('/auth/signin', req.url)
    signInUrl.searchParams.set('callbackUrl', pathname)
    return NextResponse.redirect(signInUrl)
  }

  // Check admin access
  if (isAdminRoute && (!isAuthenticated || userRole !== 'ADMIN')) {
    const unauthorizedUrl = new URL('/dashboard?error=unauthorized', req.url)
    return NextResponse.redirect(unauthorizedUrl)
  }

  return NextResponse.next()
})

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}