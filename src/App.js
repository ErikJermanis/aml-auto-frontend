import { Route, Routes, Outlet } from "react-router";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/admin" element={<h1>Login to admin</h1>} />
      </Routes>
      <Routes>
        <Route index element={<h1>Home</h1>} />
        <Route path="/cars" element={<h1>Cars</h1>} />
        <Route path="/book" element={<h1>Book</h1>} />
        <Route path="/admin" element={<Outlet />} >
          <Route path="cars" element={<h1>Admin cars</h1>} />
          <Route path="reservations" element={<h1>Admin reservations</h1>} />
        </Route>
      </Routes>
    </div>
  )
}

export default App;
