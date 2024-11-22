import { useCallback, useEffect } from 'react';

import clsx from 'clsx';
import { useTranslations } from 'next-intl';
import { useMediaQuery } from 'react-responsive';

import { useBodyScrollLock } from '@/hooks/useBodyScrollLock';
import { Link, usePathname } from '@/navigation';
import { useNavMenu } from '@/stores/useNavMenu';

import { itemsLink } from './itemsLink';

export default function NavHeaderMenu(): JSX.Element {
  const t = useTranslations('Header');
  const pathname = usePathname();
  const isOpen = useNavMenu((state) => state.isOpen);
  const closeMenu = useNavMenu((state) => state.closeMenu);
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' });

  const isActive = (name: string): boolean => {
    if (pathname === '/' && name === 'about') return true;
    if (pathname.split('/').includes('candidate') && name === 'candidates') return true;
    return pathname.split('/').includes(name);
  };

  const handleClose = useCallback(() => {
    if (isOpen) closeMenu();
  }, [isOpen, closeMenu]);

  useEffect(() => {
    if (!isTabletOrMobile) handleClose();
  }, [isTabletOrMobile, handleClose]);

  useBodyScrollLock(isOpen);

  return (
    <div
      className={clsx(
        'fixed right-0 top-[72px] z-10 h-screen overflow-hidden bg-[#212121c0] duration-500 sm:top-[80px] md:hidden',
        isOpen ? 'w-screen' : 'w-0'
      )}
      role="dialog"
      aria-modal="true"
      aria-hidden={!isOpen}
    >
      <nav
        className="flex h-full w-full max-w-[420px] flex-col items-center gap-6 place-self-end bg-black p-5 sm:max-w-[340px] sm:items-start sm:pl-11"
        aria-label="Main navigation menu"
      >
        {itemsLink.map((el) => (
          <Link
            key={el.pathname}
            className={clsx(
              'text-open-sans group flex items-end gap-0.5 text-lg font-semibold text-white duration-500 hover:text-yellow hover:opacity-70',
              isActive(el.pathname) && 'text-yellow opacity-90'
            )}
            href={el.href}
            onClick={handleClose}
            aria-current={isActive(el.pathname) ? 'page' : undefined}
          >
            <span
              className={clsx(
                'w-[2px] bg-yellow duration-500 group-hover:h-full',
                isActive(el.pathname) ? 'h-full' : 'h-0'
              )}
            ></span>
            <span className="text-nowrap px-2">{t(el.title)}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
}
