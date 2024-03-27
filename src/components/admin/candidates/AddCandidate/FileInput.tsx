import UploadIcon from '@/components/icons/Admin-icons/UploadIcon';
import {
  ChangeEvent,
  ForwardedRef,
  forwardRef,
  InputHTMLAttributes,
} from 'react';
interface FileInputProps {
  title: string;
  error: string;
  isRequired: boolean;
  onChange: (file: File) => void;
}
const FileInput = forwardRef(function FileInput(
  {
    error,
    isRequired,
    title,
    onChange,
    ...rest
  }: FileInputProps,
  ref: ForwardedRef<HTMLInputElement>
) {
  const handleChangeFile = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    console.log(e.target.files);
    if (e.target.files) {
      onChange(e.target.files[0]);
    }
  };
  return (
    <div className="relative flex w-full max-w-[442px] grow flex-col gap-[5px]">
      <label htmlFor={title}>
        Завантажити CV{' '}
        <span className="cursor-pointer text-green">
          [?]{' '}
        </span>
        <span className="text-red-500">*</span>
      </label>
      <div
        onClick={(e) => e.stopPropagation()}
        className="h-full w-full"
      >
        <input
          id={title}
          {...rest}
          ref={ref}
          value=""
          accept=".pdf"
          type="file"
          onChange={handleChangeFile}
          className=" absolute  left-0 w-[100%] cursor-pointer opacity-0"
        />
        <label
          htmlFor={title}
          className="flex h-full w-full cursor-pointer items-center justify-between truncate rounded-[4px] bg-white px-[16px] py-[6px] text-start leading-[26px] text-gray"
        >
          Завантажте файл
          {/* {cv ? cv.name : 'Завантажте файл'} */}
          <UploadIcon />
        </label>
      </div>

      <span
        className={`absolute top-[100%] text-[12px] ${error ? 'text-red-500' : 'text-white'}`}
      >
        {error
          ? error
          : 'Baza Skill приймає резюме в форматі PDF, розміром до 5 Mb'}
      </span>
    </div>
  );
});

export default FileInput;

{
  /*  */
}
