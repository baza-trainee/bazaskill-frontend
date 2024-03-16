import {
  ISpecializationWithStack,
  SpecializationStack,
} from '@/types/specialization';
import { useState } from 'react';
import CustomCheckbox from './CustomCheckbox';
import {
  FieldValues,
  UseFormRegister,
} from 'react-hook-form';
interface IFiltersSpecializationMenuItemProps
  extends ISpecializationWithStack {
  register: UseFormRegister<FieldValues>;
}
const FiltersSpecializationMenuItem: React.FC<
  IFiltersSpecializationMenuItemProps
> = ({
  id,
  title,
  stack,
  register,
}: IFiltersSpecializationMenuItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col gap-[20px]">
      <div
        key={id}
        className="flex items-center gap-[12px]"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          className={`mt-[2px] fill-white transition-all ${isOpen && 'rotate-[180deg]'}`}
          width={20}
          height={20}
        >
          <use href="/Icons/sprite.svg#icon-dropdown"></use>
        </svg>
        <span>{title}</span>
      </div>

      {isOpen && (
        <div className="flex flex-col gap-[20px] pl-[32px]">
          {stack.map(
            ({
              id,
              title,
              specialization_stack_id,
            }: SpecializationStack) => {
              return (
                <CustomCheckbox
                  register={register}
                  registerFor="stack"
                  value={id}
                  key={id}
                  title={title}
                />
              );
            }
          )}
        </div>
      )}
    </div>
  );
};

export default FiltersSpecializationMenuItem;
