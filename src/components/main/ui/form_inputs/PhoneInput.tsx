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
    <div className="relative m-2 w-[240px] sm:w-[340px] md:w-[264px] xl:w-[358px]">
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
        className={`mt-[10px] w-full rounded-sm bg-inputBgGray p-2 outline-none focus:border focus:border-green 
        ${errorText && 'border border-error focus:border-error'}
        ${value && !errorText && 'border border-green'}
        `}
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
