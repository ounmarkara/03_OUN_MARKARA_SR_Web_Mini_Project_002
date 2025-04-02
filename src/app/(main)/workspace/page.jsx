import Sidebar from "@/components/sidebar";
import "../../globals.css";
import Breadcrumb from "@/components/breadcrumb";
import SpecificGoal from "@/components/specific";
import MainContent from "@/components/maincontent";
import Footer from "@/components/footer";

export default function page() {
  return (
    <div className="flex h-screen bg-[#f8fafc]">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Breadcrumb />
        <div className="flex-1 p-6 overflow-auto">
          <SpecificGoal />
          <MainContent />
          <Footer />
        </div>
      </div>
    </div>
  );
}
