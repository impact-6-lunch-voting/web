import { Sidebar } from "./sidebar";
import { Footer } from "./footer";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex h-screen w-screen flex-col">
      <div className="mt-12 flex h-screen gap-12">
        <div className="flex min-w-[320px] justify-center">
          <Sidebar />
        </div>
        <main className="flex-1 space-y-6">{children}</main>
      </div>
      <Footer />
    </div>
  );
}
