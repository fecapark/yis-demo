import { Button } from '@/components/Button';
import { useCreateApplicationFunnelDialog } from '@/hooks/useCreateApplicationFunnelDialog';

export const DeploymentFunnelDemo = () => {
  const openCreateApplicationFunnelDialog = useCreateApplicationFunnelDialog();
  return (
    <div className="flex flex-col gap-8">
      <div className="text-neutralMuted font-medium">
        새로운 배포를 요청하는 퍼널 다이얼로그 데모예요. 닫으려하면 중첩 다이얼로그가 나타나요.
        <br />
        <br />
        하단의 버튼을 눌러 체험해볼 수 있어요.
      </div>
      <div>
        <Button onClick={openCreateApplicationFunnelDialog} size="md" variant="primary">
          배포 다이얼로그 열기
        </Button>
      </div>
    </div>
  );
};
