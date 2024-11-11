import dynamic from 'next/dynamic';

import Cards from '@/components/pages/admin/cards/Cards';

const DynamicPage = dynamic(
  () => import('@/components/pages/admin/cards/Cards')
);

function CardsPage() {
  return <DynamicPage />;
}

export default CardsPage;
