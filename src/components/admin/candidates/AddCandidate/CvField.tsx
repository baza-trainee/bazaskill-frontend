import { useState } from 'react';
import Dropzone from 'react-dropzone';
import UploadIcon from '@/components/icons/Admin-icons/UploadIcon';
const CvField = () => {
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
  return (
    <div className="relative flex w-full max-w-[442px] grow flex-col gap-[5px]">
      <label htmlFor="cv">
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
              id="cv"
              name="cv"
              placeholder="CV"
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
  );
};

export default CvField;
