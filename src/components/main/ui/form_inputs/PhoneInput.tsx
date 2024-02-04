'use client';

import {
  ForwardedRef,
  InputHTMLAttributes,
  forwardRef,
} from 'react';

interface PhoneInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  title?: string;
  isWhite?: boolean;
  errorText?: string;
}

const PhoneInput = forwardRef(function PhoneInput(
  {
    title,
    errorText,
    value = '',
    ...rest
  }: PhoneInputProps,
  _ref: ForwardedRef<HTMLInputElement>
) {
  return (
    <div className="relative m-2 w-[358px]">
      {!!title && (
        <label htmlFor={title} className="">
          {title}
        </label>
      )}
      <span className="absolute left-0 top-[50%] translate-y-[-50%] border-r border-gray px-2 ">
        +380
      </span>
      <input
        {...rest}
        id={title}
        value={value}
        className="w-full bg-inputBgGray py-2 pl-16"
        autoComplete="off"
      />
      {errorText && (
        <span className="absolute -bottom-4 left-0 text-xs text-error">
          {errorText}
        </span>
      )}
    </div>
  );
});

PhoneInput.displayName = 'PhoneInput';

export default PhoneInput;
