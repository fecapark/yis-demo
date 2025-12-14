import { useParams } from 'react-router-dom';

import { componentMap, componentOrder, type ComponentSection } from './type';

export const ComponentViewer = () => {
  const { component } = useParams<{ component: string }>();

  // Find the component in componentMap
  let Comp: React.ComponentType | undefined;
  for (const section of componentOrder) {
    const sectionMap = componentMap[section as ComponentSection];
    if (component && component in sectionMap) {
      Comp = sectionMap[component as keyof typeof sectionMap] as React.ComponentType;
      break;
    }
  }

  if (!Comp) {
    return <div className="text-grey500">Component demo not found for "{component}".</div>;
  }

  return (
    <div className="w-full">
      <Comp />
    </div>
  );
};
