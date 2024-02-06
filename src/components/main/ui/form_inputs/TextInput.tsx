import {
  ForwardedRef,
  InputHTMLAttributes,
  forwardRef,
} from 'react';

interface TextInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  title?: string;
  errorText?: string;
}

const TextInput = forwardRef(function TextInput(
  { title, errorText, value = '', ...rest }: TextInputProps,
  _ref: ForwardedRef<HTMLInputElement>
) {
  return (
    <div className="relative m-2 w-[358px]">
      {!!title && <label htmlFor={title}>{title}</label>}
      <input
        {...rest}
        id={title}
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
