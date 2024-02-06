'use client';

import {
  ForwardedRef,
  InputHTMLAttributes,
  forwardRef,
} from 'react';
import { IMaskMixin } from 'react-imask';

interface PhoneInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  title?: string;
  isWhite?: boolean;
  errorText?: string;
}

interface MaskedStyledInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  inputRef?: ForwardedRef<HTMLInputElement>;
}

const MaskedStyledInput = IMaskMixin(
  ({ inputRef, ...props }: MaskedStyledInputProps) => (
    <input {...props} ref={inputRef} />
  )
);

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
    <div className="relative m-2 h-[14px] w-[358px]">
      {!!title && (
        <label htmlFor={title} className="">
          {title}
        </label>
      )}
      <MaskedStyledInput
        mask="+00(000)000-00-00"
        radix="."
        inputRef={_ref}
        overwrite
        {...rest}
        id={title}
        value={value}
        className="w-full bg-inputBgGray py-2 pl-[16px]"
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
