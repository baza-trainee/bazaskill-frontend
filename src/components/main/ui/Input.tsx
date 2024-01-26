'use client';
import { nanoid } from 'nanoid';
import {
  ForwardedRef,
  InputHTMLAttributes,
  forwardRef,
  useState,
} from 'react';

interface TextInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  title?: string;
  errorText?: string;
  category?: string;
  style?: React.CSSProperties;
}

const TextInput = forwardRef(function TextInput(
  { title, errorText, category, ...rest }: TextInputProps,
  _ref: ForwardedRef<HTMLInputElement>
) {
  const id = nanoid();
  const [inputValue, setInputValue] = useState('');

  return (
    <div
      className={`w-full ${errorText ? 'text-red-500' : 'text-inherit'}`}>
      {!!title && (
        <label htmlFor={id} className="text-sm font-medium">
          {title}
        </label>
      )}
      <input
        {...rest}
        id={id}
        value={inputValue}
        data-category={category}
        className={` h-[64px] w-full p-2 placeholder:text-sm focus:outline-none
  ${
    errorText
      ? 'border-red-500 caret-red-500 outline-red-500 focus:outline-red-500'
      : 'border-gray-500 focus:outline-gray-700'
  }`}
        onChange={(e) => setInputValue(e.target.value)}
      />

      {errorText && (
        <span className="text-xs">{errorText}</span>
      )}
    </div>
  );
});

TextInput.displayName = 'TextInput';

export default TextInput;
