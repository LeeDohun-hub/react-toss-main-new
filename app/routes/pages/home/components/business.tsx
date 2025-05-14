import type React from 'react';

import InDropUp from '~/components/animation/in-drop-up';
import { Button } from '~/components/ui/button';

interface ServiceProps {
  title: string;
  description: React.ReactNode;
  buttonText: string;
}

const Service = ({ title, description, buttonText }: ServiceProps) => {
  return (
    <div className="w-[330px]">
      <div>
        <h3 className="mb-[12px] text-[30px] leading-[1.3] font-[700] text-white">
          {title}
        </h3>
      </div>
      <div>
        <p className="mb-[38px] text-[20px] leading-[1.6] font-[600] text-[#b0b8c1]">
          {description}
        </p>
      </div>
      <div>
        <Button>{buttonText}</Button>
      </div>
    </div>
  );
};

export default function Business() {
  return (
    <section className="h-[1927px] bg-black">
      <InDropUp className="pt-[100px]">
        <img src="/images/devices.png" alt="devices" className="w-full" />
      </InDropUp>
      <InDropUp className="text-center">
        <h1 className="mb-[21px] text-[60px] leading-[1.4] font-[700] text-white">
          사업도 토스와 함께
        </h1>
        <p className="mb-[200px] text-[30px] leading-[1.4] font-[700] text-[#b0b8c1]">
          사업을 시작하셨나요?
          <br />
          사업의 시작부터 관리까지
          <br />
          이제 토스와 함께 하세요.
        </p>
      </InDropUp>
      <InDropUp className="flex justify-center px-[48px]">
        <div>
          <Service
            title="토스결제"
            description={
              <>
                합리적인 수수료,
                <br />
                간편한 결제 경험으로 비용은
                <br />
                절감하고 매출은 늘리세요.
              </>
            }
            buttonText="가맹점 문의하기"
          />
        </div>
        <div>
          <Service
            title="내 매출 장부"
            description={
              <>
                내 매출 장부 따로 관리할 필요 없어요.
                <br />
                총 매출, 총 입금, 총 지출을 보기 쉽게
                <br />
                알려드려요.
              </>
            }
            buttonText="자세히 알아보기"
          />
        </div>
        <div className="ml-[30px]">
          <Service
            title="토스페이먼츠"
            description={
              <>
                시작하기 어려웠던 온라인 비즈니스,
                <br />
                온라인 결제 토스페이먼츠와
                <br />
                함께 해보세요.
              </>
            }
            buttonText="홈페이지 바로가기"
          />
        </div>
        <div className="ml-[30px]">
          <Service
            title="토스플레이스"
            description={
              <>
                포스·주문·결제 시스템까지
                <br />
                오프라인 매장을 위한
                <br />
                모든 것이 준비되어 있어요.
              </>
            }
            buttonText="홈페이지 바로가기"
          />
        </div>
      </InDropUp>
    </section>
  );
}
