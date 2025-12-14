import { useState } from 'react';

import type { UserType } from '@/pages/DemoPage/type';

import { ItemList } from '@/components/ItemList';
import { ProfileAvatar } from '@/components/ProfileAvatar';
import { useEditUserDialog } from '@/pages/DemoPage/demos/ProfileDemo/useEditUserDialog';
import { UserRoleBadge } from '@/pages/DemoPage/demos/ProfileDemo/UserRoleBadge';
import { formatTemplates } from '@/utils/date';

const me = {
  nickname: 'User',
  avatarId: 2,
  role: 'USER',
  email: 'user@gmail.com',
  password: '',
  part: 'Frontend',
  createdAt: '2025-05-05 08:34',
} as const satisfies UserType;

export const ProfileSection = () => {
  const [user, setUser] = useState<UserType>(me);
  const openEditAlertDialog = useEditUserDialog({
    type: 'me',
    user,
    onUserChange: (user) => {
      setUser(user);
    },
  });

  return (
    <div className="flex w-full flex-col gap-10">
      <div className="flex flex-col items-center gap-4">
        <ProfileAvatar avatarId={user.avatarId} rounded size={64} />
        <div className="text-xl font-semibold">{user.nickname}</div>
      </div>

      <ItemList>
        <ItemList.Header>
          내 정보
          <ItemList.HeaderButton onClick={openEditAlertDialog}>수정하기</ItemList.HeaderButton>
        </ItemList.Header>
        <ItemList.Body>
          <ItemList.Item label="닉네임">{user.nickname}</ItemList.Item>
          <ItemList.Item label="소속 파트">{user.part}</ItemList.Item>
          <ItemList.Item label="권한">
            <UserRoleBadge role={user.role} size="lg" />
          </ItemList.Item>
          <ItemList.Item label="이메일">{user.email}</ItemList.Item>
          <ItemList.Item label="비밀번호" tooltipContent="비밀번호 변경은 관리자에게 문의해주세요.">
            ********
          </ItemList.Item>
          <ItemList.Item label="가입일">
            {formatTemplates['(2024년)? 2월 3일, 오후 10:23'](user.createdAt)}
          </ItemList.Item>
        </ItemList.Body>
      </ItemList>
    </div>
  );
};
