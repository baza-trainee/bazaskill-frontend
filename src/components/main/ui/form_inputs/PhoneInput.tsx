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
  errorText?: string;
  isRequired?: boolean;
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
      <MaskedStyledInput
        mask="+00(000)000-00-00"
        radix="."
        inputRef={_ref}
        overwrite
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
