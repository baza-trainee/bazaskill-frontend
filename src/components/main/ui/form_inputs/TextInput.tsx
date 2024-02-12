import {
  ForwardedRef,
  InputHTMLAttributes,
  forwardRef,
} from 'react';

interface TextInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  title?: string;
  isRequired?: boolean;
  errorText?: string;
}

const TextInput = forwardRef(function TextInput(
  {
    title,
    errorText,
    isRequired,
    value = '',
    ...rest
  }: TextInputProps,
  _ref: ForwardedRef<HTMLInputElement>
) {
  const inputId = `${title}${Math.random()}`;
  return (
    <div className="relative m-2 w-[358px]">
      {!!title && (
        <label htmlFor={inputId}>
          {title}
          {isRequired && (
            <span className="text-error">*</span>
          )}
        </label>
      )}
      <input
        {...rest}
        id={inputId}
        value={value}
        className="mt-[10px] w-full rounded-sm bg-inputBgGray p-2"
      />

      {errorText && (
        <span className="text-xs text-error">
          {errorText}
        </span>
      )}
    </div>
  );
});

TextInput.displayName = 'TextInput';

export default TextInput;
