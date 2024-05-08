'use client';
import { constants } from '@/constants';
import {
  useQuery,
  UseQueryResult,
} from '@tanstack/react-query';
import { getCandidateById } from '@/api/candidates';
import { useModal } from '@/stores/useModal';

import CandidateHero from '@/components/candidate/CandidatePage/Hero';
import MainInfo from '@/components/candidate/CandidatePage/MainInfo';
import React from 'react';
import { CandidatesResponse } from '@/types/candidates';
import Loader from '@/components/admin/ui/Loader';
import ContactsModal from './ContactsModal';

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
  const modalType = useModal((state) => state.modalType);

  if (candidate.status === 'pending') return <Loader />;

  return (
    <div className="bg-graphite">
      <CandidateHero candidate={candidate.data!} />
      <MainInfo candidate={candidate.data!} />
      {isModalOpen && modalType === 'contacts' && (
        <ContactsModal candidate={candidate.data!} />
      )}
    </div>
  );
};

export default CandidatePageComponent;
