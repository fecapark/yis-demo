import { useInputState } from 'react-simplikit';

import type { DeploymentStateNames } from '@/pages/ComponentsPage/documents/DetailListComponents/type';

import { Button } from '@/components/Button';
import { TextInput } from '@/components/TextInput/TextInput';
import { useToast } from '@/hooks/useToast';

interface DeploymentStateListDetailFooterProps {
  deploymentId: number;
  onChange: ({ state, comment }: { comment: string; state: DeploymentStateNames }) => void;
}

export const DeploymentStateListDetailFooter = ({
  onChange,
}: DeploymentStateListDetailFooterProps) => {
  const [comment, setComment] = useInputState('');

  const toast = useToast();

  const onClickApprove = async () => {
    toast.success('검토 결과를 보냈어요');
    onChange({ state: 'APPROVAL', comment });
  };

  const onClickReject = async () => {
    toast.success('검토 결과를 보냈어요');
    onChange({ state: 'RETURN', comment });
  };

  return (
    <div className="flex flex-col gap-3">
      <TextInput
        onChange={setComment}
        placeholder="작성할 코멘트가 있다면 작성해주세요..."
        value={comment}
      />
      <div className="grid grid-cols-2 gap-2">
        <Button onClick={onClickReject} size="lg" variant="secondary">
          거부
        </Button>
        <Button onClick={onClickApprove} size="lg" variant="primary">
          승인
        </Button>
      </div>
    </div>
  );
};
