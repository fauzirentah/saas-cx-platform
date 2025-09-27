'use client'

import { ProtectedRoute } from '../../components/auth/ProtectedRoute'
import { DashboardLayout } from '../../components/dashboard/DashboardLayout'
import { Card, CardContent, CardHeader, CardTitle } from '@saas-cx/ui'
import { Button } from '@saas-cx/ui'

function TicketsContent() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex-1 min-w-0">
            <h2 className="text-2xl font-bold leading-7 text-gray-900 dark:text-white sm:text-3xl sm:truncate">
              Support Tickets
            </h2>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Manage customer support requests and issues
            </p>
          </div>
          <div className="mt-4 flex md:mt-0 md:ml-4">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              + New Ticket
            </Button>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Active Tickets</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-yellow-100 dark:bg-yellow-900 rounded-full flex items-center justify-center">
                    <span className="text-yellow-600 dark:text-yellow-300 font-medium">
                      #1
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">
                      Welcome to your SaaS CX Platform!
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      From: customer@example.com • General
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
                    Open
                  </span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                    Medium
                  </span>
                  <Button variant="outline" size="sm">
                    View Ticket
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}

export default function Tickets() {
  return (
    <ProtectedRoute>
      <TicketsContent />
    </ProtectedRoute>
  )
}