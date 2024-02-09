/* eslint-disable no-unused-vars */

import React, {
  ForwardedRef,
  forwardRef,
  useState,
} from 'react';

import Select from 'react-select';
import { selectStyles } from './selectStyles';
import DropdownIndicator from '@/components/icons/DropdownIndicator';

export type Option = {
  value: string;
  label: string;
};

interface SelectInputProps {
  value: string;
  options: Option[];
  title?: string;
  placeholder: string;
  isRequired?: boolean;
  errorText?: string;
  onChange: (value: string) => void;
}
const SelectInput = forwardRef(function SelectInput(
  {
    options,
    onChange,
    title,
    value,
    placeholder,
    isRequired,
    errorText,
  }: SelectInputProps,
  _ref: ForwardedRef<HTMLInputElement>
) {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsOpen(true);
  };

  const handleMenuClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative m-2 w-[358px]">
       {title && <label className="mb-[8px]" htmlFor={placeholder}>{title}{isRequired && (
          <span className="text-error ">*</span>
        )}</label>}
      <Select
        id={placeholder}
        styles={selectStyles}
        options={options}
        value={options.find((c) => c.value === value)}
        onChange={(val) => onChange((val as Option).value)}
        placeholder={placeholder}
        onMenuOpen={handleMenuOpen}
        onMenuClose={handleMenuClose}
        components={{
          DropdownIndicator: (props) => (
            <DropdownIndicator isOpen={isOpen} {...props} />
          ),
        }}
        
      />
      {isRequired && errorText && (
        <span className="text-xs text-error">
          {errorText}
        </span>
      )}
    </div>
  );
});

export default SelectInput;
