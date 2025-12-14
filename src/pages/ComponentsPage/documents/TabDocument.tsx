import { useState } from 'react';

import { Tab } from '@/components/Tab';

import {
  CodeBlock,
  DocumentBlock,
  DocumentPage,
  DocumentSection,
  PropsTable,
} from '../components/DocumentLayout';

export const TabDocument = () => {
  const [, setActiveTab] = useState('전체');

  return (
    <DocumentPage>
      <div>
        콘텐츠간 전환을 위한 탭 컴포넌트예요. 선택된 탭 아래에 인디케이터 애니메이션이 있어요.
      </div>

      <DocumentSection title="인터페이스">
        <CodeBlock>
          {`interface TabProps<TTab extends string> {
  children: (p: { tab: TTab }) => React.ReactNode;
  defaultTab: TTab;
  onTabChange: (value: TTab) => void;
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
              name: 'defaultTab',
              required: true,
              type: 'TTab',
              description: '초기에 선택될 탭이에요.',
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
          <Tab defaultTab="전체" onTabChange={setActiveTab} tabs={['전체', '즐겨찾기', '최근']}>
            {({ tab }) => <div className="mt-4 text-white">{tab} 탭 콘텐츠예요.</div>}
          </Tab>
        </DocumentBlock>
        <CodeBlock>
          {`const [activeTab, setActiveTab] = useState('전체');

<Tab
  tabs={['전체', '즐겨찾기', '최근']}
  defaultTab="전체"
  onTabChange={setActiveTab}
>
  {({ tab }) => (
    <div className="mt-4 text-white">
      {tab} 탭 콘텐츠예요.
    </div>
  )}
</Tab>`}
        </CodeBlock>
      </DocumentSection>
    </DocumentPage>
  );
};
