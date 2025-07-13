function EditUserFormSkeleton() {
  return (
    <div className="mx-auto p-6">
      <div className="mb-8">
        <div className="space-y-4">
          <div>
            <div className="animate-pulse">
              <div className="h-4 bg-gray-300 rounded mb-1 w-12"></div>
              <div className="h-10 bg-gray-200 rounded-md w-full"></div>
            </div>
          </div>

          <div>
            <div className="animate-pulse">
              <div className="h-4 bg-gray-300 rounded mb-1 w-16"></div>
              <div className="h-10 bg-gray-200 rounded-md w-full"></div>
            </div>
          </div>

          <div>
            <div className="animate-pulse">
              <div className="h-4 bg-gray-300 rounded mb-1 w-8"></div>
              <div className="h-10 bg-gray-200 rounded-md w-full"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-3">
        <div className="animate-pulse">
          <div className="h-10 bg-gray-300 rounded-sm w-20"></div>
        </div>
        <div className="animate-pulse">
          <div className="h-10 bg-gray-300 rounded-sm w-20"></div>
        </div>
      </div>
    </div>
  );
}

export default function Loading() {
  return (
    <div className="max-w-2xl mx-auto pt-20">
      <h1 className="text-2xl font-bold text-gray-900 mb-6 max-w-md px-6">Edit User</h1>
      <EditUserFormSkeleton />
    </div>
  );
} 