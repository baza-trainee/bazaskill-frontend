import type { Option } from '@/components/user/ui/form_inputs/SelectInput';

export function localizeCountry(locale: string) {
  let arr: Option[] = [];
  if (locale === 'ua') {
    arr = [
      { value: 'ukraine', label: 'Україна' },
      { value: 'poland', label: 'Польща' },
      { value: 'czech', label: 'Чехія' },
      { value: 'germany', label: 'Німеччина' },
      { value: 'france', label: 'Франція' },
      { value: 'spain', label: 'Іспанія' },
    ];
  }
  if (locale === 'en') {
    arr = [
      { value: 'ukraine', label: 'Ukraine' },
      { value: 'poland', label: 'Poland' },
      { value: 'czech', label: 'Czech' },
      { value: 'germany', label: 'Germany' },
      { value: 'france', label: 'France' },
      { value: 'spain', label: 'Spain' },
    ];
  }
  if (locale === 'pl') {
    arr = [
      { value: 'ukraine', label: 'Ukraina' },
      { value: 'poland', label: 'Polska' },
      { value: 'czech', label: 'Republika Czeska' },
      { value: 'germany', label: 'Niamcy' },
      { value: 'france', label: 'Francja' },
      { value: 'spain', label: 'Hiszpania' },
    ];
  }
  return arr;
}
