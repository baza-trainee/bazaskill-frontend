import {
  ForwardedRef,
  InputHTMLAttributes,
  forwardRef,
  CSSProperties,
} from 'react';

interface TextAreaProps
  extends InputHTMLAttributes<HTMLTextAreaElement> {
  title?: string;
  errorText?: string;
  isRequired?: boolean;
  errorTextStyle?: CSSProperties;
}

const TextArea = forwardRef(function TextArea(
  {
    title,
    errorText,
    isRequired,
    value = '',
    errorTextStyle,
    ...rest
  }: TextAreaProps,
  _ref: ForwardedRef<HTMLTextAreaElement>
) {
  return (
    <div className="relative m-2 w-[240px] sm:w-[340px] md:w-[264px] xl:w-[358px]">
      {!!title && <label htmlFor={title}>{title}</label>}
      {isRequired && <span className="text-error">*</span>}
      <textarea
        {...rest}
        id={title}
        value={value}
        rows={5}
        cols={30}
        style={{ overflow: 'hidden' }}
        className={`mt-[10px] w-full rounded-sm bg-inputBgGray p-2 outline-none focus:border focus:border-green 
        ${errorText && 'border border-error focus:border-error'}
        ${value && !errorText && 'border border-green'}
        `}
      />

      {errorText && (
        <span
          className="relative left-0 text-xs text-error "
          style={errorTextStyle}
        >
          {errorText}
        </span>
      )}
    </div>
  );
});

TextArea.displayName = 'TextArea';

export default TextArea;
