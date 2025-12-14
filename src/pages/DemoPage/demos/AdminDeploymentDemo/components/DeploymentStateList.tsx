import { Lottie } from '@toss/lottie';
import { useState } from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';

import type { FullDeployment } from '@/pages/DemoPage/type';

import { DetailList } from '@/components/DetailList';
import { ProfileAvatar } from '@/components/ProfileAvatar';
import {
  DeploymentStateKRNameMap,
  type DeploymentStateNames,
} from '@/pages/ComponentsPage/documents/DetailListComponents/type';
import { DeploymentStateListDetail } from '@/pages/DemoPage/demos/AdminDeploymentDemo/components/DeploymentStateListDetail';

interface DeploymentStateListProps {
  setActiveDeploymentId: (id: string | undefined) => void;
  state: DeploymentStateNames;
}

export const DeploymentStateList = ({ state, setActiveDeploymentId }: DeploymentStateListProps) => {
  const [deployments, setDeployments] = useState(defaultDeployments);

  const currentDeployments = deployments.filter((deployment) => deployment.state === state);

  return (
    <DetailList>
      <DetailList.List>
        {currentDeployments.length ? (
          currentDeployments.map((deployment) => (
            <DetailList.ListItem
              description={deployment.application.description}
              footer={<MdKeyboardArrowRight className="size-5" />}
              header={
                <div className="flex w-8 flex-col items-center gap-1">
                  <ProfileAvatar
                    avatarId={deployment.application.user.avatarId}
                    rounded
                    size={28}
                  />
                  <div className="text-neutralMuted text-xs font-semibold">
                    {deployment.application.user.nickname}
                  </div>
                </div>
              }
              id={deployment.id}
              key={deployment.id}
              onClick={({ close }) => {
                setActiveDeploymentId(close ? deployment.id.toString() : undefined);
              }}
              text={deployment.application.name}
            />
          ))
        ) : (
          <div className="mx-auto flex flex-col items-center gap-6 pt-10">
            <Lottie autoPlay className="size-14" src="/lotties/empty-list.lottie.json" />
            <div className="text-neutralSubtle text-sm font-semibold">
              {DeploymentStateKRNameMap[state]}된 내역이 없어요
            </div>
          </div>
        )}
      </DetailList.List>
      <DetailList.Detail>
        {({ id }) => {
          const deployment = currentDeployments.find((v) => v.id === id);
          if (!deployment) {
            return undefined;
          }
          return (
            <DeploymentStateListDetail
              application={deployment.application}
              deployment={deployment}
              onChange={({ state, comment }) => {
                setDeployments((prev) =>
                  prev.map((deployment) =>
                    deployment.id === id ? { ...deployment, state, comment } : deployment,
                  ),
                );
              }}
              state={state}
            />
          );
        }}
      </DetailList.Detail>
    </DetailList>
  );
};

const defaultDeployments: FullDeployment[] = [
  {
    domainName: 'test.deployment.com',
    cpuRequests: '250m',
    memoryRequests: '256Mi',
    cpuLimits: '500m',
    memoryLimits: '256Mi',
    port: 80,
    imageUrl: 'test-backend',
    replicas: 1,
    message: '',
    id: 74,
    applicationId: 113,
    comment: null,
    isApplied: false,
    state: 'REQUEST',
    userId: 32,
    adminId: null,
    createdAt: '2025-08-12T23:49:11',
    updatedAt: '2025-08-12T23:49:11',
    deletedAt: null,
    application: {
      description: '테스트 백엔드 서버',
      id: 113,
      name: 'test-backend',
      user: {
        email: 'cast@gmail.com',
        nickname: 'Cast',
        part: 'Android',
        avatarId: 9,
        createdAt: '2025-07-18T03:33:47',
        password: '',
        role: 'USER',
      },
      appliedDeploymentId: null,
      createdAt: '2025-07-18T03:33:47',
      updatedAt: '2025-07-18T03:33:47',
      deletedAt: null,
    },
  },
  {
    domainName: 'test2.yourssu.com',
    cpuRequests: '100m',
    memoryRequests: '32Mi',
    cpuLimits: '250m',
    memoryLimits: '64Mi',
    port: 80,
    imageUrl: 'test2-backend',
    replicas: 1,
    message: '이렇게 올리면 될까요?',
    id: 73,
    applicationId: 115,
    comment: '네 이렇게 올려주시면 돼요!',
    isApplied: true,
    state: 'APPROVAL',
    userId: 34,
    adminId: 1,
    createdAt: '2025-08-07T02:27:21',
    updatedAt: '2025-08-07T02:28:58',
    deletedAt: null,
    application: {
      description: '시연용',
      id: 115,
      name: 'backend0807',
      user: {
        email: 'mastgmail.com',
        nickname: 'Mask',
        part: 'Backend',
        avatarId: 2,
        createdAt: '2025-08-07T02:27:21',
        password: '',
        role: 'USER',
      },
      appliedDeploymentId: null,
      createdAt: '2025-08-07T02:27:21',
      updatedAt: '2025-08-07T02:27:21',
      deletedAt: null,
    },
  },
  {
    domainName: 'test.yourssu.com',
    cpuRequests: '250m',
    memoryRequests: '256Mi',
    cpuLimits: '500m',
    memoryLimits: '256Mi',
    port: 80,
    imageUrl: 'test-backend',
    replicas: 1,
    message: '',
    id: 72,
    applicationId: 113,
    comment: null,
    isApplied: true,
    state: 'APPROVAL',
    userId: 32,
    adminId: 1,
    createdAt: '2025-07-22T23:44:35',
    updatedAt: '2025-08-07T01:58:52',
    deletedAt: null,
    application: {
      description: '테스트 백엔드 서버',
      id: 113,
      name: 'test-backend',
      user: {
        email: 'cast@gmail.com',
        nickname: 'Cast',
        part: 'Android',
        avatarId: 9,
        createdAt: '2025-07-18T03:33:47',
        password: '',
        role: 'USER',
      },
      appliedDeploymentId: null,
      createdAt: '2025-07-18T03:33:47',
      updatedAt: '2025-07-18T03:33:47',
      deletedAt: null,
    },
  },
  {
    domainName: 'service.com',
    cpuRequests: '500m',
    memoryRequests: '1Gi',
    cpuLimits: '1',
    memoryLimits: '1Gi',
    port: 8080,
    imageUrl: 'service-backend',
    replicas: 1,
    message: '빌드 시간대 잘못 설정한거 있어서 다시 했어유',
    id: 69,
    applicationId: 112,
    comment: '확인했습니다!',
    isApplied: true,
    state: 'APPROVAL',
    userId: 27,
    adminId: 1,
    createdAt: '2025-07-02T05:02:22',
    updatedAt: '2025-07-21T19:27:33',
    deletedAt: null,
    application: {
      description: '서비스 백엔드',
      id: 112,
      name: 'service',
      user: {
        email: 'park@gmail.com',
        nickname: 'Park',
        part: 'Backend',
        avatarId: 4,
        createdAt: '2025-06-18T00:31:15',
        password: '',
        role: 'USER',
      },
      appliedDeploymentId: null,
      createdAt: '2025-06-18T00:31:15',
      updatedAt: '2025-06-18T00:31:15',
      deletedAt: null,
    },
  },
];
