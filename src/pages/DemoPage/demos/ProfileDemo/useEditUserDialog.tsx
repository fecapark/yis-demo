import type { UserType } from '@/pages/DemoPage/type';

import { useAlertDialog } from '@/hooks/useAlertDialog';
import { ProfileEditDialogForm } from '@/pages/DemoPage/demos/ProfileDemo/ProfileEditDialogForm';

interface UseEditUserDialog {
  onUserChange: (user: UserType) => void;
  type: 'me' | 'other';
  user: UserType;
}

export const useEditUserDialog = ({ type, user, onUserChange }: UseEditUserDialog) => {
  const openEditAlertDialog = useAlertDialog();

  return async () => {
    const res = await openEditAlertDialog({
      title: `${type === 'me' ? '내' : '사용자'} 정보 수정`,
      closeButton: true,
      content: ({ closeAsTrue }) => {
        return (
          <ProfileEditDialogForm
            closeDialog={closeAsTrue}
            onUserChange={onUserChange}
            type={type}
            user={user}
          />
        );
      },
    });
    return res;
  };
};
