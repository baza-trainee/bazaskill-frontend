import { useTranslations } from 'next-intl';
import { FaPaw } from 'react-icons/fa';

function AffiliateBanner() {
  const t = useTranslations('Main');

  return (
    <div
      className="hidden w-full items-center justify-center bg-graphite p-2 md:flex"
      role="banner"
    >
      <div
        className="main-gradient flex items-center justify-center bg-clip-text text-transparent transition-all"
        aria-label={t('banner')}
      >
        <FaPaw className="text-green" aria-hidden="true" />
        &nbsp; &nbsp;
        <a
          href="https://hostiq.ua/ukr/vps-hosting/?utm_medium=affiliate&utm_source=none&utm_campaign=6889"
          className="text-pretty text-center"
          aria-label="Visit VPS hosting site"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('banner')}
        </a>
        &nbsp; &nbsp;
        <FaPaw className="text-yellow" aria-hidden="true" />
      </div>
    </div>
  );
}

export default AffiliateBanner;
