'use client'

import { useState } from 'react'
import AppButton from '@components/Button'

interface DeleteUserButtonProps {
  userId: number
  onDelete?: (userId: number) => void
}

export default function DeleteUserButton({ userId, onDelete }: DeleteUserButtonProps) {
  const [isDeleting, setIsDeleting] = useState(false)

  const handleDelete = async () => {
    if (confirm(`Are you sure you want to delete user with ID ${userId}?`)) {
      if (onDelete) {
        setIsDeleting(true)
        try {
          await onDelete(userId)
        } catch (error) {
          console.error(error)
          setIsDeleting(false)
        }
      }
    }
  }

  return (
    <AppButton 
      color="red" 
      onClick={handleDelete}
      disabled={isDeleting}
    >
      {isDeleting ? 'Deleting...' : 'Delete'}
    </AppButton>
  )
} 