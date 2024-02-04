/* eslint-disable no-unused-vars */
import { create } from 'zustand';

type ModalType = 'hr' | 'partner' | '';

interface ModalState {
  isModalOpen: boolean;
  modalType: ModalType;
  openModal: (type: ModalType) => void;
  closeModal: () => void;
}

export const useModal = create<ModalState>((set) => ({
  isModalOpen: false,
  modalType: '',
  openModal: (type) =>
    set({ isModalOpen: true, modalType: type }),
  closeModal: () =>
    set({ isModalOpen: false, modalType: '' }),
}));
