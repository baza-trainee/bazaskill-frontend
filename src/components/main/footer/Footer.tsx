'use client';
import React, { useEffect, useState } from 'react';
import { useModal } from '@/stores/useModal';
import { useQuery } from '@tanstack/react-query';
import { getDocuments } from '@/api/documents';
import { constants } from '@/constants';
import { useTranslations } from 'next-intl';
import { useCookies } from '@/stores/useCookies';
import Cookies from 'js-cookie';
import Logo from '@/components/icons/Logo';
import RegisterModal from '../modals/RegisterModal';
import RegisterHrForm from '../modals/forms/register_hr/RegisterHrForm';
import RegisterPartnerForm from '../modals/forms/register_partner/RegisterPartnerForm';

type FooterLinkProps = {
  href: string;
  children: React.ReactNode;
};

const FooterLink: React.FC<FooterLinkProps> = ({
  href,
  children,
}) => {
  const isCookie = useCookies((state) => state.isCookies);
  const [isCookiesAccepted, setIsCookiesAccepted] =
    useState(false);

  useEffect(() => {
    setIsCookiesAccepted(!!Cookies.get('cookiesAccepted'));
  }, [isCookie]);

  return (
    <>
      {isCookiesAccepted ? (
        <a
          className={`decoration gray-700 all block cursor-pointer 
    text-nowrap py-2 text-xl font-normal text-white underline-offset-2 transition hover:text-yellow hover:underline  md:text-lg xl:leading-7`}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      ) : (
        <span
          className={`decoration gray-700 all block text-nowrap 
    py-2 text-xl font-normal text-white underline-offset-2 transition  md:text-lg xl:leading-7`}
        >
          {children}
        </span>
      )}
    </>
  );
};

const Footer = () => {
  const t = useTranslations('Main.footer');
  const isModalOpen = useModal(
    (state) => state.isModalOpen
  );
  const modalType = useModal((state) => state.modalType);
  const { openModal, closeModal } = useModal();
  const isCookie = useCookies((state) => state.isCookies);
  const [isCookiesAccepted, setIsCookiesAccepted] =
    useState(false);

  useEffect(() => {
    setIsCookiesAccepted(!!Cookies.get('cookiesAccepted'));
  }, [isCookie]);

  const { data } = useQuery({
    queryKey: [constants.documents.FETCH_DOCUMENTS],
    queryFn: getDocuments,
  });

  const termsOfUse = data?.find(
    (item) => item.title === 'terms_of_use'
  );

  const privacyPolicy = data?.find(
    (item) => item.title === 'privacy_policy'
  );

  return (
    <div
      className="pt-20m container relative flex flex-col justify-center 
      bg-darkGraphite xs:pt-[40px] sm:block md:pt-12 xl:pt-12 2xl:pt-12"
    >
      <div className=" mx-auto flex justify-start xs:block sm:block md:mb-[10px] md:flex">
        <div className="w-110 5xl:ml-40px transition-all md:mr-[80px]">
          <a
            href="/"
            aria-label="logo-icon"
            className="justify-center xs:flex sm:flex xl:ml-[-10px]"
          >
            <Logo className="transition duration-500 hover:scale-110" />
          </a>
          <h3 className="mb-20 mt-12 block justify-center font-tahoma text-2xl font-bold text-white transition-all xs:mb-[20px] xs:flex xs:font-medium md:block md:text-base xl:mb-[18px] xl:flex xl:w-[300px] xl:text-xl 2xl:w-[250px]">
            {t('offer')}
          </h3>
        </div>

        <div className="ml-[292px] mr-[90px] flex-col text-white xs:ml-0 xs:mr-0 xs:flex sm:ml-0 sm:mr-0 md:ml-[0] md:mr-[50px] md:w-[300px] md:items-start xl:ml-[180px] xl:mr-[100px] 2xl:ml-[230px] 2xl:mr-[290px] 4xl:ml-[300px] 4xl:mr-[350px] 5xl:ml-[485px] 5xl:mr-[340px] ">
          <button
            className={`inline-block py-2 text-xl font-normal decoration-yellow underline-offset-4  md:text-lg xl:leading-7 ${isCookiesAccepted && 'hover:text-yellow hover:underline'}`}
          >
            {isCookiesAccepted ? (
              <a href="/#help">{t('about_us')}</a>
            ) : (
              <span>{t('about_us')}</span>
            )}
          </button>
          <button
            className={`inline-block py-2 text-xl font-normal decoration-yellow underline-offset-4  md:text-lg xl:leading-7 ${isCookiesAccepted && 'hover:text-yellow hover:underline'}`}
            onClick={() => openModal('hr')}
            disabled={!isCookiesAccepted}
          >
            {t('to_become_hr')}
          </button>
          <button
            className={`inline-block whitespace-nowrap py-2 text-xl font-normal decoration-yellow underline-offset-4  md:text-lg xl:leading-7 ${isCookiesAccepted && 'hover:text-yellow hover:underline'}`}
            onClick={() => openModal('partner')}
            disabled={!isCookiesAccepted}
          >
            {t('to_become_partner')}
          </button>
        </div>

        <div className="flex-col items-center xs:flex sm:flex sm:items-center md:w-[350px] md:items-start md:text-base 2xl:w-[400px] 5xl:w-[300px]">
          <FooterLink href="https://baza-trainee.tech/ua">
            Baza Trainee Ukraine
          </FooterLink>
          <FooterLink href="https://baza-educat.com.ua/">
            {t('internship')}
          </FooterLink>
          <FooterLink href="/">{t('poligon')}</FooterLink>
        </div>
      </div>

      <div className="flex xs:flex-col-reverse xs:py-[20px] sm:flex-col-reverse md:mr-[6px] md:flex-col-reverse md:leading-3 xl:flex xl:flex-row">
        <div className="flex-col items-center justify-center sm:flex md:flex md:flex-row xl:ml-[60px] xl:mr-[30px] 2xl:ml-[36px] 2xl:mr-[55px] 3xl:mr-[55px] 4xl:mr-[122px] 5xl:mr-[306px]">
          <p className="mr-36  justify-center font-sans text-sm font-normal leading-4 text-white xs:mr-0 xs:flex xs:text-lg sm:mr-0 md:mr-[4px] md:flex md:justify-center md:text-nowrap xl:mr-[4px] ">
            {t('development')} Baza Trainee Ukraine 2024
            &#169;
          </p>
          <p className="justify-center text-white xs:flex xs:text-lg md:text-nowrap">
            {t('rights')}
          </p>
        </div>

        <div className="flex-1 xs:mb-[25px] md:mb-[10px] md:flex md:justify-between xl:mb-[0px]">
          {isCookiesAccepted ? (
            <a
              className="hover:decoration gray-700 mr-72 inline-block cursor-pointer justify-center font-sans text-sm text-white transition-all hover:text-yellow xs:mb-[25px] xs:mr-0 xs:flex sm:mr-0 sm:flex sm:text-lg md:mb-[4px] md:mr-[40px] md:text-nowrap md:leading-8 xl:mr-[120px] 2xl:mr-[212px] 3xl:mr-[266px] 4xl:mr-[300px] 5xl:mr-[368px]"
              target="_blank"
              rel="noopener noreferrer"
              href={privacyPolicy?.document_url}
            >
              {t('privacy_policy')}
            </a>
          ) : (
            <span className="gray-700 inline-block justify-center font-sans text-sm text-white transition-all  xs:flex sm:flex sm:text-lg md:mb-[4px] md:text-nowrap md:leading-8 md:decoration-[0px]">
              {t('privacy_policy')}
            </span>
          )}
          {isCookiesAccepted ? (
            <a
              className="hover:decoration gray-700 inline-block cursor-pointer justify-center font-sans text-sm text-white transition-all hover:text-yellow xs:flex sm:flex sm:text-lg md:mb-[4px] md:mr-[45px] md:text-nowrap md:leading-8 md:decoration-[0px]"
              target="_blank"
              rel="noopener noreferrer"
              href={termsOfUse?.document_url}
            >
              {t('terms_of_use')}
            </a>
          ) : (
            <span className="gray-700 mr-[40px] inline-block justify-center font-sans text-sm text-white transition-all  xs:flex sm:flex sm:text-lg md:mb-[4px] md:text-nowrap md:leading-8 md:decoration-[0px]">
              {t('terms_of_use')}
            </span>
          )}
        </div>
      </div>
      <div className="flex items-center justify-center px-10 py-8 xs:flex-col xs:px-0 sm:flex-col sm:px-0 md:flex md:w-[700px] md:flex-row md:items-center md:justify-center md:px-0 md:pt-[15px] xl:mx-auto">
        <p className="text-base text-white xs:text-[12px] sm:text-xs md:mr-[4px] md:text-sm xl:text-base">
          {t('support_1')}
        </p>
        <p className="text-white xs:text-[12px] sm:text-xs md:mr-[4px] md:text-sm xl:text-base">
          {t('support_2')}
        </p>
        <p className="text-white xs:text-[12px] sm:text-xs md:text-sm xl:text-base">
          {t('support_3')}
        </p>
      </div>
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
    </div>
  );
};

export default Footer;
