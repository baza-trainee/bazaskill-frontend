import { Option } from '@/components/main/ui/form_inputs/SelectInput';

export const defaultValues = {
  name: '',
  link: '',
  phone: '',
  email: '',
  first_name: '',
  last_name: '',
  speciality: '',
  position: '',
  message: '',
};

export const options: Option[] = [
  { value: 'Design', label: 'Design' },
  { value: 'Front-end', label: 'Front-end' },
  { value: 'Back-end', label: 'Back-end' },
  { value: 'Full Stack', label: 'Full Stack' },
  { value: 'QA Manual', label: 'QA Manual' },
  { value: 'PM', label: 'PM' },
];

export const stack: Option[] = [
  { value: 'fulstack', label: 'Full-stack' },
  { value: 'frontend', label: 'Front-end' },
  { value: 'backend', label: 'Back-end' },
  { value: 'design', label: 'Design' },
];
