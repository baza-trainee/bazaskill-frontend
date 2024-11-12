import { useTranslations } from 'next-intl';

import Logo from '@/components/shared/icons/Logo';
import { Link } from '@/navigation';

export default function MobileLogo(): JSX.Element {
  const t = useTranslations('Footer');

  return (
    <div className=" mt-4 flex flex-col items-center justify-center gap-10 md:hidden">
      <Link
        href="/"
        aria-label="logo-icon"
        className="flex w-full max-w-[500px] items-center justify-center"
      >
        <Logo className="block scale-150" />
      </Link>

      <h3 className="text-center font-tahoma text-xl font-semibold text-white ">
        {t('offer')}
      </h3>
    </div>
  );
}
