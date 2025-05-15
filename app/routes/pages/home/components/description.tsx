import useMediaQuery, { MediaQuery } from '~/hooks/use-media-query';

export default function Description() {
  const isMobile = useMediaQuery(MediaQuery.MOBILE);
  return (
    <section
      className="flex h-[428px] items-center justify-center desktop:h-[600px]"
      style={{ backgroundColor: 'rgb(249, 250, 251)' }}
    >
      <div className="container">
        {isMobile ? (
          <p className="text-center text-[22px] leading-[1.6] font-[600] text-[#191f28] desktop:text-[32px]">
            내 모든 금융 내역을 한눈에
            <br />
            조회하고 한 곳에서 관리하세요.
            <br />
            이제껏 경험 못 했던
            <br />
            쉽고 편리한 금융 서비스,
            <br />
            토스와 함께라면
            <br />
            당신의 일상이 새로워질 거예요.
          </p>
        ) : (
          <p className="text-center text-[22px] leading-[1.6] font-[700] text-[#191f28] desktop:text-[32px]">
            내 모든 금융 내역을 한눈에 조회하고 한 곳에서 관리하세요.
            <br />
            이제껏 경험 못 했던 쉽고 편리한 금융 서비스,
            <br />
            토스와 함께라면 당신의 일상이 새로워질 거예요.
          </p>
        )}
      </div>
    </section>
  );
}
