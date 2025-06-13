import { Outlet } from "react-router-dom";
import AuthFooter from "../components/AuthFooter";
import AuthNavbar from "../components/AuthNavbar";
import Wrapper from "../components/ui/wrapper";

function AuthLayout() {
  return (
    <>
      <AuthNavbar />
      <Wrapper>
        <Outlet />
      </Wrapper>
      <AuthFooter />
    </>
  )
}

export default AuthLayout;