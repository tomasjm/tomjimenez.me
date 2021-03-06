import Link from "next/link";
import { useRouter } from "next/router";
interface LinkItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  label?: string;
  ariaLabel?: string;
  ignoreActive?: boolean;
}

const LinkItem: React.FC<LinkItemProps> = ({
  href,
  children,
  label,
  ariaLabel,
  ignoreActive,
}) => {
  const router = useRouter();
  const isActive = ignoreActive || router.pathname === href;
  return (
    <Link href={href as string}>
      <a
        aria-label={`${label ? "Navegar a " + label : ariaLabel}`}
        className={`font-bold font-cal text-lg ${
          isActive
            ? "text-gray-900 dark:text-white"
            : "text-gray-600 dark:text-gray-400"
        }`}
      >
        {children ? children : label}
      </a>
    </Link>
  );
};
export default LinkItem;
