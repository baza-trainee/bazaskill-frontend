'use client';
import { constants } from '@/constants';
import { useQuery } from '@tanstack/react-query';
import { getSpecializationsWithStack } from '@/api/specialization';
import {
  ISpecializationWithStack,
  SpecializationStack,
} from '@/types/specialization';
import { useState } from 'react';
import FiltersSpecializationMenu from './FiltersSpecializationMenu';
import CustomCheckbox from './CustomCheckbox';
const Filters = () => {
  return (
    <div className="box-border flex h-fit w-[440px] flex-col gap-[32px] border-r-[1px] border-secondaryGray pl-[24px] pr-[32px]">
      <div className="border-b-[1px] border-secondaryGray font-tahoma text-[20px] font-[700] text-white">
        <h3 className="py-[8px]">Фільтри</h3>
      </div>
      <FiltersSpecializationMenu />

      <div className="flex flex-col gap-[20px] font-sans text-[20px]">
        <h3 className="leading-[28px]">Виконані проєкти</h3>
        <div className="flex flex-col gap-[20px] text-[16px]">
          <CustomCheckbox title="1" />
          <CustomCheckbox title="2" />
          <CustomCheckbox title="3" />
          <CustomCheckbox title="4 і більше" />
        </div>
      </div>

      <div className="flex flex-col gap-[20px] font-sans text-[20px]">
        <h3 className="leading-[28px]">Формат роботи</h3>
        <div className="flex flex-col gap-[20px] text-[16px]">
          <CustomCheckbox title="Дистанційний" />
          <CustomCheckbox title="В офісі" />
          <CustomCheckbox title="Гібридний" />
          <CustomCheckbox title="Часткова зайнятість" />
        </div>
      </div>

      <div className="flex flex-col gap-[20px] font-sans text-[20px]">
        <h3 className="leading-[28px]">Мова</h3>
        <div className="flex flex-col gap-[20px] text-[16px]">
          <CustomCheckbox title="Англійська" />
          <CustomCheckbox title="Польська" />
          <CustomCheckbox title="Німецька" />
        </div>
      </div>

      <div className="flex flex-col gap-[20px] font-sans text-[20px]">
        <h3 className="leading-[28px]">Освіта</h3>
        <div className="flex flex-col gap-[20px] text-[16px]">
          <CustomCheckbox title="Середня професійна" />
          <CustomCheckbox title="Вища" />
          <CustomCheckbox title="Курси" />
        </div>
      </div>

      <div className="flex flex-col gap-[20px] font-sans text-[20px]">
        <h3 className="leading-[28px]">Статус</h3>
        <div className="flex flex-col gap-[20px] text-[16px]">
          <CustomCheckbox title="У пошуку" />
          <CustomCheckbox title="Працює" />
          <CustomCheckbox title="Не активний" />
        </div>
      </div>

      <div className="relative flex w-full flex-col gap-[20px] font-sans text-[20px]">
        <h3 className="leading-[28px]">Зарплата</h3>
        <div className="relative flex h-[40px] w-full max-w-full gap-[10px]">
          <div className="flex h-full w-[32px] items-center justify-center">
            $
          </div>
          <input
            placeholder="500"
            type="number"
            className="w-[130px] grow rounded-[4px] border-[1px] border-secondaryGray bg-transparent px-[8px] py-[7px] text-white outline-none [appearance:textfield] placeholder:text-secondaryGray [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
          />
          <input
            placeholder="700"
            type="number"
            className="w-[130px] grow rounded-[4px] border-[1px] border-secondaryGray bg-transparent px-[8px] py-[7px] text-white outline-none [appearance:textfield] placeholder:text-secondaryGray [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
          />

          <button className="flex items-center justify-center rounded-[4px] border-[1px] border-yellow px-[24px] py-[15px] text-yellow">
            OK
          </button>
        </div>
      </div>

      <div className="main-gradient flex items-center justify-center rounded-[6px]">
        <div className="m-[2px] w-full rounded-[6px] bg-graphite">
          <button
            className="main-gradient flex h-[54px] w-full items-center justify-center border-[1px] bg-clip-text font-sans text-[20px] font-[700] leading-[28px] text-transparent"
            type="submit"
          >
            Застосувати фільтри
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filters;
