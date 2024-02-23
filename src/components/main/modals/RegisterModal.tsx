import { createPortal } from 'react-dom';
import { useModal } from '@/stores/useModal';
import { useBodyScrollLock } from '@/hooks/useBodyScrollLock';
import CloseIcon from '@/components/icons/CloseIcon';

interface ModalProps {
  children: React.ReactNode;
  handleClose: () => void;
}

const RegisterModal = ({
  children,
  handleClose,
}: ModalProps) => {
  const isModalOpen = useModal(
    (state) => state.isModalOpen
  );

  useBodyScrollLock(isModalOpen);

  const ModalLayout = () => (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 ">
      <div className="relative max-h-[90vh] w-[88%] overflow-y-auto rounded-lg bg-white scrollbar-none sm:w-[90.5%] md:max-h-[95vh] md:max-w-[632px] xl:max-w-[900px] 5xl:max-w-[964px]">
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

  return (
    <>
      {isModalOpen &&
        createPortal(<ModalLayout />, document.body)}
    </>
  );
};

export default RegisterModal;
