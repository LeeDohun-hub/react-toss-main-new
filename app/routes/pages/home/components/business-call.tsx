import { Button } from '~/components/ui/button';

export default function BusinessCall() {
  return (
    <section className="h-[306px] bg-[#f5f6f8;] py-[33px]">
      <div className="container flex items-center justify-around">
        <div>
          <h2 className="mb-[16px] text-[36px] leading-[1.3] font-[700] text-[#333d4b]">
            비즈니스 고객 제보
          </h2>
          <p
            className="mb-[24px] text-[18px] leading-[1.5] font-[400]"
            style={{ color: 'rgba(0, 19, 43, 0.58)' }}
          >
            토스팀과의 협업 중 불편을 느끼셨나요?
            <br />
            지금 바로 알려주세요.
          </p>
          <Button variant="secondary">접수하기</Button>
        </div>
        <div className="w-[240px]">
          <img src="/images/business-call.png" alt="business-call" />
        </div>
      </div>
    </section>
  );
}
