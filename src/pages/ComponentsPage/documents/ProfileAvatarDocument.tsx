import { ProfileAvatar } from '@/components/ProfileAvatar';

import {
  CodeBlock,
  DocumentBlock,
  DocumentPage,
  DocumentSection,
  PropsTable,
} from '../components/DocumentLayout';

export const ProfileAvatarDocument = () => {
  return (
    <DocumentPage>
      <div>
        사용자 프로필 아바타를 표시하는 컴포넌트예요. avatarId에 따라 12가지 미리 정의된 프로필
        이미지를 보여줘요.
      </div>

      <DocumentSection title="인터페이스">
        <CodeBlock>
          {`interface ProfileAvatarProps extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'alt' | 'src'> {
  avatarId: number;
  containerClassName?: string;
  rounded?: boolean;
  size?: 'full' | number;
}`}
        </CodeBlock>
      </DocumentSection>

      <DocumentSection title="파라미터">
        <PropsTable
          props={[
            {
              name: 'avatarId',
              required: true,
              type: 'number',
              description:
                '아바타 이미지를 결정하는 ID예요. 12개의 이미지 중 하나가 선택돼요 (avatarId % 12 + 1).',
            },
            {
              name: 'size',
              required: false,
              type: "'full' | number",
              description: "아바타의 크기예요. 숫자(px) 또는 'full'로 지정해요.",
            },
            {
              name: 'rounded',
              required: false,
              type: 'boolean',
              description: '원형으로 표시할지 여부예요.',
            },
            {
              name: 'containerClassName',
              required: false,
              type: 'string',
              description: '컨테이너에 적용할 추가 클래스예요.',
            },
          ]}
        />
      </DocumentSection>

      <DocumentSection title="예시">
        <DocumentBlock className="flex-row">
          <ProfileAvatar avatarId={1} />
          <ProfileAvatar avatarId={2} />
          <ProfileAvatar avatarId={3} size={48} />
        </DocumentBlock>
        <CodeBlock>
          {`<ProfileAvatar avatarId={1} />
<ProfileAvatar avatarId={2} />
<ProfileAvatar avatarId={3} size={48} />`}
        </CodeBlock>
      </DocumentSection>
    </DocumentPage>
  );
};
