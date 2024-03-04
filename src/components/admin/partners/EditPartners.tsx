'use client';
import React, { useState } from 'react';
import FileInputPartner from '../ui/FileInputPartner';
import TextInputPartner from '../ui/TextInputPartner';
import PrimaryButton from '../ui/buttons/PrimaryButton';
import SecondaryButton from '../ui/buttons/SecondaryButton';
import PartnersCard from './PartnersCard';
import { partners } from './data';
import PageTitle from '../ui/PageTitle';

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
          <PartnersCard item={item} />
        </div>
      </div>
    </div>
  );
};

export default EditPartners;
