import { Divider } from '@/components/Divider';

import {
  CodeBlock,
  DocumentBlock,
  DocumentPage,
  DocumentSection,
} from '../components/DocumentLayout';

export const DividerDocument = () => {
  return (
    <DocumentPage>
      <div>
        구역을 가로선으로 나누는 컴포넌트예요. 콘텐츠 사이에 시각적 구분을 만들 때 사용해요.
      </div>

      <DocumentSection title="인터페이스">
        <CodeBlock>
          {`interface DividerProps {
  className?: string;
}`}
        </CodeBlock>
      </DocumentSection>

      <DocumentSection title="예시">
        <DocumentBlock>
          <div className="text-white">Content Above</div>
          <Divider />
          <div className="text-white">Content Below</div>
        </DocumentBlock>
        <CodeBlock>
          {`<div>Content Above</div>
<Divider />
<div>Content Below</div>`}
        </CodeBlock>
      </DocumentSection>
    </DocumentPage>
  );
};
