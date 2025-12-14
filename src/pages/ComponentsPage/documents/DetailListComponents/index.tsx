import type { DeploymentType } from '@/pages/ComponentsPage/documents/DetailListComponents/type';

import { Divider } from '@/components/Divider';
import { ApplicationDeploymentDetailHeader } from '@/pages/ComponentsPage/documents/DetailListComponents/ApplicationDeploymentDetailHeader';
import { ApplicationDeploymentDetailInformation } from '@/pages/ComponentsPage/documents/DetailListComponents/ApplicationDeploymentDetailInformation';
import { ApplicationDeploymentDetailRollbackButton } from '@/pages/ComponentsPage/documents/DetailListComponents/ApplicationDeploymentDetailRollbackButton';

interface ApplicationDeploymentDetailProps {
  deployment: DeploymentType;
  isRecentApproved: boolean;
}

export const ApplicationDeploymentDetail = ({
  deployment,
  isRecentApproved,
}: ApplicationDeploymentDetailProps) => {
  return (
    <div className="flex flex-col gap-5">
      <ApplicationDeploymentDetailHeader deployment={deployment} />
      <ApplicationDeploymentDetailInformation deployment={deployment} />
      <Divider />
      <ApplicationDeploymentDetailRollbackButton isRecentApproved={isRecentApproved} />
    </div>
  );
};
