import InDropUp from '~/components/animation/in-drop-up';

export default function InvestService() {
  return (
    <section className="h-[1724px]">
      <div className="container pt-[250px]">
        <InDropUp>
          <h1 className="mb-[30px] text-[28px] leading-[1.3] font-[700] text-[#3182f6]">
            투자
          </h1>
          <p className="text-[50px] leading-[1.4] font-[700] text-[#191f28]">
            투자,
            <br />
            모두가 할 수 있도록
          </p>
        </InDropUp>
        <div className="text-[23px] leading-[1.5] font-[600]">
          <div className="flex" style={{ color: 'rgb(51, 61, 75)' }}>
            <InDropUp className="flex flex-1 items-center justify-end">
              이해하기 쉬운 용어
              <br />
              설명이 필요 없는
              <br />
              직관적인 화면 구성
            </InDropUp>
            <div className="relative flex-2">
              <img
                className="absolute top-[82px] left-[110px] w-[302px]"
                src="/images/toss-stock.png"
                alt="toss-stock"
              />
              <img className="relative w-[600px]" src="/images/iphone.png" alt="iphone" />
            </div>
            <InDropUp className="flex-1 pt-[150px]">
              송금처럼 쉬운 구매 경험
              <br />
              그리고 투자 판단에
              <br />
              도움을 주는 콘텐츠까지
              <br />
            </InDropUp>
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
