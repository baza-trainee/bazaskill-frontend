import Link from 'next/link';

import { useTranslations } from 'next-intl';

import { ISocialLinks } from './useContactsData';

interface Props {
  socialLinks: ISocialLinks[];
}

export default function SocialNetworksBlock({
  socialLinks
}: Props): JSX.Element {
  const t = useTranslations('Contacts');

  return (
    <div className="relative flex w-full max-w-[380px] flex-col items-center justify-start gap-8 overflow-hidden rounded-lg border-t-[1px] border-green py-12 text-white lg:w-[32%]">
      <h3 className="text-center font-tahoma text-2xl font-bold">
        {t('social_networks')}
      </h3>

      <ul className="flex items-center gap-4">
        {socialLinks &&
          Array.isArray(socialLinks) &&
          socialLinks.map((socialLink, index) => {
            if (socialLink.link) {
              return (
                <li key={index} className="p-1">
                  <Link
                    href={socialLink.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="duration-300 hover:opacity-70 "
                  >
                    <svg
                      className=" fill-white duration-300 hover:scale-125"
                      width={24}
                      height={24}
                    >
                      <use
                        href={`/Icons/sprite.svg#icon-${socialLink.icon}`}
                      ></use>
                    </svg>
                  </Link>
                </li>
              );
            } else return null;
          })}
      </ul>

      <span className="absolute left-0 top-0 h-full w-[1px] bg-gradient-to-b from-green to-graphite"></span>
      <span className="absolute right-0 top-0 h-full w-[1px] bg-gradient-to-b from-green to-graphite"></span>
    </div>
  );
}
