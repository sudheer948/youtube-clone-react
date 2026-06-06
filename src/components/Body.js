import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";

const Body = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  return (
    <div className="flex">
      <Sidebar />
      <div className={isMenuOpen ? "flex-1 ml-40" : "flex-1"}>
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
