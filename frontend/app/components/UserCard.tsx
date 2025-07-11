'use client'

import { User } from '@/types/user'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { deleteUser } from '@/services/user'
import DeleteUserButton from '@components/DeleteUserButton'

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
  const router = useRouter()
  const [isDeleting, setIsDeleting] = useState(false)

  const handleDelete = async (userId: number) => {
    setIsDeleting(true)
    try {
      await deleteUser(userId)
      router.refresh()
    } catch (error) {
      alert('Failed to delete user: ' + (error instanceof Error ? error.message : 'Unknown error'))
      setIsDeleting(false)
    }
  }

  return (
    <div className="border-2 border-gray-300 rounded-lg p-6 h-28 relative group">
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

      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex gap-2">
        <DeleteUserButton 
          userId={user.id}
          onDelete={handleDelete}
        />
      </div>
    </div>
  )
} 