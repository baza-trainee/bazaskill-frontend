import LogoFooter from '@/components/shared/icons/LogoFooter';
import { Link } from '@/navigation';

export default function FooterLogo(): JSX.Element {
  return (
    <Link href="/" aria-label="logo-icon" className="hidden w-[36%] max-w-[560px] md:flex">
      <LogoFooter className="block" />
    </Link>
  );
}
