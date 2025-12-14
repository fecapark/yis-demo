import { MdOutlineArrowCircleUp } from 'react-icons/md';
import { tv } from 'tailwind-variants';

import { DetailList } from '@/components/DetailList';
import { ApplicationDeploymentDetail } from '@/pages/ComponentsPage/documents/DetailListComponents';
import {
  DeploymentStateKRNameMap,
  type DeploymentType,
} from '@/pages/ComponentsPage/documents/DetailListComponents/type';
import { formatTemplates } from '@/utils/date';

import {
  CodeBlock,
  DocumentBlock,
  DocumentPage,
  DocumentSection,
  PropsTable,
} from '../components/DocumentLayout';

const MOCK_ITEMS: Array<DeploymentType> = [
  {
    adminId: 1,
    cpuLimits: '500m',
    cpuRequests: '250m',
    domainName: 'app',
    id: 3,
    imageUrl: 'v.1.1.2',
    memoryLimits: '512Mi',
    memoryRequests: '256Mi',
    port: 8080,
    state: 'REQUEST',
    applicationId: 101,
    createdAt: '2025-10-01T10:00:00Z',
    updatedAt: '2025-10-02T12:00:00Z',
    deletedAt: null,
    isApplied: true,
    message: 'Deployment approved and applied successfully.',
    comment: null,
    replicas: 3,
    userId: 501,
  },
  {
    adminId: null,
    cpuLimits: '1',
    cpuRequests: '500m',
    domainName: 'app',
    id: 2,
    imageUrl: 'v1.1.1',
    memoryLimits: '1Gi',
    memoryRequests: '512Mi',
    port: 8080,
    state: 'APPROVAL',
    applicationId: 102,
    createdAt: '2025-10-03T09:30:00Z',
    updatedAt: '2025-10-03T09:30:00Z',
    deletedAt: null,
    isApplied: false,
    message: null,
    comment: 'Please review the deployment request.',
    replicas: 2,
    userId: 502,
  },
  {
    adminId: 2,
    cpuLimits: '250m',
    cpuRequests: '100m',
    domainName: 'app',
    id: 1,
    imageUrl: 'v.1.1.0',
    memoryLimits: '256Mi',
    memoryRequests: '128Mi',
    port: 8080,
    state: 'RETURN',
    applicationId: 103,
    createdAt: '2025-09-25T14:15:00Z',
    updatedAt: '2025-09-26T16:45:00Z',
    deletedAt: null,
    isApplied: false,
    message: 'Deployment request returned for revisions.',
    comment: 'Please update the configuration settings.',
    replicas: 1,
    userId: 503,
  },
];

const deploymentStatus = tv({
  base: 'font-semibold',
  variants: {
    state: {
      APPROVAL: 'text-green500',
      REQUEST: 'text-orange500',
      RETURN: 'text-red500',
    },
  },
});

export const DetailListDocument = () => {
  return (
    <DocumentPage className="h-full min-h-150">
      <div>
        같은 뷰에서 목록과 상세 정보를 함께 볼 수 있게 해줘요. 목록 아이템 클릭 시 상세 정보가 옆에
        표시돼요.
      </div>

      <DocumentSection title="인터페이스">
        <CodeBlock>
          {`interface DetailListProps {
  defaultSelectedId?: number;
}

interface ListItemProps {
  description: React.ReactNode;
  footer: React.ReactNode;
  header: React.ReactNode;
  id: number;
  onClick?: (p: { close: boolean }) => void;
  text: React.ReactNode;
}

interface DetailProps {
  children: (p: { id: number }) => React.ReactNode;
}

// 서브 컴포넌트
DetailList.List: React.PropsWithChildren<unknown>
DetailList.ListItem: ListItemProps
DetailList.Detail: DetailProps`}
        </CodeBlock>
      </DocumentSection>

      <DocumentSection title="파라미터">
        <PropsTable
          props={[
            {
              name: 'defaultSelectedId',
              required: false,
              type: 'number',
              description: '초기에 선택될 아이템의 ID예요.',
            },
          ]}
        />

        <DocumentSection title="ListItem">
          <div>목록 아이템 컴포넌트예요. List 하위에서 사용해주세요.</div>
          <PropsTable
            props={[
              {
                name: 'id',
                required: true,
                type: 'number',
                description: '아이템의 고유 ID예요.',
              },
              {
                name: 'header',
                required: true,
                type: 'React.ReactNode',
                description: '아이템 왼쪽에 표시될 헤더 콘텐츠예요.',
              },
              {
                name: 'text',
                required: true,
                type: 'React.ReactNode',
                description: '아이템의 주요 텍스트예요.',
              },
              {
                name: 'description',
                required: true,
                type: 'React.ReactNode',
                description: '아이템의 설명 텍스트예요.',
              },
              {
                name: 'footer',
                required: true,
                type: 'React.ReactNode',
                description: '아이템 오른쪽에 표시될 푸터 콘텐츠예요.',
              },
              {
                name: 'onClick',
                required: false,
                type: '(p: { close: boolean }) => void',
                description: '클릭 시 호출되는 콜백이에요. close는 상세 패널이 닫히는지 여부예요.',
              },
            ]}
          />
        </DocumentSection>
        <DocumentSection title="Detail">
          <div>선택된 ListItem에 대한 상세 정보 뷰예요.</div>
          <PropsTable
            props={[
              {
                name: 'children',
                required: true,
                type: '(p: { id: number }) => React.ReactNode',
                description: '선택된 아이템의 ID를 받아 상세 콘텐츠를 렌더링하는 함수예요.',
              },
            ]}
          />
        </DocumentSection>
      </DocumentSection>

      <DocumentSection className="h-full flex-1" title="예시">
        <DocumentBlock className="flex h-full overflow-hidden p-6">
          <DetailList defaultSelectedId={1}>
            <DetailList.List>
              {MOCK_ITEMS.map((item) => (
                <DetailList.ListItem
                  description={<span className="text-neutralSubtle">{item.imageUrl}</span>}
                  footer={
                    <div className="text-13 text-neutralSubtle flex items-center gap-3 pr-2.5">
                      <div>{formatTemplates['(2024년)? 2월 3일, 오후 10:23'](item.updatedAt)}</div>
                      <div className="text-grey200">|</div>
                      <div className={deploymentStatus({ state: item.state })}>
                        배포 {DeploymentStateKRNameMap[item.state]}
                      </div>
                    </div>
                  }
                  header={
                    <div className="text-violet600 text-15 flex w-8 items-center justify-center font-semibold">
                      {item.id}
                    </div>
                  }
                  id={item.id}
                  key={item.id}
                  text={
                    <div className="flex items-center gap-2">
                      {item.domainName}:{item.port}
                      {2 === item.id && (
                        <div className="bg-violet600 flex items-center gap-1 rounded-full py-0.5 pr-2 pl-1.5 text-[11px]">
                          <MdOutlineArrowCircleUp className="size-4" />
                          배포
                        </div>
                      )}
                    </div>
                  }
                />
              ))}
            </DetailList.List>
            <DetailList.Detail>
              {({ id }) => {
                const item = MOCK_ITEMS.find((i) => i.id === id);
                if (!item) {
                  return null;
                }
                return (
                  <ApplicationDeploymentDetail deployment={item} isRecentApproved={2 === item.id} />
                );
              }}
            </DetailList.Detail>
          </DetailList>
        </DocumentBlock>
        <CodeBlock>
          {`<DetailList defaultSelectedId={1}>
  <DetailList.List>
    {items.map((item) => (
      <DetailList.ListItem
        key={item.id}
        id={item.id}
        header={<div>{item.id}</div>}
        text={<div>{item.name}</div>}
        description={<span>{item.version}</span>}
        footer={<div>{item.status}</div>}
      />
    ))}
  </DetailList.List>
  <DetailList.Detail>
    {({ id }) => {
      const item = items.find((i) => i.id === id);
      if (!item) return null;
      return <ItemDetail item={item} />;
    }}
  </DetailList.Detail>
</DetailList>`}
        </CodeBlock>
      </DocumentSection>
    </DocumentPage>
  );
};
