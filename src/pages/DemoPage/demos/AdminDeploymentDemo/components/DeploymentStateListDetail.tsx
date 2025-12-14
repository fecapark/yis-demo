import { Suspense } from 'react';

import type {
  DeploymentStateNames,
  DeploymentType,
} from '@/pages/ComponentsPage/documents/DetailListComponents/type';
import type { ApplicationType } from '@/pages/DemoPage/type';

import { Divider } from '@/components/Divider';
import { DeploymentStateListDetailConversation } from '@/pages/DemoPage/demos/AdminDeploymentDemo/components/DeploymentStateListDetailConversation';
import { DeploymentStateListDetailFooter } from '@/pages/DemoPage/demos/AdminDeploymentDemo/components/DeploymentStateListDetailFooter';
import { DeploymentStateListDetailHeader } from '@/pages/DemoPage/demos/AdminDeploymentDemo/components/DeploymentStateListDetailHeader';
import { DeploymentStateListDetailInformation } from '@/pages/DemoPage/demos/AdminDeploymentDemo/components/DeploymentStateListDetailInformation';
interface DeploymentStateListDetailProps {
  application: ApplicationType;
  deployment: DeploymentType;
  onChange: ({ state, comment }: { comment: string; state: DeploymentStateNames }) => void;
  state: DeploymentStateNames;
}

export const DeploymentStateListDetail = ({
  deployment,
  application,
  state,
  onChange,
}: DeploymentStateListDetailProps) => {
  return (
    <div className="flex flex-col gap-5">
      <DeploymentStateListDetailHeader application={application} />
      <DeploymentStateListDetailInformation deployment={deployment} state={state} />
      <Divider />
      <Suspense>
        <DeploymentStateListDetailConversation
          application={application}
          deployment={deployment}
          state={state}
        />
      </Suspense>
      {state === 'REQUEST' && (
        <DeploymentStateListDetailFooter deploymentId={deployment.id} onChange={onChange} />
      )}
    </div>
  );
};
