import { useValues } from "@/stores/useValuesStore";
import { useTranslations } from "next-intl";
import ArcheryIcon from "../icons/ArcheryIcon";
import ClipboardPencil from "../icons/ClipboardPencil";
import PercentIcon from "../icons/PercentIcon";

const FieldDisplay = ({ label, value }: { label: string, value: string | number }) => (
  <div className="flex gap-6 items-center justify-between">
    <p>{label}:</p>
    <p className="border border-green bg-[#2A2A2A] rounded-md px-6 py-1 whitespace-nowrap">{value}</p>
  </div>
);

const OutputForm = () => {
  const t = useTranslations("Calculator");
  const { values, ROI, resetValues } = useValues();
  const today = new Date().toLocaleDateString("uk-UA");

  console.log(values)

  return (
    <div className="border border-green rounded-md p-8 flex flex-col gap-6 w-full">
      <div className="flex gap-6 items-center justify-between">
        <div className="flex gap-4 items-center">
          <ClipboardPencil />
          <h3 className="underline">{t('output_title')}</h3>
        </div>
        <p className="bg-green text-white font-medium text-lg leading-6 rounded-md px-6 py-1">{values.level}</p>
      </div>

      {/* Fields */}
      <FieldDisplay label={t('specialization_title')} value={values.specialization} />
      <FieldDisplay label={t('salary_title')} value={values.salary} />
      <FieldDisplay label={t('education_title')} value={values.educationCost} />
      <FieldDisplay label={t('project_title')} value={values.projectValue} />
      <FieldDisplay label={t('productivity_title')} value={values.productivity} />
      <FieldDisplay label={t('full_productivity_title')} value={values.fullProductivityYears} />

      {/* ROI Section */}
      <div className="flex gap-6 items-center justify-between">
        <div className="flex gap-4 items-center">
          <ArcheryIcon />
          <p className="bg-clip-text text-transparent bg-gradient-to-r from-green to-yellow font-semibold text-xl">ROI:</p>
        </div>
        <div className="flex gap-2 bg-[#2A2A2A] items-center justify-center text-white font-medium text-xl border border-green rounded-md px-6 py-1 shadow-md bg-gradient-to-r from-green-300 to-yellow-400">
          <p>{ROI}</p>
          <PercentIcon />
        </div>
      </div>

      {/* Footer Section */}
      <div className="flex gap-6 items-end justify-between">
        <p className="border border-green rounded-md px-6 py-1 bg-[#2A2A2A]">{today}</p>
        <button onClick={resetValues} className="border-2 border-yellow rounded-md px-6 py-2 text-yellow font-medium text-lg
         hover:border-green hover:text-green">
          {t('button_reset')}
          </button>
      </div>
    </div>
  );
};

export default OutputForm;
