'use client';
import { useQuery } from '@tanstack/react-query';
import Cookies from 'js-cookie';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import { getDocuments } from '@/api/documents';
import { constants } from '@/constants';
import { useCookies } from '@/stores/useCookies';
import { useModal } from '@/stores/useModal';

import RegisterHrForm from '../modals/forms/register_hr/RegisterHrForm';
import RegisterPartnerForm from '../modals/forms/register_partner/RegisterPartnerForm';
import RegisterModal from '../modals/RegisterModal';
import NavFooter from './NavFooter';
import BecomeBlock from './BecomeBlock';
import SupportBlock from './SupportBlock';
import FooterLinks from './FooterLinks';
import LogoFooter from '@/components/shared/icons/LogoFooter';

export default function Footer(): React.JSX.Element {
  const t = useTranslations('Main.footer');
  const isModalOpen = useModal(
    state => state.isModalOpen,
  );
  const modalType = useModal(state => state.modalType);
  const { closeModal } = useModal();
  const isCookie = useCookies(state => state.isCookies);

  const [ isCookiesAccepted, setIsCookiesAccepted ] = useState<boolean>(false);

  useEffect(() => {
    setIsCookiesAccepted(!!Cookies.get('cookiesAccepted'));
  }, [isCookie]);

  const { data } = useQuery({
    queryKey: [constants.documents.FETCH_DOCUMENTS],
    queryFn: getDocuments,
  });

  const termsOfUse = data?.find(
    item => item.title === 'terms_of_use',
  );

  const privacyPolicy = data?.find(
    item => item.title === 'privacy_policy',
  );

  return (
    <footer className="relative bg-black">
      <div className='container flex flex-col gap-4 justify-center pt-10 max-[900px]:gap-3'>
        <div className='flex justify-center gap-5 md:gap-0 md:justify-between flex-col md:flex-row'>
          <NavFooter/>
          <BecomeBlock isCookiesAccepted={ isCookiesAccepted }/>
          <FooterLinks/>
        </div>
        
        <div className='flex items-center justify-between flex-col gap-5 min-[900px]:flex-row min-[900px]:gap-4'>
          <Link
            className="inline-block text-white text-base text-nowrap font-normal hover:text-yellow hover:underline"
            href={`/docs/${privacyPolicy?.title}`}
            target="_blank"
          >
            {t('privacy_policy')}
          </Link>

          <Link
            href="/"
            aria-label="logo-icon"
            className="flex w-[80%] min-[900px]:w-[35%] xl:w-[40%] max-w-[560px]"
          >
            <LogoFooter className="block"/>
          </Link>

          <Link
            className="inline-block text-white text-base text-nowrap font-normal hover:text-yellow hover:underline"
              href={`/docs/${termsOfUse?.title}`}
              target="_blank">
              {t('terms_of_use')}
          </Link>
        </div>

        <h3 className="py-8 text-center font-tahoma text-2xl font-bold text-white ">
          {t('offer')}
        </h3>
        {/* Розробка */}
        <p className="py-5 text-center text-white text-xs md:text-base text-nowrap">
          {t('development')}
          {' '}
          &#169;
          {' '}
          {t('rights')}
        </p>
      </div>

      {/* підтримка */}
      <SupportBlock/>

      {isModalOpen && modalType === 'hr' && (
        <RegisterModal handleClose={closeModal}>
          <RegisterHrForm />
        </RegisterModal>
      )}
      {isModalOpen && modalType === 'partner' && (
        <RegisterModal handleClose={closeModal}>
          <RegisterPartnerForm />
        </RegisterModal>
      )}
    </footer>
  );
}