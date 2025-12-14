import { VerticalDivider } from '@/components/VerticalDivider';

import {
  CodeBlock,
  DocumentBlock,
  DocumentPage,
  DocumentSection,
} from '../components/DocumentLayout';

export const VerticalDividerDocument = () => {
  return (
    <DocumentPage>
      <div>
        구역을 세로선으로 나누는 컴포넌트예요. 가로로 나란히 배치된 콘텐츠 사이에 시각적 구분을 만들
        때 사용해요.
      </div>

      <DocumentSection title="인터페이스">
        <CodeBlock>
          {`interface VerticalDividerProps {
  className?: string;
}`}
        </CodeBlock>
      </DocumentSection>

      <DocumentSection title="예시">
        <DocumentBlock className="flex-row items-center">
          <div className="h-40 text-white">Left</div>
          <VerticalDivider />
          <div className="text-white">Right</div>
        </DocumentBlock>
        <CodeBlock>
          {`<div className="flex-row items-center">
  <div>Left</div>
  <VerticalDivider />
  <div>Right</div>
</div>`}
        </CodeBlock>
      </DocumentSection>
    </DocumentPage>
  );
};
