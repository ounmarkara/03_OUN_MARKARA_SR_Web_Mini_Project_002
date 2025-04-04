// app/workspace/[workspaceId]/page.jsx
import Breadcrumb from "@/components/breadcrumb";
import SpecificGoal from "@/components/specific";
import MainContent from "@/components/maincontent";
import Footer from "@/components/footer";

export default function Page({ params }) {
  return (
    <div className="flex-1 flex flex-col">
      <Breadcrumb />
      <div className="flex-1 p-6 overflow-auto">
        <SpecificGoal />
        <MainContent workspaceId={params.workspaceId} />
        <Footer />
      </div>
    </div>
  );
}
