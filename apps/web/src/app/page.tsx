'use client'

import { useSession, signIn, signOut } from 'next-auth/react'
import { Button } from '@saas-cx/ui'

export default function Home() {
  const { data: session, status } = useSession()
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Hello World! 🚀
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Welcome to your SaaS CX Platform - A powerful customer experience solution
            built with Next.js 15, TypeScript, and Tailwind CSS v4.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Lightning Fast
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Built with Next.js 15 and Turbopack for blazing fast development and production performance.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="text-3xl mb-4">🛡️</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Type Safe
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Full TypeScript 5.7 support with end-to-end type safety from database to UI.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="text-3xl mb-4">🎨</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Modern Design
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Beautiful, responsive design system with Tailwind CSS v4 and dark mode support.
              </p>
            </div>
          </div>

          <div className="mt-16 p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Tech Stack
            </h2>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="text-left">
                <p className="text-gray-600 dark:text-gray-300">• Next.js 15.5.3</p>
                <p className="text-gray-600 dark:text-gray-300">• React 19</p>
                <p className="text-gray-600 dark:text-gray-300">• TypeScript 5.7</p>
                <p className="text-gray-600 dark:text-gray-300">• Tailwind CSS v4</p>
              </div>
              <div className="text-left">
                <p className="text-gray-600 dark:text-gray-300">• Prisma 6</p>
                <p className="text-gray-600 dark:text-gray-300">• Express.js 5.0</p>
                <p className="text-gray-600 dark:text-gray-300">• Turborepo 2.3</p>
                <p className="text-gray-600 dark:text-gray-300">• Node.js 18.17+</p>
              </div>
            </div>
          </div>

          {/* Authentication Section */}
          <div className="mt-12 p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Authentication Status
            </h2>

            {status === 'loading' ? (
              <div className="flex items-center justify-center py-4">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                <span className="ml-2 text-gray-600 dark:text-gray-300">Loading...</span>
              </div>
            ) : session ? (
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  {session.user?.image && (
                    <img
                      src={session.user.image}
                      alt="Profile"
                      className="w-12 h-12 rounded-full"
                    />
                  )}
                  <div>
                    <p className="text-lg font-semibold text-gray-900 dark:text-white">
                      Welcome, {session.user?.name}!
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {session.user?.email}
                    </p>
                  </div>
                </div>
                <Button
                  onClick={() => signOut()}
                  variant="outline"
                  className="w-full"
                >
                  Sign Out
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                <p className="text-gray-600 dark:text-gray-300">
                  Sign in to access your customer experience dashboard
                </p>
                <Button
                  onClick={() => signIn()}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Sign In with Google
                </Button>
              </div>
            )}
          </div>

          <div className="mt-8">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Ready to build your customer experience platform? Let&apos;s go! 🎯
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}