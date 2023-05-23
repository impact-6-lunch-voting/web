import { Footer } from "./footer";
import { Header } from "./header";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex h-screen w-screen flex-col space-y-6">
      <Header />
      <main className="flex-1 space-y-6">{children}</main>
      <Footer />
    </div>
  );
}
