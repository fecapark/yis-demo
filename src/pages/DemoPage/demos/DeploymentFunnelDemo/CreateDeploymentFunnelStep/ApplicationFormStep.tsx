import type { ChangeEvent } from 'react';

import { useInputState } from 'react-simplikit';
import { z } from 'zod/v4';

import type {
  ApplicationConfirmedContext,
  ApplicationContext,
} from '@/pages/DemoPage/demos/DeploymentFunnelDemo/CreateDeploymentFunnelStep/type';

import { Dialog } from '@/components/Dialog';
import { TextInput } from '@/components/TextInput/TextInput';
import { useZodFormValidation } from '@/hooks/useZodFormValidation';
import { regexes } from '@/utils/regex';

interface ApplicationFormProps {
  initialValue?: ApplicationContext;
  onNext: (c: ApplicationConfirmedContext) => void;
}

export const ApplicationFormStep = ({ initialValue, onNext }: ApplicationFormProps) => {
  const [name, setName] = useInputState(initialValue?.name ?? '');
  const [description, setDescription] = useInputState(initialValue?.description ?? '');

  const { invalidMessage, invalidTexts, validate, onChangeWithReset } = useZodFormValidation(
    { name, description },
    ApplicationFormSchema,
  );

  const onClick = async () => {
    if (!validate().success) {
      return;
    }

    onNext({
      name,
      description,
    });
  };

  return (
    <>
      <Dialog.Content className="h-[440px] w-[500px]">
        <div className="flex flex-col gap-6 pb-8">
          <TextInput
            description="서비스 이름은 고유해야해요."
            invalid={!!invalidTexts.name}
            onChange={onChangeWithReset(setName)}
            placeholder="서비스 이름"
            value={name}
          />
          <TextInput
            invalid={!!invalidTexts.description}
            onChange={setDescription}
            placeholder="서비스 설명 (선택)"
            value={description}
          />
          {!!invalidMessage && (
            <div className="text-negative text-center text-sm whitespace-pre-wrap">
              {invalidMessage}
            </div>
          )}
        </div>
      </Dialog.Content>
      <Dialog.ButtonGroup>
        <div className="flex w-full items-center justify-between">
          <Dialog.Button
            className="justify-self-end"
            onClick={() => {
              setName({
                target: { value: 'test-service' },
              } as ChangeEvent<HTMLInputElement>);
              setDescription({
                target: { value: '테스트 서비스예요.' },
              } as ChangeEvent<HTMLInputElement>);
            }}
            variant="secondary"
          >
            데이터 채우기
          </Dialog.Button>
          <div className="flex items-center gap-3">
            <Dialog.Button disabled={name.length === 0} onClick={onClick} variant="primary">
              다음
            </Dialog.Button>
          </div>
        </div>
      </Dialog.ButtonGroup>
    </>
  );
};

const ApplicationFormSchema = z.object({
  name: z
    .string()
    .min(1, { message: '서비스 이름을 입력해주세요.' })
    .regex(regexes.applicationName, {
      message:
        '서비스 이름은 영어 소문자로 시작하고,\n영어 소문자, 숫자, 하이픈(-)만 사용할 수 있어요.',
    }),
  description: z.string().optional(),
});
