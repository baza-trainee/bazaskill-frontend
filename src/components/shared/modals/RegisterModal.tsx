import { createPortal } from 'react-dom';

import CloseIcon from '@/components/shared/icons/CloseIcon';
import { useBodyScrollLock } from '@/hooks/useBodyScrollLock';
import { useModal } from '@/stores/useModal';

interface ModalProps {
  children: React.ReactNode;
  handleClose: () => void;
}

function RegisterModal({ children, handleClose }: ModalProps) {
  const isModalOpen = useModal((state) => state.isModalOpen);

  useBodyScrollLock(isModalOpen);

  const ModalLayout = () => (
    <div
      role="dialog"
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/50 "
    >
      <div className="relative max-h-[90vh] w-[88%] overflow-y-auto rounded-lg bg-white scrollbar-none sm:w-[90.5%] md:max-h-[95vh] md:max-w-[632px] xl:max-w-[900px] 5xl:max-w-[964px]">
        <div onClick={handleClose} className="absolute right-4 top-4 size-6 cursor-pointer">
          <CloseIcon />
        </div>
        {children}
      </div>
    </div>
  );

  return <>{isModalOpen && createPortal(<ModalLayout />, document.body)}</>;
}

export default RegisterModal;
