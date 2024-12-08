'use client';

import type { ChangeEvent, FC } from 'react';
import React, { useEffect, useRef, useState } from 'react';

import ArrowIcon from '@/components/shared/icons/ArrowIcon';
import { isCountry, isSpeciality } from '@/helpers/categoryChecker';
import { useFilters } from '@/stores/useFilters';

interface TextInputProps {
  title: string;
  errorText: string;
  category: string;
  options: string[] | undefined;
  placeholder: string;
  isFirstInput?: boolean;
}

const TextInput: FC<TextInputProps> = ({
  title,
  errorText,
  category,
  options = [],
  isFirstInput = false,

  ...rest
}) => {
  const [inputValue, setInputValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [filteredOptions, setFilteredOptions] = useState<string[]>([]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const { setFilterBySpeciality, setFilterByCountry } = useFilters();

  const handleSelectOption = (option: string) => {
    setInputValue(option);
    setIsOpen(false);

    if (isSpeciality(option)) {
      setFilterBySpeciality(option);
    }

    if (isCountry(option)) {
      setFilterByCountry(option);
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    setInputValue('');
    setFilterByCountry('');
    setFilterBySpeciality('');
  }, []);

  useEffect(() => {
    if (options?.length >= 1) {
      setFilteredOptions(options);
    }
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [options]);

  const filterOptions = (inputValue: string) => {
    const filteredOptions = options.filter((option) =>
      option.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredOptions(filteredOptions);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setInputValue(inputValue);
    setIsOpen(true);
    filterOptions(inputValue);
  };

  return (
    <div className={`w-full ${errorText ? 'text-red-500' : 'text-inherit'}`}>
      {title && (
        <label htmlFor={title} className="text-sm font-medium">
          {title}
        </label>
      )}
      <div className="relative" ref={dropdownRef}>
        <ArrowIcon
          className={`absolute right-3 top-7 cursor-pointer ${isOpen ? 'rotate-180' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
        />
        <input
          {...rest}
          value={inputValue}
          id={title}
          data-category={category}
          name={category}
          autoComplete="off"
          className={`h-[64px] 
            w-full p-2 pl-12 placeholder:text-xl focus:outline-none 
            ${
              isOpen
                ? 'border-t-gray-500 rounded-t-md md:rounded-none'
                : isFirstInput
                  ? 'rounded-md md:rounded-none md:rounded-l-md'
                  : 'rounded-md md:rounded-none'
            }
            ${
              errorText
                ? 'border-red-500 caret-red-500 outline-red-500 focus:outline-red-500'
                : 'border-gray-500 focus:outline-gray-700'
            }
            ${isOpen && isFirstInput ? 'md:rounded-tl-md' : ''}
               `}
          onChange={handleInputChange}
          onFocus={() => setIsOpen(true)}
        />

        {isOpen && (
          <div
            className="custom-scrollbar absolute
            left-0
            top-full z-10 max-h-[120px] w-full overflow-y-auto rounded-b-md bg-white shadow-lg [&::-webkit-scrollbar]:[width:10px]"
          >
            {filteredOptions.map((option) => (
              <div
                key={option}
                className="text-red border-gray-300 cursor-pointer border-b p-2 last:border-none hover:bg-lightGreen"
                onClick={() => handleSelectOption(option)}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>

      {errorText && <span className="text-xs">{errorText}</span>}
    </div>
  );
};

export default TextInput;
