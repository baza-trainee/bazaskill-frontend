'use client';

import Link from 'next/link';

import { useQuery } from '@tanstack/react-query';
import { useLocale, useTranslations } from 'next-intl';

import { getDocuments } from '@/api/documents';
import { constants } from '@/constants';
import { useModal } from '@/stores/useModal';

import RegisterModal from '../modals/RegisterModal';
import RegisterHrForm from '../modals/forms/register_hr/RegisterHrForm';
import RegisterPartnerForm from '../modals/forms/register_partner/RegisterPartnerForm';
import BecomeBlock from './BecomeBlock';
import FooterLinks from './FooterLinks';
import FooterLogo from './FooterLogo';
import MobileLogo from './MobileLogo';
import NavFooter from './NavFooter';
import SupportBlock from './SupportBlock';

export default function Footer(): JSX.Element {
  const t = useTranslations('Footer');
  const locale: string = useLocale();
  const isModalOpen = useModal((state) => state.isModalOpen);
  const modalType = useModal((state) => state.modalType);
  const { closeModal } = useModal();

  const { data } = useQuery({
    queryKey: [constants.documents.FETCH_DOCUMENTS],
    queryFn: getDocuments
  });

  const termsOfUse = data?.find((item) => item.title === 'terms_of_use');

  const privacyPolicy = data?.find((item) => item.title === 'privacy_policy');

  const createLinck = (value: string | undefined): string => {
    return value ? `${locale}/docs/${value}` : '/';
  };

  return (
    <footer className="relative bg-black">
      <div className="it container flex flex-col justify-center gap-10 pb-6 pt-10 md:gap-5">
        <MobileLogo />

        <div className="flex flex-col justify-center gap-5 md:flex-row md:justify-between md:gap-0">
          <NavFooter />
          <BecomeBlock />
          <FooterLinks />
        </div>

        <div className="flex flex-col items-center justify-between gap-4 md:flex-row md:items-end min-[900px]:items-center">
          <Link
            className="inline-block text-nowrap text-base font-normal text-white underline duration-300 hover:text-yellow"
            href={createLinck(privacyPolicy?.title)}
            target="_blank"
          >
            {t('privacy_policy')}
          </Link>

          <FooterLogo />

          <Link
            className="inline-block text-nowrap text-base font-normal text-white underline duration-300 hover:text-yellow"
            href={createLinck(termsOfUse?.title)}
            target="_blank"
          >
            {t('terms_of_use')}
          </Link>
        </div>

        <h3 className="hidden text-center font-tahoma text-2xl font-bold text-white md:block">
          {t('offer')}
        </h3>

        {/* Розробка */}
        <p className="flex flex-wrap items-center justify-center gap-1 text-center text-xs text-white md:text-base">
          <span>{t('development')} &#169;</span>
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
