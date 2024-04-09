import { getSpecializationsWithStack } from '@/api/specialization';
import { constants } from '@/constants';
import { ISpecializationWithStack } from '@/types/specialization';
import { useQuery } from '@tanstack/react-query';
import {
  FieldValues,
  UseFormRegister,
} from 'react-hook-form';
import FiltersSpecializationMenuItem from './FiltersSpecializationMenuItem';

const FiltersSpecializationMenu = ({
  register,
}: {
  register: UseFormRegister<FieldValues>;
}) => {
  const { data, isFetching } = useQuery({
    queryKey: [
      constants.specialization
        .FETCH_SPECIALIZATIONS_WITH_STACK,
    ],
    queryFn: getSpecializationsWithStack,
  });
  return (
    <div className=" flex flex-col gap-[20px] font-sans text-sm sm:text-base 3xl:text-xl">
      <h3 className="tracking-wide">Стек</h3>
      <div className="grid grid-cols-2 gap-[20px] md:flex md:flex-col">
        {!isFetching ? (
          data?.map(
            ({
              id,
              title,
              stack,
            }: ISpecializationWithStack) => {
              return (
                <FiltersSpecializationMenuItem
                  register={register}
                  key={id}
                  id={id}
                  title={title}
                  stack={stack}
                />
              );
            }
          )
        ) : (
          <div>Loading</div>
        )}
      </div>
    </div>
  );
};

export default FiltersSpecializationMenu;
