import HeaderCaretDown from '@/components/icons/HeaderCaretDown';
import { locales } from '@/i18n';
import { usePathname, useRouter } from '@/navigation';
import { useLocale } from 'next-intl';
import { useEffect, useRef, useState } from 'react';

const LanguageSwitcher = () => {
  const router = useRouter();
  const path = usePathname();
  const locale: string = useLocale();
  const [currentLocale, setCurrentLocale] =
    useState(locale);
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const submenuRef = useRef<HTMLDivElement>(null);

  const handleCheckLocale = (item: string) => {
    setIsOpen(!isOpen);
    setCurrentLocale(item);
    router.replace(path, { locale: item });
  };

  const handleOutsideClick = (event: Event): void => {
    if (
      !submenuRef.current?.contains(
        event.target as HTMLElement
      ) &&
      !(
        event.target === menuRef.current ||
        menuRef.current?.contains(
          event.target as HTMLElement
        )
      )
    ) {
      setIsOpen(false);
    }
  };
  useEffect(() => {
    window.addEventListener('click', handleOutsideClick);
    return () =>
      window.removeEventListener(
        'click',
        handleOutsideClick
      );
  }, [isOpen]);
  return (
    <div
      className={`relative flex cursor-pointer items-center rounded-t-[8px] transition-all hover:bg-[#525252] ${isOpen && 'bg-[#525252]'}`}
    >
      <div
        ref={menuRef}
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-[50px] w-[60px] items-center justify-between px-[6px] text-white"
      >
        <span className="text-[18px] font-semibold">
          {currentLocale.toUpperCase()}
        </span>
        <span className={`${!isOpen && 'rotate-[180deg]'}`}>
          <HeaderCaretDown />
        </span>
      </div>
      {isOpen && (
        <div
          ref={submenuRef}
          className="absolute top-[100%] flex w-[60px] flex-col rounded-[4px] rounded-tl-none border-[2px] border-[#4E4E4E] bg-[#202020]"
        >
          {locales.map((item: string) => (
            <span
              key={item}
              className="flex h-[50px] cursor-pointer items-center justify-center border-b-[1px] border-b-[#4E4E4E] text-white transition-all last:border-none hover:bg-[#2B2B2B] hover:text-yellow"
              onClick={() => handleCheckLocale(item)}
            >
              {item.toUpperCase()}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};
export default LanguageSwitcher;
