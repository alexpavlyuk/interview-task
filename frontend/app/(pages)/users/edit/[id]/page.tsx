import { getUser } from '@services/user';
import EditUserForm from '../client/EditUserForm';
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function EditUserPage({ params }: PageProps) {
  const { id } = await params;

  const userId = parseInt(id);

  if (isNaN(userId)) {
    notFound();
  }

  try {
    const user = await getUser(userId);

    return (
      <div className="max-w-2xl mx-auto pt-20">
        <h1 className="text-2xl font-bold text-gray-900 mb-6 max-w-md px-6">Edit User</h1>
        <EditUserForm user={user} />
      </div>
    );
  } catch (error) {
    console.error(error)
    notFound();
  }
}