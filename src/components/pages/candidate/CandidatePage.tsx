'use client';
import type { UseQueryResult } from '@tanstack/react-query';

import { useQuery } from '@tanstack/react-query';

import type { CandidatesResponse } from '@/types/candidates';

import { constants } from '@/constants';
import { useModal } from '@/stores/useModal';
import { getAllCandidates } from '@/api/candidates';

import Loader from '@/components/shared/loader/Loader';
import CandidateHero from '@/components/pages/candidate/Hero';
import MainInfo from '@/components/pages/candidate/MainInfo';
import RegisterHrForm from '@/components/shared/modals/forms/register_hr/RegisterHrForm';
import RegisterModal from '@/components/shared/modals/RegisterModal';

function CandidatePageComponent({ id }: { id: string }) {
  const candidates: UseQueryResult<CandidatesResponse[], Error> = useQuery({
    queryKey: [constants.candidates.FETCH_ALL_CANDIDATES],
    queryFn: getAllCandidates,
  });

  const candidate = candidates.data?.find(
    (candidate) => candidate.id.toString() === id
  );

  const isModalOpen = useModal((state) => state.isModalOpen);

  const { closeModal } = useModal();

  const modalType = useModal((state) => state.modalType);

  if (candidates.status === 'pending') return <Loader />;

  return (
    <div className="min-h-screen bg-graphite">
      {candidate ? (
        <>
          <CandidateHero candidate={candidate as CandidatesResponse} />
          <MainInfo candidate={candidate as CandidatesResponse} />
        </>
      ) : null}
      {isModalOpen && modalType === 'hr' && (
        <RegisterModal handleClose={closeModal}>
          <RegisterHrForm />
        </RegisterModal>
      )}
    </div>
  );
}

export default CandidatePageComponent;
