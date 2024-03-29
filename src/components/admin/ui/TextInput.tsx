'use client';
import WriteIcon from '@/components/icons/Admin-icons/WriteIcon';
import {
  ForwardedRef,
  InputHTMLAttributes,
  forwardRef,
} from 'react';

interface TextInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  title?: string;
  errorText?: string;
  isRequired?: boolean;
  isIcon?: boolean;
}

const TextInput = forwardRef(function TextInput(
  {
    title,
    errorText,
    value = '',
    isRequired,
    isIcon,
    ...rest
  }: TextInputProps,
  _ref: ForwardedRef<HTMLInputElement>
) {
  const inputClassName = `bg-[#efefef] h-[44px] outline-none [border:1px_solid_transparent]  w-full rounded-md placeholder:text-[#787878] placeholder:text-[16px] placeholder:leading-[1.16] px-[16px] py-[9px] text-[#020202] text-[16px]
    hover:bg-[#ebfcee]
    ${isIcon && 'pr-[40px]'}
${
  errorText
    ? '[border:1px_solid_#f92b2d]  focus:outline-none focus:[border:1px_solid_#f92b2d] '
    : 'border-none focus:outline-none focus:bg-[#efefef] focus:[border:1px_solid_#35db4f]'
}
    `;

  return (
    <div
      className={`w-[240px] font-sans font-normal tracking-[0px] 2xl:w-[290px] 3xl:w-[320px] 4xl:w-[340px] 5xl:w-[358px]   ${errorText ? 'text-red-500' : 'text-inherit'}`}>
      {!!title && (
        <label
          htmlFor={title}
          className=" mb-[8px]  block  text-[20px] leading-[1.4]  text-white">
          {title}
          {isRequired && (
            <span className="text-error">*</span>
          )}
        </label>
      )}
      <div className="relative ">
        <input
          {...rest}
          id={title}
          value={value}
          className={inputClassName}
        />

        {isIcon && (
          <div className=" absolute right-[16px] top-[9px] ">
            <WriteIcon className="h-[24px] w-[24px]" />
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

TextInput.displayName = 'TextInput';

export default TextInput;
