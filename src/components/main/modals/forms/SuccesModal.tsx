import React from 'react';
import { createPortal } from 'react-dom';
import SuccessIcon from '@/components/icons/SuccessIcon';
import CloseIcon from '@/components/icons/CloseIcon';

interface Props {
  onClose: () => void;
}

const SuccessModal: React.FC<Props> = ({ onClose }) => {
  const handleModalClick = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <div
      className="fixed inset-0 z-[2000] flex h-screen w-screen items-center justify-center"
      onClick={handleModalClick}
    >
      <div className="relative flex h-[136px] w-[478px] items-center gap-3 rounded-lg bg-white p-10">
        <SuccessIcon />
        <div className="text-center">
          <p className="text-start">
            Дякуємо за співпрацю!
          </p>
          <p>Ваші дані успішно збережено.</p>
        </div>
        <button
          className="absolute right-0 top-0 p-2"
          onClick={onClose}
        >
          <CloseIcon />
        </button>
      </div>
    </div>,
    document.body
  );
};

export default SuccessModal;
