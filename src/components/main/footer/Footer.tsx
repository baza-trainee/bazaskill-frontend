import React from 'react';
import { Logo } from '@/components/main/ui/logo/logo';

const Footer = () => {
  return <div className="pt-20 px-32 flex flex-col bg-black">
     <div className="flex justify-start">
        <div className="w-98">
        <a href="/" aria-label="logo-icon">
          <Logo className="hover:scale-125"/>
        </a>
        <h3 className="font-tahoma font-bold text-2xl text-white mb-20 mt-12 hover:text-green">За крок до офферу</h3>
        <p className="font-normal text-sm font-open-sans leading-4 text-white hover:text-green">Розробка Baza Trainee Ukraine 2024 &#169; Усі права захищені</p>
        </div>
        <div className="w-96 ml-56 text-white">
              <a className="inline-block py-2 text-xl font-normal hover:text-green hover:underline decoration-green underline-offset-4">Про нас</a>
              <button className="block py-2 text-xl font-normal hover:text-green hover:underline decoration-green underline-offset-4">Стати нашим HRом</button>
              <button className="block py-2 text-xl font-normal hover:text-green hover:underline decoration-green underline-offset-4">Стати нашим партнером</button>
        <a className="inline-block mt-16 text-sm text-white font-open-sans hover: underline decoration gray-700 underline-offset-2 hover:text-green" href="/" target="_blank" rel="noopener noreferrer">Політика конфіденційності</a>
        </div>
        <div>
        <a className="block text-xl font-normal text-white py-2 hover: underline decoration gray-700 underline-offset-2 hover:text-green" href="https://baza-trainee.tech/ua" target="_blank" rel="noopener noreferrer">Baza Trainee Ukraine</a>
        <a className="block text-xl font-normal text-white py-2 hover: underline decoration gray-700 underline-offset-2 hover:text-green" href="https://baza-educat.com.ua/" target="_blank" rel="noopener noreferrer">Стажування на Baza Educat</a>
        <p className="text-white text-xl font-normal py-2 hover:text-green">Розробка Baza Poligon</p>
        <a className="inline-block mt-16 text-sm text-white font-open-sans hover: underline decoration gray-700 underline-offset-2 hover:text-green" href="/" target="_blank" rel="noopener noreferrer">Правила користування сайтом</a>
        </div>
    </div>
      <div className="flex justify-center px-10 py-8">
        <p className="text-xs text-white">Компанія направляє 10% прибутку на підтримку 59-тої бригади ім.Якова Гандзюка</p>
      </div>
   </div>
  
};

export default Footer;
