function UserDetailsSkeleton() {
  return (
    <div className="mx-auto p-6">
      <div className="border border-gray-300 rounded-lg p-6 mb-6">
        <div className="animate-pulse">
          <div className="h-6 bg-gray-300 rounded mb-4 w-48"></div>
          <div className="space-y-2">
            <div className="h-5 bg-gray-200 rounded w-64"></div>
            <div className="h-5 bg-gray-200 rounded w-32"></div>
          </div>
        </div>
      </div>
      
      <div className="flex gap-3">
        <div className="animate-pulse">
          <div className="h-10 bg-gray-300 rounded-sm w-16"></div>
        </div>
        <div className="animate-pulse">
          <div className="h-10 bg-gray-300 rounded-sm w-20"></div>
        </div>
        <div className="animate-pulse">
          <div className="h-10 bg-gray-300 rounded-sm w-16"></div>
        </div>
      </div>
    </div>
  );
}

export default function Loading() {
  return (
    <div className="max-w-2xl mx-auto pt-20">
      <h1 className="text-2xl font-bold text-gray-900 mb-6 max-w-md px-6">User</h1>
      <UserDetailsSkeleton />
    </div>
  );
} 