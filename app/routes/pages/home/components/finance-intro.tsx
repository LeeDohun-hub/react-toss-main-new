import { motion, useScroll, useTransform } from 'motion/react';

interface Props {
  ref: React.RefObject<HTMLDivElement>;
}

export default function FinanceIntro({ ref }: Props) {
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

  return (
    <section className="flex h-[800px] bg-[url('/images/finance-bg.jpg')] bg-cover bg-center">
      <motion.div className="grow-1 bg-white" style={{ clipPath: leftClip }} />
      <div className="container flex h-full items-center justify-center">
        <h1 className="text-[80px] font-[700] text-white">꼭 필요했던 금융</h1>
      </div>
      <motion.div className="grow-1 bg-white" style={{ clipPath: rightClip }} />
    </section>
  );
}
