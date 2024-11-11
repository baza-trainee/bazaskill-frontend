import React from 'react';

import HrApplication from '@/components/pages/admin/hr-applications/HrApplication';

function HrApplicationsPage({
  params,
}: {
  params: { id: string };
}) {
  return <HrApplication id={params.id} />;
}

export default HrApplicationsPage;
