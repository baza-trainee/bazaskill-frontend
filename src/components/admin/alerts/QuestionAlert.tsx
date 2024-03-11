import React, { useEffect } from 'react';

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
      <div className="w-960 relative flex h-72 items-center justify-center rounded-md bg-white text-2xl font-bold text-black">
        <div className="px-6 py-4">{title}</div>
        <div className="mt-4 flex justify-center gap-6">
          <button
            className="rounded-md bg-red-500 px-4 py-2 text-white"
            onClick={onCancel}>
            Відміна
          </button>
          <button
            className="rounded-md bg-red-500 px-4 py-2 text-white"
            onClick={onConfirm}>
            Підтвердити
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuestionAlert;
