import { Routes, Route, Outlet } from "react-router-dom";

// Import website pages
import Homepage from "./pages/website/Homepage";
import OurFleet from "./pages/website/OurFleet";
import BookACar from "./pages/website/BookACar";

// Import adminPanel pages
import AdminLogin from "./pages/adminPanel/AdminLogin";
import CarList from "./pages/adminPanel/CarList";
import ReservationList from "./pages/adminPanel/ReservationList";

// Import website components
import Navbar from "./components/navbar";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<div><Navbar /><Outlet /></div>} >
          <Route index element={<Homepage />} />
          <Route path="cars" element={<OurFleet />} />
          <Route path="book" element={<BookACar />} />
        </Route>
        <Route path="adminlogin" element={<AdminLogin />} />
        <Route path="admin" element={<div>sidenav<Outlet /></div>} >
          <Route index element={<div>redirect to /admin/cars</div>} />
          <Route path="cars" element={<CarList />} />
          <Route path="reservations" element={<div><Outlet /></div>} >
            <Route index element={<ReservationList />} />
            <Route path="new" element={<div>new reservation</div>} />
            <Route path="edit/:id" element={<div>edit reservation</div>} />
          </Route>
        </Route>
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </div>
  )
}

export default App;
