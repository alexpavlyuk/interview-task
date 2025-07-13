import UserList from '@components/UserList'
import { getUsers } from '@services/user'
import AppButton from '@components/Button'

export const dynamic = 'force-dynamic'

const IndexPage = async () => {
  const users = await getUsers();

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="mb-6 mt-18">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Culpass Users</h1>
          </div>

          <div className="flex gap-2">
            <AppButton color="blue" href="/users/create">
              New user
            </AppButton>
          </div>
        </div>
      </div>

      <UserList users={users} />
    </div>
  );
};

export default IndexPage;
