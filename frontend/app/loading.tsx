import { UserCardSkeleton } from '@components/UserCard'

export default function Loading() {
  const COUNT_SKELETON_CARDS = 6;
  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="mb-6 mt-18">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Culpass Users</h1>
          </div>
        </div>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
        {[...Array(COUNT_SKELETON_CARDS)].map((_, index) => (
          <UserCardSkeleton key={index} />
        ))}
      </div>
    </div>
  )
} 