import React, {
  ForwardedRef,
  InputHTMLAttributes,
  forwardRef,
  useState,
} from 'react';

import Select from 'react-select';
import { selectStyles } from './selectStyles';
import { ValueType } from 'tailwindcss/types/config';

export interface Option {
  value: string;
  label: string;
}

interface SelectInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  options: Option[];
  placeholder: string;
  title?: string;
}
const SelectInput = forwardRef(function SelectInput(
  { options, placeholder, title }: SelectInputProps,
  _ref: ForwardedRef<HTMLInputElement>
) {
  const [selectedOption, setSelectedOption] =
    useState<Option | null>(null);

  const handleSelectChange = (
    selectedOption: ValueType<Option>
  ) => {
    setSelectedOption(selectedOption as Option | null);
    console.log('Selected option:', selectedOption.value); // Виводимо обране значення у консоль
  };
  return (
    <div className="relative m-2 w-[358px]">
      <p className="mb-[8px]">{title}</p>
      <Select
        styles={selectStyles}
        options={options}
        placeholder={placeholder}
        value={selectedOption}
        onChange={handleSelectChange}
      />
    </div>
  );
});

export default SelectInput;
