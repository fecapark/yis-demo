import { UserList } from '@/pages/DemoPage/demos/AdminUserListDemo/components/UserList';

export const AdminUserListDemo = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="text-neutralMuted font-medium">하단의 유저 목록을 관리해볼 수 있어요.</div>
      <UserList />
    </div>
  );
};
