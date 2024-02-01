import React from 'react';
import { useState } from 'react';
import { Logo } from '@/components/main/ui/logo/logo';

type FooterLinkProps = {
  href: string;
  children: React.ReactNode;
};

const FooterLink: React.FC<FooterLinkProps> = ({
  href,
  children,
}) => (
  <a
    className="decoration gray-700 block py-2 text-xl font-normal text-white underline-offset-2 hover:text-yellow hover:underline"
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>
);

const Footer = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
    console.log('open modal');
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="flex flex-col justify-center bg-darkGraphite px-32 pt-20">
      <div className="flex justify-start">
        <div className="w-110">
          <a href="/" aria-label="logo-icon">
            <Logo className="hover:scale-125" />
          </a>
          <h3 className="mb-20 mt-12 block font-tahoma text-2xl font-bold text-white hover:text-yellow">
            За крок до офферу
          </h3>
        </div>
        <div className="ml-72 mr-24 w-96 text-white">
          <button className="inline-block py-2 text-xl font-normal decoration-yellow underline-offset-4 hover:text-yellow hover:underline">
            <a href="#aboutus">Про нас</a>
          </button>
          <button
            className="block py-2 text-xl font-normal decoration-yellow underline-offset-4 hover:text-yellow hover:underline"
            onClick={openModal}
          >
            Стати нашим HRом
          </button>
          <button
            className="block py-2 text-xl font-normal decoration-yellow underline-offset-4 hover:text-yellow hover:underline"
            onClick={openModal}
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
        <p className="mr-36 font-open-sans text-sm font-normal leading-4 text-white hover:text-yellow">
          Розробка Baza Trainee Ukraine 2024 &#169; Усі
          права захищені
        </p>
        <a
          className="hover: decoration gray-700 mr-72 inline-block font-open-sans text-sm text-white underline underline-offset-2 hover:text-yellow"
          target="_blank"
          rel="noopener noreferrer"
          href="/document/privacypolicy.pdf"
        >
          Політика конфіденційності
        </a>
        <a
          className="hover: decoration gray-700 inline-block font-open-sans text-sm text-white underline underline-offset-2 hover:text-yellow"
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
    </div>
  );
};

export default Footer;
