import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import Topbar from "../components/Topbar/Topbar";

function MainLayout() {
  return (
    <div className="flex">
      <Sidebar />

      <main className="flex-1 bg-gray-100 min-h-screen p-8">
        <Topbar />

        <div className="mt-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default MainLayout;