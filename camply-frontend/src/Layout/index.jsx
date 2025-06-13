import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Wrapper from "../components/ui/wrapper";

function Layout() {
  return (
    <>
      <Navbar />
      <Wrapper>
        <Outlet />
      </Wrapper>
      <Footer />
    </>
  )
}

export default Layout;