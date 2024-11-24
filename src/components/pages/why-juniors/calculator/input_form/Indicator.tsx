import { useTranslations } from 'next-intl';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

import { Item } from './data';

interface IndicatorProps {
  item: Item;
  isOpen: boolean;
  openField: (item: Item) => void;
}

const Indicator: React.FC<IndicatorProps> = ({ item, isOpen, openField }) => {
  const t = useTranslations('Calculator');
  return (
    <div className="grid grid-cols-[24px_1fr_28px] grid-rows-[24px] p-0">
      <div className="grid grid-cols-[24px] grid-rows-[24px] text-green text-3xl items-center">
        <item.icon />
      </div>
      <p
        className="font-roboto grid grid-cols-1 
      grid-rows-[24px] overflow-hidden truncate whitespace-nowrap pl-4 text-left text-xs font-normal uppercase leading-6 lg:text-sm"
      >
        {t(item.title)}
      </p>
      <button
        type="button"
        onClick={() => openField(item)}
        className="grid grid-cols-[28px] grid-rows-[24px] place-items-center 
        border-none bg-transparent p-0 outline-none"
      >
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </button>
    </div>
  );
};

export default Indicator;
