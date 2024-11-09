import { useValues } from "@/stores/useValuesStore";
import ArcheryIcon from "../icons/ArcheryIcon";
import ClipboardPencil from "../icons/ClipboardPencil";
import PercentIcon from "../icons/PercentIcon";

const FieldDisplay = ({ label, value }: { label: string, value: string | number }) => (
  <div className="flex gap-6 items-center justify-between">
    <p>{label}:</p>
    <p className="border border-green-300 rounded-md px-6 py-1 whitespace-nowrap">{value}</p>
  </div>
);

const OutputForm = () => {
  const { values, ROI, resetValues } = useValues();
  const today = new Date().toLocaleDateString("uk-UA");

  console.log(values)
  console.log(ROI)

  return (
    <div className="border border-green rounded-md p-8 flex flex-col gap-6">
      <div className="flex gap-6 items-center justify-between">
        <div className="flex gap-4 items-center">
          <ClipboardPencil />
          <h3 className="underline">Звіт про результат ROI:</h3>
        </div>
        <p className="bg-green text-white font-medium text-lg leading-6 rounded-md px-6 py-1">Junior</p>
      </div>

      {/* Fields */}
      <FieldDisplay label="Спеціалізація" value={values.specialization} />
      <FieldDisplay label="Місячна зарплата ($)" value={values.salary} />
      <FieldDisplay label="Вартість навчання ($)" value={values.educationCost} />
      <FieldDisplay label="Вартість проекту($)" value={values.projectValue} />
      <FieldDisplay label="Початкова продуктивність (%)" value={values.productivity} />
      <FieldDisplay label="Час до досягнення повної продуктивності (роки)" value={values.fullProductivityYears} />

      {/* ROI Section */}
      <div className="flex gap-6 items-center justify-between">
        <div className="flex gap-4 items-center">
          <ArcheryIcon />
          <p className="bg-clip-text text-transparent bg-gradient-to-r from-green to-yellow font-semibold text-xl">ROI:</p>
        </div>
        <div className="flex gap-2 items-center justify-center text-white font-medium text-xl border border-green-300 rounded-md px-6 py-1 shadow-md bg-gradient-to-r from-green-300 to-yellow-400">
          <p>{ROI}</p>
          <PercentIcon />
        </div>
      </div>

      {/* Footer Section */}
      <div className="flex gap-6 items-end justify-between">
        <p className="border border-green rounded-md px-6 py-1">{today}</p>
        <button onClick={resetValues} className="border-2 border-yellow rounded-md px-6 py-2 text-yellow font-medium text-lg hover:border-green hover:text-green">Оновити</button>
      </div>
    </div>
  );
};

export default OutputForm;
