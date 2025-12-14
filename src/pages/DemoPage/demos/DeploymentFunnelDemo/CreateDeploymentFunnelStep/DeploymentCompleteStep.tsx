import { Lottie } from '@toss/lottie';
import clsx from 'clsx';
import { type ComponentProps, useState } from 'react';
import { SwitchCase } from 'react-simplikit';

import type { CreateDeploymentFunnelSteps } from '@/pages/DemoPage/demos/DeploymentFunnelDemo/CreateDeploymentFunnelStep/type';

import { Dialog } from '@/components/Dialog';
import { useEffectOnce } from '@/hooks/useEffectOnce';

interface DeploymentCompleteStepProps {
  close: () => void;
  context:
    | CreateDeploymentFunnelSteps<'onlyCreateDeployment'>['배포요청_완료']
    | CreateDeploymentFunnelSteps<'withCreateApplication'>['배포요청_완료'];
}

interface ResultProps {
  description: string;
  lottieProps: ComponentProps<typeof Lottie>;
  title: string;
}

type ResultType = 'error' | 'loading' | 'success';

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

const Result = ({ lottieProps, description, title }: ResultProps) => {
  return (
    <div className="flex size-full flex-col items-center">
      <div className="flex h-[260px] w-full items-end justify-center">
        <Lottie autoPlay {...lottieProps} />
      </div>
      <div className="text-xl font-semibold">{title}</div>
      <div className="text-neutralMuted mt-2 text-sm">{description}</div>
    </div>
  );
};

export const DeploymentCompleteStep = ({ close }: DeploymentCompleteStepProps) => {
  const [result, setResult] = useState<ResultType>('loading');

  useEffectOnce(() => {
    const process = async () => {
      await delay(1500);
      setResult('success');
    };
    process();
  });

  return (
    <>
      <Dialog.Content className="h-[440px] w-[500px] pt-0!">
        <SwitchCase
          caseBy={{
            success: () => <Result {...ResultMap.success} />,
            loading: () => <Result {...ResultMap.loading} />,
            error: () => <Result {...ResultMap.error} />,
          }}
          value={result}
        />
      </Dialog.Content>
      <Dialog.ButtonGroup>
        <Dialog.Button
          className={clsx(result === 'loading' && 'invisible')}
          onClick={close}
          variant="primary"
        >
          확인
        </Dialog.Button>
      </Dialog.ButtonGroup>
    </>
  );
};

const ResultMap: Record<
  ResultType,
  { description: string; lottieProps: ComponentProps<typeof Lottie>; title: string }
> = {
  success: {
    title: '배포 요청을 보냈어요',
    description: '승인까지 최대 하루 정도 걸릴 수 있어요.',
    lottieProps: {
      src: '/lotties/success.lottie.json',
      className: 'w-[80%] h-[180px]',
    },
  },
  loading: {
    title: '배포 요청을 보내고 있어요',
    description: '몇 초 정도 기다리면 배포가 완료돼요.',
    lottieProps: {
      src: '/lotties/bouncy-loading.lottie.json',
      loop: true,
      speed: 1.1,
      className: 'w-full h-[220px]',
    },
  },
  error: {
    title: '배포 요청에 실패했어요',
    description: '잠시 후 다시 시도해주세요.',
    lottieProps: {
      src: '/lotties/error.lottie.json',
      className: 'w-[60%] pb-4',
    },
  },
};
