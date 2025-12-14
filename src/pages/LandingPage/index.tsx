import { Link } from 'react-router-dom';

import { Button } from '@/components/Button';
import { Header } from '@/components/layouts/Header';
import { VerticalDivider } from '@/components/VerticalDivider';

export const LandingPage = () => {
  return (
    <div className="bg-background flex min-h-screen flex-col">
      <Header />

      <main className="flex flex-1 flex-col pt-14">
        <section className="flex flex-col items-center justify-center px-6 py-24">
          <div className="flex max-w-4xl flex-col items-center gap-6 text-center">
            <img alt="logo" className="h-8" src="/Logo.png" />
            <h1 className="text-17 text-neutralMuted mt-6 leading-[1.75]">
              유어슈 온프렘 배포 툴 Yourssu Infra System에서 사용하는
              <br />
              컴포넌트 문서와 UI 데모를 체험할 수 있어요.
            </h1>

            <div className="mt-6 flex gap-4">
              <Link to="/components">
                <Button size="lg" variant="primary">
                  컴포넌트 보기
                </Button>
              </Link>
              <Link to="/demo">
                <Button size="lg" variant="secondary">
                  데모 보기
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="border-grey100 border-t px-6 py-16">
          <div className="mx-auto flex max-w-5xl gap-12">
            <div className="flex w-full flex-col gap-3">
              <h3 className="text-lg font-semibold">생산성</h3>
              <p className="text-neutralMuted text-15 leading-relaxed">
                쏟아지는 백오피스 데이터를 DetailList, ListItem 등의 컴포넌트를 사용하여 빠르게
                데이터를 표시할 수 있어요.
              </p>
            </div>
            <VerticalDivider />
            <div className="flex w-full flex-col gap-3">
              <h3 className="text-lg font-semibold">재사용성</h3>
              <p className="text-neutralMuted text-15 leading-relaxed">
                어디에든 적용할 수 있도록 최소 기능 단위로 컴포넌트를 제작해두었어요.
              </p>
            </div>
            <VerticalDivider />
            <div className="flex w-full flex-col gap-3">
              <h3 className="text-lg font-semibold">타입 시스템</h3>
              <p className="text-neutralMuted text-15 leading-relaxed">
                type-safe한 인터페이스 작성으로 컴포넌트 사용 시 발생할 수 있는 예상치 못한 에러를
                최소화할 수 있어요.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
