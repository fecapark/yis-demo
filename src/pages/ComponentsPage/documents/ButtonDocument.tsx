import { Button } from '@/components/Button';

import {
  CodeBlock,
  DocumentBlock,
  DocumentPage,
  DocumentSection,
  PropsTable,
} from '../components/DocumentLayout';

export const ButtonDocument = () => {
  return (
    <DocumentPage>
      <div>기본 버튼 컴포넌트예요. 클릭 이벤트를 처리하는 UI 요소로 사용해요.</div>

      <DocumentSection title="인터페이스">
        <CodeBlock>
          {`interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size: 'lg' | 'md' | 'sm';
  variant: 'primary' | 'secondary' | 'subPrimary' | 'transparent';
}`}
        </CodeBlock>
      </DocumentSection>

      <DocumentSection title="파라미터">
        <PropsTable
          props={[
            {
              name: 'size',
              required: true,
              type: "'lg' | 'md' | 'sm'",
              description: '버튼의 크기를 지정해요.',
            },
            {
              name: 'variant',
              required: true,
              type: "'primary' | 'secondary' | 'subPrimary' | 'transparent'",
              description: '버튼의 스타일 변형을 지정해요.',
            },
          ]}
        />
      </DocumentSection>

      <DocumentSection title="예시">
        <DocumentSection title="Variants">
          <DocumentBlock className="flex-row flex-wrap">
            <Button size="md" variant="primary">
              Primary
            </Button>
            <Button size="md" variant="secondary">
              Secondary
            </Button>
            <Button size="md" variant="subPrimary">
              SubPrimary
            </Button>
            <Button size="md" variant="transparent">
              Transparent
            </Button>
          </DocumentBlock>
          <CodeBlock>
            {`<Button size="md" variant="primary">Primary</Button>
<Button size="md" variant="secondary">Secondary</Button>
<Button size="md" variant="subPrimary">SubPrimary</Button>
<Button size="md" variant="transparent">Transparent</Button>`}
          </CodeBlock>
        </DocumentSection>

        <DocumentSection title="Sizes">
          <DocumentBlock className="flex-row flex-wrap items-center">
            <Button size="sm" variant="primary">
              Small
            </Button>
            <Button size="md" variant="primary">
              Medium
            </Button>
            <Button size="lg" variant="primary">
              Large
            </Button>
          </DocumentBlock>
          <CodeBlock>
            {`<Button size="sm" variant="primary">Small</Button>
<Button size="md" variant="primary">Medium</Button>
<Button size="lg" variant="primary">Large</Button>`}
          </CodeBlock>
        </DocumentSection>

        <DocumentSection title="Disabled">
          <DocumentBlock className="flex-row flex-wrap">
            <Button disabled size="md" variant="primary">
              Primary
            </Button>
            <Button disabled size="md" variant="secondary">
              Secondary
            </Button>
            <Button disabled size="md" variant="subPrimary">
              SubPrimary
            </Button>
            <Button disabled size="md" variant="transparent">
              Transparent
            </Button>
          </DocumentBlock>
          <CodeBlock>
            {`<Button disabled size="md" variant="primary">Primary</Button>
<Button disabled size="md" variant="secondary">Secondary</Button>
<Button disabled size="md" variant="subPrimary">SubPrimary</Button>
<Button disabled size="md" variant="transparent">Transparent</Button>`}
          </CodeBlock>
        </DocumentSection>
      </DocumentSection>
    </DocumentPage>
  );
};
