'use client'

import { useSession } from 'next-auth/react'
import { ProtectedRoute } from '../../components/auth/ProtectedRoute'
import { DashboardLayout } from '../../components/dashboard/DashboardLayout'
import { Card, CardContent, CardHeader, CardTitle } from '@saas-cx/ui'
import { Button } from '@saas-cx/ui'

function SettingsContent() {
  const { data: session } = useSession()

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex-1 min-w-0">
            <h2 className="text-2xl font-bold leading-7 text-gray-900 dark:text-white sm:text-3xl sm:truncate">
              Settings
            </h2>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Manage your account and application preferences
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Profile Settings */}
          <Card>
            <CardHeader>
              <CardTitle>Profile Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  defaultValue={session?.user?.name || ''}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  defaultValue={session?.user?.email || ''}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Role
                </label>
                <input
                  type="text"
                  value={session?.user?.role || 'USER'}
                  disabled
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400"
                />
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Contact an administrator to change your role
                </p>
              </div>

              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                Update Profile
              </Button>
            </CardContent>
          </Card>

          {/* Notification Settings */}
          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Email Notifications</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Receive email updates about your tickets
                  </p>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Push Notifications</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Get notified about urgent tickets
                  </p>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Weekly Reports</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Receive weekly performance summaries
                  </p>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                </div>
              </div>

              <Button variant="outline" className="w-full">
                Save Preferences
              </Button>
            </CardContent>
          </Card>

          {/* Security Settings */}
          <Card>
            <CardHeader>
              <CardTitle>Security</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="font-medium text-gray-900 dark:text-white mb-2">
                  Two-Factor Authentication
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                  Add an extra layer of security to your account
                </p>
                <Button variant="outline" className="w-full">
                  Enable 2FA
                </Button>
              </div>

              <div>
                <p className="font-medium text-gray-900 dark:text-white mb-2">
                  Password
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                  You're signed in with Google OAuth
                </p>
                <Button variant="outline" className="w-full" disabled>
                  Change Password
                </Button>
              </div>

              <div>
                <p className="font-medium text-gray-900 dark:text-white mb-2">
                  Active Sessions
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                  Manage your active sessions across devices
                </p>
                <Button variant="outline" className="w-full">
                  View Sessions
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Application Settings */}
          <Card>
            <CardHeader>
              <CardTitle>Application Preferences</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Theme
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white">
                  <option>System</option>
                  <option>Light</option>
                  <option>Dark</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Language
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white">
                  <option>English</option>
                  <option>Spanish</option>
                  <option>French</option>
                  <option>German</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Timezone
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white">
                  <option>UTC</option>
                  <option>UTC-5 (EST)</option>
                  <option>UTC-8 (PST)</option>
                  <option>UTC+1 (CET)</option>
                </select>
              </div>

              <Button variant="outline" className="w-full">
                Update Settings
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Danger Zone */}
        <Card className="border-red-200 dark:border-red-800">
          <CardHeader>
            <CardTitle className="text-red-600 dark:text-red-400">Danger Zone</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <p className="font-medium text-gray-900 dark:text-white mb-2">
                  Delete Account
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                  Permanently delete your account and all associated data. This action cannot be undone.
                </p>
                <Button variant="outline" className="border-red-300 text-red-600 hover:bg-red-50 dark:border-red-800 dark:text-red-400 dark:hover:bg-red-900">
                  Delete Account
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}

export default function Settings() {
  return (
    <ProtectedRoute>
      <SettingsContent />
    </ProtectedRoute>
  )
}