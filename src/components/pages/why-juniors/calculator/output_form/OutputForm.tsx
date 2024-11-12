import { useTranslations } from 'next-intl';

import { useValues } from '@/stores/useValuesStore';

import ArcheryIcon from '../icons/ArcheryIcon';
import ClipboardPencil from '../icons/ClipboardPencil';
import PercentIcon from '../icons/PercentIcon';

const FieldDisplay = ({
  label,
  value
}: {
  label: string;
  value: string | number;
}) => (
  <div className="flex items-center justify-between gap-6">
    <p>{label}:</p>
    <p className="whitespace-nowrap rounded-md border border-green bg-[#2A2A2A] px-6 py-1">
      {value}
    </p>
  </div>
);

const OutputForm = () => {
  const t = useTranslations('Calculator');
  const { values, ROI, resetValues } = useValues();
  const today = new Date().toLocaleDateString('uk-UA');

  console.log(values);

  return (
    <div className="flex w-full flex-col gap-6 rounded-md border border-green p-8">
      <div className="flex items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <ClipboardPencil />
          <h3 className="underline">{t('output_title')}</h3>
        </div>
        <p className="rounded-md bg-green px-6 py-1 text-lg font-medium leading-6 text-white">
          {values.level}
        </p>
      </div>

      {/* Fields */}
      <FieldDisplay
        label={t('specialization_title')}
        value={values.specialization}
      />
      <FieldDisplay label={t('salary_title')} value={values.salary} />
      <FieldDisplay label={t('education_title')} value={values.educationCost} />
      <FieldDisplay label={t('project_title')} value={values.projectValue} />
      <FieldDisplay
        label={t('productivity_title')}
        value={values.productivity}
      />
      <FieldDisplay
        label={t('full_productivity_title')}
        value={values.fullProductivityYears}
      />

      {/* ROI Section */}
      <div className="flex items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <ArcheryIcon />
          <p className="bg-gradient-to-r from-green to-yellow bg-clip-text text-xl font-semibold text-transparent">
            ROI:
          </p>
        </div>
        <div className="from-green-300 to-yellow-400 flex items-center justify-center gap-2 rounded-md border border-green bg-[#2A2A2A] bg-gradient-to-r px-6 py-1 text-xl font-medium text-white shadow-md">
          <p>{ROI}</p>
          <PercentIcon />
        </div>
      </div>

      {/* Footer Section */}
      <div className="flex items-end justify-between gap-6">
        <p className="rounded-md border border-green bg-[#2A2A2A] px-6 py-1">
          {today}
        </p>
        <button
          onClick={resetValues}
          className="rounded-md border-2 border-yellow px-6 py-2 text-lg font-medium text-yellow
         hover:border-green hover:text-green"
        >
          {t('button_reset')}
        </button>
      </div>
    </div>
  );
};

export default OutputForm;
