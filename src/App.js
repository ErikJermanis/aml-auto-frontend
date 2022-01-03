import { Routes, Route, Outlet } from "react-router-dom";

import { AuthProvider } from "./contexts/AuthContext";

// Import website pages
import Homepage from "./pages/website/Homepage";
import OurFleet from "./pages/website/OurFleet";
import BookACar from "./pages/website/BookACar";

// Import adminPanel pages
import AdminLayout from "./pages/adminPanel/AdminLayout";
import AdminIndex from "./pages/adminPanel/AdminIndex";
import AdminLogin from "./pages/adminPanel/AdminLogin";
import CarList from "./pages/adminPanel/CarList";
import EditCar from "./pages/adminPanel/EditCar";
import ReservationList from "./pages/adminPanel/ReservationList";

// Import website components
import Navbar from "./components/navbar";

const App = () => {
  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<div><Navbar /><Outlet /></div>} >
            <Route index element={<Homepage />} />
            <Route path="cars" element={<OurFleet />} />
            <Route path="book" element={<BookACar />} />
          </Route>
          <Route path="adminlogin" element={<AdminLogin />} />
          <Route path="admin" element={<AdminLayout />} >
            <Route index element={<AdminIndex />} />
            <Route path="cars" element={<div><Outlet /></div>} >
              <Route index element={<CarList />} />
              <Route path="new" element={<EditCar />} />
              <Route path="edit/:id" element={<EditCar />} />
            </Route>
            <Route path="reservations" element={<div><Outlet /></div>} >
              <Route index element={<ReservationList />} />
              <Route path="new" element={<div>new reservation</div>} />
              <Route path="edit/:id" element={<div>edit reservation</div>} />
            </Route>
          </Route>
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </AuthProvider>
    </div>
  )
}

export default App;
