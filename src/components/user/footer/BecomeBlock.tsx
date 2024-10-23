import { useModal } from '@/stores/useModal';
import { sendGTMEvent } from '@next/third-parties/google';
import { useTranslations } from 'next-intl';

interface Props{
  isCookiesAccepted:boolean
}

export default function BecomeBlock({isCookiesAccepted}: Props): JSX.Element {
  const t = useTranslations('Main.footer');
  const { openModal } = useModal();
  return (
    <div className="flex flex-col gap-2 text-white md:gap-5 items-center md:items-start">
      <button
        className={`inline-block text-start font-semibold decoration-yellow underline-offset-4 duration-300 text-lg ${isCookiesAccepted && 'hover:text-yellow hover:underline'}`}
        onClick={() => {
          openModal('hr');
          sendGTMEvent({
            event: 'buttonClicked',
            value: 'User opened "To become HR" form',
          });
        }}
        disabled={!isCookiesAccepted}
      >
        {t('to_become_hr')}
      </button>
      <button
        className={`text-start inline-block whitespace-nowrap text-xl font-normal decoration-yellow underline-offset-4  md:text-lg duration-300 ${isCookiesAccepted && 'hover:text-yellow hover:underline'}`}
        onClick={() => {
          openModal('partner');
          sendGTMEvent({
            event: 'buttonClicked',
            value:
              'User opened "To become patner" form',
          });
        }}
        disabled={!isCookiesAccepted}
      >
        {t('to_become_partner')}
      </button>
    </div>
    )
}