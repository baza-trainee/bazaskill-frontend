import React from 'react';

import Select from 'react-select';
import { selectStyles } from './selectStyles';

export interface Option {
  value: string;
  label: string;
}

interface SelectInputProps {
  name: string;
  options: Option[];
  placeholder: string;
  title?: string;
}

const SelectInput: React.FC<SelectInputProps> = ({
  options,
  placeholder,
  title,
}) => (
  <div className="relative mx-2 w-[358px]">
    <p className="pt-2">{title}</p>
    <Select
      styles={selectStyles}
      options={options}
      isSearchable={true}
      placeholder={placeholder}
    />
  </div>
);

export default SelectInput;
