import clsx from 'clsx';
import { useState } from 'react';

import type { UserResponseType } from '@/pages/DemoPage/demos/AdminUserListDemo/type';

import { ProfileAvatar } from '@/components/ProfileAvatar';
import { Table } from '@/components/Table';
import { UserMenu } from '@/pages/DemoPage/demos/AdminUserListDemo/components/UserMenu';
import { UserRoleBadge } from '@/pages/DemoPage/demos/ProfileDemo/UserRoleBadge';
import { formatTemplates } from '@/utils/date';

export const UserList = () => {
  const [users, setUsers] = useState(defaultUsers);

  const filteredUsers = users.filter((user) => !user.deletedAt);

  return (
    <Table>
      <Table.Head
        headers={[
          `유저 · ${filteredUsers.length}명`,
          '이메일',
          '소속 파트',
          '가입일',
          '활성 여부',
          '',
        ]}
      />
      <Table.Body>
        {filteredUsers.map((user, index) => (
          <Table.Row index={index} key={user.id}>
            <Table.Cell>
              <div className="flex items-center gap-3">
                <div className="text-brandPrimary flex min-w-[32px] items-center justify-center font-semibold">
                  {user.id}
                </div>
                <ProfileAvatar avatarId={user.avatarId} rounded size={24} />
                <div className="font-medium">{user.nickname}</div>
                <UserRoleBadge role={user.role} size="sm" />
              </div>
            </Table.Cell>
            <Table.Cell className="text-neutralMuted">{user.email}</Table.Cell>
            <Table.Cell className="text-neutralMuted">{user.part}</Table.Cell>
            <Table.Cell className="text-neutralMuted">
              {formatTemplates['24/01/01 23:00'](user.createdAt)}
            </Table.Cell>
            <Table.Cell
              className={clsx('font-medium', user.isActive ? 'text-green500' : 'text-grey500')}
            >
              {user.isActive ? '활성' : '비활성'}
            </Table.Cell>
            <Table.Cell innerClassName="min-w-auto">
              <UserMenu
                onUserChange={(user) => {
                  setUsers((prev) => {
                    return prev.map((item) => {
                      if (item.email === user.email) {
                        return { ...item, ...user };
                      }
                      return item;
                    });
                  });
                }}
                user={user}
              />
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};

const defaultUsers: UserResponseType[] = [
  {
    email: 'phoenix@example.com',
    nickname: 'Phoenix',
    part: 'Backend',
    avatarId: 4,
    id: 37,
    role: 'USER',
    accesses: [],
    createdAt: '2025-09-05T15:26:01',
    updatedAt: '2025-09-05T15:26:01',
    deletedAt: null,
    isActive: true,
  },
  {
    email: 'aurora@example.com',
    nickname: 'Aurora',
    part: 'Backend',
    avatarId: 8,
    id: 36,
    role: 'USER',
    accesses: [],
    createdAt: '2025-08-07T02:23:43',
    updatedAt: '2025-08-07T02:23:43',
    deletedAt: null,
    isActive: true,
  },
  {
    email: 'echo@example.com',
    nickname: 'Echo',
    part: 'Backend',
    avatarId: 3,
    id: 35,
    role: 'USER',
    accesses: [],
    createdAt: '2025-08-07T02:13:50',
    updatedAt: '2025-08-07T21:25:25',
    deletedAt: null,
    isActive: true,
  },
  {
    email: 'nova@example.com',
    nickname: 'Nova',
    part: 'Backend',
    avatarId: 2,
    id: 34,
    role: 'USER',
    accesses: [],
    createdAt: '2025-08-07T02:09:42',
    updatedAt: '2025-08-07T02:09:42',
    deletedAt: null,
    isActive: true,
  },
  {
    email: 'orbit@example.com',
    nickname: 'Orbit',
    part: 'Backend',
    avatarId: 3,
    id: 33,
    role: 'USER',
    accesses: ['game-2048'],
    createdAt: '2025-07-21T19:08:18',
    updatedAt: '2025-07-21T19:08:18',
    deletedAt: null,
    isActive: false,
  },
  {
    email: 'zenith@example.com',
    nickname: 'Zenith',
    part: 'Android',
    avatarId: 9,
    id: 32,
    role: 'USER',
    accesses: [],
    createdAt: '2025-07-17T22:22:18',
    updatedAt: '2025-07-17T22:22:18',
    deletedAt: null,
    isActive: true,
  },
  {
    email: 'cipher@example.com',
    nickname: 'Cipher',
    part: 'Frontend',
    avatarId: 7,
    id: 17,
    role: 'USER',
    accesses: [],
    createdAt: '2025-05-30T22:47:37',
    updatedAt: '2025-05-30T22:47:37',
    deletedAt: null,
    isActive: false,
  },
  {
    email: 'nebula@example.com',
    nickname: 'Nebula',
    part: 'Frontend',
    avatarId: 3,
    id: 16,
    role: 'USER',
    accesses: [],
    createdAt: '2025-05-30T05:08:56',
    updatedAt: '2025-05-30T05:08:56',
    deletedAt: null,
    isActive: true,
  },
  {
    email: 'titan@example.com',
    nickname: 'Titan',
    part: 'Frontend',
    avatarId: 11,
    id: 2,
    role: 'ADMIN',
    accesses: ['yis-client-dev'],
    createdAt: '2025-05-04T23:34:58',
    updatedAt: '2025-08-07T11:13:34',
    deletedAt: null,
    isActive: true,
  },
  {
    email: 'cosmos@example.com',
    nickname: 'Cosmos',
    part: 'Backend',
    avatarId: 1,
    id: 1,
    role: 'ADMIN',
    accesses: ['game-2048'],
    createdAt: '2025-04-28T09:23:56',
    updatedAt: '2025-05-28T18:04:30',
    deletedAt: null,
    isActive: true,
  },
] as const;
