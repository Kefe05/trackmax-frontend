import { NavLink, Outlet, useLocation } from "react-router-dom";
import Navbar from "../navBar/navbar";

export function RootLayout() {
  const location = useLocation();

  // List of routes where the navbar should not appear
  // const hideNavbarRoutes = ['/login', '/register' ,'/'];

  return (
    <div>
      {/* Conditionally render Navbar if the current path is not in hideNavbarRoutes */}
      {/* {!hideNavbarRoutes.includes(location.pathname) && <Navbar />} */}
      
      <main >
        <Outlet />
      </main>
    </div>
  );
}
