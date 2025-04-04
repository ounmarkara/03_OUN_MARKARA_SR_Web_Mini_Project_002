import Sidebar from "@/components/sidebar";
import "../../globals.css";
import { getAllWorkSpace } from "../../../../service/workspace/workspace.service";
// import { getAllWorkSpace } from "../../../../service/workspace/workspace.service";
// export default async function layout({ children }) {
//   const { payload: workspace } = await getAllWorkSpace();
//   return (
//     <html lang="en">
//       <body className="text-charcoal">
//         <div className="flex h-screen bg-[#f8fafc]">
//           <Sidebar workspace={workspace} />
//           {children}
//         </div>
//       </body>
//     </html>
//   );
// }
// app/layout-sidebar.jsx (or your layout/page component)
// import { getAllWorkSpace } from "@/services/workspace.service";

export default async function layout({ children }) {
  // Fetch data on server
  const { payload: workspace } = await getAllWorkSpace();

  return (
    <div className="flex">
      <Sidebar workspace={workspace} />
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
