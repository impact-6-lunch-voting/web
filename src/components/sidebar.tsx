import Link from "next/link";
import { useRouter } from "next/router";
import { cn } from "~/lib/utils";
import { Icons } from "./icons";
import { useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";

export function Sidebar() {
  const router = useRouter();
  const { status: sessionStatus, data: sessionData } = useSession();
  const username = sessionData?.user?.name;
  const userimage = sessionData?.user?.image ?? undefined;

  return (
    <div className="flex flex-col gap-6 p-3 px-0 md:gap-10">
      <div>Lunch voting icon here</div>
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
            <p>Hey, {username}!</p>

            <Avatar>
              <AvatarImage src={userimage}></AvatarImage>
              <AvatarFallback>{username?.slice(0, 2)}</AvatarFallback>
            </Avatar>
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
      <Link href="/polls">
        <span
          className={cn(
            "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
            router.asPath === "/polls" ? "bg-accent" : "transparent"
          )}
        >
          <Icons.pizza className="mr-2 h-4 w-4" />
          <span>Polls</span>
        </span>
      </Link>
    </div>
  );
}
