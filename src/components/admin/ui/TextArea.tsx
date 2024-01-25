import { nanoid } from 'nanoid';
import {
  ForwardedRef,
  InputHTMLAttributes,
  forwardRef,
} from 'react';

interface TextAreaProps
  extends InputHTMLAttributes<HTMLTextAreaElement> {
  title?: string;
  errorText?: string;
}

const TextArea = forwardRef(function TextArea(
  { title, errorText, value = '', ...rest }: TextAreaProps,
  _ref: ForwardedRef<HTMLInputElement>
) {
  const id = nanoid();

  const inputClassName = `w-full rounded-md border-2 p-2 placeholder:text-sm
${
  errorText
    ? 'border-red-500  outline-red-500 focus:outline-red-500'
    : 'border-gray-500 focus:outline-gray-700'
}
`;

  return (
    <div
      className={`w-full min-w-[450px] max-w-[442px] ${errorText ? 'text-red-500' : 'text-inherit'}`}
    >
      {!!title && (
        <label htmlFor={id} className="text-sm font-medium">
          {title}
        </label>
      )}
      <textarea
        {...rest}
        id={id}
        value={value}
        className={inputClassName}
      />

      {errorText && (
        <span className="ml-2 text-xs">{errorText}</span>
      )}
    </div>
  );
});

TextArea.displayName = 'TextArea';

export default TextArea;
