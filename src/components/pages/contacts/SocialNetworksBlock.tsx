import Link from "next/link"
import { ISocialLinks } from "./useContactsData"
import { useTranslations } from "next-intl";

interface Props{
  socialLinks: ISocialLinks[];
}

export default function SocialNetworksBlock({socialLinks}: Props): JSX.Element {
  const t = useTranslations('Contacts');

  return (
    <div className='w-full max-w-[380px] lg:w-[32%] border-t-[1px] border-green relative rounded-lg py-12 flex flex-col items-center justify-start gap-8 text-white overflow-hidden'>
      <h3 className='text-center text-2xl font-tahoma font-bold'>{t("social_networks")}</h3>

      <ul className="flex items-center gap-4">
        { socialLinks
          && Array.isArray(socialLinks)
          && socialLinks.map((socialLink, index) => {
            if(socialLink.link){
              return( 
                <li key={index} className="p-1">
                  <Link
                    href={socialLink.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className='duration-300 hover:opacity-70 '
                  >
                    <svg
                      className=" fill-white duration-300 hover:scale-125"
                      width={24}
                      height={24}
                    >
                      <use
                        href={`/Icons/sprite.svg#icon-${socialLink.icon}`}
                      >
                      </use>
                    </svg>
                  </Link>
                </li>
              )
            }else return null
          })
        }
      </ul>

      <span className='h-full absolute top-0 left-0 w-[1px] bg-gradient-to-b from-green to-graphite'></span>
      <span className='h-full absolute top-0 right-0 w-[1px] bg-gradient-to-b from-green to-graphite'></span>
    </div>
  )
}