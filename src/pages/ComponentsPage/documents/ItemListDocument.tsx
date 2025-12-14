import { ItemList } from '@/components/ItemList';

import {
  CodeBlock,
  DocumentBlock,
  DocumentPage,
  DocumentSection,
  PropsTable,
} from '../components/DocumentLayout';

const items = [
  {
    label: '닉네임',
    value: 'User',
  },
  {
    label: '소속 파트',
    value: 'Frontend',
  },
  {
    label: '이메일',
    value: 'user@gmail.com',
  },
  {
    label: '전화번호',
    value: '********',
    tooltipContent: '보안을 위해 전화번호를 마스킹해요.',
  },
  {
    label: '가입일',
    value: '2025-10-15',
  },
];

export const ItemListDocument = () => {
  return (
    <DocumentPage>
      <div>아이템 리스트 컴포넌트예요. 특정 주제의 라벨과 값을 나열할 때 사용해요.</div>

      <DocumentSection title="인터페이스">
        <CodeBlock>
          {`// 서브 컴포넌트
ItemList.Header: React.PropsWithChildren<unknown>
ItemList.HeaderButton: React.PropsWithChildren<{ onClick?: React.MouseEventHandler }>
ItemList.Body: React.PropsWithChildren<unknown>
ItemList.Item: React.PropsWithChildren<{ label: string; tooltipContent?: string }>`}
        </CodeBlock>
      </DocumentSection>

      <DocumentSection title="파라미터">
        <DocumentSection title="HeaderButton">
          <div>헤더 오른쪽에 표시될 인라인 버튼이에요.</div>
          <PropsTable
            props={[
              {
                name: 'onClick',
                required: false,
                type: 'React.MouseEventHandler',
                description: '버튼 클릭 시 호출되는 핸들러예요.',
              },
            ]}
          />
        </DocumentSection>
        <DocumentSection title="Item">
          <div>라벨과 값에 대한 아이템 컴포넌트예요.</div>
          <PropsTable
            props={[
              {
                name: 'label',
                required: true,
                type: 'string',
                description: '아이템의 라벨이에요.',
              },
              {
                name: 'tooltipContent',
                required: false,
                type: 'string',
                description: '라벨 옆에 물음표 아이콘으로 표시될 툴팁 내용이에요.',
              },
              {
                name: 'children',
                required: false,
                type: 'React.ReactNode',
                description: '아이템의 값으로 표시될 콘텐츠예요.',
              },
            ]}
          />
        </DocumentSection>
      </DocumentSection>

      <DocumentSection title="예시">
        <DocumentBlock className="max-w-2xl p-6">
          <ItemList>
            <ItemList.Header>
              내 정보
              <ItemList.HeaderButton>수정하기</ItemList.HeaderButton>
            </ItemList.Header>
            <ItemList.Body>
              {items.map((item) => (
                <ItemList.Item
                  key={item.label}
                  label={item.label}
                  tooltipContent={item.tooltipContent}
                >
                  {item.value}
                </ItemList.Item>
              ))}
            </ItemList.Body>
          </ItemList>
        </DocumentBlock>
        <CodeBlock>
          {`<ItemList>
  <ItemList.Header>
    내 정보
    <ItemList.HeaderButton>수정하기</ItemList.HeaderButton>
  </ItemList.Header>
  <ItemList.Body>
    <ItemList.Item label="닉네임">User</ItemList.Item>
    <ItemList.Item label="소속 파트">Frontend</ItemList.Item>
    <ItemList.Item label="이메일">user@gmail.com</ItemList.Item>
    <ItemList.Item
      label="전화번호"
      tooltipContent="보안을 위해 전화번호를 마스킹해요."
    >
      ********
    </ItemList.Item>
    <ItemList.Item label="가입일">2025-10-15</ItemList.Item>
  </ItemList.Body>
</ItemList>`}
        </CodeBlock>
      </DocumentSection>
    </DocumentPage>
  );
};
