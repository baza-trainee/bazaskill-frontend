import clsx from "clsx";
import { useCallback, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "@/navigation";
import { useTranslations } from "next-intl";
import { useBodyScrollLock } from "@/hooks/useBodyScrollLock";
import { useNavMenu } from "@/stores/useNavMenu";
import { itemsLink } from "./itemsLink";

export default function NavHeaderMenu(): JSX.Element {
  const t = useTranslations('Header');
  const pathname = usePathname();
  const isOpen = useNavMenu((state) => state.isOpen);
  const closeMenu = useNavMenu((state) => state.closeMenu);

  const BURGER_MENU_BREAKPOINT = 768;

  const isActive = (name: string): boolean =>{
    if(pathname.split('/').includes('candidate') && name=='candidates'){
      return true
    }
    return pathname.split('/').includes(name)
  }

  const handleClose = useCallback(() => {
    if (isOpen) closeMenu();
  }, [isOpen]);

  const handleResize = useCallback(() => {
    if (window.innerWidth > BURGER_MENU_BREAKPOINT) {
      handleClose();
    }
  }, [handleClose]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  useBodyScrollLock(isOpen);

  return(
    <div className={clsx("md:hidden fixed overflow-hidden top-[72px] sm:top-[80px] right-0 h-screen bg-[#212121c0] duration-500 z-10", isOpen ? 'w-screen': 'w-0 ')}>
      <nav className="max-w-[420px] sm:max-w-[340px] w-full h-full bg-black place-self-end flex flex-col items-center sm:items-start gap-6 p-5 sm:pl-11">
        {itemsLink.map((el)=>{
          return (
            <Link key={el.pathname}
              className={clsx('group duration-500 flex items-end gap-0.5 hover:opacity-70 hover:text-yellow text-white text-open-sans text-lg font-semibold', isActive(el.pathname) && 'opacity-90 text-yellow')}
              href={el.href} onClick={handleClose}>
              
              <span className={clsx('duration-500 w-[2px] bg-yellow group-hover:h-full', 
                isActive(el.pathname) ? 'h-full' : 'h-0')}></span> 
              <span className='px-2 text-nowrap'>{t(el.title)}</span>
          </Link>
          )
        })}
      </nav>
    </div>
  )
}