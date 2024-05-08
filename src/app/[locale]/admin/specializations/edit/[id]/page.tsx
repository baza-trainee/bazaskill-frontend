import EditSpecialization from '@/components/admin/specializations/EditSpecialization';
import React from 'react';

const EditSpecializationPage = ({
  params,
}: {
  params: { id: string };
}) => {
  return <EditSpecialization id={params.id} />;
};

export default EditSpecializationPage;
