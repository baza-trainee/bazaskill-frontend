'use client';
import { constants } from '@/constants';
import {
  useQuery,
  UseQueryResult,
} from '@tanstack/react-query';
import { getCandidateById } from '@/api/candidates';
import { useModal } from '@/stores/useModal';
import { useBodyScrollLock } from '@/hooks/useBodyScrollLock';
import { CandidatesResponse } from '@/types/candidates';

import CandidateHero from '@/components/candidate/CandidatePage/Hero';
import MainInfo from '@/components/candidate/CandidatePage/MainInfo';
import Loader from '@/components/admin/ui/Loader';
import RegisterModal from '@/components/main/modals/RegisterModal';
import RegisterHrForm from '@/components/main/modals/forms/register_hr/RegisterHrForm';

const CandidatePageComponent = ({ id }: { id: string }) => {
  const candidate: UseQueryResult<
    CandidatesResponse,
    Error
  > = useQuery({
    queryKey: [constants.candidates.FETCH_CANDIDATE_BY_ID],
    queryFn: () => getCandidateById(id),
  });

  const isModalOpen = useModal(
    (state) => state.isModalOpen
  );

  const { closeModal } = useModal();

  const modalType = useModal((state) => state.modalType);

  console.log(isModalOpen);

  useBodyScrollLock(isModalOpen);

  if (candidate.status === 'pending') return <Loader />;

  return (
    <div className="bg-graphite">
      <CandidateHero candidate={candidate.data!} />
      <MainInfo candidate={candidate.data!} />
      {isModalOpen && modalType === 'hr' && (
        <RegisterModal handleClose={closeModal}>
          <RegisterHrForm />
        </RegisterModal>
      )}
    </div>
  );
};

export default CandidatePageComponent;
