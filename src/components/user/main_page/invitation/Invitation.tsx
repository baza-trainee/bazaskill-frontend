'use client';

import { sendGTMEvent } from '@next/third-parties/google';
import { useModal } from '@/stores/useModal';
import { useTranslations } from 'next-intl';
import RegisterHrForm from '../../modals/forms/register_hr/RegisterHrForm';
import RegisterPartnerForm from '../../modals/forms/register_partner/RegisterPartnerForm';
import RegisterModal from '../../modals/RegisterModal';

const Invitation = () => {
  const t = useTranslations('Main.invitation');
  const isModalOpen = useModal((state) => state.isModalOpen);
  const modalType = useModal((state) => state.modalType);
  const { closeModal, openModal } = useModal();

  return (
    <section
      className="my-[100px] px-[80px] py-[100px] flex gap-4 flex-col
       text-white justify-center bg-no-repeat bg-cover 
       main-texture-background items-center w-full"
      aria-labelledby="invitation-title"
    >
      <h2
        id="invitation-title"
        className="text-center mb-[66px] font-tahoma text-[24px] font-bold not-italic text-white md:text-2xl lg:text-[40px]"
      >
        {t('title')}
      </h2>
      <div className="flex flex-wrap gap-[80px] justify-center items-center">

        {/* HR Invitation Card */}
        <div
          className="border-2 md:mr-[30vw] lg:mr-0 rounded-md px-4 py-[40px] 
          w-[350px] sm+:w-[439px] h-[329px] flex flex-col justify-between items-center gap-4 border-green"
          role="region"
          aria-labelledby="hr-invitation-title"
        >
          <div className="flex flex-col justify-center items-center gap-4 text-center">
            <h3 id="hr-invitation-title" className="text-[24px] font-[700]">
              {t('card1_title')}
            </h3>
            <p className="text-[14px]sm:text-[20px] leading-[28px]">
              {t('card1_text')}
            </p>
          </div>
          <button
            onClick={() => {
              openModal('hr');
              sendGTMEvent({
                event: 'buttonClicked',
                value: 'User opened "To become HR" form',
              });
            }}
           className="relative inline-flex items-center justify-center p-[1px] overflow-hidden text-white transition-all bg-gradient-to-r from-green via-green  to-yellow rounded-md group"
            aria-label="Open form to join as Partner"
          >
      <span className="px-4 py-2 rounded-md bg-no-repeat bg-auto main-texture-background group-hover:text-green transition ease-in-out duration-300">
              {t('button')}
            </span>
          </button>
        </div>

        {/* Partner Invitation Card */}
        <div
          className="border-2 md:ml-[30vw] lg:ml-0 rounded-md px-4 py-[40px] w-[350px] sm+:w-[439px] h-[329px] flex flex-col justify-between items-center gap-4 border-yellow"
          role="region"
          aria-labelledby="partner-invitation-title"
        >
          <div className="flex flex-col justify-center items-center gap-4 text-center">
            <h3 id="partner-invitation-title" className="text-[24px] font-[700]">
              {t('card2_title')}
            </h3>
            <p className="text-[14px]sm:text-[20px] leading-[28px]">
              {t('card2_text')}
            </p>
          </div>
          <button
            onClick={() => {
              openModal('partner');
              sendGTMEvent({
                event: 'buttonClicked',
                value: 'User opened "To become partner" form',
              });
            }}
            className="relative inline-flex items-center justify-center p-[1px] overflow-hidden text-white transition-all bg-gradient-to-r from-green via-green  to-yellow rounded-md group"
            aria-label="Open form to join as Partner"
          >
            <span className="px-4 py-2 rounded-md bg-no-repeat bg-auto main-texture-background group-hover:text-green transition ease-in-out duration-300">
              {t('button')}
            </span>
          </button>
        </div>
      </div>

      {/* Conditional Modals */}
      {isModalOpen && modalType === 'hr' && (
        <RegisterModal handleClose={closeModal} aria-labelledby="hr-modal-title">
          <h2 id="hr-modal-title" className="sr-only">
            HR Registration Form
          </h2>
          <RegisterHrForm />
        </RegisterModal>
      )}
      {isModalOpen && modalType === 'partner' && (
        <RegisterModal handleClose={closeModal} aria-labelledby="partner-modal-title">
          <h2 id="partner-modal-title" className="sr-only">
            Partner Registration Form
          </h2>
          <RegisterPartnerForm />
        </RegisterModal>
      )}
    </section>
  );
};

export default Invitation;
