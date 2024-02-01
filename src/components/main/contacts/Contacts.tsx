import React from 'react';

const contactData = [
  { type: 'tel', value: '+380 63 628 6630', link: 'tel:+380636286630' },
  { type: 'tel', value: '+380 67 568 1788', link: 'tel:+380675681788' },
  { type: 'email', value: 'info@baza-skill.com.ua', link: 'mailto:info@baza-skill.com.ua' },
  { type: 'email', value: 'cv@baza-skill.com.ua', link: 'mailto:cv@baza-skill.com.ua' },
];

const socialLinks = [
  { icon: 'lnkedIn', link: 'https://www.linkedin.com/company/baza-trainee-ukraine/' },
  { icon: 'telegram', link: '/' },
  { icon: 'instagram', link: '/' },
  { icon: 'facebook', link: '/' },
];

const Contacts = () => {
  return (
    <div className="py-14 px-32">
      <h2 className="flex justify-center mb-12 text-5xl text-white font-bold">Контакти</h2>
      <div className="bg-[url('/img/workprocessdesk@1x.jpg')] w-[1280px] h-[445px] priority={true} alt={employees are sitting at the table}" >
        
         <div className="flex flex-col pl-48 pt-20 width={270} height={288}">
          <ul className="mb-12 mr-auto">
            {contactData.map((contact, index) => (
              <li key={index} className="p-1">
                <a className="flex text-lg font-semibold leading-6 p-1.5 mb-1.5" href={contact.link} target="_blank" rel="noopener noreferrer">
                  <svg className="mr-3 hover:scale-125" width={24} height={24}>
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
          <div className="mr-auto">
            <ul className="flex space-x-8">
              {socialLinks.map((socialLink, index) => (
                <li key={index} className="p-2">
                  <a href={socialLink.link} target="_blank" rel="noopener noreferrer">
                    <svg className="hover:scale-125" width={24} height={24}>
                      <use href={`/Icons/sprite.svg#icon-${socialLink.icon}`}></use>
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

