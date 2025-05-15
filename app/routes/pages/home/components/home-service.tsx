import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

import InDropUp from '~/components/animation/in-drop-up';
import useMediaQuery, { MediaQuery } from '~/hooks/use-media-query';

export default function HomeService() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, layoutEffect: false });
  const right = useTransform(scrollYProgress, [0, 1], ['0px', '150px']);
  const isMobile = useMediaQuery(MediaQuery.MOBILE);

  return (
    <section className="h-[1015px] desktop:h-[1687px]" ref={ref}>
      <div className="container flex h-full py-[100px] desktop:px-[46px] desktop:pt-[250px] desktop:pb-[165px]">
        {isMobile ? (
          <div>
            <InDropUp>
              <h2 className="mb-[10px] text-[18px] leading-[1.3] font-[700] text-[#3182f6]">
                홈 · 소비
              </h2>
              <p className="text-[28px] leading-[1.4] font-[700] text-[#191f28]">
                내 돈 관리,
                <br />
                지출부터 일정까지
                <br />
                똑똑하게
              </p>
            </InDropUp>
            <motion.div className="relative flex w-[650px]" style={{ right }}>
              <div>
                <img
                  className="absolute top-[45px] left-[0px] w-[183px]"
                  src="/images/home-service-1.png"
                  alt="home-service-1"
                />
                <img
                  className="relative left-[-70px] w-[600px]"
                  src="/images/iphone.png"
                  alt="iphone"
                />
              </div>
              <div>
                <img
                  className="absolute top-[55px] left-[285px] w-[183px]"
                  src="/images/home-service-2.png"
                  alt="home-service-2"
                />
                <img
                  className="relative left-[-110px] w-[600px]"
                  src="/images/iphone.png"
                  alt="iphone"
                />
              </div>
            </motion.div>
            <InDropUp>
              <p
                className="pt-[10px] text-[17px] leading-[1.5] font-[600]"
                style={{ color: 'rgb(51, 61, 75)' }}
              >
                토스에 계좌와 카드를 연결해 보세요.
                <br />
                계좌 잔액, 대출·투자 내역은 기본,
                <br />
                일자별 소비와 수입까지 한 번에 볼 수 있어요.
              </p>
            </InDropUp>
          </div>
        ) : (
          <>
            <div className="flex-1">
              <InDropUp>
                <h2 className="mb-[30px] text-[28px] leading-[1.3] font-[700] text-[#3182f6]">
                  홈 · 소비
                </h2>
                <p className="text-[50px] leading-[1.4] font-[700] text-[#191f28]">
                  내 돈 관리,
                  <br />
                  지출부터 일정까지
                  <br />
                  똑똑하게
                </p>
              </InDropUp>
              <InDropUp className="relative">
                <img
                  className="absolute top-[75px] left-[32px] w-[275px]"
                  src="/images/home-service-1.png"
                  alt="home-service-1"
                />
                <img
                  className="relative left-[-70px] w-[600px]"
                  src="/images/iphone.png"
                  alt="iphone"
                />
              </InDropUp>
            </div>
            <div className="flex flex-1 flex-col items-end">
              <InDropUp className="relative">
                <img
                  className="absolute top-[75px] left-[92px] w-[275px]"
                  src="/images/home-service-2.png"
                  alt="home-service-2"
                />
                <img
                  className="relative left-[-10px] w-[600px]"
                  src="/images/iphone.png"
                  alt="iphone"
                />
              </InDropUp>
              <InDropUp>
                <p className="text-[rgb(51, 61, 75)] pt-[30px] text-[23px] leading-[1.5] font-[600]">
                  토스에 계좌와 카드를 연결해 보세요.
                  <br />
                  계좌 잔액, 대출·투자 내역은 기본,
                  <br />
                  일자별 소비와 수입까지 한 번에 볼 수 있어요.
                </p>
              </InDropUp>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
