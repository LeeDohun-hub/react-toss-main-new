import { motion, useScroll, useTransform } from 'motion/react';

import useMediaQuery, { MediaQuery } from '~/hooks/use-media-query';

interface Props {
  ref: React.RefObject<HTMLDivElement>;
}

export default function FinanceIntro({ ref }: Props) {
  const isMobile = useMediaQuery(MediaQuery.MOBILE);

  const { scrollYProgress } = useScroll({ target: ref, layoutEffect: false });
  const leftClip = useTransform(
    scrollYProgress,
    [0.65, 1],
    ['inset(0% 0% 0% 0%)', 'inset(0% 100% 0% 0%)'],
  );
  const rightClip = useTransform(
    scrollYProgress,
    [0.65, 1],
    ['inset(0% 0% 0% 0%)', 'inset(0% 0% 0% 100%)'],
  );

  return !isMobile ? (
    <section className="flex h-[800px] bg-[url('/images/finance-bg.jpg')] bg-cover bg-center">
      <motion.div className="grow-1 bg-white" style={{ clipPath: leftClip }} />
      <div className="container flex h-full items-center justify-center">
        <h1 className="text-[80px] font-[700] text-white">꼭 필요했던 금융</h1>
      </div>
      <motion.div className="grow-1 bg-white" style={{ clipPath: rightClip }} />
    </section>
  ) : (
    <section className="mx-auto flex h-[665px] max-w-[370px] bg-[url('/images/finance-bg.jpg')] bg-cover bg-center">
      <div className="container flex h-full items-center justify-center">
        <h1 className="text-center text-[40px] font-[700] text-white">
          꼭 필요했던
          <br />
          금융
        </h1>
      </div>
    </section>
  );
}
