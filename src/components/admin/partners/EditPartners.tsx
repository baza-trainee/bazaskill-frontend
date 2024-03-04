'use client';
import React, { useState } from 'react';
import FileInputPartner from '../ui/FileInputPartner';
import TextInputPartner from '../ui/TextInputPartner';
import PrimaryButton from '../ui/buttons/PrimaryButton';
import SecondaryButton from '../ui/buttons/SecondaryButton';
import { partners } from './data';
import PageTitle from '../ui/PageTitle';
import Image from 'next/image';

const EditPartners = () => {
  const item = partners[0];

  const [file, setFile] = useState<File | null>(null);
  const handleFileChange = (selectedFile: File) => {
    setFile(selectedFile);
  };
  return (
    <div className="p-[24px]">
      <PageTitle title="Редагувати партнера" />
      <div className="mt-[80px] flex gap-[180px]">
        <form className="flex w-[597px] flex-col gap-[30px]">
          <div>
            <TextInputPartner
              placeholder="Введіть назву"
              title="Назва партнера:"
              value=""
            />
          </div>
          <div>
            <FileInputPartner
              placeholder="Завантажте логотип"
              title="Логотип партнера"
              onChange={handleFileChange}
            />
          </div>
          <div className="flex w-full justify-between">
            <PrimaryButton text="Додати" />
            <SecondaryButton text="Скасувати" />
          </div>
        </form>
        <div>
          <div className="relative flex h-[286px] w-[286px] flex-col items-center justify-center rounded-xl border-4">
            <div className="flex gap-[129px]">
              <div className="flex items-center gap-[24px] ">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={273}
                  height={61}
                  className=" rounded-[8px] "
                />
              </div>
            </div>
            <div className="w-[159px] text-start">
              <h4 className="font-tahoma font-bold tracking-[.72px] text-white ">
                {item.name}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditPartners;
