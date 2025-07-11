import AppButton from '@components/Button'

export default function NotFound() {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="text-center py-16">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-gray-300 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            User Not Found
          </h2>
          <p className="text-gray-600 mb-8">
            The user you are looking for does not exist or may have been deleted.
          </p>
        </div>
        
        <div className="flex justify-center gap-4">
          <AppButton color="blue" href="/">
            View All Users
          </AppButton>
        </div>
      </div>
    </div>
  )
} 