import UserList from '@components/UserList'
import { getUsers } from '@services/user'

const IndexPage = async () => {
  const users = await getUsers();

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="mb-6 mt-18">
        <h1 className="text-3xl font-bold text-gray-900">Culpass Users</h1>
      </div>
      <UserList users={users} />
    </div>
  );
};

export default IndexPage;
