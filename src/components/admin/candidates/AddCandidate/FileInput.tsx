import UploadIcon from '@/components/icons/Admin-icons/UploadIcon';
import {
  ChangeEvent,
  ForwardedRef,
  forwardRef,
  InputHTMLAttributes,
  useCallback,
  useEffect,
  useState,
} from 'react';
import Dropzone, { useDropzone } from 'react-dropzone';
import {
  Control,
  FieldValues,
  useWatch,
} from 'react-hook-form';
interface FileInputProps {
  title: string;
  error?: string;
  isRequired: boolean;
  file: string | null;
  onChange: (file: File) => void;
}
const FileInput = forwardRef(function FileInput(
  {
    error,
    isRequired,
    title,
    file,
    onChange,
    ...rest
  }: FileInputProps,
  ref: ForwardedRef<HTMLInputElement>
) {
  const [fileName, setFileName] = useState<string | null>(
    file
  );

  const handleProccesFileName = (files: File[]) => {
    if (files) {
      setFileName(files[0].name);
      onChange(files[0]);
    }
  };
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      handleProccesFileName(acceptedFiles);
    },
    [file]
  );
  useEffect(() => {
    setFileName(file);
  }, [file]);
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
  });
  return (
    <div
      {...getRootProps()}
      className="relative flex w-full max-w-[442px] grow flex-col gap-[5px]"
    >
      <label htmlFor={title}>
        {title}{' '}
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
          {...rest}
          {...getInputProps()}
          id={title}
          ref={ref}
          value=""
          accept=".pdf"
          type="file"
          className=" absolute  left-0 w-[100%] cursor-pointer opacity-0"
        />
        <label
          htmlFor={title}
          className="flex h-full w-full cursor-pointer items-center justify-between truncate rounded-[4px] bg-white px-[16px] py-[6px] text-start leading-[26px] text-gray"
        >
          {fileName || 'Завантажте'}
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
FileInput.displayName = 'FileInput';
export default FileInput;

{
  /*  */
}
