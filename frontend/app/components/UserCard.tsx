import { User } from '@/types/user'
import Link from 'next/link'

interface UserCardProps {
  user: User
}

export function UserCardSkeleton() {
  return (
    <div className="bg-white border-2 border-gray-300 rounded-lg p-6 h-28">
      <div className="animate-pulse">
        <div className="h-6 bg-gray-300 rounded mb-6 w-32 border-b-2 border-gray-300"></div>
        <div className="h-5 bg-gray-200 rounded w-64"></div>
      </div>
    </div>
  )
}

export default function UserCard({ user }: UserCardProps) {
  return (
    <div className="border-2 border-gray-300 rounded-lg p-6 h-28">
      <h3 className="text-blue-600 text-xl font-bold border-b-2 border-blue-600 mb-4 inline-block">
        <Link 
          href={`/users/${user.id}`}
          className=" hover:text-blue-800 transition-colors cursor-pointer"
        >
          {user.name}
        </Link>
      </h3>
      <p className="text-gray-800 text-lg">
        {user.email}
      </p>
    </div>
  )
} 