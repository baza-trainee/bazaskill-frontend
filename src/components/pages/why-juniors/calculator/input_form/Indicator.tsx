import { useTranslations } from "next-intl";
import { FaChevronUp,FaChevronDown } from "react-icons/fa";
import { Item } from "./data";

interface IndicatorProps {
  item: Item;
  isOpen: boolean;
  openField: (item: Item) => void;
}

const Indicator: React.FC<IndicatorProps> = ({ item, isOpen, openField }) => {
  const t = useTranslations("Calculator");
  return (
    <div className="grid grid-cols-[24px_1fr_28px] grid-rows-[24px] p-0">
      <div className="grid grid-cols-[24px] grid-rows-[24px]">
        <item.icon />
      </div>
      <p className="grid grid-cols-1 grid-rows-[24px] 
      font-roboto lg:text-sm font-normal leading-6 text-left uppercase pl-4 whitespace-nowrap overflow-hidden truncate text-xs">
        {t(item.title)}
      </p>
      <button
        type="button"
        onClick={() => openField(item)}
        className="grid grid-cols-[28px] grid-rows-[24px] place-items-center 
        bg-transparent border-none outline-none p-0"
      >
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </button>
    </div>
  );
};

export default Indicator;