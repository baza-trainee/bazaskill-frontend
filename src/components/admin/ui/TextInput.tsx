import EyeIcon from '@/components/shared/icons/Admin-icons/EyeIcon';
import NotEyeIcon from '@/components/shared/icons/Admin-icons/NotEyeIcon';
import WriteIcon from '@/components/shared/icons/Admin-icons/WriteIcon';

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
  isRequired?: boolean;
  isIcon?: boolean;
  isPassword?: boolean;
}

const TextInput = forwardRef(function TextInput(
  {
    title,
    errorText,
    value = '',
    isRequired,
    isIcon,
    isPassword,
    ...rest
  }: TextInputProps,
  ref: ForwardedRef<HTMLInputElement>
) {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

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
      className={`w-[242px] font-sans font-normal tracking-[0px] 2xl:w-[290px] 3xl:w-[320px] 4xl:w-[442px]   ${errorText ? 'text-red-500' : 'text-inherit'}`}
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
        <input
          {...rest}
          id={title}
          value={value}
          type={
            isPassword
              ? isEditing
                ? 'text'
                : 'password'
              : 'text'
          }
          ref={ref}
          className={inputClassName}
        />
        {isPassword && (
          <div className=" absolute right-[16px] top-[9px] ">
            <button
              type="button"
              onClick={handleEditToggle}
            >
              {isEditing ? <EyeIcon /> : <NotEyeIcon />}
            </button>
          </div>
        )}
        {isIcon && !isPassword && (
          <div className=" absolute right-[16px] top-[9px] ">
            <WriteIcon className="h-[24px] w-[24px]" />
          </div>
        )}
        {errorText && (
          <span className="absolute bottom-[-30px] left-[0px] text-xs">
            {errorText}
          </span>
        )}
      </div>
    </div>
  );
});

TextInput.displayName = 'TextInput';

export default TextInput;
