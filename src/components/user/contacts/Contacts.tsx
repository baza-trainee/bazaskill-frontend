'use client';

// import Cookies from 'js-cookie';
import { useTranslations } from 'next-intl';
// import React, { useEffect, useState } from 'react';

// import { useCookies } from '@/stores/useCookies';

import { useContactsData } from './useContactsData';

export default function Contacts(): JSX.Element {
  const t = useTranslations('Main.contacts');
  // const isCookie = useCookies(state => state.isCookies);
  // const [isCookiesAccepted, setIsCookiesAccepted]
  //   = useState(false);
  const { contactTel, contactEmail, socialLinks } = useContactsData();

  // useEffect(() => {
  //   setIsCookiesAccepted(!!Cookies.get('cookiesAccepted'));
  // }, [isCookie]);
  // bg-gradient-to-b from-green to-graphite rounded-lg
  return (
    <div className=" mt-20 md:mt-28 relative">
      <h1 className="visually-hidden">
        {t('title')}
      </h1>
      <section className='container h-[550px] flex justify-between items-center'>

        <div className='w-1/3 min-w-[380px] border-t-[1px] border-green relative rounded-lg p-12 flex flex-col justify-start gap-8 text-white overflow-hidden'>
          <h3 className='text-2xl font-tahoma font-bold'>Адреса</h3>
          <p className='text-xl font-normal leading-normal contact'>вул. Петропавлівська, 15, <br /> м.Київ, 04086,<br /> Україна</p>

          <span className='h-full absolute top-0 left-0 w-[1px] bg-gradient-to-b from-green to-graphite'></span>
          <span className='h-full absolute top-0 right-0 w-[1px] bg-gradient-to-b from-green to-graphite'></span>
        </div>

        <div className='w-1/2 h-96 bg-white'>maps</div>
      </section>

      <section className='container min-h-[520px] flex items-center  justify-between w-full bg-no-repeat bg-auto bg-fixed main-texture-background'>

        <div className='min-w-[380px] border-t-[1px] border-green relative rounded-lg p-12 flex flex-col justify-start gap-8 text-white overflow-hidden'>
          <h3 className='text-2xl font-tahoma font-bold'>Телефони</h3>
          { contactTel && 
            Array.isArray(contactTel) && 
            contactTel.map((tel, index) => {
              return (
                <p key={index} className='text-lg font-semibold leading-normal flex items-center'>
                <svg
                  className="mr-3 fill-white"
                  width={20}
                  height={20}
                >
                  <use href="/Icons/sprite.svg#icon-tel"></use>
                </svg>
                <span className='contact'>{tel.value}</span>
              </p>
              )
            })
          }

          <span className='h-full absolute top-0 left-0 w-[1px] bg-gradient-to-b from-green to-graphite'></span>
          <span className='h-full absolute top-0 right-0 w-[1px] bg-gradient-to-b from-green to-graphite'></span>
        </div>

        <div className=' min-w-[380px] border-b-[1px] border-green relative rounded-lg p-12 flex flex-col justify-start gap-8 text-white overflow-hidden'>
          <h3 className='text-2xl font-tahoma font-bold'>Email пошта</h3>
          {  contactEmail && 
            Array.isArray( contactEmail) && 
            contactEmail.map((email, index) => {
              return (
                <p key={index} className='text-lg font-semibold leading-normal flex items-center'>
                <svg
                  className="mr-3 fill-white"
                  width={20}
                  height={20}
                >
                  <use href="/Icons/sprite.svg#icon-email"></use>
                </svg>
                <span className='contact'>{email.value}</span>
              </p>
              )
            })
          }

          <span className='h-full absolute top-0 left-0 w-[1px] bg-gradient-to-t from-green to-graphite'></span>
          <span className='h-full absolute top-0 right-0 w-[1px] bg-gradient-to-t from-green to-graphite'></span>
        </div>

        <div className=' min-w-[380px] border-t-[1px] border-green relative rounded-lg p-12 flex flex-col justify-start gap-8 text-white overflow-hidden'>
          <h3 className='text-2xl font-tahoma font-bold'>Ми в соцмережах</h3>
          <ul className="flex items-center gap-4">
            { socialLinks
              && Array.isArray(socialLinks)
              && socialLinks.map((socialLink, index) => (
                <li key={index} className="p-1">
                  <a
                    href={socialLink.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className='duration-300 hover:opacity-70'
                  >
                    <svg
                      className=" fill-white"
                      width={24}
                      height={24}
                    >
                      <use
                        href={`/Icons/sprite.svg#icon-${socialLink.icon}`}
                      >
                      </use>
                    </svg>
                  </a>
                </li>
              ))
            }
          </ul>

          <span className='h-full absolute top-0 left-0 w-[1px] bg-gradient-to-b from-green to-graphite'></span>
          <span className='h-full absolute top-0 right-0 w-[1px] bg-gradient-to-b from-green to-graphite'></span>
        </div>
      </section>
    </div>
  );
}


{/* <div className="priority={true} alt={employees are sitting at the table} height-[445px] w-full bg-cover sm:bg-graphite md:bg-[url('/img/contactstablet.jpg')] xl:bg-[url('/img/contacts1280.jpg')] 2xl:bg-[url('/img/contacts1368.jpg')] 3xl:bg-[url('/img/contacts1440.jpg')] 4xl:bg-[url('/img/contacts1536.jpg')] 5xl:bg-[url('/img/contacts1920.jpg')]">
<div className="width={270} height={288} flex flex-col rounded from-greenBg to-yellow pl-48 pt-20 xs:bg-gradient-to-r xs:py-5 xs:pl-0 md:bg-none">
  <ul className="mr-auto xs:mb-[20px] sm:ml-[50px] xl:mt-[40px] 2xl:mb-[30px]">
    {contactData
    && Array.isArray(contactData)
    && contactData.map((contact, index) => (
      <li key={index} className="p-1">
        <a
          className="mb-1.5 flex p-1.5 text-lg leading-6 xs:font-bold md:pointer-events-none md:font-semibold"
          href={contact.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            className="mr-3 hover:scale-125"
            width={24}
            height={24}
          >
            {contact.type === 'tel'
              ? (
                  <use href="/Icons/sprite.svg#icon-tel"></use>
                )
              : (
                  <use href="/Icons/sprite.svg#icon-email"></use>
                )}
          </svg>
          {contact.value}
        </a>
      </li>
    ))}
  </ul>
  <div className="mr-auto sm:ml-[50px] 2xl:mb-[30px]">
    <ul className="flex space-x-4">
      {socialLinks
      && Array.isArray(socialLinks)
      && socialLinks.map((socialLink, index) => (
        <li key={index} className="p-2">
          <a
                  href={socialLink.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="duration-300 hover:scale-125  hover:opacity-90"
                    width={24}
                    height={24}
                  >
                    <use
                      href={`/Icons/sprite.svg#icon-${socialLink.icon}`}
                    >
                    </use>
                  </svg>
                </a>
          {isCookiesAccepted
            ? (
                <a
                  href={socialLink.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="hover:scale-125"
                    width={24}
                    height={24}
                  >
                    <use
                      href={`/Icons/sprite.svg#icon-${socialLink.icon}`}
                    >
                    </use>
                  </svg>
                </a>
              )
            : (
                <span>
                  <svg width={24} height={24}>
                    <use
                      href={`/Icons/sprite.svg#icon-${socialLink.icon}`}
                    >
                    </use>
                  </svg>
                </span>
              )}
        </li>
      ))}
    </ul>
  </div>
</div>
</div> */}