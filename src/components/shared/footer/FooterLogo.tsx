import LogoFooter from "@/components/shared/icons/LogoFooter";
import { Link } from "@/navigation";

export default function FooterLogo(): JSX.Element {
  return (
    <Link
        href="/"
        aria-label="logo-icon"
        className="hidden md:flex w-[36%] max-w-[560px]">
        <LogoFooter className="block"/>
    </Link>
  )
}