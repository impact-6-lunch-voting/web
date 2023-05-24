import Link from "next/link";
import { cn } from "~/lib/utils";
import { type SidebarRoute } from "~/lib/types/SidebarRoute";
import { useRouter } from "next/router";

interface SidebarLinkProps {
  sidebarRoute: SidebarRoute;
}

export function SidebarLink({ sidebarRoute }: SidebarLinkProps) {
  const router = useRouter();

  const { routeUrl, routeText, routeIcon } = sidebarRoute;
  return (
    <Link href={routeUrl}>
      <span
        className={cn(
          "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
          router.asPath === routeUrl ? "bg-accent" : "transparent"
        )}
      >
        {routeIcon}
        <span>{routeText}</span>
      </span>
    </Link>
  );
}
