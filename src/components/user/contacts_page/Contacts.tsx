'use client';

import { useTranslations } from 'next-intl';
import { useContactsData } from './useContactsData';
import AddressBlock from './AddressBlock';
import PhoneNumbersBlock from './PhoneNumbersBlock';
import { EmailAddressesBlock } from './EmailAddressesBlock';
import SocialNetworksBlock from './SocialNetworksBlock';
import GoogleMapsBlock from './GoogleMapsBlock';

export default function Contacts(): JSX.Element {
  const t = useTranslations('Contacts');
  const { contactTel, contactEmail, socialLinks } = useContactsData();

  return (
    <section className="pt-[72px] sm:pt-[80px] md:pt-[140px] relative">
      <h1 className="sr-only">
        {t('title')}
      </h1>
      <div className='container py-10 gap-8 min-h-[550px] flex flex-col md:flex-row justify-between items-center'>
        <AddressBlock/>
        <GoogleMapsBlock/>
      </div>

      <div className='container w-full py-10 md:py-24 flex justify-center lg:justify-between flex-wrap gap-8 lg:gap-1 bg-no-repeat bg-cover bg-fixed main-texture-background '>
        <PhoneNumbersBlock contactTel={contactTel}/>
        <EmailAddressesBlock contactEmail={contactEmail}/>
        <SocialNetworksBlock socialLinks={socialLinks}/>
      </div>
    </section>
  );
}