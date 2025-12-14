import { IoMdTrash } from 'react-icons/io';

import { Dialog } from '@/components/Dialog';
import { Menu } from '@/components/Menu';
import { useAlertDialog } from '@/hooks/useAlertDialog';
import { useToast } from '@/hooks/useToast';

interface UserDeleteMenuButtonProps {
  onDelete: () => void;
}

export const UserDeleteMenuButton = ({ onDelete }: UserDeleteMenuButtonProps) => {
  const openDeleteConfirmAlertDialog = useAlertDialog();
  const toast = useToast();

  const onClickDeleteUser = async () => {
    const res = await openDeleteConfirmAlertDialog({
      title: '정말 사용자를 삭제할까요?',
      closeButton: true,
      closeableWithOutside: false,
      content: ({ closeAsTrue, closeAsFalse }) => (
        <>
          <Dialog.Content className="w-90">사용자를 삭제한 후에는 되돌릴 수 없어요.</Dialog.Content>
          <Dialog.ButtonGroup>
            <Dialog.Button onClick={closeAsFalse} variant="secondary">
              취소
            </Dialog.Button>
            <Dialog.Button onClick={closeAsTrue} variant="primary">
              삭제하기
            </Dialog.Button>
          </Dialog.ButtonGroup>
        </>
      ),
    });

    if (res) {
      toast.success('사용자를 삭제했어요.');
      onDelete();
    }
  };

  return (
    <Menu.ButtonItem
      className="flex items-center gap-2.5 rounded-md px-3 py-2 font-medium"
      onClick={onClickDeleteUser}
    >
      <IoMdTrash className="text-red500 size-4.5" />
      삭제하기
    </Menu.ButtonItem>
  );
};
