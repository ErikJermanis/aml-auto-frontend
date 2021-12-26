import { Outlet } from "react-router-dom";

import Sidenav from "../../components/sidenav";

const AdminLayout = () => (
  <div className="flex">
    <Sidenav />
    <div className="flex-1"><Outlet /></div>
  </div>
);

export default AdminLayout;