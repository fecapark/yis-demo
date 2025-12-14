import { Label } from '@/components/Label';

import {
  CodeBlock,
  DocumentBlock,
  DocumentPage,
  DocumentSection,
  PropsTable,
} from '../components/DocumentLayout';

export const LabelDocument = () => {
  return (
    <DocumentPage>
      <div>폼 필드에 라벨을 붙일 때 사용하는 컴포넌트예요.</div>

      <DocumentSection title="인터페이스">
        <CodeBlock>
          {`interface LabelProps {
  children: React.ReactNode;
  content: string;
}`}
        </CodeBlock>
      </DocumentSection>

      <DocumentSection title="파라미터">
        <PropsTable
          props={[
            {
              name: 'content',
              required: true,
              type: 'string',
              description: '라벨에 표시될 텍스트예요.',
            },
            {
              name: 'children',
              required: false,
              type: 'React.ReactNode',
              description: '라벨 아래에 표시될 폼 요소예요.',
            },
          ]}
        />
      </DocumentSection>

      <DocumentSection title="예시">
        <DocumentBlock>
          <Label content="Email Address">
            <div className="border-grey300 text-grey400 rounded border p-2">
              Input field placeholder
            </div>
          </Label>
        </DocumentBlock>
        <CodeBlock>
          {`<Label content="Email Address">
  <input type="email" placeholder="Enter your email" />
</Label>`}
        </CodeBlock>
      </DocumentSection>
    </DocumentPage>
  );
};
