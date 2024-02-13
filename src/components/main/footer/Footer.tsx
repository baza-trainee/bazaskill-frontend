import React from 'react';
import { useModal } from '@/stores/useModal';
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
}) => (
  <a
    className="decoration gray-700 all block cursor-pointer py-2 text-xl font-normal text-white underline-offset-2 transition hover:text-yellow hover:underline md:text-base xl:leading-7
    onClick={() => openModal('partner')}"
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

  return (
    <div className="relative flex flex-col justify-center bg-darkGraphite px-20 pt-20m xs:px-6 xs:pt-[40px] sm:block sm:px-10 md:pt-12 md:px-8 xl:pt-12 2xl:pt-12 5xl:px-[80px]">
      <div className="flex justify-start xs:block sm:block md:flex md:mb-[10px]">
        <div className="w-110 transition-all md:mr-[80px] 5xl:ml-40px">
          <a
            href="/"
            aria-label="logo-icon"
            className="xs:flex sm:flex justify-center xl:ml-[-10px]"
          >
            <Logo className="transition duration-500 hover:scale-110" />
          </a>
          <h3 className="mb-20 mt-12 block cursor-pointer font-tahoma text-2xl font-bold text-white transition-all xs:flex xs:mb-[20px] xs:font-medium justify-center md:text-base md:block xl:w-[300px] xl:text-xl xl:flex xl:mb-[18px] 2xl:w-[250px]">
            За крок до офферу
          </h3>
        </div>
        <div className="ml-[292px] mr-[90px] text-white xs:mr-0 xs:ml-0 md:ml-[0] xs:flex flex-col sm:ml-0 sm:mr-0 md:w-[300px] md:items-start md:mr-[50px] xl:ml-[180px] xl:mr-[260px] 2xl:ml-[230px] 2xl:mr-[290px] 4xl:ml-[300px] 4xl:mr-[350px] 5xl:ml-[485px] 5xl:mr-[340px] ">
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
        <div className="xs:flex items-center sm:flex flex-col sm:items-center md:items-start md:w-[350px] 2xl:w-[400px] 5xl:w-[300px] md:text-base">
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
        <div className="sm:flex flex-col items-center md:flex md:flex-row justify-center xl:ml-[60px] xl:mr-[118px] 2xl:ml-[36px] 2xl:mr-[142px] 4xl:mr-[212px] 5xl:mr-[398px]">
        <p className="mr-36 font-open-sans text-sm font-normal leading-4 text-white xs:mr-0 xs:text-sm xs:flex justify-center sm:mr-0 md:flex md:justify-center md:mr-[4px] xl:mr-[4px] ">
          Розробка Baza Trainee Ukraine 2024 &#169; 
        </p>
        <p className="text-white xs:text-sm xs:flex justify-center">Усі права захищені</p>
        </div>
        <div className="xs:mb-[25px] md:flex md:justify-center md:mb-[10px] xl:mb-[0px]">
        <a
          className="hover:decoration gray-700 mr-72 inline-block cursor-pointer font-open-sans text-sm text-white transition-all hover:text-yellow xs:mr-0 xs:flex xs:mb-[25px] md:leading-8 sm:mr-0 sm:flex justify-center md:mr-[40px] md:mb-[4px] xl:mr-[260px] 2xl:mr-[302px] 3xl:mr-[334px] 4xl:mr-[377px] 5xl:mr-[458px]"
          target="_blank"
          rel="noopener noreferrer"
          href="/document/privacypolicy.pdf"
        >
          Політика конфіденційності
        </a>
        <a
          className="hover:decoration gray-700 inline-block cursor-pointer font-open-sans text-sm text-white xs:flex sm:flex justify-center md:leading-8 md:decoration-[0px] md:mb-[4px] transition-all hover:text-yellow"
          target="_blank"
          rel="noopener noreferrer"
          href="/document/siteusagerules.pdf"
        >
          Правила користування сайтом
        </a>
        </div>
      </div>
      <div className="flex justify-center px-10 py-8 xs:px-0 xs:flex-col items-center sm:flex-col sm:px-0 md:flex md:flex-row md:items-center md:justify-center md:w-[700px] md:px-0 md:pt-[15px] xl:mx-auto">
        <p className="text-base text-white xs:text-[12px] sm:text-xs md:text-sm md:mr-[4px]">
          Компанія направляє 10% прибутку на підтримку</p>
          <p className="text-white xs:text-[12px] sm:text-xs md:text-sm md:mr-[4px]">59-тої бригади</p> 
          <p className="text-white xs:text-[12px] sm:text-xs md:text-sm">ім.Якова Гандзюка</p>
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
