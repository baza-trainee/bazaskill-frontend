import { useTranslations } from 'next-intl';

import { IContactData } from './useContactsData';

interface Props {
  contactEmail: IContactData[];
}

export function EmailAddressesBlock({ contactEmail }: Props): JSX.Element {
  const t = useTranslations('Contacts');

  return (
    <div className="relative flex w-full max-w-[380px] flex-col items-center justify-start gap-8 overflow-hidden rounded-lg border-t-[1px] border-green py-12 text-white md:w-[350px] lg:w-[32%] lg:border-b-[1px] lg:border-t-[0]">
      <h3 className="text-center font-tahoma text-2xl font-bold">
        {t('email_addresses')}
      </h3>

      <ul className="flex flex-col gap-8">
        {contactEmail &&
          Array.isArray(contactEmail) &&
          contactEmail.map((email, index) => {
            return (
              <li
                key={index}
                className="flex items-center self-start pl-4 text-lg font-semibold leading-normal"
              >
                <svg className="mr-3 fill-white" width={20} height={20}>
                  <use href="/Icons/sprite.svg#icon-email"></use>
                </svg>
                <span className="contact">{email.value}</span>
              </li>
            );
          })}
      </ul>

      <span className="absolute left-0 top-0 h-full w-[1px] bg-gradient-to-b from-green to-graphite lg:bg-gradient-to-t"></span>
      <span className="absolute right-0 top-0 h-full w-[1px] bg-gradient-to-b from-green to-graphite lg:bg-gradient-to-t"></span>
    </div>
  );
}
