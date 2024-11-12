import Link from 'next/link';

import { useTranslations } from 'next-intl';

import { IContactData } from './useContactsData';

interface Props {
  contactTel: IContactData[];
}

export default function PhoneNumbersBlock({ contactTel }: Props): JSX.Element {
  const t = useTranslations('Contacts');
  return (
    <div className="relative flex w-full max-w-[380px] flex-col items-center justify-start gap-8 overflow-hidden rounded-lg border-t-[1px] border-green py-12 text-white md:w-[350px] lg:w-[32%]">
      <h3 className="text-center font-tahoma text-2xl font-bold">
        {t('phone_numbers')}
      </h3>

      <ul className="flex flex-col gap-8">
        {contactTel &&
          Array.isArray(contactTel) &&
          contactTel.map((tel, index) => {
            return (
              <li key={index}>
                <Link
                  className="flex items-center text-lg font-semibold leading-normal duration-300 hover:opacity-70 md:hidden"
                  href={tel.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="mr-3 fill-white" width={20} height={20}>
                    <use href="/Icons/sprite.svg#icon-tel"></use>
                  </svg>
                  <span className="contact">{tel.value}</span>
                </Link>

                <p className="hidden items-center text-lg font-semibold leading-normal md:flex">
                  <svg className="mr-3 fill-white" width={20} height={20}>
                    <use href="/Icons/sprite.svg#icon-tel"></use>
                  </svg>
                  <span className="contact">{tel.value}</span>
                </p>
              </li>
            );
          })}
      </ul>

      <span className="absolute left-0 top-0 h-full w-[1px] bg-gradient-to-b from-green to-graphite"></span>
      <span className="absolute right-0 top-0 h-full w-[1px] bg-gradient-to-b from-green to-graphite"></span>
    </div>
  );
}
