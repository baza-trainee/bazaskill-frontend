import { Link } from "@/navigation";
import { useTranslations } from "next-intl";

export default function UnderDevelopment() {
  const t = useTranslations("UnderDevelopment");
  return (
    <div className="container flex h-[100vh] mt-[60px] md:mt-[90px] w-full items-center justify-center bg-graphite text-white">
      <div className="flex flex-col items-center justify-center gap-2">
        <p className="text-center font-regular font-mont text-[36px]  sm:text-[42px] md:text-[60px]">
        {t('title')}
        </p>

        <h1 className="text-center font-tahoma text-[20px] font-semibold xl:text-[24px] mb-8">
          {t('text')}
        </h1>
        <Link href="/" 
          className="h-[54px] flex items-center justify-center border border-green min-w-[272px] px-4 whitespace-nowrap rounded-md font-tahoma text-[20px] font-semibold text-white duration-300 hover:text-yellow hover:bg-green">
            {t('button')}
        </Link>
      </div>
    </div>
  );
}