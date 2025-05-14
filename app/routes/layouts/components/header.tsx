import { Link } from 'react-router';

import TossLogo from '~/components/svg/toss-logo.svg?react';
import { useLanguage } from '~/hooks/use-language';

import LangButton from './lang-button';
import NavButton from './nav-button';

interface NavItem {
  to: string;
  label: string;
}

const MENU: NavItem[] = [
  {
    to: '/',
    label: '회사 소개',
  },
  {
    to: '/notice',
    label: '공지사항',
  },
  {
    to: '#',
    label: '고객센터',
  },
  {
    to: '#',
    label: '자주 묻는 질문',
  },
  {
    to: '#',
    label: '토스인증서',
  },
  {
    to: '#',
    label: '채용',
  },
];

export default function Header() {
  const [language, setLanguage] = useLanguage();

  return (
    <header className="fixed z-50 h-[60px] w-full bg-white">
      <div className="container flex h-full items-center justify-between">
        <Link to="/" className="w-[66px]">
          <TossLogo />
        </Link>
        <nav className="flex gap-4">
          {MENU.map((item, i) => (
            <Link to={item.to} key={i}>
              <NavButton>{item.label}</NavButton>
            </Link>
          ))}
        </nav>
        <div>
          <LangButton language={language} setLanguage={setLanguage} value="ko">
            KOR
          </LangButton>
          <span className="text-[#d1d6db]">|</span>
          <LangButton language={language} setLanguage={setLanguage} value="en">
            ENG
          </LangButton>
        </div>
      </div>
    </header>
  );
}
