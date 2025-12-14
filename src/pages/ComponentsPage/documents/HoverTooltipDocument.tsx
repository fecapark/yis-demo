import { Link } from 'react-router-dom';

import { HoverTooltip } from '@/components/HoverTooltip';

import {
  CodeBlock,
  DocumentBlock,
  DocumentPage,
  DocumentSection,
  PropsTable,
} from '../components/DocumentLayout';

export const HoverTooltipDocument = () => {
  return (
    <DocumentPage>
      <div>
        마우스 포인터를 올리면 나타나는 툴팁 컴포넌트예요. Radix UI Tooltip을 기반으로 만들어졌어요.
      </div>

      <DocumentSection title="인터페이스">
        <CodeBlock>
          {`interface HoverTooltipProps {
  children: React.ReactNode;
  color?: Extract<keyof typeof vars, \`grey\${string}\`>;
  content: React.ReactNode;
  contentProps?: React.ComponentProps<typeof Tooltip.Content>;
  disableHoverableContent?: boolean;
  noArrow?: boolean;
}`}
        </CodeBlock>
      </DocumentSection>

      <DocumentSection title="파라미터">
        <div>
          contentProps는 Radix Primitives의{' '}
          <Link
            rel="noopener noreferrer"
            target="_blank"
            to="https://www.radix-ui.com/primitives/docs/components/tooltip#content"
          >
            Tooltip.Content 파라미터
          </Link>
          를 참고해주세요.
        </div>
        <PropsTable
          props={[
            {
              name: 'children',
              required: true,
              type: 'React.ReactNode',
              description: '툴팁의 트리거가 될 요소예요.',
            },
            {
              name: 'content',
              required: true,
              type: 'React.ReactNode',
              description: '툴팁에 표시될 내용이에요.',
            },
            {
              name: 'color',
              required: false,
              type: 'Extract<keyof typeof vars, `grey${string}`>',
              description: '툴팁의 배경색이에요. grey 계열 색상만 사용 가능해요.',
            },
            {
              name: 'contentProps',
              required: false,
              type: 'React.ComponentProps<typeof Tooltip.Content>',
              description: 'Radix Tooltip.Content에 전달할 props예요.',
            },
            {
              name: 'disableHoverableContent',
              required: false,
              type: 'boolean',
              description: '툴팁 콘텐츠에 호버해도 유지되지 않도록 설정해요.',
            },
            {
              name: 'noArrow',
              required: false,
              type: 'boolean',
              description: '툴팁 화살표를 숨겨요.',
            },
          ]}
        />
      </DocumentSection>

      <DocumentSection title="예시">
        <DocumentBlock>
          <div className="flex gap-8">
            <HoverTooltip content="툴팁이에요.">
              <span className="cursor-help text-white underline decoration-dotted">
                마우스를 올려보세요
              </span>
            </HoverTooltip>
          </div>
        </DocumentBlock>
        <CodeBlock>
          {`<HoverTooltip content="툴팁이에요.">
  <span className="cursor-help underline decoration-dotted">
    마우스를 올려보세요
  </span>
</HoverTooltip>`}
        </CodeBlock>
      </DocumentSection>
    </DocumentPage>
  );
};
