import { IoMdTrash } from 'react-icons/io';
import { MdEdit, MdMoreHoriz } from 'react-icons/md';
import { Link } from 'react-router-dom';

import { IconButton } from '@/components/IconButton';
import { Menu } from '@/components/Menu';
import { ProfileAvatar } from '@/components/ProfileAvatar';

import {
  CodeBlock,
  DocumentBlock,
  DocumentPage,
  DocumentSection,
} from '../components/DocumentLayout';

export const MenuDocument = () => {
  return (
    <DocumentPage>
      <div>
        오버레이되는 메뉴를 표시할 수 있는 컴포넌트예요. Popover를 기반으로 메뉴 아이템 형태의 UI를
        제공해요.
      </div>

      <DocumentSection title="인터페이스">
        <CodeBlock>
          {`// Menu는 Popover를 기반으로 해요
interface MenuProps extends PopoverProps {
  children: React.ReactNode;
}

// 서브 컴포넌트
Menu.Target: PopoverTriggerProps
Menu.Content: PopoverContentProps
Menu.ButtonItem: React.ButtonHTMLAttributes<HTMLButtonElement>`}
        </CodeBlock>
      </DocumentSection>

      <DocumentSection title="파라미터">
        <div className="mb-8">
          <Link to="/components/Popover">Popover 컴포넌트</Link>의 인터페이스를 참고해주세요.
        </div>
      </DocumentSection>

      <DocumentSection title="예시">
        <DocumentBlock className="h-64">
          <div>
            <div className="bg-grey50 flex w-60 items-center justify-between rounded-md px-4 py-3">
              <div className="flex items-center gap-4">
                <div className="overflow-hidden rounded-full">
                  <ProfileAvatar avatarId={2} size={30} />
                </div>
                <div className="text-neutralMuted pr-4 font-medium">홍길동</div>
              </div>
              <Menu>
                <Menu.Target asChild>
                  <IconButton size="md">
                    <MdMoreHoriz />
                  </IconButton>
                </Menu.Target>
                <Menu.Content
                  align="end"
                  className="bg-grey100 min-w-40 rounded-lg p-1.5 text-sm"
                  sideOffset={6}
                >
                  {(['edit', 'delete'] as const).map((item) => buttons[item])}
                </Menu.Content>
              </Menu>
            </div>
          </div>
        </DocumentBlock>
        <CodeBlock>
          {`<Menu>
  <Menu.Target asChild>
    <IconButton size="md">
      <MdMoreHoriz />
    </IconButton>
  </Menu.Target>
  <Menu.Content
    align="end"
    className="bg-grey100 min-w-40 rounded-lg p-1.5"
    sideOffset={6}
  >
    <Menu.ButtonItem className="flex items-center gap-2.5 rounded-md px-3 py-2">
      <MdEdit />
      수정하기
    </Menu.ButtonItem>
    <Menu.ButtonItem className="flex items-center gap-2.5 rounded-md px-3 py-2">
      <IoMdTrash />
      삭제하기
    </Menu.ButtonItem>
  </Menu.Content>
</Menu>`}
        </CodeBlock>
      </DocumentSection>
    </DocumentPage>
  );
};

const buttons = {
  delete: (
    <Menu.ButtonItem className="flex items-center gap-2.5 rounded-md px-3 py-2 font-medium">
      <IoMdTrash className="text-red500 size-4.5" />
      삭제하기
    </Menu.ButtonItem>
  ),
  edit: (
    <Menu.ButtonItem className="flex items-center gap-2.5 rounded-md px-3 py-2 font-medium">
      <MdEdit className="text-orange600 size-4.5" />
      수정하기
    </Menu.ButtonItem>
  ),
};
