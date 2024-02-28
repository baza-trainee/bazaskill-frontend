import WriteIcon from '@/components/icons/Admin-icons/WriteIcon';
import { nanoid } from 'nanoid';
import {
  ForwardedRef,
  InputHTMLAttributes,
  forwardRef,
  useState,
} from 'react';

interface TextAreaCandidateProps
  extends InputHTMLAttributes<HTMLTextAreaElement> {
  title?: string;
  errorText?: string;
  iconComponent?: JSX.Element;
  isRequired?: boolean;
}

const TextAreaCandidate = forwardRef(
  function TextAreaCandidate(
    {
      title,
      errorText,
      value = '',
      isRequired,
      ...rest
    }: TextAreaCandidateProps,
    _ref: ForwardedRef<HTMLInputElement>
  ) {
    const id = nanoid();
    const [isEditing, setIsEditing] = useState(true); // Стан для збереження значення текстової області

    const handleEditToggle = () => {
      setIsEditing(!isEditing); // Зміна стану редагування
    };

    const handleBlur = () => {
      setIsEditing(false); // Зміна стану редагування на false при втраті фокуса
    };

    const inputClassName = `mt-[8px] w-[908px] h-[180px] text-[#020202] text-[16px]  font-sans font-normal leading-[1.6] tracking-[0px] resize-none rounded-md border-4 p-[16px] placeholder:text-[#787878] placeholder:text-[16px] placeholder:leading-[1.16]
${
  errorText
    ? 'border-red-500  outline-red-500 focus:outline-red-500'
    : 'border-none focus:outline-none'
}
`;

    return (
      <div
        className={`w-[908px] font-sans font-normal  ${errorText ? 'text-red-500' : 'text-inherit'}`}>
        {!!title && (
          <label
            htmlFor={id}
            className="mb-0  text-[20px] font-bold  leading-[1.4] text-white">
            {title}
            {isRequired && (
              <span className="text-error">*</span>
            )}
          </label>
        )}
        <div className="relative mt-[8px] ">
          <textarea
            {...rest}
            id={id}
            value={value}
            className={inputClassName}
            onBlur={handleBlur}
            readOnly={!isEditing}
          />

          <div className="absolute right-[16px] top-[24px]">
            <button
              type="button"
              onClick={handleEditToggle}>
              <WriteIcon width={'32px'} height={'32px'} />
            </button>
          </div>
        </div>

        {errorText && (
          <span className="ml-2 text-xs">{errorText}</span>
        )}
      </div>
    );
  }
);

TextAreaCandidate.displayName = 'TextAreaCandidate';

export default TextAreaCandidate;
