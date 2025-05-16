import InDropUp from '~/components/animation/in-drop-up';
import useMediaQuery, { MediaQuery } from '~/hooks/use-media-query';

export default function InvestService() {
  const isMobile = useMediaQuery(MediaQuery.MOBILE);

  return (
    <section className="h-auto desktop:h-[1724px]">
      <div className="container py-[100px] desktop:pt-[250px]">
        <InDropUp>
          <h1 className="mb-[10px] text-[18px] leading-[1.3] font-[700] text-[#3182f6] desktop:mb-[30px] desktop:text-[28px]">
            투자
          </h1>
          <p className="mb-[20px] text-[28px] leading-[1.4] font-[700] text-[#191f28] desktop:mb-[60px] desktop:text-[50px]">
            투자,
            <br />
            모두가 할 수 있도록
          </p>
        </InDropUp>
        <div className="text-[15px] leading-[1.5] font-[600] desktop:text-[22px]">
          <div
            className="flex flex-col desktop:flex-row"
            style={{ color: 'rgb(51, 61, 75)' }}
          >
            <InDropUp className="flex flex-1 flex-col items-start justify-end desktop:flex-row desktop:items-center">
              이해하기 쉬운 용어
              {!isMobile && <br />}
              설명이 필요 없는
              {!isMobile && <br />}
              직관적인 화면 구성
              {isMobile && <br />}
              {isMobile && (
                <span>
                  송금처럼 쉬운 구매 경험 그리고 투자 판단에 도움을 주는 콘텐츠까지
                </span>
              )}
            </InDropUp>
            <div className="relative w-[430px] flex-2 desktop:w-auto">
              <img
                className="absolute top-[60px] left-[88px] w-[250px]"
                src="/images/toss-stock.png"
                alt="toss-stock"
              />
              <img className="relative w-[600px]" src="/images/iphone.png" alt="iphone" />
            </div>
            {!isMobile && (
              <InDropUp className="flex-1 pt-[150px]">
                송금처럼 쉬운 구매 경험
                <br />
                그리고 투자 판단에
                <br />
                도움을 주는 콘텐츠까지
                <br />
              </InDropUp>
            )}
          </div>
          <InDropUp className="text-center">
            별도 앱 설치 없이 토스에서 바로,
            <br />
            토스증권으로 나만의 투자를 시작해 보세요.
          </InDropUp>
        </div>
      </div>
    </section>
  );
}
