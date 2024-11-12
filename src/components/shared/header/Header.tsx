import Logo from '@/components/shared/icons/Logo';
import { Link } from '@/navigation';

import AffiliateBanner from './AffiliateBanner';
import BurgerButton from './BurgerButton';
import LanguageSwitcher from './LanguageSwitcher';
import NavHeader from './NavHeader';
import NavHeaderMenu from './NavHeaderMenu';

export default function Header(): React.JSX.Element {
  return (
    <header className="max-w-screen fixed top-0 z-50 w-full bg-black" aria-label="Main navigation">
      <AffiliateBanner />
      <div className="px-4 sm:px-5 md:px-8">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between py-[11px] sm:py-[16px] md:py-[25px]">
          <div className="flex items-center sm:ml-[calc(100%/2-65px)] md:ml-0 xl:h-[40px]">
            <Link
              className="flex w-full justify-start md:justify-center"
              href="/"
              scroll={true}
              aria-label="Home"
            >
              <Logo
                className="ml-[-20px] scale-75 transition duration-500 sm:scale-100 md:ml-0 md:scale-100 md:hover:scale-110"
                aria-hidden="true"
              />
            </Link>
          </div>
          <NavHeader />
          <div className="flex items-center justify-center gap-2">
            <LanguageSwitcher aria-label="Language switcher" />
            <BurgerButton aria-label="Menu toggle button" />
          </div>
        </div>
      </div>
      <NavHeaderMenu />
    </header>
  );
}
