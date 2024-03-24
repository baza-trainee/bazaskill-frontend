'use client';
import { getSpecializations } from '@/api/specialization';
import UploadIcon from '@/components/icons/Admin-icons/UploadIcon';
import { constants } from '@/constants';
import { ISpecialization } from '@/types/specialization';
import {
  useQuery,
  UseQueryResult,
} from '@tanstack/react-query';
import Dropzone from 'react-dropzone';
import React, { useState } from 'react';
import Languages from './Languages';
import Link from 'next/link';

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
  const [cv, setCV] = useState<File | null>(null);
  const [cvError, setCVError] = useState<string>('');
  const handleUploadCV = async (
    files: File[] | undefined
  ) => {
    if (files && files.length > 0 && files.length === 1) {
      if (files[0].type === 'application/pdf') {
        setCV(files[0]);
        setCVError('');
      } else {
        setCV(null);
        setCVError('Only .pdf format allowed');
      }
    } else if (files && files.length > 1) {
      setCV(null);
      setCVError('Only one .pdf file allowed');
    } else {
      setCV(null);
      setCVError('An error occured try again');
    }
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
  return (
    <div className="flex flex-col gap-[32px] px-[40px]">
      <h2 className="pb-[20px] pt-[40px] font-tahoma text-[40px] font-[700]">
        Інформація про кандидата
      </h2>
      <div>
        <h3 className="border-b-[1px] border-white pb-[20px] pt-[40px] font-tahoma text-[24px] font-[700]">
          <span>Персональна інформація</span>
        </h3>

        <form className="mt-[32px] flex flex-col gap-[32px] font-sans text-[16px]">
          <div className="flex w-full gap-[24px]">
            <div className="flex max-w-[442px] grow flex-col gap-[5px]">
              <label htmlFor="name_ua">
                Ім`я <span className="text-red-500">*</span>
              </label>
              <input
                id="name_ua"
                name="name_ua"
                placeholder="Ім`я"
                className="box-border h-[44px] rounded-[4px] px-[16px] py-[6px] text-black outline-none"
              />
            </div>

            <div className="flex max-w-[442px] grow flex-col gap-[5px]">
              <label htmlFor="surname_ua">
                Прізвище{' '}
                <span className="text-red-500">*</span>
              </label>
              <input
                id="surname_ua"
                name="surname_ua"
                placeholder="Прізвище"
                className="box-border h-[44px] rounded-[4px] px-[16px] py-[6px] text-black outline-none"
              />
            </div>

            <div className="flex max-w-[442px] grow flex-col gap-[5px]">
              <label htmlFor="country">
                Країна{' '}
                <span className="text-red-500">*</span>
              </label>
              <input
                id="country"
                name="country"
                placeholder="Країна"
                className="box-border h-[44px] rounded-[4px] px-[16px] py-[6px] text-black outline-none"
              />
            </div>
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

            <div className="relative flex w-full max-w-[442px] grow flex-col gap-[5px]">
              <label htmlFor="cv">
                Завантажити CV{' '}
                <span className="cursor-pointer text-green">
                  [?]{' '}
                </span>
                <span className="text-red-500">*</span>
              </label>
              <Dropzone
                onDrop={(acceptedFiles) =>
                  handleUploadCV(acceptedFiles)
                }
              >
                {({ getRootProps, getInputProps }) => (
                  <div
                    {...getRootProps()}
                    onClick={(e) => e.stopPropagation()}
                    className="h-full w-full"
                  >
                    <input
                      {...getInputProps()}
                      id="cv"
                      name="cv"
                      placeholder="CV"
                      accept=".pdf"
                      hidden
                    />
                    <label
                      htmlFor="cv"
                      className="flex h-full w-full cursor-pointer items-center justify-between truncate rounded-[4px] bg-white px-[16px] py-[6px] text-start leading-[26px] text-gray"
                    >
                      {cv ? cv.name : 'Завантажте файл'}
                      <UploadIcon />
                    </label>
                  </div>
                )}
              </Dropzone>
              <span className="absolute top-[100%] text-red-500">
                {cvError ? cvError : ''}
              </span>
            </div>
            <div className="flex w-full max-w-[442px] grow flex-col gap-[5px]"></div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCandidate;
