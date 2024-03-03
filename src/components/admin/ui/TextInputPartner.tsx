'use client';
import WriteIcon from '@/components/icons/Admin-icons/WriteIcon';
import {
  ForwardedRef,
  InputHTMLAttributes,
  forwardRef,
  useState,
} from 'react';

interface TextInputPartnerProps
  extends InputHTMLAttributes<HTMLInputElement> {
  title?: string;
  errorText?: string;
  iconComponent?: JSX.Element;
  isRequired?: boolean;
  isRead?: boolean;
}

const TextInputPartner = forwardRef(
  function TextInputPartner(
    {
      title,
      errorText,
      value = '',
      isRequired,
      isRead,
      ...rest
    }: TextInputPartnerProps,
    _ref: ForwardedRef<HTMLInputElement>
  ) {
    const [isEditing, setIsEditing] = useState(true);

    const handleEditToggle = () => {
      setIsEditing(!isEditing);
    };

    const handleBlur = () => {
      setIsEditing(false);
    };

    const inputClassName = `bg-${isEditing ? '[#efefef]' : '[#f8f8f8]'}  h-[44px] outline-none [border:1px_solid_transparent]  w-full rounded-md placeholder:text-[#787878] placeholder:text-[16px] placeholder:leading-[1.16] px-[16px] py-[9px] text-[#020202] text-[16px]
   hover:bg-[#ebfcee] 
${
  errorText
    ? '[border:1px_solid_#f92b2d]  focus:outline-none focus:[border:1px_solid_#f92b2d] '
    : 'border-none focus:outline-none focus:bg-[#efefef] focus:[border:1px_solid_#35db4f]'
}
    `;

    return (
      <div
        className={` w-[597px]  font-sans font-normal tracking-[0px] ${errorText ? 'text-red-500' : 'text-inherit'}`}>
        {!!title && (
          <label
            htmlFor={title}
            className="mb-[8px]  block text-[20px] leading-[1.4]  text-white">
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
            readOnly={isRead && !isEditing}
          />

          {isRead && (
            <div className=" absolute right-[16px] top-[9px] ">
              <button
                type="button"
                onClick={handleEditToggle}>
                <WriteIcon />
              </button>
            </div>
          )}
        </div>

        {errorText && (
          <span className="text-xs">{errorText}</span>
        )}
      </div>
    );
  }
);

TextInputPartner.displayName = 'TextInputPartner';

export default TextInputPartner;
