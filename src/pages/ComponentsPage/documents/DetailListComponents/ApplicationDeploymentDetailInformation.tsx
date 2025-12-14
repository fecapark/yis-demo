import {
  DeploymentStateKRNameMap,
  type DeploymentType,
} from '@/pages/ComponentsPage/documents/DetailListComponents/type';
import { formatTemplates } from '@/utils/date';

interface ApplicationDeploymentDetailProps {
  deployment: DeploymentType;
}

export const ApplicationDeploymentDetailInformation = ({
  deployment,
}: ApplicationDeploymentDetailProps) => {
  const listPairs = [
    {
      label: '배포 ID',
      value: deployment.id,
    },
    {
      label: `${DeploymentStateKRNameMap[deployment.state]} 시각`,
      value: formatTemplates['(2024년)? 2월 3일, 오후 10:23'](deployment.updatedAt),
    },
    {
      label: '도메인',
      value: deployment.domainName,
    },
    {
      label: '포트 번호',
      value: deployment.port,
    },
    {
      label: '도커 이미지 주소',
      value: deployment.imageUrl,
    },
    {
      label: 'CPU Request / Limit',
      value: `${deployment.cpuRequests} / ${deployment.cpuLimits}`,
    },
    {
      label: 'Memory Request / Limit',
      value: `${deployment.memoryRequests} / ${deployment.memoryLimits}`,
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      {listPairs.map(({ label, value }) => (
        <div className="flex items-center justify-between text-sm" key={label}>
          <div className="text-neutralMuted">{label}</div>
          <div>{value}</div>
        </div>
      ))}
    </div>
  );
};
