'use client';
import HeaderCaretDown from '@/components/icons/HeaderCaretDown';
import HeaderSearchIcon from '@/components/icons/HeaderSearchIcon';
import { SpecializationStack } from '@/types/specialization';
import { useEffect, useRef, useState } from 'react';
import SubMenu from './SubMenu';

const MenuItem = ({
  title,
  inputs,
}: {
  title: string;
  inputs: SpecializationStack[];
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
      className={`group/item relative flex h-[50px] grow cursor-pointer items-center justify-center rounded-t-[8px] transition-all hover:bg-[#525252] lg:box-content ${isOpen && 'bg-[#525252]'} `}
    >
      <div
        className="box-border flex h-full w-full items-center justify-between pl-[16px] pr-[22px] text-white"
        ref={menuRef}
        onClick={openDropDownHandler}
      >
        <div className="flex items-center">
          <span className="relative top-[-3px]">
            <HeaderSearchIcon />
          </span>

          <h3 className="font-sans text-[18px] font-[600]">
            {title}
          </h3>
        </div>

        <span
          className={`relative flex h-[20px] w-[20px] items-center justify-center ${!isOpen && 'top-[3px]  rotate-[180deg]'}`}
        >
          <HeaderCaretDown />
        </span>
      </div>

      {isOpen && (
        <SubMenu
          inputs={inputs}
          reference={submenuRef}
          setIsOpen={setIsOpen}
        />
      )}
    </div>
  );
};

export default MenuItem;
