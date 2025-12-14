import { ChipTabDocument } from '@/pages/ComponentsPage/documents/ChipTabDocument';
import { IconButtonDocument } from '@/pages/ComponentsPage/documents/IconButtonDocument';
import { InlineButtonDocument } from '@/pages/ComponentsPage/documents/InlineButtonDocument';
import { NumberInputDocument } from '@/pages/ComponentsPage/documents/NumberInputDocument';
import { VerticalDividerDocument } from '@/pages/ComponentsPage/documents/VerticalDividerDocument';

import { ButtonDocument } from './documents/ButtonDocument';
import { ConversationDocument } from './documents/ConversationDocument';
import { DetailListDocument } from './documents/DetailListDocument';
import { DialogDocument } from './documents/DialogDocument';
import { DividerDocument } from './documents/DividerDocument';
import { HoverTooltipDocument } from './documents/HoverTooltipDocument';
import { ItemListDocument } from './documents/ItemListDocument';
import { MenuDocument } from './documents/MenuDocument';
import { PopoverDocument } from './documents/PopoverDocument';
import { SelectDocument } from './documents/SelectDocument';
import { TabDocument } from './documents/TabDocument';
import { TableDocument } from './documents/TableDocument';
import { TextInputDocument } from './documents/TextInputDocument';
import { ToastDocument } from './documents/ToastDocument';

export const componentMap = {
  입력: {
    TextInput: TextInputDocument,
    NumberInput: NumberInputDocument,
  },
  선택: {
    Select: SelectDocument,
  },
  버튼: {
    Button: ButtonDocument,
    InlineButton: InlineButtonDocument,
    IconButton: IconButtonDocument,
  },
  네비게이션: {
    Tab: TabDocument,
    ChipTab: ChipTabDocument,
  },
  오버레이: {
    Popover: PopoverDocument,
    Menu: MenuDocument,
    Dialog: DialogDocument,
    Toast: ToastDocument,
    HoverTooltip: HoverTooltipDocument,
  },
  표시: {
    DetailList: DetailListDocument,
    ItemList: ItemListDocument,
    Table: TableDocument,
    Conversation: ConversationDocument,
  },
  기타: {
    Divider: DividerDocument,
    VerticalDivider: VerticalDividerDocument,
  },
};

export const componentOrder = [
  '버튼',
  '입력',
  '선택',
  '네비게이션',
  '오버레이',
  '표시',
  '기타',
] as const;

export type ComponentSection = keyof typeof componentMap;
export type ComponentSectionComponent<T extends ComponentSection> = keyof (typeof componentMap)[T];
