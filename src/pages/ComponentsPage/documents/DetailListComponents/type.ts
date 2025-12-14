export const CpuResourceNames = ['100m', '250m', '500m', '1', '1.5', '2'] as const;
export type CpuResourceNames = (typeof CpuResourceNames)[number];

export const MemoryResourceNames = [
  '32Mi',
  '64Mi',
  '128Mi',
  '256Mi',
  '512Mi',
  '1Gi',
  '1.5Gi',
  '2Gi',
] as const;
export type MemoryResourceNames = (typeof MemoryResourceNames)[number];

export const DeploymentStateNames = ['REQUEST', 'RETURN', 'APPROVAL'] as const;
export type DeploymentStateNames = (typeof DeploymentStateNames)[number];

export type DeploymentType = {
  adminId: null | number;
  applicationId: number;
  comment: null | string;
  cpuLimits: CpuResourceNames;
  cpuRequests: CpuResourceNames;
  createdAt: string;
  deletedAt: null | string;
  domainName: string;
  id: number;
  imageUrl: string;
  isApplied: boolean;
  memoryLimits: MemoryResourceNames;
  memoryRequests: MemoryResourceNames;
  message: null | string;
  port: number;
  replicas: number;
  state: DeploymentStateNames;
  updatedAt: string;
  userId: number;
};

export const DeploymentStateKRNameMap = {
  REQUEST: '요청',
  APPROVAL: '승인',
  RETURN: '거절',
} as const satisfies Record<DeploymentStateNames, string>;
