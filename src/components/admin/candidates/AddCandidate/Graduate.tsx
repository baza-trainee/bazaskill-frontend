import UploadIcon from '@/components/icons/Admin-icons/UploadIcon';
import { useEffect, useState } from 'react';
import Dropzone from 'react-dropzone';

const Graduate = () => {
  const [cv, setCV] = useState<File | null>(null);
  const [cvError, setCVError] = useState<string>('');
  const handleUploadCV = async (
    files: File[] | undefined
  ) => {
    if (files && files.length > 0 && files.length === 1) {
      if (files[0].type === 'application/pdf') {
        setCV(files[0]);
        setCVError('');
      } else {
        setCV(null);
        setCVError('Only .pdf format allowed');
      }
    } else if (files && files.length > 1) {
      setCV(null);
      setCVError('Only one .pdf file allowed');
    } else {
      setCV(null);
      setCVError('An error occured try again');
    }
  };
  const [graduate, setGraduate] = useState<File | null>(
    null
  );
  const [graduateError, setGraduateError] =
    useState<string>('');
  useEffect(() => {
    console.log('here');
  }, [graduate, setGraduate]);
  return (
    <div className="flex w-full flex-col">
      <div className="flex w-full flex-col">
        <div className="flex w-full gap-[24px]">
          <div className="flex w-full max-w-[442px] grow flex-col gap-[5px]">
            <label htmlFor="universiry">
              Назва навчального закладу{' '}
              <span className="text-red-500">*</span>
            </label>
            <input
              id="universiry"
              placeholder="Введіть назву"
              className="box-border h-[44px] rounded-[4px] px-[16px] py-[6px] text-black outline-none"
            />
          </div>

          <div className="flex w-full max-w-[442px] grow flex-col gap-[5px]">
            <label htmlFor="universiry_specializaton">
              Cпеціальність{' '}
              <span className="text-red-500">*</span>
            </label>
            <input
              id="universiry_specializaton"
              placeholder="Введіть назву"
              className="box-border h-[44px] rounded-[4px] px-[16px] py-[6px] text-black outline-none"
            />
          </div>

          <div className="relative flex w-full max-w-[442px] grow flex-col gap-[5px]">
            <label htmlFor="graduate">
              Завантажити CV{' '}
              <span className="cursor-pointer text-green">
                [?]{' '}
              </span>
              <span className="text-red-500">*</span>
            </label>
            <Dropzone
              onDrop={(acceptedFiles) =>
                handleUploadCV(acceptedFiles)
              }
            >
              {({ getRootProps, getInputProps }) => (
                <div
                  {...getRootProps()}
                  onClick={(e) => e.stopPropagation()}
                  className="h-full w-full"
                >
                  <input
                    {...getInputProps()}
                    id="graduate"
                    name="graduate"
                    placeholder="Graduate"
                    accept=".pdf"
                    hidden
                  />
                  <label
                    htmlFor="cv"
                    className="flex h-full w-full cursor-pointer items-center justify-between truncate rounded-[4px] bg-white px-[16px] py-[6px] text-start leading-[26px] text-gray"
                  >
                    {cv ? cv.name : 'Завантажте файл'}
                    <UploadIcon />
                  </label>
                </div>
              )}
            </Dropzone>
            <span
              className={`absolute top-[100%] text-[12px] ${cvError ? 'text-red-500' : 'text-white'}`}
            >
              {cvError
                ? cvError
                : 'Baza Skill приймає резюме в форматі PDF, розміром до 5 Mb'}
            </span>
          </div>
        </div>

        <div className="flex w-full gap-[24px]">
          <div className="flex max-w-[442px] grow flex-col gap-[5px]">
            <label htmlFor="name_ua">
              Ім`я <span className="text-red-500">*</span>
            </label>
            <input
              id="name_ua"
              name="name_ua"
              placeholder="Ім`я"
              className="box-border h-[44px] rounded-[4px] px-[16px] py-[6px] text-black outline-none"
            />
          </div>

          <div className="flex max-w-[442px] grow flex-col gap-[5px]">
            <label htmlFor="surname_ua">
              Прізвище{' '}
              <span className="text-red-500">*</span>
            </label>
            <input
              id="surname_ua"
              name="surname_ua"
              placeholder="Прізвище"
              className="box-border h-[44px] rounded-[4px] px-[16px] py-[6px] text-black outline-none"
            />
          </div>

          <div className="flex max-w-[442px] grow flex-col gap-[5px]">
            <label htmlFor="country">
              Країна <span className="text-red-500">*</span>
            </label>
            <input
              id="country"
              name="country"
              placeholder="Країна"
              className="box-border h-[44px] rounded-[4px] px-[16px] py-[6px] text-black outline-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Graduate;
