import type {
  ForwardedRef,
  InputHTMLAttributes,
} from 'react';

import {
  forwardRef,
} from 'react';

import ErrorIcon from '@/components/shared/icons/Admin-icons/ErrorIcon';

interface SignInEmailProps
  extends InputHTMLAttributes<HTMLInputElement> {
  title?: string;
  errorText?: string;
  isRequired?: boolean;
}

const SignInEmail = forwardRef((
  {
    title,
    errorText,
    value = '',
    isRequired,
    ...rest
  }: SignInEmailProps,
  _ref: ForwardedRef<HTMLInputElement>,
) => {
  const inputClassName = `bg-[#efefef] h-[44px] outline-none [border:1px_solid_transparent]  w-full rounded-md placeholder:text-[#787878] placeholder:text-[16px] placeholder:leading-[1.16] px-[16px] py-[9px] text-[#020202] text-[16px]
  
${
  errorText
    ? '[border:1px_solid_#f92b2d]  focus:outline-none focus:[border:1px_solid_#f92b2d] '
    : 'border-none focus:outline-none  focus:[border:1px_solid_#35db4f]'
}
    `;

  return (
    <div
      className={`w-[358px] font-sans font-normal tracking-normal     ${errorText ? 'text-red-500' : 'text-inherit'}`}
    >
      {!!title && (
        <label
          htmlFor={title}
          className=" mb-[8px]  block   text-lg leading-[1.4]   text-[#020202]  5xl:text-xl"
        >
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
        <div className="absolute right-[16px] top-[9px] ">
          {errorText && (
            <ErrorIcon className="size-[24px]" />
          )}
        </div>
        {errorText && (
          <span className=" absolute bottom-[-16px] left-0 text-xs">
            {errorText}
          </span>
        )}
      </div>
    </div>
  );
});

SignInEmail.displayName = 'SignInEmail';

export default SignInEmail;
