import { Sidebar } from "./sidebar";
import { type ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex h-screen w-screen flex-col">
      <div className="mt-6 flex h-full gap-12">
        <div className="flex min-w-[360px] justify-center">
          <Sidebar />
        </div>
        <main className="flex-1 space-y-6 p-6">{children}</main>
      </div>
    </div>
  );
}
