'use client';

import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';
import { useLocale, useTranslations } from 'next-intl';

import { getDocuments } from '@/api/documents';
import { constants } from '@/constants';
import { useModal } from '@/stores/useModal';

import RegisterHrForm from '../modals/forms/register_hr/RegisterHrForm';
import RegisterPartnerForm from '../modals/forms/register_partner/RegisterPartnerForm';
import RegisterModal from '../modals/RegisterModal';
import NavFooter from './NavFooter';
import BecomeBlock from './BecomeBlock';
import SupportBlock from './SupportBlock';
import FooterLinks from './FooterLinks';
import MobileLogo from './MobileLogo';
import FooterLogo from './FooterLogo';

export default function Footer(): JSX.Element {
  const t = useTranslations('Footer');
  const locale: string = useLocale();
  const isModalOpen = useModal(
    state => state.isModalOpen,
  );
  const modalType = useModal(state => state.modalType);
  const { closeModal } = useModal();

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

  const createLinck = (value: string | undefined): string => {
    return value ? `${locale}/docs/${value}` : '/'
  }

  return (
    <footer className="relative bg-black">
      <div className='container flex flex-col gap-10 md:gap-5 it justify-center pt-10 pb-6'>
        <MobileLogo />

        <div className='flex justify-center gap-5 md:gap-0 md:justify-between flex-col md:flex-row'>
          <NavFooter />
          <BecomeBlock />
          <FooterLinks />
        </div>

        <div className='flex items-center md:items-end min-[900px]:items-center justify-between flex-col gap-4 md:flex-row'>
          <Link
            className="inline-block underline text-white text-base text-nowrap font-normal duration-300 hover:text-yellow"
            href={createLinck(privacyPolicy?.title)} target='_blank'>
            {t('privacy_policy')}
          </Link>

          <FooterLogo />

          <Link
            className="inline-block underline text-white text-base text-nowrap font-normal duration-300 hover:text-yellow"
            href={createLinck(termsOfUse?.title)} target='_blank'>
            {t('terms_of_use')}
          </Link>
        </div>

        <h3 className="hidden md:block text-center font-tahoma text-2xl font-bold text-white">
          {t('offer')}
        </h3>

        {/* Розробка */}
        <p className="flex flex-wrap items-center justify-center text-center gap-1 text-white text-xs md:text-base">
          <span>{t('development')}{' '}&#169;</span>
          <span>{t('rights')}</span>
        </p>
      </div>

      {/* підтримка */}
      <SupportBlock />

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