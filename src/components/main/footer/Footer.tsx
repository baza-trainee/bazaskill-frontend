import React from 'react';
import { useState } from 'react';
import { Logo } from '@/components/main/ui/logo/logo';

type FooterLinkProps = {
  href: string;
  children: React.ReactNode;
};

const FooterLink: React.FC<FooterLinkProps> = ({ href, children }) => (
  <a
    className="block text-xl font-normal text-white py-2 hover:underline decoration gray-700 underline-offset-2 hover:text-yellow"
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
    console.log("open modal");
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="pt-20 px-32 flex justify-center flex-col bg-black">
      <div className="flex justify-start">
        <div className="w-110">
          <a href="/" aria-label="logo-icon">
            <Logo className="hover:scale-125" />
          </a>
          <h3 className="block font-tahoma font-bold text-2xl text-white mb-20 mt-12 hover:text-yellow">За крок до офферу</h3>
        </div>
        <div className="w-96 ml-72 mr-24 text-white">
          <button className="inline-block py-2 text-xl font-normal hover:text-yellow hover:underline decoration-yellow underline-offset-4">
            <a href="#aboutus">Про нас</a>
          </button>
          <button className="block py-2 text-xl font-normal hover:text-yellow hover:underline decoration-yellow underline-offset-4" onClick={openModal}>
            Стати нашим HRом
          </button>
          <button className="block py-2 text-xl font-normal hover:text-yellow hover:underline decoration-yellow underline-offset-4" onClick={openModal}>
            Стати нашим партнером
          </button>
        </div>
        <div>
          <FooterLink href="https://baza-trainee.tech/ua">Baza Trainee Ukraine</FooterLink>
          <FooterLink href="https://baza-educat.com.ua/">Стажування на Baza Educat</FooterLink>
          <FooterLink href="/">Розробка Baza Poligon</FooterLink>
        </div>
      </div>
      <div className="flex justify-start">
        <p className="font-normal text-sm mr-36 font-open-sans leading-4 text-white hover:text-yellow">Розробка Baza Trainee Ukraine 2024 &#169; Усі права захищені</p>
        <a className="inline-block text-sm mr-72 text-white font-open-sans hover: underline decoration gray-700 underline-offset-2 hover:text-yellow" target="_blank" rel="noopener noreferrer" href="/document/privacypolicy.pdf">Політика конфіденційності</a>
        <a className="inline-block text-sm text-white font-open-sans hover: underline decoration gray-700 underline-offset-2 hover:text-yellow" target="_blank" rel="noopener noreferrer" href="/document/siteusagerules.pdf">Правила користування сайтом</a>
      </div>
      <div className="flex justify-center px-10 py-8">
        <p className="text-xs text-white">Компанія направляє 10% прибутку на підтримку 59-тої бригади ім.Якова Гандзюка</p>
      </div>
    </div>
  );
};

export default Footer;

