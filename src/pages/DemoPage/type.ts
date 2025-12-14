import type { DeploymentType } from '@/pages/ComponentsPage/documents/DetailListComponents/type';

export const userRole = ['USER', 'ADMIN'] as const;
export type UserRoleType = (typeof userRole)[number];

export const PartNames = [
  'HR',
  'IOS',
  'Android',
  'Frontend',
  'Backend',
  'Designer',
  'Marketer',
  'PM',
  'Legal',
] as const;
export type PartNames = (typeof PartNames)[number];

export type UserType = {
  avatarId: number;
  createdAt: string;
  email: string;
  nickname: string;
  part: PartNames;
  password: string;
  role: UserRoleType;
};

export type ApplicationType = {
  appliedDeploymentId: null | number;
  createdAt: string;
  deletedAt: null | string;
  description: string;
  id: number;
  name: string;
  updatedAt: string;
  user: UserType;
};

export type FullDeployment = DeploymentType & {
  application: ApplicationType;
};
