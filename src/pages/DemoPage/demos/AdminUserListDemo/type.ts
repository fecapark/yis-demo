import type { PartNames, UserRoleType } from '@/pages/DemoPage/type';

export type UserResponseType = {
  accesses: string[];
  avatarId: number;
  createdAt: string;
  deletedAt: null | string;
  email: string;
  id: number;
  isActive: boolean;
  nickname: string;
  part: PartNames;
  role: UserRoleType;
  updatedAt: string;
};
