'use client';

import { useTranslations } from 'next-intl';
import { useModal } from '@/stores/useModal';
import CalculatorModal from '../../../shared/modals/CalculatorModal';
import Calculator from '../calculator/Calculator';

export default function RoiCalculator(): JSX.Element {
  const { openModal } = useModal();
  const t = useTranslations('Why_juniors.roi_calculator');
  const isModalOpen = useModal((state) => state.isModalOpen);
  const modalType = useModal((state) => state.modalType);
  const { closeModal } = useModal();

  return (
    <section className="md:main-texture-background bg-cover bg-fixed bg-no-repeat py-12 text-white md:py-[60px] xl:py-[100px]">
      <div className="container mx-auto flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <h2 className="font-tahoma text-xl font-bold sm:max-w-[460px] md:max-w-[600px] md:text-2xl xl:max-w-[890px] xl:text-4xl ">
          {t('title')}
        </h2>

        <button
          type="button"
          onClick={() => openModal('calculator')}
          className="main-gradient flex min-w-[230px] items-center justify-center rounded-md px-1 py-4 text-xl font-semibold text-black sm:mx-auto sm:max-w-[280px] md:mx-0"
        >
          {t('roi_btn')}
        </button>
      </div>
      {isModalOpen && modalType === 'calculator' && (
        <CalculatorModal handleClose={closeModal}>
          <Calculator />
        </CalculatorModal>
      )}
    </section>
  );
}
