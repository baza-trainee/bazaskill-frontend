'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

import { FaHandshake, FaTools, FaUser, FaUsers } from 'react-icons/fa';
import { GrGallery } from 'react-icons/gr';

import ArticlesIcon from '@/components/shared/icons/Admin-icons/ArticlesIcon';
import CandidatesIcon from '@/components/shared/icons/Admin-icons/Candidates';
import ContactsIcon from '@/components/shared/icons/Admin-icons/ContactsIcon';
import CountersIcon from '@/components/shared/icons/Admin-icons/CountersIcon';
import ExitIcon from '@/components/shared/icons/Admin-icons/ExitIcon';
import PartnersIcon from '@/components/shared/icons/Admin-icons/PartnersIcon';
import PdfIcon from '@/components/shared/icons/Admin-icons/PdfIcon';
import SettingsIcon from '@/components/shared/icons/Admin-icons/SettingsIcon';
import Logo from '@/components/shared/icons/Logo';

import Button from './Button';
import { SideBarItem } from './SideBarItem';

const sidebarItems = [
  { icon: <CandidatesIcon />, href: '/admin/candidates', label: 'Кандидати' },
  { icon: <CountersIcon />, href: '/admin/counters', label: 'Каунтер' },
  { icon: <PartnersIcon />, href: '/admin/partners', label: 'Партнери' },
  { icon: <ArticlesIcon />, href: '/admin/posts', label: 'Статті та поради' },
  { icon: <ArticlesIcon />, href: '/admin/stories', label: 'Історії джунів' },
  { icon: <ArticlesIcon />, href: '/admin/testimonials', label: 'Відгуки' },
  { icon: <PdfIcon />, href: '/admin/documents', label: 'PDF документи' },
  { icon: <ContactsIcon />, href: '/admin/contacts', label: 'Контакти' },
  { icon: <GrGallery />, href: '/admin/gallery', label: 'Галерея' },
  { icon: <FaTools />, href: '/admin/specializations', label: 'Спеціалізації' },
  { icon: <FaUsers />, href: '/admin/cards', label: 'Топ Учасники' },
  {
    icon: <FaUser />,
    href: '/admin/hr-applications',
    label: 'Заявки HRів',
    className: 'border-b'
  },
  {
    icon: <FaHandshake />,
    href: '/admin/partner-applications',
    label: 'Заявки партнерів',
    className: 'border-b'
  },
  {
    icon: <SettingsIcon />,
    href: '/admin/settings',
    label: 'Налаштування',
    className: 'border-b'
  }
];

const SideBar: React.FC = () => {
  const router = useRouter();

  const handleLogout = useCallback(() => {
    localStorage.removeItem('access_token');
    router.replace('/');
  }, [router]);

  return (
    <aside className="no-scrollbar h-fit w-[287px] overflow-auto border-x border-gray bg-graphite pb-[30px]">
      <div className="flex h-[104px] items-center justify-center">
        <Link href="/">
          <Logo />
        </Link>
      </div>
      <ul className="mb-[180px] flex flex-col">
        {sidebarItems.map(({ icon, href, label, className }, index) => (
          <SideBarItem key={index} href={href} icon={icon} className={className}>
            {label}
          </SideBarItem>
        ))}
      </ul>
      <Button onClick={handleLogout}>
        <span className="flex">
          <ExitIcon className="mr-[44px]" />
        </span>
        Вийти
      </Button>
    </aside>
  );
};

export default SideBar;
