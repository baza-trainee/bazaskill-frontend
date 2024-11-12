import { useQuery } from '@tanstack/react-query';
import { useTranslations } from 'next-intl';
import type { FieldValues, UseFormRegister } from 'react-hook-form';

import { getSpecializationsWithStack } from '@/api/specialization';
import { constants } from '@/constants';
import type { ISpecializationWithStack } from '@/types/specialization';

import FiltersSpecializationMenuItem from './FiltersSpecializationMenuItem';

function FiltersSpecializationMenu({
  register
}: {
  register: UseFormRegister<FieldValues>;
}) {
  const t = useTranslations('Filter');
  const { data, isFetching } = useQuery({
    queryKey: [constants.specialization.FETCH_SPECIALIZATIONS_WITH_STACK],
    queryFn: getSpecializationsWithStack
  });

  return (
    <div className="flex w-full flex-col gap-[20px] font-sans text-sm sm:text-base">
      <h3 className="tracking-wide">{t('stack')}</h3>
      <div className="grid grid-cols-2 gap-[20px] md:flex md:flex-col">
        {!isFetching ? (
          data?.map(({ id, title, stack }: ISpecializationWithStack) => {
            return (
              <FiltersSpecializationMenuItem
                register={register}
                key={id}
                id={id}
                title={title}
                stack={stack}
              />
            );
          })
        ) : (
          <div>Loading</div>
        )}
      </div>
    </div>
  );
}

export default FiltersSpecializationMenu;
