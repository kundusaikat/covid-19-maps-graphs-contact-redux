import React from "react";
import { Link, Outlet } from "react-router-dom";

const SideNavbar = () => {
  return (
    <div className="flex relative h-[calc(90svh-10px)]">
      <div className="flex flex-col border-black border-2 w-[30vw] md:w-2/12 lg:w-1/12 sticky left-0 text-sm font-bold">
        <Link to="/contact">
          <p className="underline text-[#4343F7] text-center my-2">Contact</p>
        </Link>
        <div className="bg-black h-1"></div>
        <Link to="/chart"><p className="underline text-[#4343F7]  text-center my-2">Charts and Maps</p></Link>
        <div className="bg-black h-1"></div>
        <p className="text-center my-2">Sidebar</p>
      </div>
      <div className="w-11/12 bg-[#ECE9E4]">
        <Outlet />
      </div>
    </div>
  );
};

export default SideNavbar;
