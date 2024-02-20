'use client';
import React from 'react';
import { useModal } from '@/stores/useModal';
import Logo from '@/components/icons/Logo';
import RegisterModal from '../modals/RegisterModal';
import RegisterHrForm from '../modals/forms/register_hr/RegisterHrForm';
import RegisterPartnerForm from '../modals/forms/register_partner/RegisterPartnerForm';
import { usePathname } from 'next/navigation';

type FooterLinkProps = {
  href: string;
  children: React.ReactNode;
};

const FooterLink: React.FC<FooterLinkProps> = ({
  href,
  children,
}) => (
  <a
    className="decoration gray-700 all onClick={() => openModal('partner')} block cursor-pointer 
    py-2 text-xl font-normal text-white underline-offset-2 transition hover:text-yellow
    hover:underline md:text-base xl:leading-7"
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>
);

const Footer = () => {
  const isModalOpen = useModal(
    (state) => state.isModalOpen
  );
  const modalType = useModal((state) => state.modalType);
  const { openModal, closeModal } = useModal();
  const pathname = usePathname();
  const isAdminPage = pathname.split('/').includes('admin');
  if (isAdminPage) return null;
  return (
    <div
      className="pt-20m relative flex flex-col justify-center bg-darkGraphite 
    px-20 xs:px-6 xs:pt-[40px] sm:block sm:px-10 md:px-8 md:pt-12 xl:pt-12 2xl:pt-12 5xl:px-[80px]"
    >
      <div className="flex justify-start xs:block sm:block md:mb-[10px] md:flex">
        <div className="w-110 5xl:ml-40px transition-all md:mr-[80px]">
          <a
            href="/"
            aria-label="logo-icon"
            className="justify-center xs:flex sm:flex xl:ml-[-10px]"
          >
            <Logo className="transition duration-500 hover:scale-110" />
          </a>
          <h3 className="mb-20 mt-12 block justify-center font-tahoma text-2xl font-bold text-white transition-all xs:mb-[20px] xs:flex xs:font-medium md:block md:text-base xl:mb-[18px] xl:flex xl:w-[300px] xl:text-xl 2xl:w-[250px]">
            За крок до офферу
          </h3>
        </div>
        <div className="ml-[292px] mr-[90px] flex-col text-white xs:ml-0 xs:mr-0 xs:flex sm:ml-0 sm:mr-0 md:ml-[0] md:mr-[50px] md:w-[300px] md:items-start xl:ml-[180px] xl:mr-[260px] 2xl:ml-[230px] 2xl:mr-[290px] 4xl:ml-[300px] 4xl:mr-[350px] 5xl:ml-[485px] 5xl:mr-[340px] ">
          <button className="inline-block py-2 text-xl font-normal decoration-yellow underline-offset-4 hover:text-yellow hover:underline md:text-base xl:leading-7">
            <a href="#aboutus">Про нас</a>
          </button>
          <button
            className="block cursor-pointer py-2 text-xl font-normal decoration-yellow underline-offset-4 transition-all hover:text-yellow hover:underline md:text-base xl:leading-7"
            onClick={() => openModal('hr')}
          >
            Стати нашим HRом
          </button>
          <button
            className="block cursor-pointer py-2 text-xl font-normal decoration-yellow underline-offset-4 transition-all hover:text-yellow hover:underline md:text-base xl:leading-7"
            onClick={() => openModal('partner')}
          >
            Стати нашим партнером
          </button>
        </div>
        <div className="flex-col items-center xs:flex sm:flex sm:items-center md:w-[350px] md:items-start md:text-base 2xl:w-[400px] 5xl:w-[300px]">
          <FooterLink href="https://baza-trainee.tech/ua">
            Baza Trainee Ukraine
          </FooterLink>
          <FooterLink href="https://baza-educat.com.ua/">
            Стажування на Baza Educat
          </FooterLink>
          <FooterLink href="/">
            Розробка Baza Poligon
          </FooterLink>
        </div>
      </div>
      <div className="flex xs:flex-col-reverse xs:py-[20px] sm:flex-col-reverse md:flex-col-reverse md:leading-3 xl:flex xl:flex-row">
        <div className="flex-col items-center justify-center sm:flex md:flex md:flex-row xl:ml-[60px] xl:mr-[118px] 2xl:ml-[36px] 2xl:mr-[142px] 4xl:mr-[212px] 5xl:mr-[398px]">
          <p className="mr-36 justify-center font-open-sans text-sm font-normal leading-4 text-white xs:mr-0 xs:flex xs:text-sm sm:mr-0 md:mr-[4px] md:flex md:justify-center xl:mr-[4px] ">
            Розробка Baza Trainee Ukraine 2024 &#169;
          </p>
          <p className="justify-center text-white xs:flex xs:text-sm">
            Усі права захищені
          </p>
        </div>
        <div className="xs:mb-[25px] md:mb-[10px] md:flex md:justify-center xl:mb-[0px]">
          <a
            className="hover:decoration gray-700 mr-72 inline-block cursor-pointer justify-center font-open-sans text-sm text-white transition-all hover:text-yellow xs:mb-[25px] xs:mr-0 xs:flex sm:mr-0 sm:flex md:mb-[4px] md:mr-[40px] md:leading-8 xl:mr-[260px] 2xl:mr-[302px] 3xl:mr-[334px] 4xl:mr-[377px] 5xl:mr-[458px]"
            target="_blank"
            rel="noopener noreferrer"
            href="/document/privacypolicy.pdf"
          >
            Політика конфіденційності
          </a>
          <a
            className="hover:decoration gray-700 inline-block cursor-pointer justify-center font-open-sans text-sm text-white transition-all hover:text-yellow xs:flex sm:flex md:mb-[4px] md:leading-8 md:decoration-[0px]"
            target="_blank"
            rel="noopener noreferrer"
            href="/document/siteusagerules.pdf"
          >
            Правила користування сайтом
          </a>
        </div>
      </div>
      <div className="flex items-center justify-center px-10 py-8 xs:flex-col xs:px-0 sm:flex-col sm:px-0 md:flex md:w-[700px] md:flex-row md:items-center md:justify-center md:px-0 md:pt-[15px] xl:mx-auto">
        <p className="text-base text-white xs:text-[12px] sm:text-xs md:mr-[4px] md:text-sm xl:text-base">
          Компанія направляє 10% прибутку на підтримку
        </p>
        <p className="text-white xs:text-[12px] sm:text-xs md:mr-[4px] md:text-sm xl:text-base">
          59-тої бригади
        </p>
        <p className="text-white xs:text-[12px] sm:text-xs md:text-sm xl:text-base">
          ім.Якова Гандзюка
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
