'use client'

import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@saas-cx/ui'

const errors: Record<string, string> = {
  Configuration: 'There is a problem with the server configuration.',
  AccessDenied: 'You do not have permission to sign in.',
  Verification: 'The verification token has expired or has already been used.',
  Default: 'An error occurred during authentication.',
}

export default function AuthError() {
  const searchParams = useSearchParams()
  const error = searchParams.get('error')
  const errorMessage = error ? errors[error] ?? errors.Default : errors.Default

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="mx-auto h-12 w-12 text-red-500">
            <svg
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
          </div>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900 dark:text-white">
            Authentication Error
          </h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
            {errorMessage}
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 py-8 px-6 shadow-lg rounded-lg border border-gray-200 dark:border-gray-700">
          <div className="space-y-6">
            <div className="text-center">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                Don&apos;t worry, this happens sometimes. You can try signing in again.
              </p>

              <div className="space-y-4">
                <Link href="/auth/signin">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Try Again
                  </Button>
                </Link>

                <Link href="/">
                  <Button variant="outline" className="w-full">
                    Go to Homepage
                  </Button>
                </Link>
              </div>
            </div>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300 dark:border-gray-600" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400">
                    Need help?
                  </span>
                </div>
              </div>
            </div>

            <div className="text-center text-xs text-gray-500 dark:text-gray-400">
              If this problem persists, please contact our support team
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}