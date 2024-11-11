'use client';

import { sendGTMEvent } from '@next/third-parties/google';
import { useModal } from '@/stores/useModal';
import { useTranslations } from 'next-intl';
import RegisterHrForm from '../../../shared/modals/forms/register_hr/RegisterHrForm';
import RegisterPartnerForm from '../../../shared/modals/forms/register_partner/RegisterPartnerForm';
import RegisterModal from '../../../shared/modals/RegisterModal';

const Invitation = () => {
  const t = useTranslations('Main.invitation');
  const isModalOpen = useModal((state) => state.isModalOpen);
  const modalType = useModal((state) => state.modalType);
  const { closeModal, openModal } = useModal();

  return (
    <section
      className="main-texture-background container flex w-full flex-col items-center justify-center
       gap-4 bg-cover bg-no-repeat py-12 
       text-white md:py-[60px] lg:py-[100px]"
      aria-labelledby="invitation-title"
    >
      <h2
        id="invitation-title"
        className="mb-10 text-center font-tahoma text-[24px] font-bold not-italic text-white md:mb-8 md:text-2xl lg:mb-[56px] lg:text-[40px]"
      >
        {t('title')}
      </h2>
      <div className="flex w-full flex-col items-center justify-center gap-[64px] md:gap-[80px] lg:flex-row 4xl:justify-evenly">
        {/* HR Invitation Card */}
        <div
          className="flex min-h-[329px] w-full max-w-[439px] flex-col items-center justify-between 
          gap-4 rounded-md border-2 border-green px-4 py-[40px] sm+:mr-[15vw] md:mr-[30vw] lg:mr-0"
          role="region"
          aria-labelledby="hr-invitation-title"
        >
          <div className="flex flex-col items-center justify-center gap-4 text-center">
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
            className="group relative inline-flex w-full max-w-[235px] items-center justify-center overflow-hidden rounded-md bg-gradient-to-r from-green via-green to-yellow  p-[1px] text-white transition-all"
            aria-label="Open form to join as Partner"
          >
            <span className="main-texture-background w-full max-w-[235px] rounded-md bg-auto bg-no-repeat px-4 py-2 transition duration-300 ease-in-out group-hover:text-green">
              {t('button')}
            </span>
          </button>
        </div>

        {/* Partner Invitation Card */}
        <div
          className="flex min-h-[329px] w-full max-w-[439px] flex-col items-center justify-between  gap-4 rounded-md border-2 border-yellow px-4 py-[40px] sm+:ml-[15vw] md:ml-[30vw] lg:ml-0"
          role="region"
          aria-labelledby="partner-invitation-title"
        >
          <div className="flex flex-col items-center justify-center gap-4 text-center">
            <h3
              id="partner-invitation-title"
              className="text-[24px] font-[700]"
            >
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
            className="group relative inline-flex w-full max-w-[235px] items-center justify-center overflow-hidden rounded-md bg-gradient-to-r from-green via-green to-yellow  p-[1px] text-white transition-all"
            aria-label="Open form to join as Partner"
          >
            <span className="main-texture-background w-full max-w-[235px] rounded-md bg-auto bg-no-repeat px-4 py-2 transition duration-300 ease-in-out group-hover:text-green">
              {t('button')}
            </span>
          </button>
        </div>
      </div>

      {/* Conditional Modals */}
      {isModalOpen && modalType === 'hr' && (
        <RegisterModal
          handleClose={closeModal}
          aria-labelledby="hr-modal-title"
        >
          <h2 id="hr-modal-title" className="sr-only">
            HR Registration Form
          </h2>
          <RegisterHrForm />
        </RegisterModal>
      )}
      {isModalOpen && modalType === 'partner' && (
        <RegisterModal
          handleClose={closeModal}
          aria-labelledby="partner-modal-title"
        >
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
