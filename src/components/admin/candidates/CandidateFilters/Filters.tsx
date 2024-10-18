'use client';
import type {
  FieldValues,
  SubmitHandler,
} from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import {
  useForm,
} from 'react-hook-form';

import CustomCheckbox from '@/components/shared/candidates/CustomCheckbox';
import defaultValues from '@/components/shared/candidates/defaultValues';
import FiltersSpecializationMenu from '@/components/shared/candidates/FiltersSpecializationMenu';
import schema from '@/components/shared/candidates/schema';

function Filters({
  SubmitHandler,
}: {
  SubmitHandler: (data: FieldValues) => void;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    resolver: zodResolver(schema),
    defaultValues: { ...defaultValues },
  });

  const onSubmit: SubmitHandler<FieldValues> = (
    data,
    event,
  ) => {
    event?.preventDefault();
    SubmitHandler(data);
  };

  const handleInput = (
    e: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    const input = e.target as HTMLInputElement;
    const currentValue = input.value;

    const numericKeys = /\d/;
    const specialKeys = ['Backspace'];

    if (currentValue.length >= 5 && e.key !== 'Backspace') {
      e.preventDefault();
    }

    if (
      !numericKeys.test(e.key)
      && !specialKeys.includes(e.key)
    ) {
      e.preventDefault();
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="no-scrollbar mx-auto box-border flex h-fit max-h-[180vh] w-1/2 flex-col gap-[32px] overflow-y-auto border-r border-secondaryGray px-[24px] pb-[24px]"
    >
      <div className="border-b border-secondaryGray font-tahoma text-[20px] font-[700] text-white">
        <h3 className="py-[8px]">Фільтри</h3>
      </div>
      <FiltersSpecializationMenu register={register} />
      <span className="relative mx-auto my-2 text-[16px] text-red-500"></span>
      <div className="flex flex-col gap-[20px] font-sans text-[20px]">
        <h3 className="leading-[28px]">Виконані проєкти</h3>
        <div className="flex flex-col gap-[20px] text-[16px]">
          <CustomCheckbox
            registerFor="projects"
            value="1"
            register={register}
            title="1"
          />
          <CustomCheckbox
            registerFor="projects"
            value="2"
            register={register}
            title="2"
          />
          <CustomCheckbox
            registerFor="projects"
            value="3"
            register={register}
            title="3"
          />
          <CustomCheckbox
            registerFor="projects"
            value="4"
            register={register}
            title="4 і більше"
          />
        </div>
      </div>

      <div className="flex flex-col gap-[20px] font-sans text-[20px]">
        <h3 className="leading-[28px]">Формат роботи</h3>
        <div className="flex flex-col gap-[20px] text-[16px]">
          <CustomCheckbox
            registerFor="occupation"
            value="Remote"
            register={register}
            title="Дистанційний"
          />
          <CustomCheckbox
            registerFor="occupation"
            value="Office"
            register={register}
            title="В офісі"
          />
          <CustomCheckbox
            registerFor="occupation"
            value="Hybrid"
            register={register}
            title="Гібридний"
          />
          <CustomCheckbox
            registerFor="occupation"
            value="Part-time"
            register={register}
            title="Часткова зайнятість"
          />
        </div>
      </div>

      <div className="flex flex-col gap-[20px] font-sans text-[20px]">
        <h3 className="leading-[28px]">Мова</h3>
        <div className="flex flex-col gap-[20px] text-[16px]">
          <CustomCheckbox
            registerFor="language"
            value="English"
            register={register}
            title="Англійська"
          />
          <CustomCheckbox
            registerFor="language"
            value="Polish"
            register={register}
            title="Польська"
          />
          <CustomCheckbox
            registerFor="language"
            value="German"
            register={register}
            title="Німецька"
          />
        </div>
      </div>

      <div className="flex flex-col gap-[20px] font-sans text-[20px]">
        <h3 className="leading-[28px]">Освіта</h3>
        <div className="flex flex-col gap-[20px] text-[16px]">
          <CustomCheckbox
            registerFor="graduate"
            value="secondary_professional"
            register={register}
            title="Середня професійна"
          />
          <CustomCheckbox
            registerFor="graduate"
            value="gradaute"
            register={register}
            title="Вища"
          />
          <CustomCheckbox
            registerFor="graduate"
            value="cources"
            register={register}
            title="Курси"
          />
        </div>
      </div>

      <div className="flex flex-col gap-[20px] font-sans text-[20px]">
        <h3 className="leading-[28px]">Статус</h3>
        <div className="flex flex-col gap-[20px] text-[16px]">
          <CustomCheckbox
            registerFor="status"
            value="Searching"
            register={register}
            title="У пошуку"
          />
          <CustomCheckbox
            registerFor="status"
            value="Working"
            register={register}
            title="Працює"
          />
          <CustomCheckbox
            registerFor="status"
            value="Inactive"
            register={register}
            title="Не активний"
          />
        </div>
      </div>

      <div className="relative flex w-full flex-col gap-[20px] font-sans text-[20px]">
        <h3 className="leading-[28px]">Зарплата</h3>
        <div className="relative flex h-[40px] w-full max-w-full gap-[10px]">
          <div className="flex h-full w-[32px] items-center justify-center">
            $
          </div>
          <input
            {...register('sallary.from')}
            placeholder="500"
            type="number"
            onKeyDown={handleInput}
            className="w-[130px] grow rounded-[4px] border border-secondaryGray bg-transparent px-[8px] py-[7px] text-white outline-none [appearance:textfield] placeholder:text-secondaryGray [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
          />
          <input
            {...register('sallary.to')}
            placeholder="700"
            type="number"
            onKeyDown={handleInput}
            className="w-[130px] grow rounded-[4px] border border-secondaryGray bg-transparent px-[8px] py-[7px] text-white outline-none [appearance:textfield] placeholder:text-secondaryGray [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
          />

          <button className="flex items-center justify-center rounded-[4px] border border-yellow px-[24px] py-[15px] text-yellow">
            OK
          </button>
          {errors.sallary?.root && (
            <span className="absolute bottom-[-20px] left-0 text-xs text-red-500">
              {errors.sallary?.root?.message?.toString()}
            </span>
          )}
        </div>
      </div>

      <div className="main-gradient  mx-auto flex items-center justify-center rounded-[6px] md:max-w-[75%]">
        <div className="m-[2px] w-full rounded-[6px] bg-graphite px-4">
          <button className="main-gradient flex h-[54px] w-full items-center justify-center border bg-clip-text font-sans text-[20px] font-[700] leading-[28px] text-transparent">
            Застосувати фільтри
          </button>
        </div>
      </div>
    </form>
  );
}

export default Filters;
