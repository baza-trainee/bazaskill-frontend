import HrApplication from '@/components/admin/hr-applications/HrApplication';
import React from 'react';

const HrApplicationsPage = ({
  params,
}: {
  params: { id: string };
}) => {
  return <HrApplication id={params.id} />;
};

export default HrApplicationsPage;
