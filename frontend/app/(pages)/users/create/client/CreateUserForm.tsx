"use client";

import { useState } from 'react';
import { createUser } from '@services/user';
import AppButton from '@components/Button';
import { useRouter } from 'next/navigation';

export default function CreateUserForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: 0
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    // Validate name
    if (formData.name.trim().length < 3) {
      setError('Name must be at least 3 characters long');
      setIsLoading(false);
      return;
    }

    // Validate email
    if (!isValidEmail(formData.email)) {
      setError('Please enter a valid email address');
      setIsLoading(false);
      return;
    }

    // Validate age
    if (formData.age < 1 || formData.age > 120) {
      setError('Age must be between 1 and 120 years');
      setIsLoading(false);
      return;
    }

    try {
      const newUser = await createUser(formData);
      router.push(`/users/${newUser.id}`); // Redirect to new user details
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Failed to create user');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'age' ? parseInt(value) || 0 : value
    }));
  };

  return (
    <div className="mx-auto p-6">
      {/* Main form card */}
      <div className="mb-8">
        
        {error && (
          <div className="mb-4 p-3 bg-red-100 border border-red-300 text-red-700 rounded">
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div>
            <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">
              Age
            </label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
              min="1"
              max="120"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </form>
      </div>
      
      {/* Action buttons */}
      <div className="flex gap-3">
        <AppButton 
          color="green" 
          onClick={handleSubmit}
          disabled={isLoading}
        >
          {isLoading ? 'Creating...' : 'Create'}
        </AppButton>
        <AppButton color="gray" href="/">
          Cancel
        </AppButton>
      </div>
    </div>
  );
}
