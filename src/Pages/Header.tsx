import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Header: React.FC = () => {
  const location = useLocation();
  const [title, setTitle] = React.useState("Home Page");

  React.useEffect(() => {
    const currentUrl = location.pathname;
    const arr = currentUrl.split("/");

    switch (arr[1]) {
      case "contact":
        setTitle("Contact Page");

        break;
      case "chart":
        setTitle("Charts and Maps");

        break;
      default:
        setTitle("Home Page");
        break;
    }
  }, [location.pathname]);
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <div className="bg-headercolor h-[10svh] flex items-center justify-center">
      <p className="text-center text-white text-3xl font-semibold font-[cursive]">
        {title}
      </p>
    </div>
  );
};

export default Header;
