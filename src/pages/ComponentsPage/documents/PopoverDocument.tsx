import { Link } from 'react-router-dom';

import { Button } from '@/components/Button';
import { InlineButton } from '@/components/InlineButton';
import { Popover } from '@/components/Popover';

import {
  CodeBlock,
  DocumentBlock,
  DocumentPage,
  DocumentSection,
  PropsTable,
} from '../components/DocumentLayout';

export const PopoverDocument = () => {
  return (
    <DocumentPage>
      <div>
        특정 요소에 의한 팝오버를 표시할 수 있는 컴포넌트예요. Radix UI Popover를 기반으로
        만들어졌어요.
      </div>

      <DocumentSection title="인터페이스">
        <CodeBlock>
          {`interface PopoverProps {
  behavior?: PopoverBehaviorType; // 'click' | 'hover'
  onOpenChange?: (v: boolean) => void;
}

// 서브 컴포넌트
Popover.Target: PopoverTriggerProps
Popover.Content: PopoverContentProps & { onCloseWithOutside?: () => void }
Popover.Closeable: { asChild?: boolean; children: React.ReactNode }`}
        </CodeBlock>
      </DocumentSection>

      <DocumentSection title="파라미터">
        <PropsTable
          props={[
            {
              name: 'behavior',
              required: false,
              type: "'click' | 'hover'",
              defaultValue: "'click'",
              description: '팝오버가 열리는 동작 방식이에요.',
            },
            {
              name: 'onOpenChange',
              required: false,
              type: '(v: boolean) => void',
              description: '팝오버 열림/닫힘 상태 변경 시 호출되는 콜백이에요.',
            },
          ]}
        />
        <DocumentSection title="Popover.Target">
          <div className="mb-8">
            Radix Primitives의{' '}
            <Link
              rel="noopener noreferrer"
              target="_blank"
              to="https://www.radix-ui.com/primitives/docs/components/popover#trigger"
            >
              Popover.Trigger 파라미터
            </Link>
            를 참고해주세요.
          </div>
        </DocumentSection>
        <DocumentSection title="Popover.Content">
          <div>
            Radix Primitives의{' '}
            <Link
              rel="noopener noreferrer"
              target="_blank"
              to="https://www.radix-ui.com/primitives/docs/components/popover#content"
            >
              Popover.Content 파라미터
            </Link>
            를 참고해주세요.
          </div>
          <PropsTable
            props={[
              {
                name: 'onCloseWithOutside',
                required: false,
                type: '() => void',
                description: '외부 클릭으로 닫힐 때 호출되는 콜백이에요.',
              },
            ]}
          />
        </DocumentSection>
        <DocumentSection title="Popover.Closeable">
          <PropsTable
            props={[
              {
                name: 'asChild',
                required: false,
                type: 'boolean',
                description: 'true인 경우 자식 요소를 닫기 버튼으로 렌더링해요.',
              },
            ]}
          />
        </DocumentSection>
      </DocumentSection>

      <DocumentSection title="예시">
        <DocumentBlock>
          <div>
            <Popover>
              <Popover.Target asChild>
                <Button size="md" variant="primary">
                  팝오버 열기
                </Button>
              </Popover.Target>
              <Popover.Content sideOffset={12}>
                <div className="bg-grey50 flex w-64 flex-col gap-3 rounded-md p-4">
                  <h4 className="mb-2 font-bold text-white">팝오버</h4>
                  <p>어떤 요소든 포함할 수 있어요.</p>
                  <div className="flex justify-end">
                    <Popover.Closeable>
                      <InlineButton>닫기</InlineButton>
                    </Popover.Closeable>
                  </div>
                </div>
              </Popover.Content>
            </Popover>
          </div>
        </DocumentBlock>
        <CodeBlock>
          {`<Popover>
  <Popover.Target asChild>
    <Button variant="primary" size="md">
      팝오버 열기
    </Button>
  </Popover.Target>
  <Popover.Content sideOffset={12}>
    <div className="bg-grey50 flex w-64 flex-col gap-3 rounded-md p-4">
      <h4 className="mb-2 font-bold text-white">팝오버</h4>
      <p>어떤 요소든 포함할 수 있어요.</p>
      <div className="flex justify-end">
        <Popover.Closeable>
          <InlineButton>닫기</InlineButton>
        </Popover.Closeable>
      </div>
    </div>
  </Popover.Content>
</Popover>`}
        </CodeBlock>
      </DocumentSection>
    </DocumentPage>
  );
};
