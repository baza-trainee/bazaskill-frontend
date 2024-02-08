import React from 'react';

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
  { icon: 'lnkedIn', link: '/' },
  { icon: 'discord', link: '/' },
  { icon: 'telegram', link: '/' },
  { icon: 'facebook', link: '/' },
];

const Contacts = () => {
  return (
    <div className="container py-14">
      <h2 className="mb-12 flex w-full  justify-center text-5xl font-bold text-white">
        Контакти
      </h2>
      <div className="priority={true} alt={employees are sitting at the table} h-[445px] w-full bg-[url('/img/workprocessdesk@1x.jpg')] bg-cover">
        <div className="width={270} height={288} flex flex-col pl-48 pt-20">
          <ul className="mb-12 mr-auto">
            {contactData.map((contact, index) => (
              <li key={index} className="p-1">
                <a
                  className="mb-1.5 flex p-1.5 text-lg font-semibold leading-6"
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
          <div className="mr-auto">
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
