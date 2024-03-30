'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { SideBarItem } from './SideBarItem';
import { FaUser } from 'react-icons/fa6';
import { FaHandshake } from 'react-icons/fa';
import Candidates from '@/components/icons/Admin-icons/Candidates';
import CountersIcon from '@/components/icons/Admin-icons/CountersIcon';
import PartnersIcon from '@/components/icons/Admin-icons/PartnersIcon';
import ArticlesIcon from '@/components/icons/Admin-icons/ArticlesIcon';
import ContactsIcon from '@/components/icons/Admin-icons/ContactsIcon';
import SettingsIcon from '@/components/icons/Admin-icons/SettingsIcon';
import PdfIcon from '@/components/icons/Admin-icons/PdfIcon';
import Button from './Button';
import ExitIcon from '@/components/icons/Admin-icons/ExitIcon';
import Logo from '@/components/icons/Logo';

const SideBar: React.FC = () => {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    router.replace('/');
  };

  return (
    <aside className="no-scrollbar h-fit w-[287px] overflow-auto border-l border-r border-gray bg-graphite pb-[30px]">
      <div className="flex h-[104px] items-center justify-center">
        <Link href={`/`}>
          <Logo />
        </Link>
      </div>
      <ul className="mb-[380px] flex flex-col">
        <SideBarItem
          className=""
          icon={<Candidates />}
          href="/admin/candidates"
        >
          Кандидати
        </SideBarItem>
        <SideBarItem
          className=""
          icon={<CountersIcon />}
          href="/admin/counters"
        >
          Каунтер
        </SideBarItem>
        <SideBarItem
          className=""
          icon={<PartnersIcon />}
          href="/admin/partners"
        >
          Партнери
        </SideBarItem>
        <SideBarItem
          className=""
          icon={<ArticlesIcon />}
          href="/admin/posts"
        >
          Статті та поради
        </SideBarItem>
        <SideBarItem
          className=""
          icon={<ArticlesIcon />}
          href="/admin/testimonials"
        >
          Відгуки
        </SideBarItem>
        <SideBarItem
          className=""
          icon={<PdfIcon />}
          href="/admin/documents"
        >
          PDF документи
        </SideBarItem>
        <SideBarItem
          className=""
          icon={<ContactsIcon />}
          href="/admin/contacts"
        >
          Контакти
        </SideBarItem>
        <SideBarItem
          className="border-b"
          icon={<FaUser />}
          iconClassName="w-[20px] h-[20px]"
          href="/admin/hr-applications"
        >
          Заявки HRів
        </SideBarItem>
        <SideBarItem
          className="border-b"
          icon={<FaHandshake />}
          iconClassName="w-[25px] h-[25px]"
          href="/admin/partner-applications"
        >
          Заявки партнерів
        </SideBarItem>
        <SideBarItem
          className="border-b"
          icon={<SettingsIcon />}
          href="/admin/settings"
        >
          Налаштування
        </SideBarItem>
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
