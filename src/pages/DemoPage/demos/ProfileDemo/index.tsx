import { ProfileSection } from '@/pages/DemoPage/demos/ProfileDemo/ProfileSection';

export const ProfileDemo = () => {
  return (
    <div className="flex flex-col gap-20">
      <div className="text-neutralMuted font-medium">
        내 정보 화면의 UI예요. 직접 수정해볼 수 있어요.
      </div>
      <div className="mx-auto w-full max-w-200">
        <ProfileSection />
      </div>
    </div>
  );
};
