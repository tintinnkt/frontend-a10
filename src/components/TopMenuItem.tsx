import Link from "next/link";

interface TopMenuItemProps {
  href: string;
  label: string;
}

export default function TopMenuItem({ href, label }: TopMenuItemProps) {
  return (
    <Link href={href} legacyBehavior>
      <p className="text-white">{label}</p>
    </Link>
  );
}
