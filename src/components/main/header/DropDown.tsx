'use client';

import * as z from 'zod';
import {
  useForm,
  SubmitHandler,
  UseFormRegister,
  FieldValues,
} from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import HeaderSearchIcon from '@/components/icons/HeaderSearchIcon';
import HeaderCaretDown from '@/components/icons/HeaderCaretDown';
import { useEffect } from 'react';
import { useRef } from 'react';

const DropDown = ({
  title,
  inputs,
}: {
  title: string;
  inputs: string[];
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const submenuRef = useRef<HTMLFormElement>(null);
  const schema = z.object({
    stack: z
      .string()
      .array()
      .nonempty({ message: 'Can`t be empty' }),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    resolver: zodResolver(schema),
    defaultValues: { stack: [] },
  });
  const onSubmit: SubmitHandler<FieldValues> = (data) =>
    console.log(data);

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
      className={`relative flex h-[50px] w-[142px] cursor-pointer items-center justify-center rounded-t-[8px] transition-all hover:bg-[#525252] ${isOpen && 'bg-[#525252]'} `}
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
        <form
          className="absolute left-0 top-[100%] flex w-[250px] flex-col rounded-[4px] rounded-tl-none border-[2px] border-[#4E4E4E] bg-[#202020]"
          onSubmit={handleSubmit(onSubmit)}
          ref={submenuRef}
        >
          <div>
            {inputs.map((item: string) => (
              <StackItem
                key={item}
                title={item}
                register={register}
              />
            ))}
          </div>
          <button className="relative mx-auto my-[14px] flex h-[36px] w-[72%] items-center justify-center rounded-[6px] border-[2px] border-yellow text-[16px] leading-[36px] text-yellow">
            Знайти
          </button>
          <span className="relative mx-auto my-2 text-[16px] text-red-500">
            {errors.stack?.message as string}
          </span>
        </form>
      )}
    </div>
  );
};

const StackItem = ({
  title,
  register,
}: {
  title: string;
  register: UseFormRegister<FieldValues>;
}) => {
  return (
    <div className="relative flex h-[50px] w-full flex-row-reverse items-center justify-between border-b-[2px] border-b-[#4E4E4E] px-[20px] transition-all last:border-none hover:bg-[#2B2B2B]">
      <input
        {...register('stack')}
        value={title}
        name="stack"
        type="checkbox"
        id={title}
        className="peer z-30 h-[20px] w-[20px] shrink-0 cursor-pointer appearance-none rounded-[4px] border-[1px] border-white"
      />
      <label
        htmlFor={title}
        className="z-[1] font-sans text-[16px] tracking-[2%] text-white after:absolute after:left-0 after:top-0 after:z-[-1] after:h-full after:w-full after:cursor-pointer peer-checked:text-yellow peer-checked:after:bg-[#2B2B2B]"
      >
        {title}
      </label>
      <svg
        className="pointer-events-none absolute right-[20px] z-[1] hidden h-[20px] w-[20px] text-white peer-checked:block"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
    </div>
  );
};

export default DropDown;
