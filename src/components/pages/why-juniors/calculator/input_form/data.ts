import ClockIcon from '../icons/ClockIcon';
import EducationIcon from '../icons/EducationIcon';
import MenthorIcon from '../icons/MenthorIcon';
import ProductivityIcon from '../icons/ProductivityIcon';
import SalaryIcon from '../icons/SalaryIcon';
import SkillIcon from '../icons/SkillIcon';
import UserIcon from '../icons/UserIcon';

import { GiProfit } from 'react-icons/gi';
import { IoTime } from 'react-icons/io5';
import { MdOutlineAttachMoney } from 'react-icons/md';
import { GrMoney } from 'react-icons/gr';
import { FaRegMoneyBillAlt } from 'react-icons/fa';

export const specialities = [
  'UA/UX Designer',
  'Frontend',
  'QA Manual',
  'Backend',
  'Fullstack',
  'Project Manager'
];
export const skills = ['Junior', 'Middle'];
export const times = ['1', '2', '3'];

export interface Item {
  name: string;
  title: string;
  icon: React.ComponentType;
  text: string;
}

export const itemSalary: Item = {
  name: 'salary',
  title: 'salary_title',
  icon: SalaryIcon,
  text: 'salary_text'
};

export const itemProfit: Item = {
  name: 'profit',
  title: 'profit_title',
  icon: GiProfit,
  text: 'profit_text'
};

export const itemEducation: Item = {
  name: 'educationCost',
  title: 'education_title',
  icon: FaRegMoneyBillAlt,
  text: 'education_text'
};

export const itemMentorshipTime: Item = {
  name: 'menthorshipTime',
  title: 'menthorship_title',
  icon: IoTime,
  text: 'menthorship_text'
};

export const itemMiddleSalary: Item = {
  name: 'middleSalary',
  title: 'middleSalary_title',
  icon: MdOutlineAttachMoney,
  text: 'middleSalary_text'
};

export const itemProfitLoss: Item = {
  name: 'profitLoss',
  title: 'profitLoss_title',
  icon: EducationIcon,
  text: 'profitLoss_text'
};
