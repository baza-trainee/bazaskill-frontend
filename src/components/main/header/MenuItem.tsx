import HeaderCaretDown from '@/components/icons/HeaderCaretDown';
import HeaderSearchIcon from '@/components/icons/HeaderSearchIcon';
import { useEffect, useRef, useState } from 'react';
import SubMenu from './SubMenu';

const MenuItem = ({
  title,
  inputs,
}: {
  title: string;
  inputs: string[];
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const submenuRef = useRef<HTMLFormElement>(null);

  const openDropDownHandler = (): void => {
    setIsOpen(!isOpen);
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
      className={`relative flex h-[50px] cursor-pointer items-center justify-center rounded-t-[8px] transition-all hover:bg-[#525252] lg:box-content lg:w-max  lg:px-[12px] xl:w-max ${isOpen && 'bg-[#525252]'} `}
    >
      <div
        className="flex items-center justify-center text-white"
        onClick={openDropDownHandler}
        ref={menuRef}
      >
        <span className="relative top-[-3px]">
          <HeaderSearchIcon />
        </span>

        <h3>{title}</h3>
        <span
          className={`relative flex h-[20px] w-[20px] items-center justify-center ${!isOpen && 'top-[3px]  rotate-[180deg]'}`}
        >
          <HeaderCaretDown />
        </span>
      </div>

      {isOpen && (
        <SubMenu inputs={inputs} reference={submenuRef} />
      )}
    </div>
  );
};

export default MenuItem;
