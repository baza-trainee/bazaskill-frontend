'use client';

import HiddenTitle from '@/components/shared/HiddenTitle';

import AddressBlock from './AddressBlock';
import { EmailAddressesBlock } from './EmailAddressesBlock';
import GoogleMapsBlock from './GoogleMapsBlock';
import PhoneNumbersBlock from './PhoneNumbersBlock';
import SocialNetworksBlock from './SocialNetworksBlock';
import { useContactsData } from './useContactsData';

export default function Contacts(): JSX.Element {
  const { contactTel, contactEmail, socialLinks } = useContactsData();

  return (
    <section className="relative pt-[72px] sm:pt-[80px] md:pt-[140px]">
      <HiddenTitle variantTitle="Contacts" />
      <div className="container flex min-h-[550px] flex-col items-center justify-between gap-8 py-10 md:flex-row">
        <AddressBlock />
        <GoogleMapsBlock />
      </div>

      <div className="main-texture-background container flex w-full flex-wrap justify-center gap-8 bg-cover bg-fixed bg-no-repeat py-10 md:py-24 lg:justify-between lg:gap-1 ">
        <PhoneNumbersBlock contactTel={contactTel} />
        <EmailAddressesBlock contactEmail={contactEmail} />
        <SocialNetworksBlock socialLinks={socialLinks} />
      </div>
    </section>
  );
}
