import { Option } from '@/components/main/ui/form_inputs/SelectInput';

export const defaultValues = {
  first_name: '',
  last_name: '',
  phone: '',
  email: '',
  company: '',
  country: '',
  speciality: '',
  message: '',
};

export const options: Option[] = [
  { value: 'option1', label: 'Опція 1' },
  { value: 'option2', label: 'Опція 2' },
  { value: 'option3', label: 'Опція 3' },
  { value: 'option4', label: 'Опція 4' },
  { value: 'option5', label: 'Опція 5' },
  { value: 'option6', label: 'Опція 6' },
];

export const stack: Option[] = [
  { value: 'fulstack', label: 'Full-stack' },
  { value: 'frontend', label: 'Front-end' },
  { value: 'backend', label: 'Back-end' },
  { value: 'design', label: 'Design' },
];
