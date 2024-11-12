import ClockIcon from '../icons/ClockIcon';
import EducationIcon from '../icons/EducationIcon';
import MenthorIcon from '../icons/MenthorIcon';
import ProductivityIcon from '../icons/ProductivityIcon';
import SalaryIcon from '../icons/SalaryIcon';
import SkillIcon from '../icons/SkillIcon';
import UserIcon from '../icons/UserIcon';

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

export const itemSpecialization: Item = {
  name: 'specialization',
  title: 'specialization_title',
  icon: UserIcon,
  text: 'specialization_text'
};
export const itemLevel: Item = {
  name: 'level',
  title: 'level_title',
  icon: SkillIcon,
  text: 'level_text'
};
export const itemSalary: Item = {
  name: 'salary',
  title: 'salary_title',
  icon: SalaryIcon,
  text: 'salary_text'
};
export const itemEducation: Item = {
  name: 'educationCost',
  title: 'education_title',
  icon: EducationIcon,
  text: 'education_text'
};
export const itemProjectValue: Item = {
  name: 'projectValue',
  title: 'project_title',
  icon: MenthorIcon,
  text: 'project_text'
};
export const itemProductivity: Item = {
  name: 'productivity',
  title: 'productivity_title',
  icon: ProductivityIcon,
  text: 'productivity_text'
};
export const itemFullProductivityYears: Item = {
  name: 'fullProductivityYears',
  title: 'full_productivity_title',
  icon: ClockIcon,
  text: 'full_productivity_text'
};
