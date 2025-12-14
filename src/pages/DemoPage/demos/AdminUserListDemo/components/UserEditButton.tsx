import { MdEdit } from 'react-icons/md';

import type { UserResponseType } from '@/pages/DemoPage/demos/AdminUserListDemo/type';

import { Menu } from '@/components/Menu';
import { useEditUserDialog } from '@/pages/DemoPage/demos/ProfileDemo/useEditUserDialog';

interface UserEditButtonProps {
  onUserChange: (user: Omit<UserResponseType, 'id'>) => void;
  user: UserResponseType;
}

export const UserEditButton = ({ user, onUserChange }: UserEditButtonProps) => {
  const openEditUserDialog = useEditUserDialog({
    type: 'other',
    user: {
      ...user,
      password: '',
    },
    onUserChange: (user) => {
      onUserChange({
        ...user,
        accesses: [],
        deletedAt: null,
        isActive: true,
        updatedAt: new Date().toISOString(),
      });
    },
  });

  return (
    <Menu.ButtonItem
      className="flex items-center gap-2.5 rounded-md px-3 py-2 font-medium"
      onClick={openEditUserDialog}
    >
      <MdEdit className="text-orange600 size-4.5" />
      수정하기
    </Menu.ButtonItem>
  );
};
