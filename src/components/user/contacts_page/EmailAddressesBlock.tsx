import { useTranslations } from "next-intl";
import { IContactData } from "./useContactsData"

interface Props{
  contactEmail: IContactData[];
}

export function EmailAddressesBlock({contactEmail}: Props): JSX.Element {
  const t = useTranslations('Contacts');

  return (
    <div className='w-full max-w-[380px] md:w-[350px] lg:w-[32%] lg:border-b-[1px] lg:border-t-[0] border-t-[1px] border-green relative rounded-lg py-12 flex flex-col items-center justify-start gap-8 text-white overflow-hidden'>
      <h3 className='text-center text-2xl font-tahoma font-bold'>{t("email_addresses")}</h3>

      <ul className='flex flex-col gap-8'>
        {  contactEmail && 
          Array.isArray( contactEmail) && 
          contactEmail.map((email, index) => {
            return (
              <li key={index} className='pl-4 self-start text-lg font-semibold leading-normal flex items-center'>
                <svg
                  className="mr-3 fill-white"
                  width={20}
                  height={20}
                >
                  <use href="/Icons/sprite.svg#icon-email"></use>
                </svg>
                <span className='contact'>{email.value}</span>
              </li>
            )
          })
        }
      </ul>

      <span className='h-full absolute top-0 left-0 w-[1px] bg-gradient-to-b lg:bg-gradient-to-t from-green to-graphite'></span>
      <span className='h-full absolute top-0 right-0 w-[1px] bg-gradient-to-b lg:bg-gradient-to-t from-green to-graphite'></span>
    </div>
  )
}