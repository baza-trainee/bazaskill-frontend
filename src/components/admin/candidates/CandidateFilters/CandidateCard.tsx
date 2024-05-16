import declineWord from 'decline-word';
import { CandidatesResponse } from '@/types/candidates';
import Link from 'next/link';
import { constants } from '@/constants';
import {
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';
import { deleteCandidate } from '@/api/candidates';
import { shortenLangs } from '@/helpers/shortenLangs';
import QuestionAlert from '../../alerts/QuestionAlert';
import { useState } from 'react';

type CandidateCardProps = {
  candidate: CandidatesResponse;
};
const CandidateCard: React.FC<CandidateCardProps> = ({
  candidate,
}: CandidateCardProps) => {
  const queryClient = useQueryClient();
  const specialization = candidate.specialization.title;
  const [isDeleting, setIsDeleting] = useState(false);

  const { mutate } = useMutation({
    mutationKey: [constants.candidates.CREATE_CANDIDATE],
    mutationFn: (id: string) => deleteCandidate(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [
          constants.candidates.FETCH_ALL_CANDIDATES,
        ],
      });
    },
    onError: (error) => {
      alert(error);
    },
  });

  const handleDelete = async () => {
    setIsDeleting(false);
    mutate(candidate.id.toString());
  };

  return (
    <>
      <div className="relative box-border flex h-[486px] w-[442px] max-w-[442px] flex-col gap-[16px] rounded-[10px] border-[2px] border-secondaryGray bg-slate px-[40px] py-[32px]">
        <div
          className={`${candidate.status.toLowerCase() === 'searching' || candidate.status.toLowerCase() === 'working' ? 'bg-white' : 'bg-secondaryGray'} absolute right-[-2px] top-[-2px] flex h-[30px] w-[134px] items-center justify-center gap-[8px] rounded-bl-[10px] rounded-tr-[9px]`}
        >
          <span
            className={`${candidate.status.toLowerCase() === 'searching' ? 'bg-green' : candidate.status.toLowerCase() === 'working' ? 'bg-orange' : candidate.status.toLowerCase() === 'inactive' ? 'bg-black' : ''} h-[14px] w-[14px] rounded-[100%]`}
          ></span>
          <span
            className={`${candidate.status.toLowerCase() === 'searching' ? 'text-green' : candidate.status.toLowerCase() === 'working' ? 'text-orange' : candidate.status.toLowerCase() === 'inactive' ? 'text-black' : ''} rounded-[100%]`}
          >
            {candidate.status.toLowerCase() === 'searching'
              ? 'У пошуку'
              : candidate.status.toLowerCase() === 'working'
                ? 'Працює'
                : candidate.status.toLowerCase() ===
                    'inactive'
                  ? 'Не активний'
                  : null}
          </span>
        </div>
        <h2
          className={`flex w-full justify-start font-tahoma text-2xl font-[700] ${specialization === 'Backend' ? 'text-purple ' : specialization === 'Frontend' ? 'text-yellow' : specialization === 'QA Manual' ? 'text-secondaryPink' : specialization === 'Fullstack' ? 'text-orange' : specialization === 'Design' ? 'text-secondaryGreen' : specialization === 'PM' ? 'text-blue-500' : ''}`}
        >
          {specialization}
        </h2>
        <div className="flex w-full items-center justify-between font-sans text-[20px] font-[700] leading-[28px] text-white">
          <h3>{candidate.name}</h3>
          <span>ID {candidate.uniqueId}</span>
        </div>
        <div className="flex w-full items-center gap-[12px] font-sans text-[18px]">
          <span className="flex w-[60%]  items-center gap-[8px]">
            <svg width={20} height={20}>
              <use href="/Icons/sprite.svg#icon-place"></use>
            </svg>
            <span className="truncate">
              <p className="truncate">{candidate.city},</p>
              <span className="truncate">
                {candidate.country}
              </span>
            </span>
          </span>

          <span className="flex w-[50%] items-center gap-[8px]">
            <svg width={20} height={20}>
              <use href="/Icons/sprite.svg#icon-lang"></use>
            </svg>
            {candidate.candidate_language.map(
              (lang, index) => (
                <span key={lang.id}>
                  <span>{shortenLangs(lang.language)}</span>
                  &nbsp;
                  {index !==
                    candidate.candidate_language.length -
                      1 && <span>/</span>}
                </span>
              )
            )}
          </span>
        </div>

        <div className="flex h-[34px] w-full items-center gap-[12px] font-sans text-[18px]">
          <span className="flex w-[50%] items-center gap-[8px] text-nowrap">
            <svg width={20} height={20}>
              <use href="/Icons/sprite.svg#icon-experience"></use>
            </svg>
            {candidate.baza_experience.length}{' '}
            {declineWord(
              candidate.baza_experience.length,
              'проект',
              '',
              'и',
              'ів'
            )}{' '}
            на базі
          </span>

          <span className="flex w-[50%] items-center gap-[8px] ">
            <svg width={20} height={20}>
              <use href="/Icons/sprite.svg#icon-point"></use>
            </svg>
            <span className="truncate">
              {candidate.work_format === 'Remote'
                ? 'Віддалено'
                : candidate.work_format === 'Office'
                  ? 'В офісі'
                  : candidate.work_format === 'Hybrid'
                    ? 'Гібридний формат роботи'
                    : null}
            </span>
          </span>
        </div>

        <div className="flex w-full justify-start gap-[27px]">
          {candidate.stack.slice(0, 3).map(
            (item) =>
              item.stack?.title && (
                <div
                  key={item.id}
                  className="box-border flex h-[30px] min-w-[88px] items-center justify-center whitespace-nowrap rounded-full border-[1px] border-white px-[15px] py-[10px]"
                >
                  {item.stack?.title}
                </div>
              )
          )}
          <span className="flex items-end justify-center">
            ...
          </span>
        </div>
        <div className="flex h-full flex-col justify-between">
          <div className="h-[120px] font-sans text-[16px] leading-[26px]">
            <span className="line-clamp-4">
              {candidate.about}
            </span>
          </div>

          <div className="flex h-[44px] w-full items-center justify-between">
            <span className="font-tahoma text-[20px] font-[700]">
              від {candidate.sallary_form} $
            </span>
            <div className="flex gap-[32px]">
              <Link href={`/candidate/${candidate.id}`}>
                {' '}
                <button className="flex h-[32px] w-[32px] items-center justify-center bg-white">
                  <svg width={22} height={16}>
                    <use href="/Icons/sprite.svg#icon-eye"></use>
                  </svg>
                </button>
              </Link>
              <Link
                href={`/admin/candidates/edit/${candidate.id}`}
              >
                <button className="flex h-[32px] w-[32px] items-center justify-center bg-white">
                  <svg width={24} height={24}>
                    <use href="/Icons/sprite.svg#icon-pen"></use>
                  </svg>
                </button>
              </Link>

              <button
                onClick={() => setIsDeleting(true)}
                className="flex h-[32px] w-[32px] items-center justify-center bg-white"
              >
                <svg width={26} height={29}>
                  <use href="/Icons/sprite.svg#icon-drop"></use>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      {isDeleting && (
        <QuestionAlert
          title="Ви впевнені, що хочете видалити спеціалізацію зі сторінки?"
          onCancel={() => setIsDeleting(false)}
          onConfirm={handleDelete}
        />
      )}
    </>
  );
};

export default CandidateCard;
