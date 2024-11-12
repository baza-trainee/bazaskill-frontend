import { sendGTMEvent } from '@next/third-parties/google';
import { useTranslations } from 'next-intl';

import { useModal } from '@/stores/useModal';

export default function BecomeBlock(): JSX.Element {
  const t = useTranslations('Footer');
  const { openModal } = useModal();
  return (
    <div className="flex flex-col items-center gap-2 text-white md:items-start md:gap-5">
      <button
        className={
          'inline-block text-start text-lg font-semibold duration-300 hover:text-yellow'
        }
        onClick={() => {
          openModal('hr');
          sendGTMEvent({
            event: 'buttonClicked',
            value: 'User opened "To become HR" form'
          });
        }}
      >
        {t('to_become_hr')}
      </button>
      <button
        className={
          'inline-block text-start text-lg font-semibold duration-300 hover:text-yellow'
        }
        onClick={() => {
          openModal('partner');
          sendGTMEvent({
            event: 'buttonClicked',
            value: 'User opened "To become patner" form'
          });
        }}
      >
        {t('to_become_partner')}
      </button>
    </div>
  );
}
