'use client'

import AppButton from './components/Button'

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="mb-6 mt-18">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Culpass Users</h1>
          </div>
        </div>
      </div>

      <div className="bg-red-50 border border-red-200 rounded-lg p-8 text-center">
        <div className="mb-4">
          <h2 className="text-xl font-semibold text-red-800 mb-2">
            Failed to Load Users
          </h2>
          <p className="text-red-600 mb-4">
            {error.message}
          </p>
        </div>
        
                <div className="space-y-3">
          <AppButton
            color="red"
            onClick={() => window.location.href = '/'}
          >
            Try Again
          </AppButton>
        </div>
      </div>
    </div>
  )
} 