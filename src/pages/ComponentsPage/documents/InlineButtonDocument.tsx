import { InlineButton } from '@/components/InlineButton';

import {
  CodeBlock,
  DocumentBlock,
  DocumentPage,
  DocumentSection,
  PropsTable,
} from '../components/DocumentLayout';

export const InlineButtonDocument = () => {
  return (
    <DocumentPage>
      <div>
        인라인 버튼 컴포넌트예요. 텍스트 사이에 자연스럽게 배치되는 가벼운 버튼이 필요할 때
        사용해요.
      </div>

      <DocumentSection title="인터페이스">
        <CodeBlock>
          {`interface InlineButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}`}
        </CodeBlock>
      </DocumentSection>

      <DocumentSection title="파라미터">
        <PropsTable
          props={[
            {
              name: 'asChild',
              required: false,
              type: 'boolean',
              description: 'true인 경우 자식 요소를 버튼으로 렌더링해요.',
            },
          ]}
        />
      </DocumentSection>

      <DocumentSection title="예시">
        <DocumentBlock className="flex-row items-center gap-4">
          <InlineButton>더 보기</InlineButton>
          <InlineButton disabled>비활성화</InlineButton>
        </DocumentBlock>
        <CodeBlock>
          {`<InlineButton>더 보기</InlineButton>
<InlineButton disabled>비활성화</InlineButton>`}
        </CodeBlock>
      </DocumentSection>
    </DocumentPage>
  );
};
