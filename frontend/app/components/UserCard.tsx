import { User } from '@/types/user'
import Link from 'next/link'

interface UserCardProps {
  user: User
}

export default function UserCard({ user }: UserCardProps) {
  return (
    <div className="border-2 border-gray-300 rounded-lg p-6 h-32">
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