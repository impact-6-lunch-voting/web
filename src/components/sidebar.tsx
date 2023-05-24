import { Icons } from "./icons";
import { type SidebarRoute } from "~/lib/types/SidebarRoute";
import { SidebarLink } from "~/components/sidebar-link";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { cn } from "~/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import Image from "next/image";

const sidebarRoutes: SidebarRoute[] = [
  {
    routeText: "Groups",
    routeUrl: "/",
    routeIcon: <Icons.pizza className="mr-2 h-4 w-4" />,
  },
];

export function Sidebar() {
  const { status: sessionStatus, data: sessionData } = useSession();
  const username = sessionData?.user?.name;
  const userimage = sessionData?.user?.image ?? undefined;

  return (
    <div className="w-full">
      <div className="flex h-screen w-full flex-col gap-4 space-y-6 p-6">
        <div className="h-10 w-10">
          <Image
            src="/burger.png"
            alt="lunch voting icon"
            width="40"
            height="40"
          />
        </div>

        <div className="flex-1">
          {sidebarRoutes.map((sidebarRoute) => (
            <SidebarLink
              sidebarRoute={sidebarRoute}
              key={sidebarRoute.routeUrl}
            />
          ))}
        </div>

        <hr />

        <div>
          {sessionStatus === "unauthenticated" ? (
            <Link href="/api/auth/signin">
              <span
                className={cn(
                  "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                )}
              >
                <Icons.login className="mr-2 h-4 w-4" />
                <span>Login</span>
              </span>
            </Link>
          ) : (
            <div className="flex flex-col gap-2">
              <div className="gap-6s flex items-center gap-4">
                <Avatar>
                  <AvatarImage src={userimage}></AvatarImage>
                  <AvatarFallback>{username?.slice(0, 2)}</AvatarFallback>
                </Avatar>
                <p>{username}</p>
              </div>

              <Link href="/api/auth/signout">
                <span
                  className={cn(
                    "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                  )}
                >
                  <Icons.logout className="mr-2 h-4 w-4" />
                  <span>Logout</span>
                </span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
