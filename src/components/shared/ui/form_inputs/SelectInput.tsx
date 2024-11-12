'use client';

import type { ForwardedRef } from 'react';
import React, { forwardRef, useState } from 'react';

import type { ActionMeta } from 'react-select';
import Select from 'react-select';

import DropdownIndicator from '@/components/shared/icons/DropdownIndicator';

import { selectStyles } from './selectStyles';

export interface Option {
  value: string;
  label: string;
}

interface SelectInputProps {
  value: string;
  options: Option[];
  title?: string;
  placeholder: string;
  isRequired?: boolean;
  errorText?: string;
  onChange: (value: string) => void;
}
const SelectInput = forwardRef(
  (
    {
      options,
      onChange,
      title,
      value,
      placeholder,
      isRequired,
      errorText
    }: SelectInputProps,
    _ref: ForwardedRef<HTMLInputElement>
  ) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleMenuOpen = () => {
      setIsOpen(true);
    };

    const handleMenuClose = () => {
      setIsOpen(false);
    };

    const handleChange = (
      newValue: unknown,
      _actionMeta: ActionMeta<unknown>
    ) => {
      if (
        typeof newValue === 'object' &&
        newValue !== null &&
        'value' in newValue
      ) {
        onChange((newValue as Option).value);
      } else {
        onChange('');
      }
    };

    const isValueSelected = !!value;

    return (
      <div className="relative m-2 w-[240px] sm:w-[340px] md:w-[264px] xl:w-[358px]">
        {title && (
          <label className="mb-[8px]" htmlFor={placeholder}>
            {title}
            {isRequired && <span className="text-error ">*</span>}
          </label>
        )}
        <Select
          isClearable
          defaultValue=""
          id={placeholder}
          styles={selectStyles}
          options={options}
          value={options.find((c) => c.value === value)}
          onChange={handleChange}
          placeholder={placeholder}
          onMenuOpen={handleMenuOpen}
          onMenuClose={handleMenuClose}
          components={{
            DropdownIndicator: isValueSelected
              ? null
              : (props) => <DropdownIndicator isOpen={isOpen} {...props} />
          }}
        />
        {isRequired && errorText && (
          <span className="text-xs text-error">{errorText}</span>
        )}
      </div>
    );
  }
);

export default SelectInput;
