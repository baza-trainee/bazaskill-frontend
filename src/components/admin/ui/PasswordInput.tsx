import NotEyeIcon from '@/components/icons/Admin-icons/NotEyeIcon';
import { nanoid } from 'nanoid';
import {
  ForwardedRef,
  InputHTMLAttributes,
  forwardRef,
  useState,
} from 'react';

interface PasswordInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  title?: string;
  errorText?: string;
  iconComponent?: JSX.Element;
  isRequired?: boolean;
}

const PasswordInput = forwardRef(function PasswordInput(
  {
    title,
    errorText,
    value = '',
    isRequired,
    ...rest
  }: PasswordInputProps,
  _ref: ForwardedRef<HTMLInputElement>
) {
  const id = nanoid();
  const [isEditing, setIsEditing] = useState(false); 
  const inputType = isEditing ? 'text' : 'password';
  const handleEditToggle = () => {
    setIsEditing(!isEditing); 
  };

  const handleBlur = () => {
    setIsEditing(false); 
  };

  const inputClassName = `h-[44px] outline-none [border:1px_solid_transparent]  w-full rounded-md placeholder:text-[#787878] placeholder:text-[16px] placeholder:leading-[1.16] px-[16px] py-[9px] text-[#020202] text-[16px]
      ${
        errorText
          ? '[border:2px_solid_red] focus:[border:2px_solid_red]'
          : 'border-none focus:outline-none'
      }
    `;

  return (
    <div
      className={` w-[442px]  font-sans font-normal tracking-[0px] ${errorText ? 'text-red-500' : 'text-inherit'}`}>
      {!!title && (
        <label
          htmlFor={id}
          className=" mb-0  text-[20px] leading-[1.4]  text-white">
          {title}
          {isRequired && (
            <span className="text-error">*</span>
          )}
        </label>
      )}
      <div className="relative mt-[8px] ">
        <input
          {...rest}
          id={id}
          value={value}
          className={inputClassName}
          onBlur={handleBlur}
          type={inputType}
        />
        <div className=" absolute right-[16px] top-[9px] ">
          <button type="button" onClick={handleEditToggle}>
            <NotEyeIcon width={'32px'} height={'32px'} />
          </button>
        </div>
      </div>

      {errorText && (
        <span className="text-xs">{errorText}</span>
      )}
    </div>
  );
});

PasswordInput.displayName = 'PasswordInput';

export default PasswordInput;
