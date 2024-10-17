'use client';

import EyeIcon from '@/components/shared/icons/Admin-icons/EyeIcon';
import NotEyeIcon from '@/components/shared/icons/Admin-icons/NotEyeIcon';
import {
  ForwardedRef,
  InputHTMLAttributes,
  forwardRef,
  useState,
} from 'react';

interface SignInPasswordProps
  extends InputHTMLAttributes<HTMLInputElement> {
  title?: string;
  errorText?: string;
  isRequired?: boolean;
}

const SignInPassword = forwardRef(function SignInPassword(
  {
    title,
    errorText,
    value = '',
    isRequired,
    ...rest
  }: SignInPasswordProps,
  ref: ForwardedRef<HTMLInputElement>
) {
  const [isEditing, setIsEditing] = useState(false);
  const inputType = isEditing ? 'text' : 'password';
  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleBlur = () => {
    setIsEditing(false);
  };

  const inputClassName = `bg-[#efefef] w-full h-[44px]  h-[44px] outline-none [border:1px_solid_transparent] pr-[40px]  rounded-md placeholder:text-[#787878] placeholder:text-[16px] placeholder:leading-[1.16] px-[9px] py-[16px] text-[#020202] text-[16px]
 
${
  errorText
    ? '[border:1px_solid_#f92b2d]  focus:outline-none focus:[border:1px_solid_#f92b2d] '
    : 'border-none focus:outline-none  focus:[border:1px_solid_#35db4f]'
}
    `;

  return (
    <div
      className={`w-[358px]  font-sans font-normal tracking-[0px] ${errorText ? 'text-red-500' : 'text-inherit'}`}
    >
      {!!title && (
        <label
          htmlFor={title}
          className=" mb-[8px]  block text-left text-lg leading-[1.4]   text-[#020202]  5xl:text-xl"
        >
          {title}
          {isRequired && (
            <span className="text-error">*</span>
          )}
        </label>
      )}
      <div className="relative">
        <input
          {...rest}
          id={title}
          value={value}
          className={inputClassName}
          onBlur={handleBlur}
          type={inputType}
          ref={ref}
        />
        <div className="absolute right-[16px] top-[9px] ">
          <button type="button" onClick={handleEditToggle}>
            {isEditing ? <EyeIcon /> : <NotEyeIcon />}
          </button>
        </div>
        {errorText && (
          <span className="absolute bottom-[-16px] left-0 text-xs">
            {errorText}
          </span>
        )}
      </div>
    </div>
  );
});

SignInPassword.displayName = 'SignInPassword';

export default SignInPassword;
