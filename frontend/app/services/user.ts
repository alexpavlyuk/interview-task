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

export const getUser = async () => {
  // TODO: Fetch a single user by id
};

export const createUser = async () => {
  // TODO: Create a new user
};

export const updateUser = async () => {
  // TODO: Update a user by id
};

export const deleteUser = async () => {
  // TODO: Delete a user by id
};