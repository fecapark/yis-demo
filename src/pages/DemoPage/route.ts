import { AdminDeploymentDemo } from '@/pages/DemoPage/demos/AdminDeploymentDemo';
import { AdminUserListDemo } from '@/pages/DemoPage/demos/AdminUserListDemo';
import { DeploymentEditDemo } from '@/pages/DemoPage/demos/DeploymentEditDemo';
import { DeploymentFunnelDemo } from '@/pages/DemoPage/demos/DeploymentFunnelDemo';
import { ProfileDemo } from '@/pages/DemoPage/demos/ProfileDemo';

export const demoMap = {
  프로필: {
    '내 정보': ProfileDemo,
  },
  어드민: {
    '배포 요청': AdminDeploymentDemo,
    '유저 목록': AdminUserListDemo,
  },
  배포: {
    '배포 퍼널': DeploymentFunnelDemo,
    '배포 수정': DeploymentEditDemo,
  },
} as const;

export const demoOrder = ['프로필', '어드민', '배포'] as const satisfies (keyof typeof demoMap)[];

export type DemoSection = (typeof demoOrder)[number];
