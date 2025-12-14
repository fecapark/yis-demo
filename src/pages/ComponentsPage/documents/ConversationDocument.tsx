import { addMinutes } from 'date-fns';

import { Conversation } from '@/components/Conversation';

import {
  CodeBlock,
  DocumentBlock,
  DocumentPage,
  DocumentSection,
  PropsTable,
} from '../components/DocumentLayout';

export const ConversationDocument = () => {
  return (
    <DocumentPage>
      <div>
        대화 내역을 보여줄 때 사용해요. 프로필 아바타, 닉네임, 메시지, 시간 정보를 표시해요.
      </div>

      <DocumentSection title="인터페이스">
        <CodeBlock>
          {`interface ConversationProps {
  at?: DateArg<Date>;
  message: string | undefined;
  profileLabel?: React.ReactNode;
  user: {
    avatarId: number;
    nickname: string;
  };
}`}
        </CodeBlock>
      </DocumentSection>

      <DocumentSection title="파라미터">
        <PropsTable
          props={[
            {
              name: 'user',
              required: true,
              type: '{ avatarId: number; nickname: string }',
              description: '사용자 정보예요. 아바타 ID와 닉네임을 포함해요.',
            },
            {
              name: 'message',
              required: true,
              type: 'string | undefined',
              description: '대화 메시지예요. undefined인 경우 "-"로 표시돼요.',
            },
            {
              name: 'at',
              required: false,
              type: 'DateArg<Date>',
              description: '메시지 작성 시간이에요. 상대적인 한국어 시간으로 표시돼요.',
            },
            {
              name: 'profileLabel',
              required: false,
              type: 'React.ReactNode',
              description: '프로필 아바타 아래에 표시할 라벨이에요.',
            },
          ]}
        />
      </DocumentSection>

      <DocumentSection title="예시">
        <DocumentBlock className="overflow-hidden p-0">
          <div className="flex flex-col gap-6 p-6">
            <Conversation
              at={addMinutes(new Date(), -10)}
              message="도움이 필요해요."
              profileLabel="나"
              user={{ avatarId: 2, nickname: 'fecapark' }}
            />
            <Conversation
              at={new Date()}
              message="안녕하세요! 어떻게 도와드릴까요?"
              user={{ avatarId: 1, nickname: '관리자' }}
            />
          </div>
        </DocumentBlock>
        <CodeBlock>
          {`<Conversation
  user={{ avatarId: 2, nickname: 'fecapark' }}
  message="도움이 필요해요."
  at={addMinutes(new Date(), -10)}
  profileLabel="나"
/>
<Conversation
  user={{ avatarId: 1, nickname: '관리자' }}
  message="안녕하세요! 어떻게 도와드릴까요?"
  at={new Date()}
/>`}
        </CodeBlock>
      </DocumentSection>
    </DocumentPage>
  );
};
