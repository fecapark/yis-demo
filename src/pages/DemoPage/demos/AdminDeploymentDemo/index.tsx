import { DeploymentStateTable } from '@/pages/DemoPage/demos/AdminDeploymentDemo/components/DeploymentStateTable';

export const AdminDeploymentDemo = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="text-neutralMuted font-medium">
        하단의 배포 요청을 승인 또는 거절해볼 수 있어요.
      </div>
      <DeploymentStateTable />
    </div>
  );
};
