'use client';
import { constants } from '@/constants';
import {
  useQuery,
  UseQueryResult,
} from '@tanstack/react-query';
import { getAllCandidates } from '@/api/candidates';
import { useModal } from '@/stores/useModal';
import { CandidatesResponse } from '@/types/candidates';
import CandidateHero from '@/components/candidate/CandidatePage/Hero';
import MainInfo from '@/components/candidate/CandidatePage/MainInfo';
import Loader from '@/components/shared/loader/Loader';
import RegisterModal from '@/components/main/modals/RegisterModal';
import RegisterHrForm from '@/components/main/modals/forms/register_hr/RegisterHrForm';

const CandidatePageComponent = ({ id }: { id: string }) => {
  const candidates: UseQueryResult<
    CandidatesResponse[],
    Error
  > = useQuery({
    queryKey: [constants.candidates.FETCH_ALL_CANDIDATES],
    queryFn: getAllCandidates,
  });

  const candidate = candidates.data?.find(
    (candidate) => candidate.id.toString() === id
  );

  const isModalOpen = useModal(
    (state) => state.isModalOpen
  );

  const { closeModal } = useModal();

  const modalType = useModal((state) => state.modalType);

  if (candidates.status === 'pending') return <Loader />;

  return (
    <div className="min-h-[100vh] bg-graphite">
      {candidate ? (
        <>
          <CandidateHero
            candidate={candidate as CandidatesResponse}
          />
          <MainInfo
            candidate={candidate as CandidatesResponse}
          />
        </>
      ) : null}
      {isModalOpen && modalType === 'hr' && (
        <RegisterModal handleClose={closeModal}>
          <RegisterHrForm />
        </RegisterModal>
      )}
    </div>
  );
};

export default CandidatePageComponent;
