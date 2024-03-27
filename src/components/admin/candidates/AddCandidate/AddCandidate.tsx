'use client';
import { getSpecializations } from '@/api/specialization';
import { constants } from '@/constants';
import { ISpecialization } from '@/types/specialization';
import {
  useQuery,
  UseQueryResult,
} from '@tanstack/react-query';
import React, { useState } from 'react';
import Languages from './Languages';
import CvField from './CvField';
import Stack from './Stack';
import {
  Controller,
  FieldValues,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import schema from './schema';
import TextInput from './TextInput';
import FileInput from './FileInput';

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

  const specialization: UseQueryResult<
    ISpecialization[],
    Error
  > = useQuery({
    queryKey: [
      constants.specialization.FETCH_SPECIALIZATIONS,
    ],
    queryFn: getSpecializations,
  });

  const {
    register,
    reset,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name_ua: '',
      surname_ua: '',
      country: '',
      cv: null,
    },
    mode: 'onChange',
  });
  const [cv, setCV] = useState<File | null>(null);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data, cv);
    setCV(null);
    reset();
  };
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
            <div className="flex max-w-[442px] grow flex-col gap-[5px]">
              <label htmlFor="name">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                name="name"
                placeholder="Name"
                className="box-border h-[44px] rounded-[4px] px-[16px] py-[6px] text-black outline-none"
              />
            </div>

            <div className="flex max-w-[442px] grow flex-col gap-[5px]">
              <label htmlFor="surname">
                Surname{' '}
                <span className="text-red-500">*</span>
              </label>
              <input
                id="surname"
                name="surname"
                placeholder="Surname"
                className="box-border h-[44px] rounded-[4px] px-[16px] py-[6px] text-black outline-none"
              />
            </div>

            <div className="flex max-w-[442px] grow flex-col gap-[5px]">
              <label htmlFor="city">
                Місто{' '}
                <span className="text-red-500">*</span>
              </label>
              <input
                id="city"
                name="city"
                placeholder="Місто"
                className="box-border h-[44px] rounded-[4px] px-[16px] py-[6px] text-black outline-none"
              />
            </div>
          </div>

          <div className="flex w-full gap-[24px]">
            <div className="flex w-full max-w-[442px] grow flex-col gap-[5px]">
              <label htmlFor="phone">
                Телефон{' '}
                <span className="text-red-500">*</span>
              </label>
              <input
                id="phone"
                name="phone"
                placeholder="Телефон"
                className="box-border h-[44px] rounded-[4px] px-[16px] py-[6px] text-black outline-none"
              />
            </div>

            <div className="flex w-full max-w-[442px] grow flex-col gap-[5px]">
              <label htmlFor="email">
                Email{' '}
                <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                name="email"
                placeholder="Email"
                className="box-border h-[44px] rounded-[4px] px-[16px] py-[6px] text-black outline-none"
              />
            </div>
            <div className="flex w-full max-w-[442px] grow flex-col gap-[5px]"></div>
          </div>

          <div className="flex w-full gap-[24px]">
            <div className="flex max-w-[442px] grow flex-col gap-[5px]">
              <label htmlFor="linkedin">
                Linkedin{' '}
                <span className="text-red-500">*</span>
              </label>
              <input
                id="linkedin"
                name="linkedin"
                placeholder="Linkedin"
                className="box-border h-[44px] rounded-[4px] px-[16px] py-[6px] text-black outline-none"
              />
            </div>

            <div className="flex max-w-[442px] grow flex-col gap-[5px]">
              <label htmlFor="discord">
                Discord{' '}
                <span className="text-red-500">*</span>
              </label>
              <input
                id="discord"
                name="discord"
                placeholder="Discord"
                className="box-border h-[44px] rounded-[4px] px-[16px] py-[6px] text-black outline-none"
              />
            </div>

            <div className="flex max-w-[442px] grow flex-col gap-[5px]">
              <label htmlFor="telegram">
                Telegram{' '}
                <span className="text-red-500">*</span>
              </label>
              <input
                id="telegram"
                name="telegram"
                placeholder="Telegram"
                className="box-border h-[44px] rounded-[4px] px-[16px] py-[6px] text-black outline-none"
              />
            </div>
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
              render={({ field }) => (
                <FileInput
                  {...field}
                  error={errors.cv?.message as string}
                  isRequired={true}
                  title="Завантажити CV"
                  file={cv ? cv.name : null}
                  onChange={(file) => setCV(file)}
                />
              )}
            />
            <div className="flex w-full max-w-[442px] grow flex-col gap-[5px]"></div>
          </div>

          <Stack />

          <div className="py-[80px]">
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCandidate;
