import React, { useEffect } from 'react';
import CloseIcon from './CloseIcon';

type AlertProps = {
  title: string;
  onCancel?: () => void; // Додайте знак питання, щоб зробити onCancel необов'язковим
  onConfirm: () => void;
};

const QuestionAlert = ({
  title,
  onCancel,
  onConfirm,
}: AlertProps) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && onCancel) {
        onCancel();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onCancel]);

  return (
    <div className="absolute left-0 right-0 top-0 flex h-screen w-full items-center justify-center bg-black/90">
      <div className="relative flex h-[331px] w-[600px] flex-col items-center justify-center rounded-md bg-white px-[50px] py-[50px] text-2xl font-bold text-black">
        <div className="px-6 py-4 text-center">
          {title}
          <button
            className="absolute right-[50px] top-[50px]"
            onClick={onCancel}>
            <CloseIcon />
          </button>
        </div>
        <div className="mt-4 flex  justify-center gap-6">
          <div className="flex gap-[24px] text-[16px] font-semibold">
            <button
              className="h-[36px] w-[238px] rounded-md bg-[#0A871E] text-white"
              onClick={onConfirm}>
              Видалити
            </button>
            <button
              className="h-[36px] w-[238px] rounded-md   bg-white text-[#0A871E] [border:1px_solid_#0a871e]"
              onClick={onCancel}>
              Скасувати
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionAlert;
