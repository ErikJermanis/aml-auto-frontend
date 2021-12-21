import classNames from "classnames";
import { NavLink, Link, useLocation } from "react-router-dom";

import TextLogo from "./textLogo";

const StyledNavLink = ({ to, children, active }) => (
  <li>
    <NavLink to={to} className={classNames('font-semibold py-1 px-2 mx-2 rounded-md hover:text-blue-700 duration-300', { 'bg-gray1': active })}>{children}</NavLink>
  </li>
);

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 w-full p-2">
      <div className="px-2 bg-white rounded-lg">
        <div className="max-w-screen-2xl p-3 m-auto flex items-center justify-between">
          <Link to="/"><TextLogo className="text-2xl" /></Link>
          <ul className="flex">
            <StyledNavLink to="/" active={location.pathname === '/'}>HOME</StyledNavLink>
            <StyledNavLink to="cars" active={location.pathname === '/cars'}>OUR FLEET</StyledNavLink>
            <StyledNavLink to="book" active={location.pathname === '/book'}>BOOK A CAR</StyledNavLink>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
