import clsx from 'clsx';
import { useTranslations } from 'next-intl';

import { Link, usePathname } from '@/navigation';

import { itemsLink } from './itemsLink';

export default function NavHeader(): JSX.Element {
  const t = useTranslations('Header');
  const pathname = usePathname();

  const isActive = (name: string): boolean => {
    // Перевірка головної сторінки
    if (pathname === '/' && name === 'about') {
      return true;
    }

    // Перевірка сторінки кандидат
    if (pathname.split('/').includes('candidate') && name == 'candidates') {
      return true;
    }
    return pathname.split('/').includes(name);
  };

  return (
    <nav className="hidden w-full items-center justify-center gap-[3%] md:flex xl:gap-[6%]">
      {itemsLink.map((el) => {
        return (
          <Link
            key={el.pathname}
            className={clsx(
              'text-open-sans group flex flex-col gap-0.5 text-lg font-semibold text-white duration-500 hover:opacity-70',
              isActive(el.pathname) && 'opacity-70'
            )}
            href={el.href}
            scroll={true}
          >
            <span className="text-nowrap px-2">{t(el.title)}</span>
            <span
              className={clsx(
                'h-[2px] bg-yellow duration-500 group-hover:w-full',
                isActive(el.pathname) ? 'w-full' : 'w-0'
              )}
            ></span>
          </Link>
        );
      })}
    </nav>
  );
}
