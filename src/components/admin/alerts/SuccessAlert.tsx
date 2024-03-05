import React from 'react';
import CloseIcon from './CloseIcon';
import { useBodyScrollLock } from '@/hooks/useBodyScrollLock';

type AlertProps = {
  title: string;
  isSuccess: boolean;
  onClose: () => void;
};

const SuccessAlert = ({
  title,
  onClose,
  isSuccess,
}: AlertProps) => {
  useBodyScrollLock(isSuccess);
  return (
    <div className="absolute left-0 right-0 top-0 flex h-[100vh] w-full items-center justify-center bg-black/90">
      <div className="relative flex h-[300px] w-[600px] items-center justify-center rounded-md bg-white text-2xl font-bold text-black">
        {title}
        <button
          className="absolute right-2 top-2"
          onClick={onClose}
        >
          <CloseIcon />
        </button>
      </div>
    </div>
  );
};

export default SuccessAlert;
