import { getSpecializationsWithStack } from '@/api/specialization';
import { constants } from '@/constants';
import { ISpecializationWithStack } from '@/types/specialization';
import { useQuery } from '@tanstack/react-query';
import FiltersSpecializationMenuItem from './FiltersSpecializationMenuItem';

const FiltersSpecializationMenu = () => {
  const { data, isFetching } = useQuery({
    queryKey: [
      constants.specialization
        .FETCH_SPECIALIZATIONS_WITH_STACK,
    ],
    queryFn: getSpecializationsWithStack,
  });
  return (
    <div className="flex flex-col gap-[20px] font-sans text-[16px]">
      <h3 className="tracking-wide">Стек</h3>
      <div className="flex flex-col gap-[20px]">
        {!isFetching ? (
          data?.map(
            ({
              id,
              title,
              stack,
            }: ISpecializationWithStack) => {
              return (
                <FiltersSpecializationMenuItem
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
