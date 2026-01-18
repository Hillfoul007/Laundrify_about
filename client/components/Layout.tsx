import { Header } from "./Header";
import { Footer } from "./Footer";
import FloatingContact from "./FloatingContact";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <FloatingContact />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
