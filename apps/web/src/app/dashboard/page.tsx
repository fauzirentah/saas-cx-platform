'use client'

import { useSession } from 'next-auth/react'
import { ProtectedRoute } from '../../components/auth/ProtectedRoute'
import { DashboardLayout } from '../../components/dashboard/DashboardLayout'
import { Card, CardContent, CardHeader, CardTitle } from '@saas-cx/ui'
import { Button } from '@saas-cx/ui'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

function DashboardContent() {
  const { data: session } = useSession()
  const searchParams = useSearchParams()
  const error = searchParams.get('error')
  const [showError, setShowError] = useState(false)

  useEffect(() => {
    if (error === 'unauthorized') {
      setShowError(true)
      // Auto-hide error after 5 seconds
      const timer = setTimeout(() => setShowError(false), 5000)
      return () => clearTimeout(timer)
    }
  }, [error])

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Error Alert */}
        {showError && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
            <p className="font-medium">Access Denied</p>
            <p className="text-sm">You don't have permission to access the requested page.</p>
          </div>
        )}

        {/* Welcome Header */}
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex-1 min-w-0">
            <h2 className="text-2xl font-bold leading-7 text-gray-900 dark:text-white sm:text-3xl sm:truncate">
              Welcome to your CX Dashboard
            </h2>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Manage your customer experience from one central location
            </p>
          </div>
          <div className="mt-4 flex md:mt-0 md:ml-4">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              + New Ticket
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Customers</CardTitle>
              <span className="text-2xl">👥</span>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1</div>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                +0% from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Open Tickets</CardTitle>
              <span className="text-2xl">🎫</span>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1</div>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                +1 new this week
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg Response Time</CardTitle>
              <span className="text-2xl">⏱️</span>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2h</div>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                -15min from average
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Satisfaction Score</CardTitle>
              <span className="text-2xl">😊</span>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">95%</div>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                +2% from last month
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Recent Tickets</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none">
                      Welcome to your SaaS CX Platform!
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      From: customer@example.com
                    </p>
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Just now
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>User Profile</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  {session?.user?.image && (
                    <img
                      src={session.user.image}
                      alt="Profile"
                      className="w-12 h-12 rounded-full"
                    />
                  )}
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">
                      {session?.user?.name}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {session?.user?.email}
                    </p>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                      {session?.user?.role || 'USER'}
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <Button variant="outline" className="h-24 flex-col space-y-2">
                <span className="text-2xl">👤</span>
                <span>Add Customer</span>
              </Button>
              <Button variant="outline" className="h-24 flex-col space-y-2">
                <span className="text-2xl">🎫</span>
                <span>Create Ticket</span>
              </Button>
              <Button variant="outline" className="h-24 flex-col space-y-2">
                <span className="text-2xl">📊</span>
                <span>View Analytics</span>
              </Button>
              <Button variant="outline" className="h-24 flex-col space-y-2">
                <span className="text-2xl">⚙️</span>
                <span>Settings</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}

export default function Dashboard() {
  return (
    <ProtectedRoute>
      <DashboardContent />
    </ProtectedRoute>
  )
}