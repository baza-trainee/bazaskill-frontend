'use client';

import {
  ForwardedRef,
  InputHTMLAttributes,
  forwardRef,
} from 'react';

interface PhoneInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  title?: string;
  errorText?: string;
  isRequired?: boolean;
}


const PhoneInput = forwardRef(function PhoneInput(
  {
    title,
    errorText,
    isRequired,
    value = '',
    ...rest
  }: PhoneInputProps,
  _ref: ForwardedRef<HTMLInputElement>
) {
  return (
    <div className="relative m-2 h-[14px] w-[358px]">
      {!!title && (
        <label htmlFor={title} className="">
          {title}
          {isRequired && (
            <span className="text-error">*</span>
          )}
        </label>
      )}
      <input
        {...rest}
        id={title}
        value={value}
        className="mt-[10px] w-full bg-inputBgGray p-2"
        autoComplete="off"
      />
      {errorText && (
        <span className="text-xs text-error">
          {errorText}
        </span>
      )}
    </div>
  );
});

PhoneInput.displayName = 'PhoneInput';

export default PhoneInput;
