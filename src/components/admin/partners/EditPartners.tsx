'use client';
import React, { useState } from 'react';
import FileInputPartner from '../ui/FileInputPartner';
import TextInputPartner from '../ui/TextInputPartner';
import PrimaryButton from '../ui/buttons/PrimaryButton';
import SecondaryButton from '../ui/buttons/SecondaryButton';
import PartnersCard from './PartnersCard';
import { partners } from './data';

const EditPartners = () => {
  const item = partners[0];

  const [file, setFile] = useState<File | null>(null);
  const handleFileChange = (selectedFile: File) => {
    setFile(selectedFile);
  };
  return (
    <div className="">
      <div className="mb-9 mt-12">
        <h1 className="mb-[50px] text-5xl font-bold">
          Редагувати партнера
        </h1>
      </div>
      <div className="flex gap-[180px]">
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
          <PartnersCard item={item} />
        </div>
      </div>
    </div>
  );
};

export default EditPartners;
