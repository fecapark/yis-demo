import { overlay } from 'overlay-kit';
import { Link } from 'react-router-dom';

import { Button } from '@/components/Button';
import { Dialog } from '@/components/Dialog';
import { useToast } from '@/hooks/useToast';

import {
  CodeBlock,
  DocumentBlock,
  DocumentPage,
  DocumentSection,
  PropsTable,
} from '../components/DocumentLayout';

export const DialogDocument = () => {
  const toast = useToast();

  const handleOpenDialog = () => {
    overlay.open(({ isOpen, close }) => (
      <Dialog onClose={close} open={isOpen}>
        <Dialog.Header onClickCloseButton={close}>
          <Dialog.Title>다이얼로그 제목</Dialog.Title>
        </Dialog.Header>
        <Dialog.Content>정말로 실행할까요? 변경된 내용은 저장되지 않아요.</Dialog.Content>
        <Dialog.ButtonGroup>
          <Dialog.Button onClick={close} size="md" variant="transparent">
            취소
          </Dialog.Button>
          <Dialog.Button
            onClick={() => {
              close();
              toast.success('확인 버튼을 눌렀어요!');
            }}
            size="md"
            variant="primary"
          >
            확인
          </Dialog.Button>
        </Dialog.ButtonGroup>
      </Dialog>
    ));
  };

  return (
    <DocumentPage>
      <div>다이얼로그를 열고 닫을 수 있는 컴포넌트예요.</div>

      <DocumentSection title="인터페이스">
        <CodeBlock>
          {`interface DialogProps {
  closeableWithOutside?: boolean;
  contentProps?: DialogPrimitive.DialogContentProps;  // Radix Dialog Content Props
  onClose: () => void;
  open: boolean;
}

// 서브 컴포넌트
Dialog.Header: React.PropsWithChildren<{ onClickCloseButton?: () => void }>
Dialog.Title: React.PropsWithChildren<unknown>
Dialog.Content: React.PropsWithChildren<{ className?: string }>
Dialog.ButtonGroup: React.PropsWithChildren<unknown>
Dialog.Button: ButtonProps & { size?: ButtonProps['size'] }`}
        </CodeBlock>
      </DocumentSection>

      <DocumentSection title="파라미터">
        <div>
          contentProps는 Radix Primitives의{' '}
          <Link
            rel="noopener noreferrer"
            target="_blank"
            to="https://www.radix-ui.com/primitives/docs/components/dialog#content"
          >
            Dialog.Content 파라미터
          </Link>
          를 참고해주세요.
        </div>
        <PropsTable
          props={[
            {
              name: 'open',
              required: true,
              type: 'boolean',
              description: '다이얼로그의 열림/닫힘 상태예요.',
            },
            {
              name: 'onClose',
              required: true,
              type: '() => void',
              description: '다이얼로그가 닫힐 때 호출되는 콜백 함수예요.',
            },
            {
              name: 'closeableWithOutside',
              required: false,
              type: 'boolean',
              description: '외부 클릭으로 닫을 수 있는지 여부예요.',
            },
            {
              name: 'contentProps',
              required: false,
              type: 'DialogPrimitive.DialogContentProps',
              description: 'Radix Dialog Content에 전달할 props예요.',
            },
          ]}
        />
        <DocumentSection title="Dialog.Header">
          <PropsTable
            props={[
              {
                name: 'onClickCloseButton',
                required: false,
                type: '() => void',
                description: '닫기 버튼 클릭 시 호출되는 콜백이에요.',
              },
            ]}
          />
        </DocumentSection>
        <DocumentSection title="Dialog.Content">
          <PropsTable
            props={[
              {
                name: 'className',
                required: false,
                type: 'string',
                description: '콘텐츠 영역에 적용할 추가 클래스예요.',
              },
            ]}
          />
        </DocumentSection>
        <DocumentSection title="Dialog.Button">
          <div>
            <Link to="/components/Button">Button 컴포넌트</Link>의 인터페이스를 참고해주세요.
          </div>
          <PropsTable
            props={[
              {
                name: 'size',
                required: false,
                type: 'ButtonProps["size"]',
                description: '버튼 크기를 지정해요.',
              },
              {
                name: 'variant',
                required: true,
                type: 'ButtonProps["variant"]',
                description: '버튼의 스타일 변형을 지정해요.',
              },
            ]}
          />
        </DocumentSection>
      </DocumentSection>

      <DocumentSection title="예시">
        <DocumentBlock>
          <Button onClick={handleOpenDialog} size="md" variant="primary">
            다이얼로그 열기
          </Button>
        </DocumentBlock>
        <CodeBlock>
          {`import { overlay } from 'overlay-kit';

const handleOpenDialog = () => {
  overlay.open(({ isOpen, close }) => (
    <Dialog open={isOpen} onClose={close}>
      <Dialog.Header onClickCloseButton={close}>
        <Dialog.Title>다이얼로그 제목</Dialog.Title>
      </Dialog.Header>
      <Dialog.Content>
        정말로 실행할까요? 변경된 내용은 저장되지 않아요.
      </Dialog.Content>
      <Dialog.ButtonGroup>
        <Dialog.Button variant="transparent" size="md" onClick={close}>
          취소
        </Dialog.Button>
        <Dialog.Button variant="primary" size="md" onClick={() => { close(); }}>
          확인
        </Dialog.Button>
      </Dialog.ButtonGroup>
    </Dialog>
  ));
};`}
        </CodeBlock>
      </DocumentSection>
    </DocumentPage>
  );
};
