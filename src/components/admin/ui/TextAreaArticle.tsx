import EyeIcon from '@/components/icons/Admin-icons/NotEyeIcon';
import TrashIcon from '@/components/icons/Admin-icons/TrashIcon';
import WriteIcon from '@/components/icons/Admin-icons/WriteIcon';
import { nanoid } from 'nanoid';
import {
  ForwardedRef,
  InputHTMLAttributes,
  forwardRef,
  useState,
} from 'react';

interface TextAreaArticleProps
  extends InputHTMLAttributes<HTMLTextAreaElement> {
  title?: string;
  errorText?: string;
  isRequired?: boolean;
}

const TextAreaArticle = forwardRef(function TextAreaArticle(
  {
    title,
    errorText,
    value = '',
    isRequired,
    ...rest
  }: TextAreaArticleProps,
  _ref: ForwardedRef<HTMLInputElement>
) {
  const id = nanoid();
  const [isEditing, setIsEditing] = useState(true); // Стан для збереження значення текстової області

  const handleClear = () => {
    rest.onChange &&
      rest.onChange({
        target: { value: '' },
      } as React.ChangeEvent<HTMLTextAreaElement>);
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing); // Зміна стану редагування
  };

  const handleBlur = () => {
    setIsEditing(false); // Зміна стану редагування на false при втраті фокуса
  };

  const inputClassName = ` scroll-auto mt-[8px] w-[1529px] h-[123px] text-[#020202] text-[16px]  font-sans font-normal leading-[1.6] tracking-[0px] resize-none rounded-md border-4 p-[16px] placeholder:text-[#787878] placeholder:text-[16px] placeholder:leading-[1.16]
${
  errorText
    ? 'border-red-500  outline-red-500 focus:outline-red-500'
    : 'border-none focus:outline-none'
}
`;

  return (
    <div
      className={`w-[1529px] font-sans font-normal  ${errorText ? 'text-red-500' : 'text-inherit'}`}>
      {!!title && (
        <label
          htmlFor={id}
          className="mb-0  text-[20px] leading-[1.4]  text-white">
          {title}
          {isRequired && (
            <span className="text-error">*</span>
          )}
        </label>
      )}
      <div className="relative z-0 mt-[8px]  ">
        <textarea
          {...rest}
          id={id}
          value={value}
          className={inputClassName}
          onBlur={handleBlur}
          readOnly={!isEditing}
        />
        <div className="absolute  bottom-[8px] right-[21px] z-10  flex gap-[32px] p-[8px]">
          <EyeIcon width={32} height={32} />
          <button type="button" onClick={handleEditToggle}>
            <WriteIcon width={'32px'} height={'32px'} />
          </button>
          <button type="submit" onClick={handleClear}>
            <TrashIcon width={'32px'} height={'32px'} />
          </button>
        </div>
      </div>
      {errorText && (
        <span className="ml-2 text-xs">{errorText}</span>
      )}
    </div>
  );
});

TextAreaArticle.displayName = 'TextAreaArticle';

export default TextAreaArticle;
