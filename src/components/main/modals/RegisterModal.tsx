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
    <div className="fixed inset-0 z-[999] flex items-center justify-center overflow-y-auto bg-black/50 ">
      <div className="relative h-[780px] max-h-[95%] w-[780px] max-w-[70%] rounded-lg bg-white">
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
