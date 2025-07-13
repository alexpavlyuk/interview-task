import CreateUserForm from './client/CreateUserForm';

export default function CreateUserPage() {
  return (
    <div className="max-w-2xl mx-auto pt-20">
      <h1 className="text-2xl font-bold text-gray-800 mb-6 max-w-md px-6">Create User</h1>
      <CreateUserForm />
    </div>
  );
}