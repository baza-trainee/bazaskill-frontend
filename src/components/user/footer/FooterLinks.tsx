import { useTranslations } from 'next-intl';
import Link from 'next/link';

interface FooterLink {
  href: string;
  title: string;
}

export default function FooterLinks(): JSX.Element {
  const t = useTranslations('Main.footer');

  const footerLinks: FooterLink[] = [
    { 
      href: 'https://baza-trainee.tech',
      title: 'baza_trainee'
    },
    { 
      href: 'https://baza-educat.com.ua',
      title: 'internship'
    },
    { 
      href: '/',
      title: 'poligon'
    },
  ]

  return (
    <div className="flex flex-col gap-2 md:gap-5 items-center md:items-start">
      {footerLinks.map((el)=>{
        return (
          <Link  
            key={el.title}
            className={"underline block text-nowrap text-lg font-normal text-white duration-300 hover:text-yellow"} 
            href={el.href} 
            target='_blank' 
            rel='noopener noreferrer'>
              {t(el.title)}
          </Link>
        )
      })}
    </div>
  )
}