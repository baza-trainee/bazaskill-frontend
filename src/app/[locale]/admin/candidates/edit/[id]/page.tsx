import EditCandidate from '@/components/pages/admin/candidates/EditCandidate';

function EditCandidatePage({ params }: { params: { id: string } }) {
  return <EditCandidate id={params.id} />;
}

export default EditCandidatePage;
