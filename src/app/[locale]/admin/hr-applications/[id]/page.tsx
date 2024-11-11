import HrApplication from '@/components/admin/hr-applications/HrApplication';

function HrApplicationsPage({
  params,
}: {
  params: { id: string };
}) {
  return <HrApplication id={params.id} />;
}

export default HrApplicationsPage;
