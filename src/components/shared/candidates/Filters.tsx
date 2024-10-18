'use client';

import type {
  FieldValues,
  SubmitHandler,
} from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import {
  useForm,
} from 'react-hook-form';

import CustomCheckbox from './CustomCheckbox';
import defaultValues from './defaultValues';
import FiltersSpecializationMenu from './FiltersSpecializationMenu';
import schema from './schema';

function Filters({
  SubmitHandler,
}: {
  SubmitHandler: (data: FieldValues) => void;
}) {
  const t = useTranslations('Filter');
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
      className="flex h-fit w-full flex-col items-center justify-center gap-[32px] md:box-border md:w-[243px] md:border-r md:border-secondaryGray xl:w-full xl:max-w-[288px] xl:pr-[32px] 2xl:max-w-[316px] 3xl:max-w-[338px] 4xl:max-w-[351px]"
    >
      <div className="w-[280px] border-b  border-secondaryGray font-tahoma text-[20px] font-[700] text-white sm:w-[364px] md:w-[219px] xl:w-[256px]">
        <h3 className="py-[8px] text-base sm:text-lg 3xl:text-xl">
          {t('title')}
        </h3>
      </div>
      <FiltersSpecializationMenu register={register} />
      <div className="grid w-full grid-cols-2 gap-y-[20px] text-sm sm:text-base md:flex md:flex-col xl:text-lg 3xl:text-xl">
        <div className="flex flex-col gap-[20px] font-sans">
          <h3>
            {' '}
            {t('projects.title')}
          </h3>
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
              title={t('projects.item')}
            />
          </div>
        </div>

        <div className="flex flex-col gap-[20px] font-sans sm:min-w-[176px] sm:text-base xl:text-lg 2xl:text-xl">
          <h3>{t('format.title')}</h3>
          <div className="flex flex-col gap-[20px]">
            <CustomCheckbox
              registerFor="occupation"
              value="Remote"
              register={register}
              title={t('format.item_1')}
            />
            <CustomCheckbox
              registerFor="occupation"
              value="Office"
              register={register}
              title={t('format.item_2')}
            />
            <CustomCheckbox
              registerFor="occupation"
              value="Hybrid"
              register={register}
              title={t('format.item_3')}
            />
            <CustomCheckbox
              registerFor="occupation"
              value="Part-time"
              register={register}
              title={t('format.item_4')}
            />
          </div>
        </div>

        <div className="flex flex-col gap-[20px] font-sans sm:min-w-[176px] sm:text-base xl:text-lg 3xl:text-xl">
          <h3>{t('language.title')}</h3>
          <div className="flex flex-col gap-[20px]">
            <CustomCheckbox
              registerFor="language"
              value="English"
              register={register}
              title={t('language.item_1')}
            />
            <CustomCheckbox
              registerFor="language"
              value="Polish"
              register={register}
              title={t('language.item_2')}
            />
            <CustomCheckbox
              registerFor="language"
              value="German"
              register={register}
              title={t('language.item_3')}
            />
          </div>
        </div>

        <div className="flex flex-col gap-[20px] font-sans sm:min-w-[176px] sm:text-base xl:text-lg 3xl:text-xl">
          <h3>{t('education.title')}</h3>
          <div className="flex flex-col gap-[20px]">
            <CustomCheckbox
              registerFor="graduate"
              value="secondary_professional"
              register={register}
              title={t('education.item_1')}
            />
            <CustomCheckbox
              registerFor="graduate"
              value="gradaute"
              register={register}
              title={t('education.item_2')}
            />
            <CustomCheckbox
              registerFor="graduate"
              value="cources"
              register={register}
              title={t('education.item_3')}
            />
          </div>
        </div>
      </div>
      <div className="relative flex w-full flex-col gap-[20px] font-sans text-[20px]">
        <h3 className="leading-[28px]">{t('salary')}</h3>
        <div className="relative flex h-[40px] max-w-full gap-[10px]">
          <div className="flex h-full w-[32px] justify-center xl:items-center xl:px-[10px]">
            $
          </div>
          <input
            {...register('sallary.from')}
            placeholder="500"
            type="number"
            onKeyDown={handleInput}
            className="h-[32px] w-[80px] grow rounded-[4px] border border-secondaryGray bg-transparent px-[8px] py-[7px] text-sm text-white outline-none [appearance:textfield] placeholder:text-secondaryGray sm:w-[114px] md:w-[62px] xl:min-h-[40px] xl:min-w-[61px] xl:text-base 3xl:min-w-[86px] 3xl:text-lg  4xl:min-w-[93px] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
          />
          <input
            {...register('sallary.to')}
            placeholder="700"
            type="number"
            onKeyDown={handleInput}
            className="4xl:min-w-[93px][&::-webkit-inner-spin-button]:appearance-none h-[32px] w-[80px] grow rounded-[4px] border border-secondaryGray bg-transparent px-[8px] py-[7px] text-sm text-white outline-none [appearance:textfield] placeholder:text-secondaryGray sm:w-[114px] md:w-[62px] xl:min-h-[40px] xl:min-w-[61px] xl:text-base 3xl:min-w-[86px]  3xl:text-lg [&::-webkit-outer-spin-button]:appearance-none"
          />

          <button className="flex h-[32px] w-[68px] items-center justify-center rounded-[4px] border border-yellow px-[24px] py-[15px] text-sm text-yellow sm:min-w-[84px] md:min-w-[51px] md:p-0 xl:min-h-[40px] xl:min-w-[72px] xl:text-base">
            OK
          </button>
          {errors.sallary?.root && (
            <span className="absolute bottom-[-20px] left-0 text-xs text-red-500">
              {errors.sallary?.root?.message?.toString()}
            </span>
          )}
        </div>
      </div>

      <div className="main-gradient flex max-w-[280px] items-center justify-center rounded-[6px] sm:min-w-[363px] md:min-w-[219px] xl:min-w-[256px] 3xl:min-w-[306px] 4xl:min-w-[319px]">
        <div className="m-[2px] w-full rounded-[6px] bg-graphite">
          <button className="main-gradient mx-auto flex h-[48px] w-full items-center justify-center border bg-clip-text px-6 font-sans text-[20px] text-base font-[700] leading-[28px] text-transparent md:h-[54px] xl:text-lg">
            {t('button')}
          </button>
        </div>
      </div>
    </form>
  );
}

export default Filters;
