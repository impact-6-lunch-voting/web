import Link from "next/link";
import { cn } from "~/lib/utils";
import { Icons } from "~/components/icons";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

export function AuthLink() {
  const router = useRouter();
  const { status: sessionStatus, data: sessionData } = useSession();
  const username = sessionData?.user?.name;
  const userimage = sessionData?.user?.image ?? undefined;

  return(
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
)
}
