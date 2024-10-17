import React from 'react';
import { createPortal } from 'react-dom';
import { useTranslations } from 'next-intl';
import SuccessIcon from '@/components/shared/icons/SuccessIcon';
import CloseIcon from '@/components/shared/icons/CloseIcon';

interface Props {
  onClose: () => void;
}

const SuccessModal: React.FC<Props> = ({ onClose }) => {
  const t = useTranslations('Success_modal');

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
        <div className="flex flex-col items-start">
          <p className="">{t('title')}</p>
          <p>{t('message')}</p>
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
