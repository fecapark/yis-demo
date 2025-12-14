import { Button } from '@/components/Button';
import { useToast } from '@/hooks/useToast';

import {
  CodeBlock,
  DocumentBlock,
  DocumentPage,
  DocumentSection,
  PropsTable,
} from '../components/DocumentLayout';

export const ToastDocument = () => {
  const toast = useToast();

  return (
    <DocumentPage>
      <div>
        토스트 알림 컴포넌트예요. 토스트 유형에 따라 다른 로띠를 보여줘요. 선언적 사용을 위해서
        useToast 훅과 함께 사용해요.
      </div>

      <DocumentSection title="인터페이스">
        <CodeBlock>
          {`// Toast 컴포넌트 Props (내부적으로 사용)
interface ToastProps {
  children: React.ReactNode;
  type: 'success' | 'error' | 'default';
}

// useToast 훅 반환 타입
interface UseToastReturn {
  success: (text: string) => void;
  error: (text: string) => void;
  default: (text: string) => void;
}`}
        </CodeBlock>
      </DocumentSection>

      <DocumentSection title="파라미터">
        <DocumentSection title="type">
          <PropsTable
            props={[
              {
                name: 'success',
                required: false,
                type: '(text: string) => void',
                description: '성공 토스트를 표시해요. 초록색 체크 로띠가 표시돼요.',
              },
              {
                name: 'error',
                required: false,
                type: '(text: string) => void',
                description: '에러 토스트를 표시해요. 에러 로띠가 표시돼요.',
              },
              {
                name: 'default',
                required: false,
                type: '(text: string) => void',
                description: '기본 토스트를 표시해요. 기본 스타일로 표시돼요.',
              },
            ]}
          />
        </DocumentSection>
      </DocumentSection>

      <DocumentSection title="예시">
        <DocumentBlock className="flex-row gap-4">
          <Button onClick={() => toast.success('성공했어요')} size="md" variant="primary">
            성공 토스트
          </Button>
          <Button onClick={() => toast.error('에러가 발생했어요')} size="md" variant="secondary">
            에러 토스트
          </Button>
          <Button
            onClick={() => toast.default('변경 사항을 검토해주세요')}
            size="md"
            variant="subPrimary"
          >
            기본 토스트
          </Button>
        </DocumentBlock>
        <CodeBlock>
          {`import { useToast } from '@/hooks/useToast';

const toast = useToast();

// 성공 토스트
toast.success('성공했어요');

// 에러 토스트
toast.error('에러가 발생했어요');

// 기본 토스트
toast.default('변경 사항을 검토해주세요');`}
        </CodeBlock>
      </DocumentSection>
    </DocumentPage>
  );
};
