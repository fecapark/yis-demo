import { Table } from '@/components/Table';
import { formatTemplates } from '@/utils/date';

import {
  CodeBlock,
  DocumentBlock,
  DocumentPage,
  DocumentSection,
  PropsTable,
} from '../components/DocumentLayout';

export const TableDocument = () => {
  return (
    <DocumentPage>
      <div>데이터를 행과 열로 나열해서 보여주는 테이블 컴포넌트예요.</div>

      <DocumentSection title="인터페이스">
        <CodeBlock>
          {`// 서브 컴포넌트
Table.Head: { headers: React.ReactNode[] }
Table.Body: React.PropsWithChildren<unknown>
Table.Row: React.HTMLAttributes<HTMLTableRowElement> & { index: number }
Table.Cell: React.HTMLAttributes<HTMLTableCellElement> & {
  edge?: 'left' | 'right';
  innerClassName?: string;
}`}
        </CodeBlock>
      </DocumentSection>

      <DocumentSection title="파라미터">
        <DocumentSection title="Table.Head">
          <PropsTable
            props={[
              {
                name: 'headers',
                required: true,
                type: 'React.ReactNode[]',
                description: '테이블 헤더에 표시될 컬럼명 배열이에요.',
              },
            ]}
          />
        </DocumentSection>
        <DocumentSection title="Table.Row">
          <PropsTable
            props={[
              {
                name: 'index',
                required: true,
                type: 'number',
                description: '행의 인덱스예요. 짝수/홀수 행에 따른 배경색 스타일링에 사용돼요.',
              },
            ]}
          />
        </DocumentSection>
        <DocumentSection title="Table.Cell">
          <PropsTable
            props={[
              {
                name: 'edge',
                required: false,
                type: "'left' | 'right'",
                description:
                  '셀이 행의 양 끝에 있는지 지정해요. 자동으로 설정되므로 직접 지정할 필요 없어요.',
              },
              {
                name: 'innerClassName',
                required: false,
                type: 'string',
                description: '셀 내부 div에 적용할 추가 클래스예요.',
              },
            ]}
          />
        </DocumentSection>
      </DocumentSection>

      <DocumentSection title="예시">
        <DocumentBlock>
          <Table>
            <Table.Head headers={['이름', '이메일', '소속 파트', '가입일', '활성 여부']} />
            <Table.Body>
              {users.map((user, i) => (
                <Table.Row index={i} key={user.name}>
                  <Table.Cell>{user.name}</Table.Cell>
                  <Table.Cell>{user.email || '이메일 없음'}</Table.Cell>
                  <Table.Cell>{user.part}</Table.Cell>
                  <Table.Cell>{formatTemplates['2024-01-01'](user.joinDate)}</Table.Cell>
                  <Table.Cell className={user.isActive ? 'text-green500' : 'text-yellow500'}>
                    {user.isActive ? '활성' : '비활성'}
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </DocumentBlock>
        <CodeBlock>
          {`<Table>
  <Table.Head headers={['이름', '이메일', '소속 파트', '가입일', '활성 여부']} />
  <Table.Body>
    {users.map((user, i) => (
      <Table.Row key={user.name} index={i}>
        <Table.Cell>{user.name}</Table.Cell>
        <Table.Cell>{user.email}</Table.Cell>
        <Table.Cell>{user.part}</Table.Cell>
        <Table.Cell>{formatDate(user.joinDate)}</Table.Cell>
        <Table.Cell>{user.isActive ? '활성' : '비활성'}</Table.Cell>
      </Table.Row>
    ))}
  </Table.Body>
</Table>`}
        </CodeBlock>
      </DocumentSection>
    </DocumentPage>
  );
};

const users = [
  {
    name: '홍길동',
    email: 'hong@gmail.com',
    part: '백엔드',
    joinDate: '2025-01-15',
    isActive: true,
  },
  {
    name: '김철수',
    email: 'kim@gmail.com',
    part: '프론트엔드',
    joinDate: '2025-11-30',
    isActive: false,
  },
  {
    name: '이영희',
    email: 'lee@gmail.com',
    part: '디자인',
    joinDate: '2025-03-22',
    isActive: true,
  },
  {
    name: '박민수',
    email: 'park@gmail.com',
    part: 'HR',
    joinDate: '2025-05-22',
    isActive: true,
  },
];
