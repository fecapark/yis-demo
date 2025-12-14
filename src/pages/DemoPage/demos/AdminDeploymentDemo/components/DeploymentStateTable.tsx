import { invert } from 'es-toolkit';
import { useState } from 'react';

import type { ValueOf } from '@/utils/type';

import { Tab } from '@/components/Tab';
import { DeploymentStateKRNameMap } from '@/pages/ComponentsPage/documents/DetailListComponents/type';
import { DeploymentStateList } from '@/pages/DemoPage/demos/AdminDeploymentDemo/components/DeploymentStateList';

export const DeploymentStateTable = () => {
  const [search, setSearch] = useState<{
    id: string | undefined;
    tab: ValueOf<typeof DeploymentStateKRNameMap>;
  }>({
    id: undefined,
    tab: '요청',
  });

  const onTabChange = (tab: ValueOf<typeof DeploymentStateKRNameMap>) => {
    setSearch({ id: undefined, tab });
  };

  return (
    <div className="w-full">
      <Tab defaultTab={search.tab} onTabChange={onTabChange} tabs={['요청', '거절', '승인']}>
        {({ tab }) => (
          <div className="pt-2.5">
            <DeploymentStateList
              setActiveDeploymentId={(id) => setSearch((prev) => ({ ...prev, id }))}
              state={invert(DeploymentStateKRNameMap)[tab]}
            />
          </div>
        )}
      </Tab>
    </div>
  );
};
