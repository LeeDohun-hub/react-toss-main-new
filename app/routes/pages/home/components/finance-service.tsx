import { useScroll } from 'motion/react';
import { useRef } from 'react';

import ScrollOpacity from '~/components/animation/scroll-opacity';

export default function FinanceService() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, layoutEffect: false });

  return (
    <section className="h-auto desktop:h-[4232px]" ref={ref}>
      <div className="relative container py-[100px] desktop:pt-[250px]">
        <h1 className="mb-[140px] text-[36px] leading-[1.4] font-[700] text-[#191f28] desktop:text-[60px]">
          금융을 넘어
          <br />
          일상을 더 편리하게
        </h1>
        {/* 첫번째 영역 */}
        <div className="mb-[210px]">
          <ScrollOpacity
            scrollYProgress={scrollYProgress}
            startScrollY={0}
            endScrollY={0.015}
          >
            <img
              src="/images/finance-01.jpg"
              alt="finance"
              className="mx-auto mb-[60px] w-[740px]"
            />
          </ScrollOpacity>
          <ScrollOpacity
            scrollYProgress={scrollYProgress}
            startScrollY={0.015}
            endScrollY={0.025}
          >
            <h2 className="mb-[24px] text-[26px] leading-[1.3] font-[700] text-[#191f28] desktop:text-[40px]">
              세금 납부, 등본 발급까지
              <br />
              <span className="text-[#b0b8c1]">토스로 한 번에</span>
            </h2>
            <p className="text-[18px] leading-[1.5] font-[600] text-[#333d4b] desktop:text-[20px]">
              놓치기 쉬운 세금 납부 및 환급은 물론
              <br />
              발급을 받을 때마다 귀찮았던 주민등록 등초본까지.
              <br />
              이제 토스로 편하게 신청하고 받아보세요.
            </p>
          </ScrollOpacity>
        </div>
        {/* 두번째 영역 */}
        <div className="mb-[220px] flex flex-col gap-[40px] desktop:flex-row">
          <div>
            <ScrollOpacity
              scrollYProgress={scrollYProgress}
              startScrollY={0.35}
              endScrollY={0.5}
            >
              <img
                src="/images/finance-02-01.jpg"
                alt="finance"
                className="mb-[40px] w-[672px]"
              />
            </ScrollOpacity>
            <ScrollOpacity
              scrollYProgress={scrollYProgress}
              startScrollY={0.5}
              endScrollY={0.8}
              className="text-[26px] leading-[1.3] font-[700] text-[#191f28] desktop:text-[40px]"
            >
              보험
              <br />
              <span className="text-[#b0b8c1]">
                조회부터 상담,
                <br />
                병원비 돌려받기를 간편하게
              </span>
            </ScrollOpacity>
          </div>
          <div className="mt-[122px]">
            <ScrollOpacity
              scrollYProgress={scrollYProgress}
              startScrollY={0.35}
              endScrollY={0.5}
            >
              <img
                src="/images/finance-02-02.jpg"
                alt="finance"
                className="mb-[35px] w-[336px]"
              />
            </ScrollOpacity>
            <ScrollOpacity
              scrollYProgress={scrollYProgress}
              startScrollY={0.5}
              endScrollY={0.8}
              className="text-[18px] leading-[1.5] font-[600] text-[#333d4b] desktop:text-[19px]"
            >
              또래보다 보험료는 적절하게 내고 있는지,
              <br />낸 만큼 보장받고 있는지 확인해 보세요.
              <br />
              전문가와의 상담을 통해 내게 딱 맞는 보험을
              <br />
              추천 받고, 병원비를 간편하게 청구할 수<br />
              있어요.
            </ScrollOpacity>
          </div>
        </div>
        {/* 세번째 영역 */}
        <div>
          <ScrollOpacity
            scrollYProgress={scrollYProgress}
            startScrollY={0.7}
            endScrollY={1}
          >
            <img
              src="/images/finance-03.jpg"
              alt="finance"
              className="mb-[50px] w-full"
            />
          </ScrollOpacity>
          <ScrollOpacity
            scrollYProgress={scrollYProgress}
            startScrollY={0.95}
            endScrollY={1}
            className="flex flex-col justify-between gap-[40px] desktop:flex-row desktop:gap-0"
          >
            <h2 className="text-[26px] leading-[1.3] font-[700] text-[#191f28] desktop:text-[40px]">
              내 부동산 · 자동차
              <br />
              <span className="text-[#b0b8c1]">정기적으로 관리해보세요</span>
            </h2>
            <p className="text-[18px] leading-[1.5] font-[600] text-[#333d4b] desktop:text-[19px]">
              집과 자동차의 공통점은 잘 사서, 잘 관리하고, 잘 팔아야 한다는 것.
              <br />
              시세조회부터 아파트 관리비 납부, 자동차 보험료 조회까지 부동산과
              <br />
              자동차 관리도 토스에서 시작해 보세요.
            </p>
          </ScrollOpacity>
        </div>
      </div>
    </section>
  );
}
