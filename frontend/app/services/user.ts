import axios from 'axios';
import { User } from '@/types/user';

const baseURL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3001";

const usersApi = axios.create({
  baseURL: `${baseURL}/users`,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Fetch all users
export const getUsers = async (): Promise<User[]> => {
  try {
    const response = await usersApi.get('/');
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw new Error('Failed to fetch users');
  }
};

// Fetch single user by id
export const getUser = async (id: number): Promise<User> => {
  try {
    const response = await usersApi.get(`/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching user ${id}:`, error);
    if (axios.isAxiosError(error) && error.response?.status === 404) {
      throw new Error('User not found');
    }
    throw new Error('Failed to fetch user');
  }
};

export const createUser = async () => {
  // TODO: Create a new user
};

// Update user by id
export const updateUser = async (id: number, userData: Partial<Omit<User, 'id'>>): Promise<User> => {
  try {
    const response = await usersApi.put(`/${id}`, userData);
    return response.data;
  } catch (error) {
    console.error(`Error updating user ${id}:`, error);
    if (axios.isAxiosError(error) && error.response?.status === 404) {
      throw new Error('User not found');
    }
    throw new Error('Failed to update user');
  }
};

export const deleteUser = async () => {
  // TODO: Delete a user by id
};