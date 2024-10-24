import { useModal } from '@/stores/useModal';
import { sendGTMEvent } from '@next/third-parties/google';
import { useTranslations } from 'next-intl';

export default function BecomeBlock(): JSX.Element {
  const t = useTranslations('Main.footer');
  const { openModal } = useModal();
  return (
    <div className="flex flex-col gap-2 text-white md:gap-5 items-start">
      <button
        className={'inline-block text-start font-semibold duration-300 text-lg hover:text-yellow'}
        onClick={() => {
          openModal('hr');
          sendGTMEvent({
            event: 'buttonClicked',
            value: 'User opened "To become HR" form',
          });
        }}
      >
        {t('to_become_hr')}
      </button>
      <button
        className={'inline-block text-start font-semibold duration-300 text-lg hover:text-yellow'}
        onClick={() => {
          openModal('partner');
          sendGTMEvent({
            event: 'buttonClicked',
            value:
              'User opened "To become patner" form',
          });
        }}
      >
        {t('to_become_partner')}
      </button>
    </div>
    )
}