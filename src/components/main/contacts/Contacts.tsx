'use client';

import React from 'react';
import { useTranslations } from 'next-intl';

const contactData = [
  {
    type: 'tel',
    value: '+380 63 628 6630',
    link: 'tel:+380636286630',
  },
  {
    type: 'tel',
    value: '+380 67 568 1788',
    link: 'tel:+380675681788',
  },
  {
    type: 'email',
    value: 'info@baza-skill.com.ua',
    link: 'mailto:info@baza-skill.com.ua',
  },
  {
    type: 'email',
    value: 'cv@baza-skill.com.ua',
    link: 'mailto:cv@baza-skill.com.ua',
  },
];

const socialLinks = [
  {
    icon: 'instagram',
    link: 'https://www.linkedin.com/company/baza-trainee-ukraine/',
  },
  {
    icon: 'lnkedIn',
    link: 'https://www.linkedin.com/company/baza-trainee-ukraine/',
  },
  { icon: 'discord', link: '/' },
  { icon: 'telegram', link: '/' },
  { icon: 'facebook', link: '/' },
];

const Contacts = () => {
  const t = useTranslations('Main.contacts');
  return (
    <div className="container py-14">
      <h2 className="mb-12 flex w-full justify-center text-2xl font-bold text-white md:text-2xl lg:text-[40px]">
        {t('title')}
      </h2>
      <div className="priority={true} alt={employees are sitting at the table} height-[445px] w-full bg-cover sm:bg-graphite md:bg-[url('/img/contactstablet.jpg')] xl:bg-[url('/img/contacts1280.jpg')] 2xl:bg-[url('/img/contacts1368.jpg')] 3xl:bg-[url('/img/contacts1440.jpg')] 4xl:bg-[url('/img/contacts1536.jpg')] 5xl:bg-[url('/img/contacts1920.jpg')]">
        <div className="width={270} height={288} flex flex-col rounded from-greenBg to-yellow pl-48 pt-20 xs:bg-gradient-to-r xs:py-5 xs:pl-0 md:bg-none">
          <ul className="mr-auto xs:mb-[20px] sm:ml-[50px] xl:mt-[40px] 2xl:mb-[30px]">
            {contactData.map((contact, index) => (
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
                    {contact.type === 'tel' ? (
                      <use href="/Icons/sprite.svg#icon-tel"></use>
                    ) : (
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
              {socialLinks.map((socialLink, index) => (
                <li key={index} className="p-2">
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
                      ></use>
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
