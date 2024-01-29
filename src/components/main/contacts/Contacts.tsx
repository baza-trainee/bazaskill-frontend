import React from 'react';
import Image from 'next/image';
const Contacts = () => {
  return <div className="py-14 px-32">
    <h2 className="flex justify-center mb-12 text-5xl text-white font-bold">Контакти</h2>
     <div className="relative">
       <Image className="rounded-xl" src={'/contactsphotodes@1x.jpg'} width={1280} height={408} alt="people's hands" priority={true}  /> 
      
       <div className="flex flex-col absolute bottom-0 right-10 width={270} height={360}">
      <ul className="mb-36">
        <li className="p-1">
          <a className="flex text-xl font-normal leading-6 p-1.5 mb-1.5 hover:text-green" href="tel:+380636286630" target="_blank" rel="noopener noreferrer"> 
             <svg className="mr-3 hover:fill-green hover:scale-125" width={24} height={24}>
                <use href="/Icons/sprite.svg#icon-tel"></use>
             </svg>
             +38 063 628 66 30
          </a>
        </li>
        <li className="p-1">
          <a className="flex text-xl font-normal leading-6 p-1.5 mb-1.5 hover:text-green" href="tel:+380675681788" target="_blank" rel="noopener noreferrer">
            <svg className="mr-3 hover:fill-green hover:scale-125" width={24} height={24}>
                <use href="/Icons/sprite.svg#icon-tel"></use>
             </svg>
             +38 067 568 17 88
          </a>
        </li>
        <li className="p-1">
          <a className="flex text-xl font-normal leading-6 p-1.5 mb-1.5 hover:text-green" href="mailto:info@baza-skill.com.ua" target="_blank" rel="noopener noreferrer">
            <svg className="mr-3 hover:fill-green hover:scale-125" width={24} height={24}>
                <use href="/Icons/sprite.svg#icon-email"></use>
            </svg>
            info@baza-skill.com.ua
          </a>
        </li>
        <li className="p-1">
          <a className="flex text-xl font-normal leading-6 p-1.5 mb-1.5 hover:text-green" href="mailto:cv@baza-skill.com.ua" target="_blank" rel="noopener noreferrer">
            <svg className="mr-3 hover:fill-green hover:scale-125" width={24} height={24}>
                <use href="/Icons/sprite.svg#icon-email"></use>
            </svg>
            cv@baza-skill.com.ua
          </a>
        </li>
      </ul>
      <div className="">
        <ul className="flex justify-center space-x-4">
           <li className="p-4">
              <a href="https://www.linkedin.com/company/baza-trainee-ukraine/" target="_blank" rel="noopener noreferrer">
                 <svg className="hover:fill-green hover:scale-125" width={24} height={24}>
                     <use href="/Icons/sprite.svg#icon-lnkedIn"></use>
                 </svg>
              </a>
            </li>
           <li className="p-4">
              <a href="/" target="_blank" rel="noopener noreferrer">
                  <svg className="hover:fill-green hover:scale-125" width={24} height={24}>
                     <use href="/Icons/sprite.svg#icon-telegram"></use>
                  </svg>
              </a>
            </li>
           <li className="p-4">
              <a href="/" target="_blank" rel="noopener noreferrer">
                  <svg className="hover:fill-green hover:scale-125" width={24} height={24}>
                     <use href="/Icons/sprite.svg#icon-instagram"></use>
                  </svg>
              </a>
            </li>
           <li className="p-4">
              <a href="/" target="_blank" rel="noopener noreferrer">
                  <svg className="hover:fill-green hover:scale-125" width={24} height={24}>
                     <use href="/Icons/sprite.svg#icon-facebook"></use>
                  </svg>
              </a>
           </li>
        </ul>
      </div>
     </div>


     </div>

  </div>;
};

export default Contacts;
