import CloseIcon from '@/components/icons/CloseIcon';
import React from 'react';

interface ModalProps {
  children: React.ReactNode;
  handleClose: () => void;
}

const RegisterModal = ({
  children,
  handleClose,
}: ModalProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/50">
      <div className="relative max-h-[780px] w-[70%] max-w-[900px] rounded-lg bg-white">
        <div
          onClick={handleClose}
          className="absolute right-[1rem] top-[1rem] h-[1.5rem] w-[1.5rem] cursor-pointer"
        >
          <CloseIcon />
        </div>
        {children}
      </div>
    </div>
  );
};

export default RegisterModal;
