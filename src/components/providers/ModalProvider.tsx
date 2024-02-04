'use client';
import React from 'react';
import RegisterModal from '../main/modals/RegisterModal';
import RegisterHrForm from '../main/modals/forms/register_hr/RegisterHrForm';
import { useModal } from '@/stores/useModal';

const ModalProvider = () => {
  const isModalOpen = useModal(
    (state) => state.isModalOpen
  );
  const modalType = useModal((state) => state.modalType);
  const { closeModal } = useModal();
  return (
    <>
      {isModalOpen && modalType === 'hr' && (
        <RegisterModal handleClose={closeModal}>
          <RegisterHrForm />
        </RegisterModal>
      )}
      {isModalOpen && modalType === 'partner' && (
        <RegisterModal handleClose={closeModal}>
          <RegisterHrForm />
        </RegisterModal>
      )}
    </>
  );
};

export default ModalProvider;
