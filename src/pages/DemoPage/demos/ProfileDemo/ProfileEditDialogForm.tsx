import { isEqual, range } from 'es-toolkit';
import { useState } from 'react';
import { useInputState } from 'react-simplikit';
import { z } from 'zod/v4';

import { Dialog } from '@/components/Dialog';
import { Label } from '@/components/Label';
import { ProfileAvatar } from '@/components/ProfileAvatar';
import { Select } from '@/components/Select';
import { TextInput } from '@/components/TextInput/TextInput';
import { useToast } from '@/hooks/useToast';
import { PartNames, type UserType } from '@/pages/DemoPage/type';
import { checkParsedError } from '@/utils/zod';

interface ProfileEditDialogFormProps {
  closeDialog: () => void;
  onUserChange: (user: UserType) => void;
  type: 'me' | 'other';
  user: UserType;
}

export const ProfileEditDialogForm = ({
  closeDialog,
  onUserChange,
  type,
  user,
}: ProfileEditDialogFormProps) => {
  const [nickname, setNickname] = useInputState(user.nickname);
  const [email, setEmail] = useInputState(user.email);
  const [part, setPart] = useState<PartNames>(user.part);
  const [avatarId, setAvatarId] = useState(user.avatarId);
  const inputData = {
    nickname,
    email,
    part,
    avatarId,
  };

  const toast = useToast();

  const isSameAsDefault = isEqual(
    {
      nickname: user.nickname,
      email: user.email,
      part: user.part,
      avatarId: user.avatarId,
    },
    inputData,
  );
  const { error } = ProfileEditDialogFormSchema.safeParse(inputData);

  const onSubmit = async () => {
    if (error) {
      return;
    }

    onUserChange({
      ...user,
      nickname,
      email,
      part,
      avatarId,
    });
    toast.success(`${type === 'me' ? '내' : '사용자'} 정보를 수정했어요.`);
    closeDialog();
  };

  return (
    <>
      <Dialog.Content>
        <div className="flex w-[500px] flex-col gap-3 pt-2.5 pb-4">
          <Label content="프로필 사진">
            <div className="flex items-center justify-center gap-10">
              <div className="size-20 overflow-hidden rounded-full">
                <ProfileAvatar avatarId={avatarId} draggable={false} rounded size={80} />
              </div>
              <div className="grid grid-cols-[repeat(4,44px)] gap-2">
                {range(12).map((id) => (
                  <div
                    className={`size-11 cursor-pointer overflow-hidden rounded-full border-2 p-1 ${
                      avatarId === id ? 'border-brandPrimary' : 'border-transparent'
                    }`}
                    key={id}
                    onClick={() => setAvatarId(id)}
                  >
                    <ProfileAvatar avatarId={id} draggable={false} rounded size="full" />
                  </div>
                ))}
              </div>
            </div>
          </Label>
          <TextInput
            invalid={checkParsedError(error, 'nickname')}
            label="닉네임"
            onChange={setNickname}
            placeholder="닉네임"
            value={nickname}
          />
          <TextInput
            invalid={checkParsedError(error, 'email')}
            label="이메일"
            onChange={setEmail}
            placeholder="이메일"
            value={email}
          />
          <Label content="소속 파트">
            <Select
              invalid={checkParsedError(error, 'part')}
              items={PartNames}
              onValueChange={setPart}
              placeholder="소속 파트"
              value={part}
              viewPortBackground="grey200"
            />
          </Label>
        </div>
      </Dialog.Content>
      <Dialog.ButtonGroup>
        <Dialog.Button disabled={isSameAsDefault || !!error} onClick={onSubmit} variant="primary">
          수정
        </Dialog.Button>
      </Dialog.ButtonGroup>
    </>
  );
};

const ProfileEditDialogFormSchema = z.object({
  nickname: z.string().min(1),
  email: z.email(),
  part: z.enum(PartNames),
  avatarId: z.number(),
});
