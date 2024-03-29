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

const AddCandidate = () => {
  const [languages, setLanguages] = useState<
    Array<{ language: string; level: string }>
  >([{ language: '', level: '' }]);
  const handleDeleteLanguage = (id: number) => {
    setLanguages(
      languages.filter((_, index) => index !== id)
    );
  };
  const handleAddLanguage = () => {
    setLanguages([
      ...languages,
      { language: '', level: '' },
    ]);
  };
  const handleChoseLanguage = (
    id: number,
    value: string
  ) => {
    setLanguages(
      languages.map(
        (
          {
            language,
            level,
          }: { language: string; level: string },
          index
        ) =>
          index === id
            ? { language: value, level }
            : { language, level }
      )
    );
  };
  const handleChoseLanguageLevel = (
    id: number,
    value: string
  ) => {
    setLanguages(
      languages.map(
        (
          {
            language,
            level,
          }: { language: string; level: string },
          index
        ) =>
          index === id
            ? { language, level: value }
            : { language, level }
      )
    );
  };

  const {
    register,
    reset,
    control,
    handleSubmit,
    formState: { errors },
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
            languages={languages}
            addLanguage={handleAddLanguage}
            deleteLanguage={handleDeleteLanguage}
            choseLanguage={handleChoseLanguage}
            choseLevel={handleChoseLanguageLevel}
          />

          <div className="flex w-full gap-[24px]">
            <div className="flex w-full max-w-[442px] grow flex-col gap-[5px]">
              <label htmlFor="work_format">
                Формат роботи{' '}
                <span className="text-red-500">*</span>
              </label>
              <select
                id="work_format"
                name="work_format"
                defaultValue=""
                className="box-border h-[44px] rounded-[4px] px-[16px] py-[6px] text-black outline-none"
              >
                <option value="">Please select</option>
                <option value="remote">Remote</option>
                <option value="remote">Office</option>
                <option value="hybrid">Hybrid</option>
              </select>
            </div>

            <div className="flex w-full max-w-[442px] grow flex-col gap-[5px]">
              <label>
                Бажана зарплата{' '}
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
                Про себе{' '}
                <span className="text-red-500">*</span>
              </label>
              <textarea
                id="about"
                name="about"
                placeholder="Коментар"
                className="max-h-[132px] min-h-[132px] min-w-full appearance-none rounded-[4px] px-[16px] py-[6px] text-black outline-none"
              ></textarea>
            </div>
            <div className="flex w-full max-w-[442px] shrink-[2] grow flex-col gap-[5px]"></div>
          </div>

          <div className="flex w-full gap-[24px] border-b-[1px] border-white pb-[20px] pt-[40px] font-tahoma text-[24px] font-[700]">
            <h3>Спеціальність</h3>
          </div>

          <div className="flex w-full gap-[24px]">
            <div className="flex w-full max-w-[442px] grow flex-col gap-[5px]">
              <label htmlFor="specialization">
                Cпеціальність{' '}
                <span className="text-red-500">*</span>
              </label>
              <select
                id="specialization"
                defaultValue=""
                className="box-border h-[44px] rounded-[4px] px-[16px] py-[6px] text-black outline-none"
              >
                <option value="">
                  Оберіть спеціальність
                </option>
                {specialization.data?.map((item) => (
                  <option key={item.id}>
                    {item.title}
                  </option>
                ))}
              </select>
            </div>
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

          <div className="py-[80px]">
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCandidate;
