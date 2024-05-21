/* eslint-disable no-unused-vars */
import React, { ChangeEvent, useState } from 'react';

const CandidatesSearch = ({
  SubmitHandler,
}: {
  SubmitHandler: (data: string) => void;
}) => {
  const [searchKeyword, setSearchKeyword] =
    useState<string>('');

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    setSearchKeyword(e.target.value);
  };

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    SubmitHandler(searchKeyword);
    setSearchKeyword('');
  };

  return (
    <div className="flex h-[120px] items-center justify-between pl-[24px] pr-[24px] 4xl:pr-[196px]">
      <h1 className="font-tahoma text-[40px] font-[700] text-white">
        Всі кандидати
      </h1>
      <form
        className="relative flex items-center"
        onSubmit={handleSubmit}
      >
        <input
          name="searchKeyword"
          value={searchKeyword}
          onChange={handleInputChange}
          className="h-[58px] w-[600px] rounded-[4px] p-[16px] text-black outline-none placeholder:text-secondaryGray"
          type="text"
          placeholder="Введіть ключове слово для пошуку"
        />
        <button
          className="absolute right-[16px] cursor-pointer"
          type="submit"
        >
          <svg width={24} height={24}>
            <use href="/Icons/sprite.svg#icon-search"></use>
          </svg>
        </button>
      </form>
    </div>
  );
};

export default CandidatesSearch;
