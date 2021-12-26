import { useCallback } from "react";
import { NavLink } from "react-router-dom";
import classNames from "classnames";

import { useAuth } from "../contexts/AuthContext";

import TextLogo from "./textLogo";
import Button from "./button";

const StyledNavLink = ({ to, children }) => (
  <li className="w-full">
    <NavLink to={to} className={({ isActive }) => classNames(
      'font-semibold py-1 px-2 rounded-full hover:text-blue-700 duration-300 block',
      { 'bg-gray1': isActive }
    )}>{children}</NavLink>
  </li>
);

const Sidenav = () => {
  const { signout } = useAuth();

  return (
    <nav className="w-64 h-screen p-2">
      <div className="bg-white h-full rounded-lg px-2 flex flex-col">
        <p className="text-center text-xl font-bold py-4"><TextLogo /> admin</p>
        <ul className="w-full">
          <StyledNavLink to="/admin/cars">Cars</StyledNavLink>
          <StyledNavLink to="/admin/reservations">Reservations</StyledNavLink>
        </ul>
        <Button onClick={useCallback(() => signout(), [])} secondary className="w-full mt-auto mb-3">Logout</Button>
      </div>
    </nav>
  )
}

export default Sidenav;
