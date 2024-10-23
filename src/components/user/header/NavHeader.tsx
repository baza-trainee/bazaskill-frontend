import Link from "next/link"
import { useTranslations } from "next-intl";
import { usePathname } from "@/navigation";
import { itemsLink } from "./itemsLink"

export default function NavHeader() {
  const t = useTranslations('Header');
  const pathname = usePathname();

  const isActive = (name: string): boolean =>{
    return pathname.split('/').includes(name)
  }

  return (
    <nav className='hidden items-center justify-center w-full md:flex gap-[3%] xl:gap-[6%]'>
      {itemsLink.map((el)=>{
        return (
          <Link key={el.pathname}
            className={`group duration-500 flex flex-col gap-0.5 hover:opacity-70 text-white text-open-sans text-lg font-semibold ${isActive(el.pathname) ? 'opacity-70' : ''}`}
            href={el.href}>
            <span className='px-2 text-nowrap'>{t(el.title)}</span>
            <span className={`duration-500 h-[2px] bg-yellow group-hover:w-full ${isActive(el.pathname) ? 'w-full' : 'w-0'}`}></span>  
        </Link>
        )
      })}
  </nav>
  )
}