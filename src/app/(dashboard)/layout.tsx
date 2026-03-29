import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Sidebar />
      <main className="md:pl-64 min-h-screen">
        <Header />
        <div className="pt-16">
          {children}
        </div>
      </main>
    </>
  );
}
