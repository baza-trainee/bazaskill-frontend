'use client';

import { useMessages,useTranslations } from 'next-intl';
import { TypeAnimation } from 'react-type-animation';

function HeroTitle() {
  const t = useTranslations('Main.hero_section')
  const messages: any = useMessages();

  return (
    <TypeAnimation
      sequence={[
        messages.Main.hero_section.title.specialist,
        2500,
        messages.Main.hero_section.title.designer,
        2500,
        messages.Main.hero_section.title.developer,
        2500,
        messages.Main.hero_section.title.qa,
        2500,
        messages.Main.hero_section.title.pm,
        2500,
      ]}
      wrapper="h1"
      speed={25}
      style={{
        display: 'inline',
        fontWeight: 'bold',
      }}
      repeat={Infinity}
      aria-live="polite"
      aria-label={t('aria-label')}
      role="heading"
    />
  );
}

export default HeroTitle;
