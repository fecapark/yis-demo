import { useState } from 'react';

import { NumberInput } from '@/components/TextInput/NumberInput';

import {
  CodeBlock,
  DocumentBlock,
  DocumentPage,
  DocumentSection,
  PropsTable,
} from '../components/DocumentLayout';

export const NumberInputDocument = () => {
  const [v, setV] = useState<number | undefined>(undefined);
  const [v2, setV2] = useState<number | undefined>(undefined);
  const [v3, setV3] = useState<number | undefined>(undefined);

  return (
    <DocumentPage>
      <div>
        소숫점 없는 숫자를 입력받을 수 있는 컴포넌트예요. TextInput을 기반으로 만들어졌어요.
      </div>

      <DocumentSection title="인터페이스">
        <CodeBlock>
          {`interface NumberInputProps extends Omit<TextInputProps, 'value' | 'onChange'> {
  max?: number;
  min?: number;
  onChange?: (value?: number) => void;
  value?: number;
}`}
        </CodeBlock>
      </DocumentSection>

      <DocumentSection title="파라미터">
        <PropsTable
          props={[
            {
              name: 'value',
              required: false,
              type: 'number',
              description: '입력 필드의 현재 값이에요.',
            },
            {
              name: 'onChange',
              required: false,
              type: '(value?: number) => void',
              description: '값 변경 시 호출되는 콜백이에요. 빈 값인 경우 undefined가 전달돼요.',
            },
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
              description: '유효하지 않은 상태를 표시해요.',
            },
            {
              name: 'label',
              required: false,
              type: 'string',
              description: '입력 필드의 라벨이에요.',
            },
            {
              name: 'min',
              required: false,
              type: 'number',
              defaultValue: '-Number.MAX_SAFE_INTEGER',
              description: '입력 가능한 최소값이에요.',
            },
            {
              name: 'max',
              required: false,
              type: 'number',
              defaultValue: 'Number.MAX_SAFE_INTEGER',
              description: '입력 가능한 최대값이에요.',
            },
          ]}
        />
      </DocumentSection>

      <DocumentSection title="예시">
        <DocumentSection>
          <DocumentBlock className="max-w-md">
            <NumberInput onChange={setV} placeholder="숫자만 입력할 수 있어요" value={v} />
          </DocumentBlock>
          <CodeBlock>
            {`const [value, setValue] = useState<number | undefined>(undefined);

<NumberInput
  value={value}
  onChange={setValue}
  placeholder="숫자만 입력할 수 있어요"
/>`}
          </CodeBlock>
        </DocumentSection>

        <DocumentSection
          description="기본 최대 최소는 ±Number.MAX_SAFE_INTEGER로 지정되어 있어요."
          title="max & min"
        >
          <DocumentBlock className="max-w-md">
            <div>min: 5, max: 100</div>
            <NumberInput
              max={100}
              min={5}
              onChange={setV2}
              placeholder="숫자만 입력할 수 있어요"
              value={v2}
            />
          </DocumentBlock>
          <CodeBlock>
            {`<NumberInput
  value={value}
  onChange={setValue}
  min={5}
  max={100}
  placeholder="숫자만 입력할 수 있어요"
/>`}
          </CodeBlock>
        </DocumentSection>

        <DocumentSection title="Label & Description">
          <DocumentBlock className="max-w-md">
            <NumberInput
              description="19세 이상으로 입력해주세요"
              invalid={v3 !== undefined && v3 < 19}
              label="나이"
              onChange={setV3}
              placeholder="나이를 입력해주세요"
              value={v3}
            />
          </DocumentBlock>
          <CodeBlock>
            {`<NumberInput
  label="나이"
  value={age}
  onChange={setAge}
  placeholder="나이를 입력해주세요"
  description="19세 이상으로 입력해주세요"
  invalid={age !== undefined && age < 19}
/>`}
          </CodeBlock>
        </DocumentSection>
      </DocumentSection>
    </DocumentPage>
  );
};
