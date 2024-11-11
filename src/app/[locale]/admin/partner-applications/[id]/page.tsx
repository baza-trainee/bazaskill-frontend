import PartnerApplication from '@/components/pages/admin/partner-applications/PartnerApplication';

function PartnerApplicationPage({
  params,
}: {
  params: { id: string };
}) {
  return <PartnerApplication id={params.id} />;
}

export default PartnerApplicationPage;
