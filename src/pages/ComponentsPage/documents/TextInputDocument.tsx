import { useState } from 'react';

import { TextInput } from '@/components/TextInput/TextInput';

import {
  CodeBlock,
  DocumentBlock,
  DocumentPage,
  DocumentSection,
  PropsTable,
} from '../components/DocumentLayout';

export const TextInputDocument = () => {
  const [value, setValue] = useState('');

  return (
    <DocumentPage>
      <div>사용자 입력을 받기 위한 텍스트 입력 컴포넌트예요.</div>

      <DocumentSection title="인터페이스">
        <CodeBlock>
          {`interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  description?: string;
  invalid?: boolean;
  label?: string;
}`}
        </CodeBlock>
      </DocumentSection>

      <DocumentSection title="파라미터">
        <PropsTable
          props={[
            {
              name: 'description',
              required: false,
              type: 'string',
              description: '입력 필드 아래 표시될 설명 텍스트예요.',
            },
            {
              name: 'invalid',
              required: false,
              type: 'boolean',
              description: '유효하지 않은 상태를 표시해요. 테두리가 빨간색으로 바뀌어요.',
            },
            {
              name: 'label',
              required: false,
              type: 'string',
              description: '입력 필드의 라벨이에요.',
            },
          ]}
        />
      </DocumentSection>

      <DocumentSection title="예시">
        <DocumentSection>
          <DocumentBlock className="max-w-md">
            <TextInput placeholder="아무 텍스트를 입력하세요" />
          </DocumentBlock>
          <CodeBlock>{`<TextInput placeholder="아무 텍스트를 입력하세요" />`}</CodeBlock>
        </DocumentSection>

        <DocumentSection title="Label & Description">
          <DocumentBlock className="max-w-md">
            <TextInput
              description="10자 이내로 입력해주세요"
              invalid={value.length > 10}
              label="이름"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
              placeholder="이름이 무엇인가요?"
              value={value}
            />
          </DocumentBlock>
          <CodeBlock>
            {`const [value, setValue] = useState('');

<TextInput
  label="이름"
  placeholder="이름이 무엇인가요?"
  description="10자 이내로 입력해주세요"
  value={value}
  onChange={(e) => setValue(e.target.value)}
  invalid={value.length > 10}
/>`}
          </CodeBlock>
        </DocumentSection>
      </DocumentSection>
    </DocumentPage>
  );
};
