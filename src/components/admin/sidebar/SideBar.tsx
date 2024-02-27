'use client';
import { SideBarItem } from './SideBarItem';
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
  return (
    <aside className="ml-[40px] min-h-[100vh] w-[287px] border-l border-r border-gray bg-graphite">
      <div className="flex h-[104px] items-center justify-center">
        <Logo />
      </div>
      <ul className="mb-[380px] flex flex-col">
        <SideBarItem
          className=""
          icon={<Candidates />}
          href="#"
        >
          Кандидати
        </SideBarItem>
        <SideBarItem
          className=""
          icon={<CountersIcon />}
          href="#"
        >
          Каунтер
        </SideBarItem>
        <SideBarItem
          className=""
          icon={<PartnersIcon />}
          href="#"
        >
          Партнери
        </SideBarItem>
        <SideBarItem
          className=""
          icon={<ArticlesIcon />}
          href="#"
        >
          Статті та поради
        </SideBarItem>
        <SideBarItem
          className=""
          icon={<PdfIcon />}
          href="#"
        >
          PDF документи
        </SideBarItem>
        <SideBarItem
          className=""
          icon={<ContactsIcon />}
          href="#"
        >
          Контакти
        </SideBarItem>
        <SideBarItem
          className="border-b"
          icon={<SettingsIcon />}
          href="#"
        >
          Налаштування
        </SideBarItem>
      </ul>
      <Button>
        <span className="flex">
          <ExitIcon className="mr-[44px]" />
        </span>
        Вийти
      </Button>
    </aside>
  );
};

export default SideBar;
