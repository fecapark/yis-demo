import type { ApplicationType, FullDeployment } from '@/pages/DemoPage/type';

import { Button } from '@/components/Button';
import { useAlertDialog } from '@/hooks/useAlertDialog';
import { ApplicationDeploymentDetailEditForm } from '@/pages/DemoPage/demos/DeploymentEditDemo/ApplicationDeploymentDetailEditForm';

export const DeploymentEditDemo = () => {
  const openEditDialog = useAlertDialog();

  const onClick = () => {
    openEditDialog({
      title: '배포 수정',
      closeButton: true,
      closeableWithOutside: false,
      content: ({ closeAsTrue }) => (
        <ApplicationDeploymentDetailEditForm
          closeDialog={closeAsTrue}
          defaultValue={{
            domainName: deployment.domainName,
            imageUrl: deployment.imageUrl,
            port: deployment.port,
            cpuRequests: deployment.cpuRequests,
            cpuLimits: deployment.cpuLimits,
            memoryRequests: deployment.memoryRequests,
            memoryLimits: deployment.memoryLimits,
          }}
        />
      ),
    });
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="text-neutralMuted font-medium">
        배포된 내역을 수정하는 다이얼로그 데모예요. <br />
        <br />
        하단의 버튼을 눌러 폼을 작성해볼 수 있어요.
      </div>

      <div>
        <Button onClick={onClick} size="md" variant="primary">
          수정하기
        </Button>
      </div>
    </div>
  );
};

const application: ApplicationType = {
  id: 1,
  name: 'test',
  description: 'test',
  createdAt: new Date().toISOString(),
  deletedAt: null,
  appliedDeploymentId: 1,
  updatedAt: new Date().toISOString(),
  user: {
    avatarId: 2,
    part: 'Frontend',
    password: '',
    nickname: 'test',
    email: 'test',
    role: 'ADMIN',
    createdAt: new Date().toISOString(),
  },
};

const deployment: FullDeployment = {
  id: 1,
  adminId: 1,
  applicationId: 1,
  comment: 'test',
  cpuLimits: '250m',
  cpuRequests: '250m',
  createdAt: new Date().toISOString(),
  deletedAt: null,
  memoryLimits: '32Mi',
  memoryRequests: '32Mi',
  port: 80,
  state: 'REQUEST',
  updatedAt: new Date().toISOString(),
  application,
  domainName: 'test.example.com',
  imageUrl: 'test-image-url:latest',
  isApplied: false,
  replicas: 1,
  userId: 1,
  message: null,
};
