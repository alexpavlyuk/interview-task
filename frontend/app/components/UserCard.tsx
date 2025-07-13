'use client'

import { User } from '@/types/user'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { deleteUser } from '@/services/user'
import DeleteUserButton from '@components/DeleteUserButton'
import AppButton from './Button'

interface UserCardProps {
  user: User
}

export function UserCardSkeleton() {
  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow">
      <div className="animate-pulse">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="h-8 bg-gray-300 rounded mb-2 w-3/4"></div>
            <div className="space-y-1">
              <div className="h-5 bg-gray-200 rounded w-full"></div>
              <div className="h-5 bg-gray-200 rounded w-2/3"></div>
            </div>
          </div>
          <div className="h-6 bg-gray-200 rounded-full w-12"></div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="flex justify-between items-center">
            <div className="h-10 bg-gray-200 rounded-sm w-24"></div>
            <div className="flex gap-2">
              <div className="h-10 bg-gray-200 rounded-sm w-12"></div>
              <div className="h-10 bg-gray-200 rounded-sm w-16"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function UserCard({ user }: UserCardProps) {
  const router = useRouter()
  const [, setIsDeleting] = useState(false)

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
    <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className="text-2xl font-semibold mb-2">
            <Link 
              href={`/users/${user.id}`}
              className="text-gray-800 hover:text-blue-600 transition-colors cursor-pointer"
            >
              {user.name}
            </Link>
          </h3>
          <div className="space-y-1">
            <p className="text-sm text-gray-600 flex items-center">
              <span className="inline-block mr-2 text-gray-600 font-bold">Email: </span>
              {user.email}
            </p>
            <p className="text-sm text-gray-600 flex items-center">
              <span className="inline-block mr-2 text-gray-600 font-bold">Age: </span>
              {user.age} years old
            </p>
          </div>
        </div>
        <div className="text-right">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
            ID: {user.id}
          </span>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-gray-100">
        <div className="flex justify-between items-center">
          <AppButton color="blue" href={`/users/${user.id}`}>
            View Details
          </AppButton>
          <div className="flex gap-2">
            <AppButton color="gray" href={`/users/edit/${user.id}`}>
              Edit
            </AppButton>
            <DeleteUserButton 
              userId={user.id}
              onDelete={handleDelete}
            />
          </div>
        </div>
      </div>
    </div>
  )
} 