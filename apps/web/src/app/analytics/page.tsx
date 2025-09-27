'use client'

import { ProtectedRoute } from '../../components/auth/ProtectedRoute'
import { DashboardLayout } from '../../components/dashboard/DashboardLayout'
import { Card, CardContent, CardHeader, CardTitle } from '@saas-cx/ui'

function AnalyticsContent() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex-1 min-w-0">
            <h2 className="text-2xl font-bold leading-7 text-gray-900 dark:text-white sm:text-3xl sm:truncate">
              Analytics
            </h2>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Insights and metrics for your customer experience platform
            </p>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Resolution Rate</CardTitle>
              <span className="text-2xl">✅</span>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">92%</div>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                +5% from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Customer Retention</CardTitle>
              <span className="text-2xl">🔄</span>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">89%</div>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                +2% from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg First Response</CardTitle>
              <span className="text-2xl">⚡</span>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">45m</div>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                -12m from average
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Monthly Growth</CardTitle>
              <span className="text-2xl">📈</span>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12%</div>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                +3% from last month
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Charts Placeholder */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Ticket Volume Trends</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-center justify-center bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="text-center text-gray-500 dark:text-gray-400">
                  <span className="text-4xl block mb-2">📊</span>
                  <p>Chart visualization will be implemented here</p>
                  <p className="text-sm mt-1">Integration with Chart.js or Recharts coming soon</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Customer Satisfaction</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-center justify-center bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="text-center text-gray-500 dark:text-gray-400">
                  <span className="text-4xl block mb-2">😊</span>
                  <p>Satisfaction metrics chart</p>
                  <p className="text-sm mt-1">Real-time customer feedback visualization</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Performance Breakdown */}
        <Card>
          <CardHeader>
            <CardTitle>Performance Breakdown</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium">Resolved Tickets</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-500">85%</span>
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <span className="text-sm font-medium">Pending Tickets</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-500">12%</span>
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '12%' }}></div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="text-sm font-medium">Escalated Tickets</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-500">3%</span>
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div className="bg-red-500 h-2 rounded-full" style={{ width: '3%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}

export default function Analytics() {
  return (
    <ProtectedRoute>
      <AnalyticsContent />
    </ProtectedRoute>
  )
}