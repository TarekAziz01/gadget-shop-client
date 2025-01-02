import { Outlet } from "react-router-dom"
import Sidebar from "../components/dashboard/Sidebar"

const DashboardLayout = () => {
  return (
    <div className="grid md:grid-cols-12">
      <div className="col-span-2 ">
        <Sidebar />
      </div>
      <div className="col-span-10 px-2">
        <Outlet />
      </div>
    </div>
  );
}

export default DashboardLayout