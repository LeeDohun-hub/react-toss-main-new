import { useRef } from 'react';

import Business from './components/business';
import BusinessCall from './components/business-call';
import CreditService from './components/credit-service';
import Description from './components/description';
import FinanceIntro from './components/finance-intro';
import FinanceService from './components/finance-service';
import Hero from './components/hero';
import HomeService from './components/home-service';
import InvestService from './components/invest-service';
import LoanService from './components/loan-service';
import PaymentService from './components/payment-service';
import TransferService from './components/transfer-service';

export default function Home() {
  const ref = useRef(null);

  return (
    <>
      <Hero />
      <Description />
      <HomeService />
      <TransferService />
      <LoanService />
      <CreditService />
      <div ref={ref}>
        <InvestService />
        <FinanceIntro ref={ref} />
      </div>
      <FinanceService />
      <PaymentService />
      <Business />
      <BusinessCall />
    </>
  );
}
