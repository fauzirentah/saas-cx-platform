'use client'

import { ProtectedRoute } from '../../../components/auth/ProtectedRoute'
import { DashboardLayout } from '../../../components/dashboard/DashboardLayout'
import { Card, CardContent, CardHeader, CardTitle } from '@saas-cx/ui'
import { Button } from '@saas-cx/ui'

function AdminOrganizationsContent() {
  const mockOrganizations = [
    {
      id: '1',
      name: 'Demo Organization',
      slug: 'demo-org',
      userCount: 2,
      status: 'Active',
      plan: 'Free',
      createdAt: '2024-01-01',
      lastActivity: 'Just now'
    }
  ]

  const getPlanBadgeColor = (plan: string) => {
    switch (plan) {
      case 'Enterprise':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
      case 'Pro':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
      case 'Free':
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
    }
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex-1 min-w-0">
            <h2 className="text-2xl font-bold leading-7 text-gray-900 dark:text-white sm:text-3xl sm:truncate">
              Organization Management
            </h2>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Manage organizations, subscriptions, and billing
            </p>
          </div>
          <div className="mt-4 flex md:mt-0 md:ml-4">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              + Add Organization
            </Button>
          </div>
        </div>

        {/* Organization Statistics */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Organizations</CardTitle>
              <span className="text-2xl">🏢</span>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{mockOrganizations.length}</div>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                +0 from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Organizations</CardTitle>
              <span className="text-2xl">✅</span>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {mockOrganizations.filter(org => org.status === 'Active').length}
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                100% active rate
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Users</CardTitle>
              <span className="text-2xl">👥</span>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {mockOrganizations.reduce((sum, org) => sum + org.userCount, 0)}
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Across all organizations
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Monthly Revenue</CardTitle>
              <span className="text-2xl">💰</span>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$0</div>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                All on free plans
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Organization List */}
        <Card>
          <CardHeader>
            <CardTitle>All Organizations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockOrganizations.map((org) => (
                <div key={org.id} className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                      <span className="text-purple-600 dark:text-purple-300 font-medium">
                        {org.name.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">
                        {org.name}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {org.slug} • {org.userCount} users
                      </p>
                      <p className="text-xs text-gray-400 dark:text-gray-500">
                        Created: {org.createdAt} • Last activity: {org.lastActivity}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getPlanBadgeColor(org.plan)}`}>
                      {org.plan}
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                      {org.status}
                    </span>
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Subscription Plans */}
        <Card>
          <CardHeader>
            <CardTitle>Subscription Plans</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <h3 className="font-medium text-gray-900 dark:text-white mb-2">Free</h3>
                <p className="text-2xl font-bold text-gray-900 dark:text-white mb-2">$0</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                  Per organization/month
                </p>
                <ul className="text-xs text-gray-500 dark:text-gray-400 space-y-1">
                  <li>• Up to 5 users</li>
                  <li>• Basic features</li>
                  <li>• Email support</li>
                  <li>• 1GB storage</li>
                </ul>
                <div className="mt-4 text-center">
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                    {mockOrganizations.filter(org => org.plan === 'Free').length} organizations
                  </span>
                </div>
              </div>

              <div className="p-4 border border-blue-200 dark:border-blue-800 rounded-lg bg-blue-50 dark:bg-blue-900/20">
                <h3 className="font-medium text-blue-900 dark:text-blue-200 mb-2">Pro</h3>
                <p className="text-2xl font-bold text-blue-900 dark:text-blue-200 mb-2">$29</p>
                <p className="text-sm text-blue-600 dark:text-blue-400 mb-3">
                  Per organization/month
                </p>
                <ul className="text-xs text-blue-600 dark:text-blue-400 space-y-1">
                  <li>• Up to 50 users</li>
                  <li>• Advanced features</li>
                  <li>• Priority support</li>
                  <li>• 10GB storage</li>
                  <li>• Analytics</li>
                </ul>
                <div className="mt-4 text-center">
                  <span className="text-sm font-medium text-blue-600 dark:text-blue-300">
                    {mockOrganizations.filter(org => org.plan === 'Pro').length} organizations
                  </span>
                </div>
              </div>

              <div className="p-4 border border-purple-200 dark:border-purple-800 rounded-lg bg-purple-50 dark:bg-purple-900/20">
                <h3 className="font-medium text-purple-900 dark:text-purple-200 mb-2">Enterprise</h3>
                <p className="text-2xl font-bold text-purple-900 dark:text-purple-200 mb-2">$99</p>
                <p className="text-sm text-purple-600 dark:text-purple-400 mb-3">
                  Per organization/month
                </p>
                <ul className="text-xs text-purple-600 dark:text-purple-400 space-y-1">
                  <li>• Unlimited users</li>
                  <li>• All features</li>
                  <li>• 24/7 support</li>
                  <li>• Unlimited storage</li>
                  <li>• Custom integrations</li>
                  <li>• SSO</li>
                </ul>
                <div className="mt-4 text-center">
                  <span className="text-sm font-medium text-purple-600 dark:text-purple-300">
                    {mockOrganizations.filter(org => org.plan === 'Enterprise').length} organizations
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Organization Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">
                    Organization created
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Demo Organization was created with Free plan
                  </p>
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  January 1, 2024
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}

export default function AdminOrganizations() {
  return (
    <ProtectedRoute requiredRole="ADMIN">
      <AdminOrganizationsContent />
    </ProtectedRoute>
  )
}