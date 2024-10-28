import Logo from "@/components/shared/icons/Logo";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function MobileLogo(): JSX.Element {
  const t = useTranslations('Main.footer');

  return (
    <div className=' md:hidden flex flex-col mt-4 gap-10 items-center justify-center'>
      <Link
        href="/"
        aria-label="logo-icon"
        className="flex w-full max-w-[500px] items-center justify-center">
        <Logo className="block scale-150"/>
      </Link>

      <h3 className="text-center font-tahoma text-xl font-semibold text-white ">
        {t('offer')}
      </h3>
    </div>
  )
}