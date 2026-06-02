import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Body = () => {
  return (
    <div className="flex gap-2.5">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Body;
