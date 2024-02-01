'use client'
import React, {
  useState,
  useEffect,
  useRef,
  FC,
  ChangeEvent,
} from 'react';
import { nanoid } from 'nanoid';
import ArrowIcon from '@/components/icons/ArrowIcon';

interface TextInputProps {
  title?: string;
  errorText?: string;
  category?: string;
  options?: string[];
  [key: string]: any;
}

const TextInput: FC<TextInputProps> = ({
  title,
  errorText,
  category,
  options = [],
  ...rest
}) => {
  const id = nanoid();
  const [inputValue, setInputValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleSelectOption = (option: string) => {
    setInputValue(option);
    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener(
        'click',
        handleClickOutside
      );
    };
  }, []);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    setInputValue(e.target.value);
    setIsOpen(true);
  };

  return (
    <div
      className={`w-full ${errorText ? 'text-red-500' : 'text-inherit'}`}>
      {title && (
        <label htmlFor={id} className="text-sm font-medium">
          {title}
        </label>
      )}
      <div className="relative" ref={dropdownRef}>
        <ArrowIcon
          className={`absolute right-3 top-7 cursor-pointer ${
            isOpen ? 'rotate-180' : ''
          }`}
          onClick={() => setIsOpen(!isOpen)}
        />
        <input
          {...rest}
          id={id}
          value={inputValue}
          data-category={category}
          className={`h-[64px] w-full p-2 placeholder:text-xl focus:outline-none ${
            errorText
              ? 'border-red-500 caret-red-500 outline-red-500 focus:outline-red-500'
              : 'border-gray-500 focus:outline-gray-700'
          }`}
          onChange={handleInputChange}
          onFocus={() => setIsOpen(true)}
        />

        {isOpen && (
          <div className="max-h-25 absolute left-0 top-full w-full overflow-y-auto rounded-b-md bg-white shadow-lg">
            {options.map((option) => (
              <div
                key={option}
                className="text-red hover:bg-lightGreen border-gray-300 cursor-pointer border-b p-2"
                onClick={() => handleSelectOption(option)}>
                {option}
              </div>
            ))}
          </div>
        )}
      </div>

      {errorText && (
        <span className="text-xs">{errorText}</span>
      )}
    </div>
  );
};

export default TextInput;
