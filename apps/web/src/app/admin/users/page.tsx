'use client'

import { ProtectedRoute } from '../../../components/auth/ProtectedRoute'
import { DashboardLayout } from '../../../components/dashboard/DashboardLayout'
import { Card, CardContent, CardHeader, CardTitle } from '@saas-cx/ui'
import { Button } from '@saas-cx/ui'

function AdminUsersContent() {
  const mockUsers = [
    {
      id: '1',
      name: 'System Administrator',
      email: 'admin@example.com',
      role: 'SUPER_ADMIN',
      status: 'Active',
      createdAt: '2024-01-01',
      lastLogin: 'Just now'
    },
    {
      id: '2',
      name: 'Demo Customer',
      email: 'customer@example.com',
      role: 'USER',
      status: 'Active',
      createdAt: '2024-01-02',
      lastLogin: '2 hours ago'
    }
  ]

  const getRoleBadgeColor = (role: string) => {
    switch (role) {
      case 'SUPER_ADMIN':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
      case 'ADMIN':
        return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200'
      default:
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
    }
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex-1 min-w-0">
            <h2 className="text-2xl font-bold leading-7 text-gray-900 dark:text-white sm:text-3xl sm:truncate">
              User Management
            </h2>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Manage user accounts, roles, and permissions
            </p>
          </div>
          <div className="mt-4 flex md:mt-0 md:ml-4">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              + Add User
            </Button>
          </div>
        </div>

        {/* User Statistics */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Users</CardTitle>
              <span className="text-2xl">👥</span>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{mockUsers.length}</div>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                +0 from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Users</CardTitle>
              <span className="text-2xl">✅</span>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {mockUsers.filter(u => u.status === 'Active').length}
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                100% active rate
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Admin Users</CardTitle>
              <span className="text-2xl">🛡️</span>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {mockUsers.filter(u => u.role.includes('ADMIN')).length}
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {Math.round((mockUsers.filter(u => u.role.includes('ADMIN')).length / mockUsers.length) * 100)}% of total users
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">New This Month</CardTitle>
              <span className="text-2xl">📈</span>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">0</div>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                No growth this period
              </p>
            </CardContent>
          </Card>
        </div>

        {/* User List */}
        <Card>
          <CardHeader>
            <CardTitle>All Users</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockUsers.map((user) => (
                <div key={user.id} className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 dark:text-blue-300 font-medium">
                        {user.name.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">
                        {user.name}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {user.email}
                      </p>
                      <p className="text-xs text-gray-400 dark:text-gray-500">
                        Created: {user.createdAt} • Last login: {user.lastLogin}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getRoleBadgeColor(user.role)}`}>
                      {user.role}
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                      {user.status}
                    </span>
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                    <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900">
                      Suspend
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Role Management */}
        <Card>
          <CardHeader>
            <CardTitle>Role Management</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <h3 className="font-medium text-gray-900 dark:text-white mb-2">USER</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                  Basic user with access to core features
                </p>
                <ul className="text-xs text-gray-500 dark:text-gray-400 space-y-1">
                  <li>• View dashboard</li>
                  <li>• Manage customers</li>
                  <li>• Create tickets</li>
                  <li>• View analytics</li>
                </ul>
              </div>

              <div className="p-4 border border-orange-200 dark:border-orange-800 rounded-lg bg-orange-50 dark:bg-orange-900/20">
                <h3 className="font-medium text-orange-900 dark:text-orange-200 mb-2">ADMIN</h3>
                <p className="text-sm text-orange-600 dark:text-orange-400 mb-3">
                  Administrator with extended permissions
                </p>
                <ul className="text-xs text-orange-600 dark:text-orange-400 space-y-1">
                  <li>• All USER permissions</li>
                  <li>• User management</li>
                  <li>• System settings</li>
                  <li>• View reports</li>
                </ul>
              </div>

              <div className="p-4 border border-red-200 dark:border-red-800 rounded-lg bg-red-50 dark:bg-red-900/20">
                <h3 className="font-medium text-red-900 dark:text-red-200 mb-2">SUPER_ADMIN</h3>
                <p className="text-sm text-red-600 dark:text-red-400 mb-3">
                  Full system access and control
                </p>
                <ul className="text-xs text-red-600 dark:text-red-400 space-y-1">
                  <li>• All ADMIN permissions</li>
                  <li>• System configuration</li>
                  <li>• Database access</li>
                  <li>• Security settings</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}

export default function AdminUsers() {
  return (
    <ProtectedRoute requiredRole="ADMIN">
      <AdminUsersContent />
    </ProtectedRoute>
  )
}