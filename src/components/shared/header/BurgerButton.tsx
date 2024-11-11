import clsx from 'clsx';
import { useNavMenu } from "@/stores/useNavMenu";

export default function BurgerButton(): JSX.Element {
  const isOpen = useNavMenu((state) => state.isOpen);
  const toggleMenu = useNavMenu((state) => state.toggleMenu);

  return (
    <button type="button" 
      className={clsx('md:hidden burgerIcon relative block w-7 h-5 duration-300 hover:opacity-70',isOpen && 'opened' )}
      onClick={toggleMenu}>
      <span></span>
    </button>
  )
}