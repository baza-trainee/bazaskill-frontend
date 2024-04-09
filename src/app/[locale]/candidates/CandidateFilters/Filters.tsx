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
const Filters = () => {
  const schema = z.object({
    stack: z.string().array(),
    projects: z.string().array(),
    occupation: z.string().array(),
    language: z.string().array(),
    graduate: z.string().array(),
    status: z.string().array(),
    sallary: z.object({
      from: z.string(),
      to: z.string(),
    }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
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
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex h-fit w-[338px] flex-col gap-[32px] pr-[32px] md:box-border md:w-[243px] md:border-r-[1px] md:border-secondaryGray xl:w-[288px] 2xl:w-[316px] 3xl:w-[338px] 4xl:w-[351px]"
    >
      <div className="w-[280px] border-b-[1px] border-secondaryGray font-tahoma text-[20px] font-[700] text-white sm:w-[364px] md:w-[219px] xl:w-[256px]">
        <h3 className="py-[8px] text-base sm:text-lg 3xl:text-xl">
          Фільтри
        </h3>
      </div>
      <FiltersSpecializationMenu register={register} />
      <div className="grid grid-cols-2 gap-y-[20px] text-sm sm:text-base md:flex md:flex-col xl:text-lg 3xl:text-xl">
        <div className="flex flex-col gap-[20px] font-sans">
          <h3>Виконані проєкти</h3>
          <div className="flex flex-col gap-[20px] sm:min-w-[176px] sm:text-base xl:text-lg 3xl:text-xl">
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

        <div className="flex flex-col gap-[20px] font-sans sm:min-w-[176px] sm:text-base xl:text-lg 2xl:text-xl">
          <h3>Формат роботи</h3>
          <div className="flex flex-col gap-[20px]">
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

        <div className="flex flex-col gap-[20px] font-sans sm:min-w-[176px] sm:text-base xl:text-lg 3xl:text-xl">
          <h3>Мова</h3>
          <div className="flex flex-col gap-[20px]">
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

        <div className="flex flex-col gap-[20px] font-sans sm:min-w-[176px] sm:text-base xl:text-lg 3xl:text-xl">
          <h3>Освіта</h3>
          <div className="flex flex-col gap-[20px]">
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
      </div>
      <div className="relative flex max-w-[272px] flex-col gap-[20px] font-sans text-[20px]">
        <h3 className="leading-[28px]">Зарплата</h3>
        <div className="relative flex h-[40px] max-w-full gap-[10px]">
          <div className="flex h-full w-[32px] justify-center xl:items-center xl:px-[10px]">
            $
          </div>
          <input
            {...register('sallary.from')}
            placeholder="500"
            type="number"
            className="h-[32px] w-[80px] grow rounded-[4px] border-[1px] border-secondaryGray bg-transparent px-[8px] py-[7px] text-sm text-white outline-none [appearance:textfield] placeholder:text-secondaryGray sm:w-[114px] md:w-[62px] xl:min-h-[40px] xl:min-w-[61px] xl:text-base 3xl:min-w-[86px] 3xl:text-lg  4xl:min-w-[93px] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
          />
          <input
            {...register('sallary.to')}
            placeholder="700"
            type="number"
            className="4xl:min-w-[93px][&::-webkit-inner-spin-button]:appearance-none h-[32px] w-[80px] grow rounded-[4px] border-[1px] border-secondaryGray bg-transparent px-[8px] py-[7px] text-sm text-white outline-none [appearance:textfield] placeholder:text-secondaryGray sm:w-[114px] md:w-[62px] xl:min-h-[40px] xl:min-w-[61px] xl:text-base 3xl:min-w-[86px]  3xl:text-lg [&::-webkit-outer-spin-button]:appearance-none"
          />

          <button className="flex h-[32px] w-[68px] items-center justify-center rounded-[4px] border-[1px] border-yellow px-[24px] py-[15px] text-sm text-yellow sm:min-w-[84px] md:min-w-[51px] md:px-0 md:py-0 xl:min-h-[40px] xl:min-w-[72px] xl:text-base">
            OK
          </button>
        </div>
      </div>

      <div className="main-gradient flex max-w-[280px] items-center justify-center rounded-[6px] sm:min-w-[363px] md:min-w-[219px] xl:min-w-[256px] 3xl:min-w-[306px] 4xl:min-w-[319px]">
        <div className="m-[2px] w-full rounded-[6px] bg-graphite">
          <button className=" main-gradient flex h-[48px] w-full items-center justify-center border-[1px] bg-clip-text font-sans text-[20px] text-base font-[700] leading-[28px] text-transparent md:h-[54px] xl:text-lg">
            Застосувати фільтри
          </button>
        </div>
      </div>
    </form>
  );
};

export default Filters;
