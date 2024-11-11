import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/navigation";
import { itemsLink } from "./itemsLink"
import clsx from "clsx";

export default function NavHeader(): JSX.Element {
  const t = useTranslations('Header');
  const pathname = usePathname();

  const isActive = (name: string): boolean => {
    // Перевірка головної сторінки
    if (pathname === '/' && name === 'about') { return true }

    // Перевірка сторінки кандидат
    if (pathname.split('/').includes('candidate') && name == 'candidates') {
      return true
    }
    return pathname.split('/').includes(name)
  }

  return (
    <nav className='hidden items-center justify-center w-full md:flex gap-[3%] xl:gap-[6%]'>
      {itemsLink.map((el) => {
        return (
          <Link key={el.pathname}
            className={clsx('group duration-500 flex flex-col gap-0.5 hover:opacity-70 text-white text-open-sans text-lg font-semibold', isActive(el.pathname) && 'opacity-70')}
            href={el.href} scroll={true}>
            <span className='px-2 text-nowrap'>{t(el.title)}</span>
            <span
              className={clsx('duration-500 h-[2px] bg-yellow group-hover:w-full',
                isActive(el.pathname) ? 'w-full' : 'w-0')}>
            </span>
          </Link>
        )
      })}
    </nav>
  )
}