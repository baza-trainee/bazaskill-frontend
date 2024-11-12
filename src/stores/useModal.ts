import { create } from 'zustand';

type ModalType =
  | 'hr'
  | 'partner'
  | 'add_stack'
  | 'contacts'
  | 'calculator'
  | '';

interface ModalState {
  isModalOpen: boolean;
  modalType: ModalType;
  openModal: (type: ModalType) => void;
  closeModal: () => void;
}

export const useModal = create<ModalState>((set) => ({
  isModalOpen: false,
  modalType: '',
  openModal: (type) => set({ isModalOpen: true, modalType: type }),
  closeModal: () => set({ isModalOpen: false, modalType: '' })
}));
