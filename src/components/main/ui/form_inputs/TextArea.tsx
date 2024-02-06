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
  _ref: ForwardedRef<HTMLTextAreaElement>
) {
  return (
    <div className="relative m-2 w-[358px]">
      {!!title && (
        <label htmlFor={title} className="font-medium">
          {title}
        </label>
      )}
      <textarea
        {...rest}
        id={title}
        value={value}
        rows={5}
        cols={30}
        style={{ overflow: 'hidden' }}
        className="w-full bg-inputBgGray p-2"
      />

      {errorText && (
        <span className="absolute -bottom-4 left-0 text-xs text-error">
          {errorText}
        </span>
      )}
    </div>
  );
});

TextArea.displayName = 'TextArea';

export default TextArea;
