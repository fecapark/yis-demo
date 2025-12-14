import { MdMoreHoriz } from 'react-icons/md';

import type { UserResponseType } from '@/pages/DemoPage/demos/AdminUserListDemo/type';

import { IconButton } from '@/components/IconButton';
import { Menu } from '@/components/Menu';
import { UserDeleteMenuButton } from '@/pages/DemoPage/demos/AdminUserListDemo/components/UserDeleteButton';
import { UserEditButton } from '@/pages/DemoPage/demos/AdminUserListDemo/components/UserEditButton';

interface UserMenuProps {
  onUserChange: (user: Omit<UserResponseType, 'id'>) => void;
  user: UserResponseType;
}

export const UserMenu = ({ user, onUserChange }: UserMenuProps) => {
  return (
    <Menu>
      <Menu.Target>
        <IconButton size="sm">
          <MdMoreHoriz className="text-neutralMuted size-5" />
        </IconButton>
      </Menu.Target>
      <Menu.Content
        align="end"
        className="bg-grey100 min-w-[180px] rounded-lg p-1.5 text-sm"
        sideOffset={6}
      >
        <UserEditButton onUserChange={onUserChange} user={user} />
        <UserDeleteMenuButton
          onDelete={() => {
            onUserChange({
              ...user,
              deletedAt: new Date().toISOString(),
            });
          }}
        />
      </Menu.Content>
    </Menu>
  );
};
