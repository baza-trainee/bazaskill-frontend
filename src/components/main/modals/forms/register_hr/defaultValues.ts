import { Option } from '@/components/main/ui/form_inputs/SelectInput';

export const defaultValues = {
  first_name: '',
  last_name: '',
  phone: '',
  email: '',
  company: '',
  country: '',
  occupation: '',
  comment: '',
};

export const options: Option[] = [
  { value: 'Design', label: 'Design' },
  { value: 'Front-end', label: 'Front-end' },
  { value: 'Back-end', label: 'Back-end' },
  { value: 'Full Stack', label: 'Full Stack' },
  { value: 'QA Manual', label: 'QA Manual' },
  { value: 'PM', label: 'PM' },
];
