import Link from 'next/link';

import { useTranslations } from 'next-intl';

interface FooterLink {
  href: string;
  title: string;
}

export default function FooterLinks(): JSX.Element {
  const t = useTranslations('Footer');

  const footerLinks: FooterLink[] = [
    {
      href: 'https://baza-trainee.tech',
      title: 'baza_trainee'
    },
    {
      href: 'https://baza-educat-fun.fun',
      title: 'internship'
    },
    {
      href: '/under-development',
      title: 'poligon'
    }
  ];

  return (
    <div className="flex flex-col items-center gap-2 md:items-start md:gap-5">
      {footerLinks.map((el) => {
        return (
          <Link
            key={el.title}
            className={
              'block text-nowrap text-lg font-normal text-white underline duration-300 hover:text-yellow'
            }
            href={el.href}
            target={el.title === 'poligon' ? '_self' : '_blank'}
            rel="noopener noreferrer"
          >
            {t(el.title)}
          </Link>
        );
      })}
    </div>
  );
}
