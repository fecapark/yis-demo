import { useState } from 'react';

import { ChipTab } from '@/components/ChipTab';

import {
  CodeBlock,
  DocumentBlock,
  DocumentPage,
  DocumentSection,
  PropsTable,
} from '../components/DocumentLayout';

export const ChipTabDocument = () => {
  const [activeChip, setActiveChip] = useState('전체');

  return (
    <DocumentPage>
      <div>콘텐츠간 전환을 위한 탭 컴포넌트예요. 탭이 칩 디자인으로 되어있어요.</div>

      <DocumentSection title="인터페이스">
        <CodeBlock>
          {`interface ChipTabProps<TTab extends string> {
  children: (p: { tab: TTab }) => React.ReactNode;
  onTabChange: (value: TTab) => void;
  tab: TTab;
  tabs: TTab[];
}`}
        </CodeBlock>
      </DocumentSection>

      <DocumentSection title="파라미터">
        <PropsTable
          props={[
            {
              name: 'tabs',
              required: true,
              type: 'TTab[]',
              description: '탭 목록이에요. 문자열 배열로 전달해요.',
            },
            {
              name: 'tab',
              required: true,
              type: 'TTab',
              description: '현재 선택된 탭이에요.',
            },
            {
              name: 'onTabChange',
              required: true,
              type: '(value: TTab) => void',
              description: '탭 변경 시 호출되는 콜백 함수예요.',
            },
            {
              name: 'children',
              required: true,
              type: '(p: { tab: TTab }) => React.ReactNode',
              description: '탭 콘텐츠를 렌더링하는 함수예요. 현재 탭 정보를 인자로 받아요.',
            },
          ]}
        />
      </DocumentSection>

      <DocumentSection title="예시">
        <DocumentBlock className="h-64">
          <ChipTab onTabChange={setActiveChip} tab={activeChip} tabs={['전체', '즐겨찾기', '최근']}>
            {({ tab }) => <div className="bg-grey100 mt-4 rounded p-4">{tab} 탭 콘텐츠예요.</div>}
          </ChipTab>
        </DocumentBlock>
        <CodeBlock>
          {`const [activeChip, setActiveChip] = useState('전체');

<ChipTab
  tabs={['전체', '즐겨찾기', '최근']}
  tab={activeChip}
  onTabChange={setActiveChip}
>
  {({ tab }) => (
    <div className="bg-grey100 mt-4 rounded p-4">
      {tab} 탭 콘텐츠예요.
    </div>
  )}
</ChipTab>`}
        </CodeBlock>
      </DocumentSection>
    </DocumentPage>
  );
};
