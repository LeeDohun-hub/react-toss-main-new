import { Button } from '~/components/ui/button';
import useMediaQuery, { MediaQuery } from '~/hooks/use-media-query';

export default function BusinessCall() {
  const isMobile = useMediaQuery(MediaQuery.MOBILE);

  return (
    <section className="h-[306px] bg-[#f5f6f8;] py-[33px]">
      <div className="container flex items-center desktop:justify-around">
        <div>
          <h2 className="mb-[16px] text-[30px] leading-[1.3] font-[700] text-[#333d4b] desktop:text-[36px]">
            비즈니스 고객 제보
          </h2>
          <p
            className="mb-[24px] text-[17px] leading-[1.5] font-[400] desktop:text-[18px]"
            style={{ color: 'rgba(0, 19, 43, 0.58)' }}
          >
            토스팀과의 협업 중 불편을 느끼셨나요?
            <br />
            지금 바로 알려주세요.
          </p>
          <Button variant="secondary">접수하기</Button>
        </div>
        {!isMobile && (
          <div className="w-[240px]">
            <img src="/images/business-call.png" alt="business-call" />
          </div>
        )}
      </div>
    </section>
  );
}
