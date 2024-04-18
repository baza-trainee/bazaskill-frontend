import EditCandidate from '@/components/admin/candidates/EditCandidate/EditCandidate';
import React from 'react';

const EditCandidatePage = ({
  params,
}: {
  params: { id: string };
}) => {
  return <EditCandidate id={params.id} />;
};

export default EditCandidatePage;
