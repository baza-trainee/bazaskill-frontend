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
    <div className="absolute bottom-0 left-0 flex h-full w-full items-center justify-center bg-black/50">
      <div className="relative w-[70%] bg-white p-[1rem]">
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
