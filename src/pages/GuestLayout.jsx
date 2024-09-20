import { useLocation } from "react-router-dom";
import CustomNavbar from "../components/CustomNavbar";

function GuestLayout({ children }) {
  const { pathname } = useLocation();
  //
  return (
    <>
      {pathname.includes("login") ? null : <CustomNavbar />}

      {children}
    </>
  );
}
export default GuestLayout;
