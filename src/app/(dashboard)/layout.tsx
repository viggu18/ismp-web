import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";
import { BottomNav } from "@/components/layout/BottomNav";
import { AuthGuard } from "@/components/auth/AuthGuard";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthGuard>
      <div className="flex min-h-screen bg-slate-50/50 dark:bg-slate-950/50">
        <Sidebar />
        <div className="flex-1 flex flex-col md:pl-64 w-full">
          <Header />
          <main className="flex-1 pt-16 pb-16 md:pb-0 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto w-full">
            {children}
          </main>
        </div>
        <BottomNav isHirer={true} />
      </div>
    </AuthGuard>
  );
}

