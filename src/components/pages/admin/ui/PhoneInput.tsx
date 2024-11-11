'use client';

import type {
  ForwardedRef,
  InputHTMLAttributes,
} from 'react';

import {
  forwardRef,
} from 'react';
import { IMaskMixin } from 'react-imask';

import WriteIcon from '@/components/shared/icons/Admin-icons/WriteIcon';

interface PhoneInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  title?: string;
  errorText?: string;
  iconComponent?: JSX.Element;
  isRequired?: boolean;
  isIcon?: boolean;
}

interface MaskedStyledInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  inputRef?: ForwardedRef<HTMLInputElement>;
}

const MaskedStyledInput = IMaskMixin(
  ({ inputRef, ...props }: MaskedStyledInputProps) => (
    <input {...props} ref={inputRef} />
  ),
);

const PhoneInput = forwardRef((
  {
    title,
    errorText,
    value = '',
    isRequired,
    isIcon,
    ...rest
  }: PhoneInputProps,
  _ref: ForwardedRef<HTMLInputElement>,
) => {
  const inputClassName = `bg-'[#efefef]' h-[44px] outline-none [border:1px_solid_transparent]  w-full rounded-md placeholder:text-[#787878] placeholder:text-[16px] placeholder:leading-[1.16] px-[16px] py-[9px] pr-[40px] text-[#020202] text-[16px]
    hover:bg-[#ebfcee] 
${
  errorText
    ? '[border:1px_solid_#f92b2d]  focus:outline-none focus:[border:1px_solid_#f92b2d] '
    : 'border-none focus:outline-none focus:bg-[#efefef] focus:[border:1px_solid_#35db4f]'
}
    `;

  return (
    <div
      className={`w-[242px] font-sans font-normal tracking-normal 2xl:w-[290px] 3xl:w-[320px] 4xl:w-[442px]   ${errorText ? 'text-red-500' : 'text-inherit'}`}
    >
      {!!title && (
        <label
          htmlFor={title}
          className=" mb-[8px]  block  text-[20px] leading-[1.4]  text-white"
        >
          {title}
          {isRequired && (
            <span className="text-error">*</span>
          )}
        </label>
      )}
      <div className="relative ">
        <MaskedStyledInput
          mask="+38# *0 000 0000"
          definitions={{
            '#': /0/,
            '*': /[5-9,]/,
          }}
          radix="."
          inputRef={_ref}
          overwrite
          {...rest}
          id={title}
          value={value}
          className={inputClassName}
        />

        {isIcon && (
          <div className=" absolute right-[16px] top-[9px] ">
            <WriteIcon className="size-[24px]" />
          </div>
        )}
      </div>

      {errorText && (
        <span className="left top absolute text-xs">
          {errorText}
        </span>
      )}
    </div>
  );
});

PhoneInput.displayName = 'PhoneInput';

export default PhoneInput;
