import { createPortal } from 'react-dom';

import CloseIcon from '@/components/shared/icons/CloseIcon';
import { useBodyScrollLock } from '@/hooks/useBodyScrollLock';
import { useModal } from '@/stores/useModal';
import type { CandidatesResponse } from '@/types/candidates';

interface ModalProps {
  candidate: CandidatesResponse;
}

function ContactsModal({ candidate }: ModalProps) {
  const { closeModal } = useModal();
  const isModalOpen = useModal((state) => state.isModalOpen);

  useBodyScrollLock(isModalOpen);

  const ModalLayout = () => (
    <div className=" fixed left-0 top-0 z-[9999] flex size-full items-center justify-center bg-black/70">
      <div className="relative flex h-[30rem] w-[45rem] items-center justify-center bg-graphite p-10 text-white">
        <div
          onClick={closeModal}
          className="absolute right-2 top-2 size-6 cursor-pointer"
        >
          <CloseIcon fill="#FFFFFF" />
        </div>
        <ul className="flex size-full flex-col items-center justify-center gap-4 border border-dashed border-gray">
          <li className="flex  w-full items-center justify-between px-6 py-2">
            <svg
              className="mr-3 hover:scale-125"
              width={24}
              height={24}
              fill="#FFFFFF"
            >
              <use href="/Icons/sprite.svg#icon-tel"></use>
            </svg>
            <span className="text-lg">{candidate.phone}</span>
          </li>
          <li className="flex  w-full items-center justify-between px-6 py-2">
            <svg
              className="mr-3 hover:scale-125"
              width={24}
              height={24}
              fill="#FFFFFF"
            >
              <use href="/Icons/sprite.svg#icon-email"></use>
            </svg>
            <span className="text-lg">{candidate.email}</span>
          </li>
          <li className="flex  w-full items-center justify-between px-6 py-2">
            <svg
              className="mr-3 hover:scale-125"
              width={24}
              height={24}
              fill="#FFFFFF"
            >
              <use href="/Icons/sprite.svg#icon-lnkedIn"></use>
            </svg>
            <span className="text-lg">{candidate.linkedin}</span>
          </li>
          <li className="flex  w-full items-center justify-between px-6 py-2">
            <svg
              className="mr-3 hover:scale-125"
              width={24}
              height={24}
              fill="#FFFFFF"
            >
              <use href="/Icons/sprite.svg#icon-discord"></use>
            </svg>
            <span className="text-lg">{candidate.discord}</span>
          </li>
          <li className="flex  w-full items-center justify-between px-6 py-2">
            <svg
              className="mr-3 hover:scale-125"
              width={24}
              height={24}
              fill="#FFFFFF"
            >
              <use href="/Icons/sprite.svg#icon-telegram"></use>
            </svg>
            <span className="text-lg">{candidate.telegram}</span>
          </li>
        </ul>
      </div>
    </div>
  );
  return <>{isModalOpen && createPortal(<ModalLayout />, document.body)}</>;
}

export default ContactsModal;
