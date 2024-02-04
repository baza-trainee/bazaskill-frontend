import React from 'react';
import { useModal } from '@/stores/useModal';
import Logo from '@/components/icons/Logo';
import RegisterModal from '../modals/RegisterModal';
import RegisterHrForm from '../modals/forms/register_hr/RegisterHrForm';

type FooterLinkProps = {
  href: string;
  children: React.ReactNode;
};

const FooterLink: React.FC<FooterLinkProps> = ({
  href,
  children,
}) => (
  <a
    className="decoration gray-700 all block cursor-pointer py-2 text-xl font-normal text-white underline-offset-2 transition hover:text-yellow hover:underline"
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
    <div className="relative flex flex-col justify-center bg-darkGraphite px-32 pt-20">
      <div className="flex justify-start">
        <div className="w-110 transition-all">
          <a
            href="/"
            aria-label="logo-icon"
            className="bg-pink"
          >
            <Logo className="transition duration-500 hover:scale-110" />
          </a>
          <h3 className="mb-20 mt-12 block cursor-pointer font-tahoma text-2xl font-bold text-white transition-all hover:text-yellow">
            За крок до офферу
          </h3>
        </div>
        <div className="ml-[292px] mr-[90px] w-96 text-white">
          <button className="inline-block py-2 text-xl font-normal decoration-yellow underline-offset-4 hover:text-yellow hover:underline">
            <a href="#aboutus">Про нас</a>
          </button>
          <button
            className="block cursor-pointer py-2 text-xl font-normal decoration-yellow underline-offset-4 transition-all hover:text-yellow hover:underline"
            onClick={() => openModal('hr')}
          >
            Стати нашим HRом
          </button>
          <button
            className="block cursor-pointer py-2 text-xl font-normal decoration-yellow underline-offset-4 transition-all hover:text-yellow hover:underline"
            onClick={() => openModal('partner')}
          >
            Стати нашим партнером
          </button>
        </div>
        <div>
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
      <div className="flex justify-start">
        <p className="mr-36 font-open-sans text-sm font-normal leading-4 text-white">
          Розробка Baza Trainee Ukraine 2024 &#169; Усі
          права захищені
        </p>
        <a
          className="hover:decoration gray-700 mr-72 inline-block cursor-pointer font-open-sans text-sm text-white underline underline-offset-2 transition-all hover:text-yellow"
          target="_blank"
          rel="noopener noreferrer"
          href="/document/privacypolicy.pdf"
        >
          Політика конфіденційності
        </a>
        <a
          className="hover:decoration gray-700 inline-block cursor-pointer font-open-sans text-sm text-white underline underline-offset-2 transition-all hover:text-yellow"
          target="_blank"
          rel="noopener noreferrer"
          href="/document/siteusagerules.pdf"
        >
          Правила користування сайтом
        </a>
      </div>
      <div className="flex justify-center px-10 py-8">
        <p className="text-xs text-white">
          Компанія направляє 10% прибутку на підтримку
          59-тої бригади ім.Якова Гандзюка
        </p>
      </div>
      {isModalOpen && modalType === 'hr' && (
        <RegisterModal handleClose={closeModal}>
          <RegisterHrForm />
        </RegisterModal>
      )}
    </div>
  );
};

export default Footer;
