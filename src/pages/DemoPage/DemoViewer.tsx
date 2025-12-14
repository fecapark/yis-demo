import { useParams } from 'react-router-dom';

import { demoMap, demoOrder, type DemoSection } from './route';

export const DemoViewer = () => {
  const { demo } = useParams<{ demo: string }>();

  let Comp: React.ComponentType | undefined;
  for (const section of demoOrder) {
    const sectionMap = demoMap[section as DemoSection];
    if (demo && demo in sectionMap) {
      Comp = sectionMap[demo as keyof typeof sectionMap] as React.ComponentType;
      break;
    }
  }

  if (!Comp) {
    return <div className="text-grey500">데모를 찾을 수 없습니다: "{demo}"</div>;
  }

  return (
    <div className="w-full">
      <Comp />
    </div>
  );
};
