import { getSpecializationsWithStack } from '@/api/specialization';
import { constants } from '@/constants';
import { ISpecializationWithStack } from '@/types/specialization';
import { useQuery } from '@tanstack/react-query';
import {
  FieldValues,
  UseFormRegister,
} from 'react-hook-form';
import FiltersSpecializationMenuItem from './FiltersSpecializationMenuItem';
import { useTranslations } from 'next-intl';

const FiltersSpecializationMenu = ({
  register,
}: {
  register: UseFormRegister<FieldValues>;
}) => {
  const t = useTranslations('Filter');
  const { data, isFetching } = useQuery({
    queryKey: [
      constants.specialization
        .FETCH_SPECIALIZATIONS_WITH_STACK,
    ],
    queryFn: getSpecializationsWithStack,
  });

  return (
    <div
      className="flex w-full flex-col gap-[20px] font-sans text-sm sm:pl-[15px] sm:text-base xl:pl-[40px]
     3xl:pl-[40px]"
    >
      <h3 className="tracking-wide">{t('stack')}</h3>
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
