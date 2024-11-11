'use client'

import { useTranslations } from "next-intl";
import { useModal } from '@/stores/useModal';
import CalculatorModal from "../../../shared/modals/CalculatorModal";
import Calculator from "../calculator/Calculator";

export default function RoiCalculator(): JSX.Element {
  const { openModal } = useModal();
  const t = useTranslations('Why_juniors.roi_calculator');
  const isModalOpen = useModal(
    state => state.isModalOpen,
  );
  const modalType = useModal(state => state.modalType);
  const { closeModal } = useModal();

  return (
    <section
      className="md:main-texture-background bg-no-repeat bg-cover bg-fixed text-white py-12 md:py-[60px] xl:py-[100px]">

      <div className="container mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-8">

        <h2 className="sm:max-w-[460px] md:max-w-[600px] xl:max-w-[890px] text-xl md:text-2xl xl:text-4xl font-tahoma font-bold ">{t("title")}</h2>

        <button type="button" onClick={()=>openModal('calculator')}
          className="sm:mx-auto md:mx-0 min-w-[230px] sm:max-w-[280px] flex items-center justify-center px-1 py-4 main-gradient text-black rounded-md text-xl font-semibold">
            {t("roi_btn")}
            </button>
      </div>
      {isModalOpen && modalType === 'calculator' && (
        <CalculatorModal handleClose={closeModal}>
         <Calculator/>
        </CalculatorModal>
      )}
    </section>
  )
}