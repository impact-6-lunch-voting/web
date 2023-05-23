import Link from "next/link";
import { useRouter } from "next/router";
import { cn } from "~/lib/utils";

export function Sidebar() {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-6 p-3 px-0 md:gap-10">
      <div>Lunch voting icon here</div>
      <Link href="/polls">
        <span
          className={cn(
            "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
            router.asPath === "/polls" ? "bg-accent" : "transparent"
          )}
        >
          <span>Polls</span>
        </span>
      </Link>
    </div>
  );
}
