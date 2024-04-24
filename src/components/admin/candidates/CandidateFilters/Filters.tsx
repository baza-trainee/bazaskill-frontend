'use client';

import FiltersSpecializationMenu from './FiltersSpecializationMenu';
import CustomCheckbox from './CustomCheckbox';
import {
  FieldValues,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { SpecializationStack } from '@/types/specialization';
// z.object({
//   stack: z.object({
//     id: z.number(),
//     title: z.string(),
//     specialization_stack_id: z.number()
//   }).array()
// })
const Filters = () => {
  const schema = z.object({
    stack: z.string().array(),
    projects: z.string().array(),
    occupation: z.string().array(),
    language: z.string().array(),
    graduate: z.string().array(),
    status: z.string().array(),
    sallary: z
      .object({
        from: z.string(),
        to: z.string(),
      })
      .refine(
        (data) => {
          return (
            parseFloat(data.from) <= parseFloat(data.to)
          );
        },
        {
          message:
            'Значення Від не повинно бути більшим ніж значення До',
        }
      ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    mode: 'onChange',
    resolver: zodResolver(schema),
    defaultValues: { stack: [] },
  });

  const onSubmit: SubmitHandler<FieldValues> = (
    data,
    event
  ) => {
    event?.preventDefault();
    console.log(data);
  };

  const handleInput = (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    const input = e.target as HTMLInputElement;
    const currentValue = input.value;

    const numericKeys = /[0-9]/;
    const specialKeys = ['Backspace'];

    if (currentValue.length >= 5 && e.key !== 'Backspace') {
      e.preventDefault();
    }

    if (
      !numericKeys.test(e.key) &&
      !specialKeys.includes(e.key)
    ) {
      e.preventDefault();
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="box-border flex h-fit w-[440px] flex-col gap-[32px] border-r-[1px] border-secondaryGray pl-[24px] pr-[32px]"
    >
      <div className="border-b-[1px] border-secondaryGray font-tahoma text-[20px] font-[700] text-white">
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
            value="remote"
            register={register}
            title="Дистанційний"
          />
          <CustomCheckbox
            registerFor="occupation"
            value="office"
            register={register}
            title="В офісі"
          />
          <CustomCheckbox
            registerFor="occupation"
            value="hibryd"
            register={register}
            title="Гібридний"
          />
          <CustomCheckbox
            registerFor="occupation"
            value="part"
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
            value="en"
            register={register}
            title="Англійська"
          />
          <CustomCheckbox
            registerFor="language"
            value="pl"
            register={register}
            title="Польська"
          />
          <CustomCheckbox
            registerFor="language"
            value="de"
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
            value="secondary_proffesional"
            register={register}
            title="Середня професійна"
          />
          <CustomCheckbox
            registerFor="graduate"
            value="high"
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
            value="searching"
            register={register}
            title="У пошуку"
          />
          <CustomCheckbox
            registerFor="status"
            value="working"
            register={register}
            title="Працює"
          />
          <CustomCheckbox
            registerFor="status"
            value="inactive"
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
            className="w-[130px] grow rounded-[4px] border-[1px] border-secondaryGray bg-transparent px-[8px] py-[7px] text-white outline-none [appearance:textfield] placeholder:text-secondaryGray [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
          />
          <input
            {...register('sallary.to')}
            placeholder="700"
            type="number"
            onKeyDown={handleInput}
            className="w-[130px] grow rounded-[4px] border-[1px] border-secondaryGray bg-transparent px-[8px] py-[7px] text-white outline-none [appearance:textfield] placeholder:text-secondaryGray [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
          />

          <button className="flex items-center justify-center rounded-[4px] border-[1px] border-yellow px-[24px] py-[15px] text-yellow">
            OK
          </button>
          {errors.sallary?.root && (
            <span className="absolute bottom-[-20px] left-[0px] text-xs text-red-500">
              {errors.sallary?.root?.message?.toString()}
            </span>
          )}
        </div>
      </div>

      <div className="main-gradient flex items-center justify-center rounded-[6px]">
        <div className="m-[2px] w-full rounded-[6px] bg-graphite">
          <button className="main-gradient flex h-[54px] w-full items-center justify-center border-[1px] bg-clip-text font-sans text-[20px] font-[700] leading-[28px] text-transparent">
            Застосувати фільтри
          </button>
        </div>
      </div>
    </form>
  );
};

export default Filters;
