import React, { useEffect } from 'react';

import { useBodyScrollLock } from '@/hooks/useBodyScrollLock';

import CloseIcon from './CloseIcon';

interface AlertProps {
  text: string;
  title: string;
  isError: boolean;
  onClose: () => void;
}

function ErrorAlert({ text, title, onClose, isError }: AlertProps) {
  useBodyScrollLock(isError);
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && onClose) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[999] flex  items-center justify-center overflow-auto bg-graphite ">
      <div className="relative flex h-[300px] w-[600px] flex-col items-center justify-center rounded-md  bg-white p-[50px] text-black ">
        <h2 className="mb-[36px] text-2xl font-bold"> {title}</h2>
        <p className="max-w-[358px] text-center text-[16px]">{text}</p>
        <button className="absolute  right-[50px] top-[50px]" onClick={onClose}>
          <CloseIcon />
        </button>
      </div>

      <div className="absolute bottom-0 left-0  w-full  bg-darkGraphite ">
        <p className="mt-0 text-left  font-['Open_Sans',_sans-serif] text-[14px] text-[#ffffff]">
          Компанія направляє 10% прибутку на підтримку 59-ї бригади ім. Якова
          Гандзюка
        </p>
      </div>
    </div>
  );
}

export default ErrorAlert;
