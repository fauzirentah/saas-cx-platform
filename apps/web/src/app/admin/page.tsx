'use client'

import { ProtectedRoute } from '../../components/auth/ProtectedRoute'
import { DashboardLayout } from '../../components/dashboard/DashboardLayout'
import { Card, CardContent, CardHeader, CardTitle } from '@saas-cx/ui'
import { Button } from '@saas-cx/ui'

function AdminContent() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex-1 min-w-0">
            <h2 className="text-2xl font-bold leading-7 text-gray-900 dark:text-white sm:text-3xl sm:truncate">
              Admin Panel
            </h2>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              System administration and management tools
            </p>
          </div>
        </div>

        {/* System Stats */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Users</CardTitle>
              <span className="text-2xl">👥</span>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1</div>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                +0 new this month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Organizations</CardTitle>
              <span className="text-2xl">🏢</span>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1</div>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                +0 new this month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">System Health</CardTitle>
              <span className="text-2xl">💚</span>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">100%</div>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                All systems operational
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Storage Used</CardTitle>
              <span className="text-2xl">💾</span>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">0.1GB</div>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                of 10GB allocated
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <Button variant="outline" className="h-24 flex-col space-y-2">
                <span className="text-2xl">👤</span>
                <span>Manage Users</span>
              </Button>
              <Button variant="outline" className="h-24 flex-col space-y-2">
                <span className="text-2xl">🏢</span>
                <span>Organizations</span>
              </Button>
              <Button variant="outline" className="h-24 flex-col space-y-2">
                <span className="text-2xl">📊</span>
                <span>System Reports</span>
              </Button>
              <Button variant="outline" className="h-24 flex-col space-y-2">
                <span className="text-2xl">⚙️</span>
                <span>System Settings</span>
              </Button>
              <Button variant="outline" className="h-24 flex-col space-y-2">
                <span className="text-2xl">🔒</span>
                <span>Security Logs</span>
              </Button>
              <Button variant="outline" className="h-24 flex-col space-y-2">
                <span className="text-2xl">💾</span>
                <span>Database Tools</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Recent User Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none">
                      User login
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      System user authenticated via Google OAuth
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
              <CardTitle>System Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-medium">Web Server</span>
                  </div>
                  <span className="text-sm text-green-600 dark:text-green-400">
                    Operational
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-medium">Database</span>
                  </div>
                  <span className="text-sm text-green-600 dark:text-green-400">
                    Operational
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-medium">API Server</span>
                  </div>
                  <span className="text-sm text-green-600 dark:text-green-400">
                    Operational
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-medium">Authentication</span>
                  </div>
                  <span className="text-sm text-green-600 dark:text-green-400">
                    Operational
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default function Admin() {
  return (
    <ProtectedRoute requiredRole="ADMIN">
      <AdminContent />
    </ProtectedRoute>
  )
}