import React from 'react'
import { Outlet, Link } from "react-router-dom";
const Header = () => {
  return (
    <>
        <header>
            <nav>
              <Link to="/">Home</Link>
              <Link to="/movies">Movies</Link>
            </nav>
        </header>
        <Outlet/>
    </>
  )
}
export default Header;
