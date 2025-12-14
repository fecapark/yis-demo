import clsx from 'clsx';
import { tv } from 'tailwind-variants';

import type { ApplicationType, UserType } from '@/pages/DemoPage/type';

import { Conversation } from '@/components/Conversation';
import {
  DeploymentStateKRNameMap,
  type DeploymentStateNames,
  type DeploymentType,
} from '@/pages/ComponentsPage/documents/DetailListComponents/type';

interface DeploymentStateListDetailConversationProps {
  application: ApplicationType;
  deployment: DeploymentType;
  state: DeploymentStateNames;
}

const conversationLabel = tv({
  variants: {
    type: {
      승인: 'text-green800',
      요청: 'text-yellow800',
      거절: 'text-red700',
    },
  },
});

export const DeploymentStateListDetailConversation = ({
  application,
  deployment,
  state,
}: DeploymentStateListDetailConversationProps) => {
  const admin: null | UserType = !deployment.comment
    ? null
    : {
        avatarId: 2,
        createdAt: '2025-08-07T01:58:52',
        email: 'admin@gmail.com',
        nickname: 'Admin',
        password: '',
        part: 'Frontend',
        role: 'ADMIN',
      };

  const getAdminConversationState = () => {
    return state === 'REQUEST'
      ? DeploymentStateKRNameMap['RETURN']
      : DeploymentStateKRNameMap[state];
  };

  return (
    <div className={clsx('flex gap-4', state === 'REQUEST' ? 'flex-col-reverse' : 'flex-col')}>
      <Conversation
        message={deployment.message ?? undefined}
        profileLabel={<span className={conversationLabel({ type: '요청' })}>요청</span>}
        user={{
          avatarId: application.user.avatarId,
          nickname: application.user.nickname,
        }}
      />
      {admin && (
        <Conversation
          message={deployment.comment ?? undefined}
          profileLabel={
            <span
              className={conversationLabel({
                type: getAdminConversationState(),
              })}
            >
              {getAdminConversationState()}
            </span>
          }
          user={{
            avatarId: admin.avatarId,
            nickname: admin.nickname,
          }}
        />
      )}
    </div>
  );
};
