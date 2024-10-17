'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { SideBarItem } from './SideBarItem';
import { FaUser } from 'react-icons/fa6';
import { FaHandshake } from 'react-icons/fa';
import { FaTools } from 'react-icons/fa';
import { GrGallery } from 'react-icons/gr';
import { FaUsers } from 'react-icons/fa';
import Candidates from '@/components/shared/icons/Admin-icons/Candidates';
import CountersIcon from '@/components/shared/icons/Admin-icons/CountersIcon';
import PartnersIcon from '@/components/shared/icons/Admin-icons/PartnersIcon';
import ArticlesIcon from '@/components/shared/icons/Admin-icons/ArticlesIcon';
import ContactsIcon from '@/components/shared/icons/Admin-icons/ContactsIcon';
import SettingsIcon from '@/components/shared/icons/Admin-icons/SettingsIcon';
import PdfIcon from '@/components/shared/icons/Admin-icons/PdfIcon';
import Button from './Button';
import ExitIcon from '@/components/shared/icons/Admin-icons/ExitIcon';
import Logo from '@/components/shared/icons/Logo';

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
      <ul className="mb-[180px] flex flex-col">
        <SideBarItem
          className=""
          icon={<Candidates />}
          iconClassName="w-[24px] h-[24px]"
          href="/admin/candidates"
        >
          Кандидати
        </SideBarItem>
        <SideBarItem
          className=""
          icon={<CountersIcon />}
          iconClassName="w-[24px] h-[24px]"
          href="/admin/counters"
        >
          Каунтер
        </SideBarItem>
        <SideBarItem
          className=""
          icon={<PartnersIcon />}
          iconClassName="w-[24px] h-[24px]"
          href="/admin/partners"
        >
          Партнери
        </SideBarItem>
        <SideBarItem
          className=""
          icon={<ArticlesIcon />}
          iconClassName="w-[24px] h-[24px]"
          href="/admin/posts"
        >
          Статті та поради
        </SideBarItem>
        <SideBarItem
          className=""
          icon={<ArticlesIcon />}
          iconClassName="w-[24px] h-[24px]"
          href="/admin/testimonials"
        >
          Відгуки
        </SideBarItem>
        <SideBarItem
          className=""
          icon={<PdfIcon />}
          iconClassName="w-[24px] h-[24px]"
          href="/admin/documents"
        >
          PDF документи
        </SideBarItem>
        <SideBarItem
          className=""
          icon={<ContactsIcon />}
          iconClassName="w-[24px] h-[24px]"
          href="/admin/contacts"
        >
          Контакти
        </SideBarItem>
        <SideBarItem
          className=""
          icon={<GrGallery />}
          iconClassName="w-[24px] h-[24px]"
          href="/admin/gallery"
        >
          Галерея
        </SideBarItem>
        <SideBarItem
          className=""
          icon={<FaTools />}
          iconClassName="w-[24px] h-[24px]"
          href="/admin/specializations"
        >
          Спеціалізації
        </SideBarItem>
        <SideBarItem
          className=""
          icon={<FaUsers />}
          iconClassName="w-[24px] h-[24px]"
          href="/admin/cards"
        >
          Топ Учасники
        </SideBarItem>
        <SideBarItem
          className="border-b"
          icon={<FaUser />}
          iconClassName="w-[24px] h-[24px]"
          href="/admin/hr-applications"
        >
          Заявки HRів
        </SideBarItem>
        <SideBarItem
          className="border-b"
          icon={<FaHandshake />}
          iconClassName="w-[24px] h-[24px]"
          href="/admin/partner-applications"
        >
          Заявки партнерів
        </SideBarItem>
        <SideBarItem
          className="border-b"
          icon={<SettingsIcon />}
          iconClassName="w-[24px] h-[24px]"
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
