import { Link } from 'react-router';

import Hamburger from '~/components/svg/hamburger.svg?react';
import { Button } from '~/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '~/components/ui/sheet';
import { useLanguage } from '~/hooks/use-language';

import { MENU } from './header';
import LangButton from './lang-button';
import NavButton from './nav-button';

export default function MobileNavSheet() {
  const [language, setLanguage] = useLanguage();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost">
          <Hamburger className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <nav className="flex flex-col gap-4 pt-[70px] pl-4">
          {MENU.map((item, i) => (
            <Link to={item.to} key={i}>
              <NavButton>{item.label}</NavButton>
            </Link>
          ))}
        </nav>
        <div className="pl-4">
          <LangButton language={language} setLanguage={setLanguage} value="ko">
            KOR
          </LangButton>
          <span className="text-[#d1d6db]">|</span>
          <LangButton language={language} setLanguage={setLanguage} value="en">
            ENG
          </LangButton>
        </div>
      </SheetContent>
    </Sheet>
  );
}
