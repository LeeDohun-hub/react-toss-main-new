import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

import InDropUp from '~/components/animation/in-drop-up';

export default function LoanService() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '0px 0px 100px 0px' });

  return (
    <section className="h-[1326px]">
      <div className="container flex pt-[250px]">
        <div>
          <InDropUp className="mb-[210px]">
            <h1 className="mb-[20px] text-[28px] leading-[1.3] font-[700] text-[#3182f6]">
              대출
            </h1>
            <p className="text-[50px] leading-[1.4] font-[700] text-[#191f28]">
              여러 은행의 조건을
              <br />
              1분 만에
              <br />
              확인해보세요
            </p>
          </InDropUp>
          <div style={{ color: 'rgb(51, 61, 75)' }}>
            <div ref={ref}>
              <motion.h2
                className="text-[48px] leading-[1.5] font-[700]"
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.5 }}
              >
                한도는 높게,
              </motion.h2>
              <motion.h2
                className="text-[48px] leading-[1.5] font-[700]"
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 1 }}
              >
                금리는 <span className="text-[#8b96ab]">낮게,</span>
              </motion.h2>
              <motion.h2
                className="mb-[30px] text-[48px] leading-[1.5] font-[700]"
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 1.5 }}
              >
                부담은 <span className="text-[#d1d6db]">적게.</span>
              </motion.h2>
            </div>
            <InDropUp className="text-[23px] leading-[1.5] font-[600]">
              앉은 자리에서 여러 은행의 한도와 금리를 비교하고
              <br />
              내게 꼭 맞는 대출을 찾아보세요.
              <br />
              신용, 비상금, 대환, 주택담보대출 모두 가능해요.
            </InDropUp>
          </div>
        </div>
        <div className="flex-1">
          <InDropUp className="relative">
            <img
              className="absolute top-[95px] left-[197px] w-[345px]"
              src="/images/loan-service.png"
              alt="load-service"
            />
            <img
              className="relative left-[70px] w-[600px]"
              src="/images/iphone.png"
              alt="iphone"
            />
          </InDropUp>
        </div>
      </div>
    </section>
  );
}
