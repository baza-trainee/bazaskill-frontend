import clsx from 'clsx';
import { useTranslations } from 'next-intl';

import { Link, usePathname } from '@/navigation';

import { itemsLink } from './itemsLink';

export default function NavFooter(): JSX.Element {
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
    <nav className="flex flex-col items-center gap-2 md:items-start md:gap-5">
      {itemsLink.map((el) => {
        return (
          <Link
            key={el.pathname}
            className={clsx(
              'text-open-sans text-nowrap text-lg font-semibold duration-300 hover:text-yellow hover:opacity-70',
              isActive(el.pathname) ? 'text-yellow opacity-70' : 'text-white'
            )}
            href={el.href}
          >
            {t(el.title)}
          </Link>
        );
      })}
    </nav>
  );
}
