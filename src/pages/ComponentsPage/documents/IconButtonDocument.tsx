import { FaCog, FaPlus } from 'react-icons/fa';

import { IconButton } from '@/components/IconButton';
import { ItemList } from '@/components/ItemList';

import {
  CodeBlock,
  DocumentBlock,
  DocumentPage,
  DocumentSection,
  PropsTable,
} from '../components/DocumentLayout';

export const IconButtonDocument = () => {
  return (
    <DocumentPage>
      <div>아이콘 버튼 컴포넌트예요. 버튼 내에 아이콘만 넣고 싶을 때 사용해요.</div>

      <DocumentSection title="인터페이스">
        <CodeBlock>
          {`interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size: 'lg' | 'md' | 'sm';
  tooltipContent?: React.ReactNode;
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
              name: 'tooltipContent',
              required: false,
              type: 'React.ReactNode',
              description: '호버 시 표시될 툴팁 내용이에요.',
            },
          ]}
        />
      </DocumentSection>

      <DocumentSection title="예시">
        <DocumentSection>
          <DocumentBlock className="flex-row items-center gap-4">
            <IconButton size="md">
              <FaCog />
            </IconButton>
            <IconButton size="md" tooltipContent="설정">
              <FaCog />
            </IconButton>
            <IconButton disabled size="md">
              <FaPlus />
            </IconButton>
          </DocumentBlock>
          <CodeBlock>
            {`<IconButton size="md">
  <FaCog />
</IconButton>
<IconButton size="md" tooltipContent="설정">
  <FaCog />
</IconButton>
<IconButton size="md" disabled>
  <FaPlus />
</IconButton>`}
          </CodeBlock>
        </DocumentSection>

        <DocumentSection title="Sizes">
          <DocumentBlock>
            <div className="w-30">
              <ItemList>
                <ItemList.Body>
                  <ItemList.Item label="sm">
                    <IconButton size="sm">
                      <FaCog />
                    </IconButton>
                  </ItemList.Item>
                  <ItemList.Item label="md">
                    <IconButton size="md">
                      <FaCog />
                    </IconButton>
                  </ItemList.Item>
                  <ItemList.Item label="lg">
                    <IconButton size="lg">
                      <FaCog />
                    </IconButton>
                  </ItemList.Item>
                </ItemList.Body>
              </ItemList>
            </div>
          </DocumentBlock>
          <CodeBlock>
            {`<IconButton size="sm"><FaCog /></IconButton>
<IconButton size="md"><FaCog /></IconButton>
<IconButton size="lg"><FaCog /></IconButton>`}
          </CodeBlock>
        </DocumentSection>
      </DocumentSection>
    </DocumentPage>
  );
};
