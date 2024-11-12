import clsx from 'clsx';

import { useNavMenu } from '@/stores/useNavMenu';

export default function BurgerButton(): JSX.Element {
  const isOpen = useNavMenu((state) => state.isOpen);
  const toggleMenu = useNavMenu((state) => state.toggleMenu);

  return (
    <button
      type="button"
      className={clsx(
        'burgerIcon relative block h-5 w-7 duration-300 hover:opacity-70 md:hidden',
        isOpen && 'opened'
      )}
      onClick={toggleMenu}
    >
      <span></span>
    </button>
  );
}
