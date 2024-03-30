'use client';
import { getSpecializations } from '@/api/specialization';
import { constants } from '@/constants';
import { ISpecialization } from '@/types/specialization';
import {
  useQuery,
  UseQueryResult,
} from '@tanstack/react-query';
import React, { useState } from 'react';
import Stack from './Stack';
import {
  Controller,
  DeepMap,
  FieldError,
  FieldValues,
  SubmitHandler,
  useFieldArray,
  useForm,
} from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import schema from './schema';
import TextInput from './TextInput';
import FileInput from './FileInput';
import defaultValues from './defaultValues';
import Graduate from './Graduate';
import Languages from './Languages';
import Cources from './Сources';
import BazaExperience from './BazaExperience';
import SelectField from './SelectField';

const AddCandidate = () => {
  const {
    register,
    reset,
    control,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<FieldValues>({
    resolver: zodResolver(schema),
    defaultValues: defaultValues,
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
    reset();
  };

  const specialization: UseQueryResult<
    ISpecialization[],
    Error
  > = useQuery({
    queryKey: [
      constants.specialization.FETCH_SPECIALIZATIONS,
    ],
    queryFn: getSpecializations,
  });

  const graduate = useFieldArray({
    name: 'graduate',
    control,
  });

  const cources = useFieldArray({
    name: 'cources',
    control,
  });

  const baza_experience = useFieldArray({
    name: 'baza_experience',
    control,
  });

  const lang = useFieldArray({
    name: 'languages',
    control,
  });
  return (
    <div className="flex flex-col gap-[32px] px-[40px]">
      <h2 className="pb-[20px] pt-[40px] font-tahoma text-[40px] font-[700]">
        Інформація про кандидата
      </h2>
      <div>
        <h3 className="border-b-[1px] border-white pb-[20px] pt-[40px] font-tahoma text-[24px] font-[700]">
          <span>Персональна інформація</span>
        </h3>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mb-[154px] mt-[32px] flex flex-col gap-[32px] font-sans text-[16px]"
        >
          <div className="flex w-full gap-[24px]">
            <Controller
              name="name_ua"
              control={control}
              render={({ field }) => (
                <TextInput
                  {...field}
                  error={errors.name_ua?.message as string}
                  isRequired={true}
                  placeholder="Ім`я"
                  title="Ім`я"
                />
              )}
            />

            <Controller
              name="surname_ua"
              control={control}
              render={({ field }) => (
                <TextInput
                  {...field}
                  error={
                    errors.surname_ua?.message as string
                  }
                  isRequired={true}
                  placeholder="Прізвище"
                  title="Прізвище"
                />
              )}
            />

            <Controller
              name="country"
              control={control}
              render={({ field }) => (
                <TextInput
                  {...field}
                  error={errors.country?.message as string}
                  isRequired={true}
                  placeholder="Країна"
                  title="Країна"
                />
              )}
            />
          </div>

          <div className="flex w-full gap-[24px]">
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <TextInput
                  {...field}
                  error={errors.name?.message as string}
                  isRequired={true}
                  placeholder="Name"
                  title="Name"
                />
              )}
            />

            <Controller
              name="surname"
              control={control}
              render={({ field }) => (
                <TextInput
                  {...field}
                  error={errors.surname?.message as string}
                  isRequired={true}
                  placeholder="Surname"
                  title="Surname"
                />
              )}
            />

            <Controller
              name="city"
              control={control}
              render={({ field }) => (
                <TextInput
                  {...field}
                  error={errors.city?.message as string}
                  isRequired={true}
                  placeholder="Місто"
                  title="Місто"
                />
              )}
            />
          </div>

          <div className="flex w-full gap-[24px]">
            <Controller
              name="phone"
              control={control}
              render={({ field }) => (
                <TextInput
                  {...field}
                  error={errors.phone?.message as string}
                  isRequired={true}
                  placeholder="Телефон"
                  title="Телефон"
                />
              )}
            />

            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <TextInput
                  {...field}
                  error={errors.email?.message as string}
                  isRequired={true}
                  placeholder="Email"
                  title="Email"
                />
              )}
            />
            <div className="flex w-full max-w-[442px] grow flex-col gap-[5px]"></div>
          </div>

          <div className="flex w-full gap-[24px]">
            <Controller
              name="linkedin"
              control={control}
              render={({ field }) => (
                <TextInput
                  {...field}
                  error={errors.linkedin?.message as string}
                  isRequired={true}
                  placeholder="Linkedin"
                  title="Linkedin"
                />
              )}
            />

            <Controller
              name="discord"
              control={control}
              render={({ field }) => (
                <TextInput
                  {...field}
                  error={errors.discord?.message as string}
                  isRequired={true}
                  placeholder="Discord"
                  title="Discord"
                />
              )}
            />

            <Controller
              name="telegram"
              control={control}
              render={({ field }) => (
                <TextInput
                  {...field}
                  error={errors.telegram?.message as string}
                  isRequired={true}
                  placeholder="Telegram"
                  title="Telegram"
                />
              )}
            />
          </div>
          <Languages
            control={control}
            fieldArray={lang}
            getValues={getValues}
          />
          <div className="flex w-full gap-[24px]">
            <Controller
              name="work_format"
              control={control}
              render={({
                field: { onChange, value },
                formState: { errors },
              }) => (
                <SelectField
                  title="Формат роботи"
                  value={value}
                  values={['Remote', 'Office', 'Hybrid']}
                  onChange={onChange}
                  errors={
                    (
                      errors.work_format as DeepMap<
                        FieldValues,
                        FieldError
                      >
                    )?.message
                  }
                />
              )}
            />

            <div className="flex w-full max-w-[442px] grow flex-col gap-[5px]">
              <label>
                Бажана зарплата &nbsp;
                <span className="text-red-500">*</span>
              </label>
              <div className="box-border flex w-full max-w-full items-center gap-[12px]">
                <span className="text-[24px]">$</span>
                <input
                  name="salary_from"
                  placeholder="500"
                  className="box-border h-[44px] w-[inherit] grow rounded-[4px] px-[16px] py-[6px] text-black outline-none"
                />
                <input
                  name="salary_to"
                  placeholder="700"
                  className="box-border h-[44px] w-[inherit] grow rounded-[4px] px-[16px] py-[6px] text-black outline-none"
                />
              </div>
            </div>
            <div className="flex w-full max-w-[442px] grow flex-col gap-[5px]"></div>
          </div>

          <div className="flex w-full gap-[24px]">
            <div className="grow-2 flex w-full max-w-[908px] flex-col gap-[5px]">
              <label htmlFor="about">
                Про себе &nbsp;
                <span className="text-red-500">*</span>
              </label>
              <textarea
                id="about"
                name="about"
                placeholder="Коментар"
                className="max-h-[132px] min-h-[132px] min-w-full appearance-none rounded-[4px] px-[16px] py-[12px] text-black outline-none"
              ></textarea>
            </div>
            <div className="flex w-full max-w-[442px] shrink-[2] grow flex-col gap-[5px]"></div>
          </div>

          <div className="flex w-full gap-[24px] border-b-[1px] border-white pb-[20px] pt-[40px] font-tahoma text-[24px] font-[700]">
            <h3>Спеціальність</h3>
          </div>

          <div className="flex w-full gap-[24px]">
            <Controller
              name="specialization"
              control={control}
              render={({
                field: { onChange, value },
                formState: { errors },
              }) => (
                <div className="flex w-full max-w-[442px] grow flex-col gap-[5px]">
                  <label htmlFor="specialization">
                    Cпеціальність &nbsp;
                    <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="specialization"
                    value={value}
                    onChange={onChange}
                    className="box-border h-[44px] rounded-[4px] px-[16px] py-[6px] text-black outline-none"
                  >
                    <option value="">
                      Оберіть спеціальність
                    </option>
                    {specialization.data?.map((item) => (
                      <option key={item.id} value={item.id}>
                        {item.title}
                      </option>
                    ))}
                  </select>
                  <span className="font-sans text-[12px] text-error">
                    {
                      (
                        errors.specialization as DeepMap<
                          FieldValues,
                          FieldError
                        >
                      )?.message
                    }
                  </span>
                </div>
              )}
            />

            <Controller
              name="cv"
              control={control}
              render={({
                field: { onChange, value },
                formState: { errors },
              }) => (
                <FileInput
                  onChange={onChange}
                  value={value}
                  title="Завантажити CV"
                  errors={
                    (
                      errors.cv as DeepMap<
                        FieldValues,
                        FieldError
                      >
                    )?.message
                  }
                />
              )}
            />
            <div className="flex w-full max-w-[442px] grow flex-col gap-[5px]"></div>
          </div>

          <Stack />

          <div className="flex w-full gap-[24px] border-b-[1px] border-white pb-[20px] pt-[40px] font-tahoma text-[24px] font-[700]">
            <h3>Освіта</h3>
          </div>

          <Graduate
            fieldArray={graduate}
            control={control}
          />

          <div className="flex w-full gap-[24px] border-b-[1px] border-white pb-[20px] pt-[40px] font-tahoma text-[24px] font-[700]">
            <h3>Курси</h3>
          </div>

          <Cources fieldArray={cources} control={control} />

          <div className="flex w-full gap-[24px] border-b-[1px] border-white pb-[20px] pt-[40px] font-tahoma text-[24px] font-[700]">
            <h3>Досвід роботи на Базі</h3>
          </div>

          <BazaExperience
            control={control}
            fieldArray={baza_experience}
          />

          <div className="flex w-full gap-[24px]">
            <div className="grow-2 flex w-full max-w-[908px] flex-col gap-[5px]">
              <label
                className="font-[700]"
                htmlFor="baza_recomendation"
              >
                Рекомендації від Baza Skill &nbsp;
                <span className="text-red-500">*</span>
              </label>
              <textarea
                id="baza_recomendation"
                name="baza_recomendation"
                placeholder="Рекомендація"
                className="max-h-[132px] min-h-[132px] min-w-full appearance-none rounded-[4px] px-[16px] py-[12px] text-black outline-none"
              ></textarea>
            </div>
            <div className="flex w-full max-w-[442px] shrink-[2] grow flex-col gap-[5px]"></div>
          </div>
          <div className="flex justify-start gap-[24px] py-[80px]">
            <button
              className="flex h-[44px] w-[286px] items-center justify-center rounded-[6px] bg-white font-sans font-[600] leading-[22px] text-black transition-all hover:border-[1px] hover:bg-transparent hover:text-white"
              type="submit"
            >
              Опублікувати
            </button>
            <div
              onClick={() => console.log(getValues())}
              className="flex h-[44px] w-[286px] cursor-pointer items-center justify-center rounded-[6px] border-[1px] font-sans font-[600] leading-[22px] text-white transition-all hover:bg-white hover:text-black"
            >
              Зберегти в чернетках
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCandidate;
