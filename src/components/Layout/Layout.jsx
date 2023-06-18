import { NavLink, Outlet } from 'react-router-dom';
import css from './Layout.module.css';
import { Suspense } from 'react';
const Layout = () => {
  return (
    <div>
      <div className={css.layout}>
        <NavLink to="/">Home </NavLink>
        <NavLink to="/movies"> Movies</NavLink>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default Layout;
