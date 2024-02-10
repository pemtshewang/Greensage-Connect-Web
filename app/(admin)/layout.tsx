import Navbar from "@/components/Navbar";
import SideBar from "@/components/Sidebar";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen">
      <Navbar />
      <SideBar />
      {children}
    </main>
  );
}
