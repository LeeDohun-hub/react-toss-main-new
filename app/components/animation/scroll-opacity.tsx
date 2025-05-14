import { motion, MotionValue, useTransform } from 'motion/react';

interface Props {
  children?: React.ReactNode;
  className?: string;
  scrollYProgress: MotionValue<number>;
  startScrollY: number;
  endScrollY: number;
}

export default function ScrollOpacity({
  children,
  className,
  scrollYProgress,
  startScrollY,
  endScrollY,
}: Props) {
  const opacity = useTransform(scrollYProgress, [startScrollY, endScrollY], [0.4, 1]);

  return (
    <motion.div className={className} style={{ opacity }}>
      {children}
    </motion.div>
  );
}
