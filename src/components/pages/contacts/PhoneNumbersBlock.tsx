import Link from "next/link"
import { IContactData } from "./useContactsData"
import { useTranslations } from "next-intl";

interface Props{
  contactTel: IContactData[];
}

export default function PhoneNumbersBlock({contactTel}: Props): JSX.Element {
  const t = useTranslations('Contacts');
  return (
    <div className='w-full max-w-[380px] md:w-[350px] lg:w-[32%] border-t-[1px] border-green relative rounded-lg py-12 flex flex-col items-center justify-start gap-8 text-white overflow-hidden'>
      <h3 className='text-center text-2xl font-tahoma font-bold'>{t('phone_numbers')}</h3>

      <ul className='flex flex-col gap-8'>
        { contactTel && 
          Array.isArray(contactTel) && 
          contactTel.map((tel, index) => {
            return (
              <li key={index}>
                <Link className='text-lg md:hidden font-semibold leading-normal flex items-center duration-300 hover:opacity-70' 
                href={tel.link} target="_blank"
                rel="noopener noreferrer">
                <svg
                  className="mr-3 fill-white"
                  width={20}
                  height={20}
                >
                  <use href="/Icons/sprite.svg#icon-tel"></use>
                </svg>
                <span className='contact'>{tel.value}</span>
              </Link>

              <p className='text-lg font-semibold leading-normal hidden md:flex items-center'>
                <svg
                  className="mr-3 fill-white"
                  width={20}
                  height={20}
                >
                  <use href="/Icons/sprite.svg#icon-tel"></use>
                </svg>
                <span className='contact'>{tel.value}</span>
              </p>
            </li>
            )
          })
        }
      </ul>

      <span className='h-full absolute top-0 left-0 w-[1px] bg-gradient-to-b from-green to-graphite'></span>
      <span className='h-full absolute top-0 right-0 w-[1px] bg-gradient-to-b from-green to-graphite'></span>
    </div>
  )
}