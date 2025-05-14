import InDropUp from '~/components/animation/in-drop-up';

export default function PaymentService() {
  return (
    <section className="h-[1687px] bg-[#f9fafb]">
      <div className="container flex pt-[250px]">
        <div className="flex-1">
          <InDropUp>
            <h2 className="mb-[30px] text-[28px] leading-[1.3] font-[700] text-[#3182f6]">
              결제
            </h2>
            <p className="text-[50px] leading-[1.4] font-[700] text-[#191f28]">
              결제는 간편하게,
              <br />
              할인과 적립은 두둑히
            </p>
            <p
              className="pt-[60px] text-[23px] leading-[1.5] font-[600]"
              style={{ color: 'rgb(51, 61, 75)' }}
            >
              온라인과 오프라인 모두
              <br />
              국내는 물론, 해외에서도
              <br />
              토스로 간편하게 결제해요.
            </p>
          </InDropUp>
          <InDropUp className="relative">
            <img
              className="absolute top-[87px] left-[50px] w-[300px]"
              src="/images/payment-01.png"
              alt="payment-01"
            />
            <img
              className="relative left-[-63px] w-[600px]"
              src="/images/iphone.png"
              alt="iphone"
            />
          </InDropUp>
        </div>
        <div className="flex-1">
          <InDropUp className="relative">
            <img
              className="absolute top-[87px] left-[80px] w-[300px]"
              src="/images/payment-02.png"
              alt="payment-02"
            />
            <img
              className="relative left-[-30px] w-[600px]"
              src="/images/iphone.png"
              alt="iphone"
            />
          </InDropUp>
          <InDropUp>
            <p
              className="pt-[60px] pl-[60px] text-[23px] leading-[1.5] font-[600]"
              style={{ color: 'rgb(51, 61, 75)' }}
            >
              결제할 땐, 혜택이 빠질 수 없죠.
              <br />
              쿠폰과 포인트 써서 할인 받고
              <br />
              토스프라임 적립까지 또 받아요.
            </p>
          </InDropUp>
        </div>
      </div>
    </section>
  );
}
