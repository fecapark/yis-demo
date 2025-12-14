import { useState } from 'react';

import { Select } from '@/components/Select';

import {
  CodeBlock,
  DocumentBlock,
  DocumentPage,
  DocumentSection,
  PropsTable,
} from '../components/DocumentLayout';

export const SelectDocument = () => {
  const [value, setValue] = useState('');

  return (
    <DocumentPage>
      <div>
        옵션 목록에서 하나를 선택할 수 있는 셀렉트 컴포넌트예요. Radix UI Select를 기반으로
        만들어졌어요.
      </div>

      <DocumentSection title="인터페이스">
        <CodeBlock>
          {`interface SelectProps<TValue extends string> {
  className?: string;
  invalid?: boolean;
  items: Readonly<TValue[]>;
  onValueChange: (value: TValue) => void;
  placeholder: string;
  value: TValue | undefined;
  viewPortBackground?: keyof typeof vars;
}`}
        </CodeBlock>
      </DocumentSection>

      <DocumentSection title="파라미터">
        <PropsTable
          props={[
            {
              name: 'items',
              required: true,
              type: 'Readonly<TValue[]>',
              description: '선택 가능한 옵션 목록이에요.',
            },
            {
              name: 'value',
              required: true,
              type: 'TValue | undefined',
              description: '현재 선택된 값이에요.',
            },
            {
              name: 'onValueChange',
              required: true,
              type: '(value: TValue) => void',
              description: '값 변경 시 호출되는 콜백이에요.',
            },
            {
              name: 'placeholder',
              required: true,
              type: 'string',
              description: '값이 선택되지 않았을 때 표시될 텍스트예요.',
            },
            {
              name: 'invalid',
              required: false,
              type: 'boolean',
              description: '유효하지 않은 상태를 표시해요.',
            },
            {
              name: 'viewPortBackground',
              required: false,
              type: 'keyof typeof vars',
              description: '드롭다운 배경색을 지정해요.',
            },
          ]}
        />
      </DocumentSection>

      <DocumentSection title="예시">
        <DocumentBlock className="h-70">
          <div className="w-50">
            <Select
              items={['사과', '바나나', '오렌지', '포도']}
              onValueChange={setValue}
              placeholder="과일을 선택하세요"
              value={value}
            />
          </div>
        </DocumentBlock>
        <CodeBlock>
          {`const [value, setValue] = useState('');

<Select
  items={['사과', '바나나', '오렌지', '포도']}
  value={value}
  onValueChange={setValue}
  placeholder="과일을 선택하세요"
/>`}
        </CodeBlock>
      </DocumentSection>
    </DocumentPage>
  );
};
