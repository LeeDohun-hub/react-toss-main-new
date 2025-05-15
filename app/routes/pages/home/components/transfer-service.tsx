import InDropUp from '~/components/animation/in-drop-up';
import AlwaysFree from '~/components/svg/always-free.svg?react';
import Shield from '~/components/svg/shield.svg?react';
import Timer from '~/components/svg/timer.svg?react';

export default function TransferService() {
  return (
    <section className="h-[1903px] bg-[#f9fafb] desktop:h-[2311px]">
      <div className="container h-full py-[100px] desktop:py-[250px]">
        <InDropUp className="mb-[80px]">
          <h2 className="mb-[10px] text-[18px] leading-[1.3] font-[700] text-[#3182f6] desktop:mb-[30px] desktop:text-[28px]">
            송금
          </h2>
          <p className="text-[28px] leading-[1.4] font-[700] text-[#191f28] desktop:text-[50px]">
            간편하고 안전하게
            <br />
            수수료는 평생 무료로,
            <br />
            이런 송금 써보셨나요?
          </p>
        </InDropUp>
        <div className="mb-[60px] flex flex-col justify-between pl-[38px] desktop:mb-[150px] desktop:flex-row desktop:pl-0">
          <InDropUp className="w-full desktop:w-[510px]">
            <h2 className="item-center mb-[10px] flex gap-1 text-[15px] leading-[1.4] font-[600] text-[#3182f6] desktop:text-[20px]">
              <div className="h-[24px] w-[24px]">
                <AlwaysFree />
              </div>
              평생 무료 송금
            </h2>
            <p className="mb-[20px] text-[24px] leading-[1.4] font-[700] text-[#191f28] desktop:text-[40px]">
              토스 평생 무료송금으로
              <br />
              모두의 금융에 자유를
            </p>
            <p
              className="text-[15px] leading-[1.5] font-[600] desktop:text-[22px]"
              style={{ color: 'rgb(107, 118, 132)' }}
            >
              누구에게 보내든 은행 상관 없이,
              <br />
              이제 토스와 함께 수수료 걱정 없이 송금하세요.
            </p>
          </InDropUp>
          <InDropUp className="w-full desktop:w-[510px]">
            <img src="/images/transfer-service-01.png" alt="transfer-service-01" />
          </InDropUp>
        </div>
        <div className="mb-[60px] flex flex-col-reverse justify-between pl-[38px] desktop:mb-[150px] desktop:flex-row desktop:pl-0">
          <InDropUp className="w-full desktop:w-[510px]">
            <img src="/images/transfer-service-02.png" alt="transfer-service-02" />
          </InDropUp>
          <InDropUp className="w-full desktop:w-[510px]">
            <h2 className="item-center mb-[10px] flex gap-1 text-[15px] leading-[1.4] font-[600] text-[#3182f6] desktop:text-[20px]">
              <div className="h-[24px] w-[24px]">
                <Shield />
              </div>
              사기계좌 조회
            </h2>
            <p className="mb-[20px] text-[24px] leading-[1.4] font-[700] text-[#191f28] desktop:text-[40px]">
              송금 전 사기 내역 조회로
              <br />
              피해를 미리 방지할 수 있어요
            </p>
            <p
              className="text-[15px] leading-[1.5] font-[600] desktop:text-[22px]"
              style={{ color: 'rgb(107, 118, 132)' }}
            >
              송금 전 토스가 알아서 사기 내역 조회를 해드려요.
              <br />
              상대방의 연락처 또는 계좌가 사기 계좌인지 조회해
              <br />
              안전하게 송금할 수 있어요.
            </p>
          </InDropUp>
        </div>
        <div className="flex flex-col justify-between pl-[38px] desktop:flex-row desktop:pl-0">
          <InDropUp className="w-full desktop:w-[510px]">
            <h2 className="item-center mb-[10px] flex gap-1 text-[15px] leading-[1.4] font-[600] text-[#3182f6] desktop:text-[20px]">
              <div className="h-[24px] w-[24px]">
                <Timer />
              </div>
              자동이체 예약
            </h2>
            <p className="mb-[20px] text-[24px] leading-[1.4] font-[700] text-[#191f28] desktop:text-[40px]">
              은행 점검 시간,
              <br />
              기다릴 필요 없어요
            </p>
            <p
              className="text-[15px] leading-[1.5] font-[600] desktop:text-[22px]"
              style={{ color: 'rgb(107, 118, 132)' }}
            >
              은행 점검 시간에는 자동이체 예약을 이용해보세요.
              <br />
              점검 시간이 끝나면 토스가 알아서 송금해드릴게요.
            </p>
          </InDropUp>
          <InDropUp className="w-full desktop:w-[510px]">
            <img src="/images/transfer-service-03.png" alt="transfer-service-03" />
          </InDropUp>
        </div>
      </div>
    </section>
  );
}
