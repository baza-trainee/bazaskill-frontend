import React, { useEffect } from 'react';

import { useBodyScrollLock } from '@/hooks/useBodyScrollLock';

import CloseIcon from './CloseIcon';

interface AlertProps {
  title: string;
  isSuccess: boolean;
  onClose: () => void;
}

function SuccessAlert({ title, onClose, isSuccess }: AlertProps) {
  useBodyScrollLock(isSuccess);

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
    <div className="fixed inset-0 z-[999] flex items-center justify-center overflow-auto bg-black/90">
      <div className="relative flex h-[300px] w-[600px] items-center justify-center rounded-md bg-white text-2xl font-bold text-black">
        {title}
        <button className="absolute  right-[50px] top-[50px]" onClick={onClose}>
          <CloseIcon />
        </button>
      </div>
    </div>
  );
}

export default SuccessAlert;
