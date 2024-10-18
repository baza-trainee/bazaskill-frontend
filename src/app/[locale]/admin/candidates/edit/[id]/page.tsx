import React from 'react';

import EditCandidate from '@/components/admin/candidates/EditCandidate/EditCandidate';

function EditCandidatePage({
  params,
}: {
  params: { id: string };
}) {
  return <EditCandidate id={params.id} />;
}

export default EditCandidatePage;
