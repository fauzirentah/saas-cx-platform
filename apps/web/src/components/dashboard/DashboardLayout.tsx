'use client'

import { useSession, signOut } from 'next-auth/react'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@saas-cx/ui'

interface DashboardLayoutProps {
  children: React.ReactNode
}

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: '📊' },
  { name: 'Customers', href: '/customers', icon: '👥' },
  { name: 'Tickets', href: '/tickets', icon: '🎫' },
  { name: 'Analytics', href: '/analytics', icon: '📈' },
  { name: 'Settings', href: '/settings', icon: '⚙️' },
]

const adminNavigation = [
  { name: 'Admin Panel', href: '/admin', icon: '🛡️' },
  { name: 'Users', href: '/admin/users', icon: '👤' },
  { name: 'Organizations', href: '/admin/organizations', icon: '🏢' },
]

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const { data: session } = useSession()
  const pathname = usePathname()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const isAdmin = session?.user?.role === 'ADMIN' || session?.user?.role === 'SUPER_ADMIN'

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-gray-800 shadow-lg transform ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>

        <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200 dark:border-gray-700">
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">
            SaaS CX Platform
          </h1>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-600"
          >
            ✕
          </button>
        </div>

        <nav className="mt-5 px-2">
          <div className="space-y-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md transition-colors ${
                    isActive
                      ? 'bg-blue-100 text-blue-900 dark:bg-blue-900 dark:text-blue-200'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white'
                  }`}
                >
                  <span className="mr-3 text-lg">{item.icon}</span>
                  {item.name}
                </Link>
              )
            })}
          </div>

          {isAdmin && (
            <div className="mt-8">
              <h3 className="px-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Admin
              </h3>
              <div className="mt-2 space-y-1">
                {adminNavigation.map((item) => {
                  const isActive = pathname === item.href
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md transition-colors ${
                        isActive
                          ? 'bg-red-100 text-red-900 dark:bg-red-900 dark:text-red-200'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white'
                      }`}
                    >
                      <span className="mr-3 text-lg">{item.icon}</span>
                      {item.name}
                    </Link>
                  )
                })}
              </div>
            </div>
          )}
        </nav>

        {/* User info */}
        <div className="absolute bottom-0 w-full p-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-3">
            {session?.user?.image && (
              <img
                src={session.user.image}
                alt="Profile"
                className="w-8 h-8 rounded-full"
              />
            )}
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                {session?.user?.name}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                {session?.user?.email}
              </p>
            </div>
          </div>
          <Button
            onClick={() => signOut()}
            variant="outline"
            className="w-full mt-3 text-sm"
          >
            Sign Out
          </Button>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:pl-64">
        {/* Top navigation */}
        <div className="sticky top-0 z-40 lg:mx-auto lg:max-w-7xl lg:px-8">
          <div className="flex items-center justify-between h-16 px-4 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 lg:px-0">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-600"
            >
              ☰
            </button>

            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Welcome back, {session?.user?.name}!
              </span>
            </div>
          </div>
        </div>

        {/* Page content */}
        <main className="py-10">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            {children}
          </div>
        </main>
      </div>

      {/* Sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-gray-600 bg-opacity-75 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  )
}