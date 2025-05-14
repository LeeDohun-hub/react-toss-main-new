import { Outlet } from 'react-router';

import Footer from './components/footer';
import Header from './components/header';

export default function DefaultLayout() {
  return (
    <>
      <Header />
      <main className="min-h-[calc(100vh-60px)] overflow-x-hidden pt-[60px] desktop:overflow-x-auto">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
