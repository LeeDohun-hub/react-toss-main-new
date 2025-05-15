import InDropUp from '~/components/animation/in-drop-up';

export default function CreditService() {
  return (
    <section className="h-auto bg-[#f9fafb] desktop:h-[1687px]">
      <div className="container py-[100px] desktop:pt-[250px]">
        <InDropUp>
          <h1 className="mb-[10px] text-[18px] leading-[1.3] font-[700] text-[#3182f6] desktop:mb-[30px] desktop:text-[28px]">
            신용
          </h1>
          <p className="mb-[60px] text-[28px] leading-[1.4] font-[700] text-[#191f28] desktop:mb-[80px] desktop:text-[50px]">
            금융 생활의 첫 걸음,
            <br />
            신용점수를 미리
            <br />
            무료로 관리하세요
          </p>
        </InDropUp>
        <div className="grid grid-cols-1 desktop:grid-cols-2">
          <InDropUp className="mb-[20px] h-[220px] desktop:mb-[30px] desktop:h-[400px]">
            <img
              src="/images/credit-point.png"
              alt="credit-point"
              className="mb-[20px] w-[80px] desktop:mb-[30px] desktop:w-[120px]"
            />
            <div>
              <h2
                className="mb-[10px] text-[24px] leading-[1.4] font-[700] desktop:text-[28px]"
                style={{ color: 'rgb(51, 61, 75)' }}
              >
                내 신용점수
              </h2>
              <p
                className="text-[15px] leading-[1.5] font-[600] desktop:text-[22px]"
                style={{ color: 'rgb(107, 118, 132)' }}
              >
                언제 어디서든, 원할 때 간편하게 KCB,
                <br />
                NICE 신용점수를 한 곳에서 확인할 수<br />
                있어요.
              </p>
            </div>
          </InDropUp>
          <InDropUp className="mb-[20px] h-[220px] desktop:mb-[30px] desktop:h-[400px]">
            <img
              src="/images/credit-point-up.png"
              alt="credit-point-up"
              className="mb-[20px] w-[80px] desktop:mb-[30px] desktop:w-[120px]"
            />
            <div>
              <h2
                className="mb-[10px] text-[24px] leading-[1.4] font-[700] desktop:text-[28px]"
                style={{ color: 'rgb(51, 61, 75)' }}
              >
                신용점수 올리기
              </h2>
              <p
                className="text-[15px] leading-[1.5] font-[600] desktop:text-[22px]"
                style={{ color: 'rgb(107, 118, 132)' }}
              >
                통신비, 일반 납부내역 등의 서류를
                <br />
                토스에서 바로 제출해 신용점수를 올릴 수<br />
                있어요.
              </p>
            </div>
          </InDropUp>
          <InDropUp className="mb-[20px] h-[220px] desktop:mb-[30px] desktop:h-[400px]">
            <img
              src="/images/bell.png"
              alt="bell"
              className="mb-[20px] w-[80px] desktop:mb-[30px] desktop:w-[120px]"
            />
            <div>
              <h2
                className="mb-[10px] text-[24px] leading-[1.4] font-[700] desktop:text-[28px]"
                style={{ color: 'rgb(51, 61, 75)' }}
              >
                신용관리 알림
              </h2>
              <p
                className="text-[15px] leading-[1.5] font-[600] desktop:text-[22px]"
                style={{ color: 'rgb(107, 118, 132)' }}
              >
                신용점수에 변동이 생기면 토스가 알람을 보내드려요.
                <br />
                나의 신용점수가 바뀔 때마다 바로 확인하세요.
              </p>
            </div>
          </InDropUp>
          <InDropUp className="mb-[20px] h-[220px] desktop:mb-[30px] desktop:h-[400px]">
            <img
              src="/images/bulb.png"
              alt="bulb"
              className="mb-[20px] w-[80px] desktop:mb-[30px] desktop:w-[120px]"
            />
            <div>
              <h2
                className="mb-[10px] text-[24px] leading-[1.4] font-[700] desktop:text-[28px]"
                style={{ color: 'rgb(51, 61, 75)' }}
              >
                신용관리 팁
              </h2>
              <p
                className="text-[15px] leading-[1.5] font-[600] desktop:text-[22px]"
                style={{ color: 'rgb(107, 118, 132)' }}
              >
                신용점수 관리가 막막하다면?
                <br />
                신용관리 팁 콘텐츠를 한번 읽어보세요.
              </p>
            </div>
          </InDropUp>
        </div>
      </div>
    </section>
  );
}
