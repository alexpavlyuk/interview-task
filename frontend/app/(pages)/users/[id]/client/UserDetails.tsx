"use client";

import { User } from '@/types/user';
import AppButton from '@components/Button';
import { useRouter } from 'next/navigation';

interface UserDetailsProps {
  user: User;
}

export default function UserDetails({ user }: UserDetailsProps) {
  const router = useRouter();

  return (
    <div className="mx-auto p-6">
      <div className="border border-gray-300 rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">{user.name}</h2>
        <div className="space-y-2">
          <p className="text-gray-700">{user.email}</p>
          <p className="text-gray-700">Age: {user.age}</p>
        </div>
      </div>
      
      <div className="flex gap-3">
        <AppButton color="yellow" href={`/users/edit/${user.id}`}>
          Edit
        </AppButton>
        <AppButton color="red">
          Delete
        </AppButton>
        <AppButton color="gray" href="/">
          Back
        </AppButton>
      </div>
    </div>
  );
} 