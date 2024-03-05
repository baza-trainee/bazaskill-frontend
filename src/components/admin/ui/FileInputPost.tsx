/* eslint-disable no-unused-vars */
'use client';
import UploadIcon from '@/components/icons/Admin-icons/UploadIcon';
import {
  ForwardedRef,
  InputHTMLAttributes,
  forwardRef,
  useState,
} from 'react';
import {
  DeepMap,
  FieldError,
  FieldValues,
  UseControllerProps,
  useController,
} from 'react-hook-form';

type FileInputPostProps<T extends FieldValues> =
  InputHTMLAttributes<HTMLInputElement> &
    UseControllerProps<T> & {
      title?: string;
      isRequired: boolean;
      iconComponent?: JSX.Element;
    };

const FileInputPost = forwardRef(function FileInputPost<
  T extends FieldValues,
>(
  {
    title,
    placeholder,
    control,
    name,
    rules,
    isRequired,
    iconComponent,
    ...rest
  }: FileInputPostProps<T>,
  ref: ForwardedRef<HTMLInputElement>
) {
  const [selectedFileName, setSelectedFileName] = useState<
    string | null
  >(null);

  const { field, formState } = useController<T>({
    name,
    control,
    rules,
  });

  const errorText = (
    formState.errors[name] as DeepMap<
      FieldValues,
      FieldError
    >
  )?.message;

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const selectedFile = files[0];
      setSelectedFileName(selectedFile.name);
      field.onChange(selectedFile);
    }
  };

  const handlePlaceholderClick = () => {
    if (ref && 'current' in ref && ref.current) {
      ref.current.click();
    }
  };

  const inputClassName = `w-[442px]  cursor-pointer relative z-1  bg-[#efefef] h-[44px] outline-none [border:1px_solid_transparent] rounded-md    px-[16px] py-[9px] text-[#020202] text-[16px]
    hover:bg-[#ebfcee] 
${
  errorText
    ? '[border:1px_solid_#f92b2d]  focus:outline-none focus:[border:1px_solid_#f92b2d] '
    : 'border-none focus:outline-none focus:bg-[#efefef] focus:[border:1px_solid_#35db4f]'
}
    `;

  return (
    <div
      className={` font-sans font-normal tracking-[0px] ${errorText ? 'text-red-500' : 'text-inherit'}`}>
      {!!title && (
        <label
          htmlFor={title}
          className=" mb-[8px]  block text-[20px]  leading-[1.4] text-white">
          {title}
          {isRequired && (
            <span className="text-error">*</span>
          )}
        </label>
      )}
      <div
        className={inputClassName}
        onClick={handlePlaceholderClick}>
        <span className="text-[16px] leading-[1.16] text-[#787878]">
          {selectedFileName ? (
            <span className="text-[#020202]">
              {selectedFileName}
            </span>
          ) : (
            placeholder
          )}
        </span>
        <div className=" absolute right-[16px] top-[9px] z-0 ">
          <UploadIcon />
        </div>
        <input
          {...rest}
          type="file"
          id={title}
          ref={ref}
          accept="image/jpeg, image/jpg"
          className=" absolute  left-0 w-[100%] cursor-pointer opacity-0"
          onChange={handleChange}
        />
      </div>
      {errorText && (
        <span className="text-xs">{errorText}</span>
      )}
    </div>
  );
});

FileInputPost.displayName = 'FileInputPost';

export default FileInputPost;
