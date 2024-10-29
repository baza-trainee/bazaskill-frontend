import { usePathname } from "@/navigation";
import { useTranslations } from "next-intl";
import { itemsLink } from "./itemsLink";
import Link from "next/link";

export default function NavFooter(): JSX.Element {
  const t = useTranslations('Header');
  const pathname = usePathname();

  const isActive = (name: string):boolean =>{
    if(pathname.split('/').includes('candidate') && name=='candidates'){
      return true
    }
    return pathname.split('/').includes(name)
  }

  return (
    <nav className='flex flex-col gap-2 md:gap-5 items-center md:items-start'>
      {itemsLink.map((el)=>{
        return (
          <Link key={el.pathname}
            className={`duration-300 text-nowrap hover:opacity-70 hover:text-yellow text-open-sans text-lg font-semibold 
            ${isActive(el.pathname) ? 'opacity-70 text-yellow' : 'text-white'}`}
            href={el.href}>
            {t(el.title)}
          </Link>
        )
      })}
    </nav>
  )
}