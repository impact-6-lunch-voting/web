import Link from "next/link";

export function Header() {
  return (
    <div className="flex gap-6 border-b-2 border-b-gray-200 bg-yellow-500 p-3 px-0 md:gap-10">
      <div className="container bg-yellow-100">
        <Link href="/polls" className="hidden items-center space-x-2 md:flex">
          <span className="hidden sm:inline-block">Polls</span>
        </Link>
      </div>
    </div>
  );
}
