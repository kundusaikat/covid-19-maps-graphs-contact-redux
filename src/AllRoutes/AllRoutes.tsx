import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import Header from "../Pages/Header";
import SideNavbar from "../Pages/SideNavbar";
import ShowContact from "../Pages/Contact/ShowContact";
import CreateContact from "../Pages/Contact/CreateContact";
import EditContact from "../Pages/Contact/EditContact";
import { PageNotFound } from "../Pages/PageNotFound";
import WorldChart from "../Pages/ChartsAndMaps/WorldChart";
import CountryMaps from "../Pages/ChartsAndMaps/CountryMaps";

export const AllRoutes = () => {
  return (
    <div className="border-[5px] border-pot-sky">
      <Header />
      <Routes>
        <Route path="/" element={<SideNavbar />}>
          <Route path="contact" element={<><Outlet/></>}>
            <Route path="show" element={<ShowContact />}></Route>
            <Route path="create" element={<CreateContact />}></Route>
            <Route path="edit/:id" element={<EditContact />}></Route>
            <Route path="/contact" element={<Navigate to="show" />} />
          </Route>

          <Route path="chart" element={<><Outlet/></>}>
            <Route path='world' element={<WorldChart />} ></Route>
            <Route path='country' element={<CountryMaps />} ></Route>
            <Route path="/chart" element={<Navigate to="world" />} />
          </Route>

          <Route path="page-not-found" element={<PageNotFound />}></Route>
          <Route path="" element={<Navigate to="contact" />} />
          <Route path="*" element={<Navigate to="page-not-found" />} />
        </Route>
      </Routes>
    </div>
  );
};
