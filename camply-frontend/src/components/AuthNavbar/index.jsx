import Nav from "../ui/nav";
import { Link, useLocation } from "react-router-dom";
import logo from "../../_static/img/logo-1.5x.png";

const authPages = {
  "/login": {
    text: "Don't have an account?",
    linkText: "Register",
    to: "/register",
  },
  "/register": {
    text: "Already have an account?",
    linkText: "Log In",
    to: "/login",
  },
  "/forgot-password": {
    text: "Don't have an account?",
    linkText: "Register",
    to: "/register",
  },
};

function AuthNavbar() {
  const location = useLocation();
  const currentPage = authPages[location.pathname];

  return (
    <>
      <Nav>
        <Link to="/">
          <img src={logo} alt="Camply Logo" />
        </Link>
        {currentPage && (
          <p>
            {currentPage.text}{" "}
            <Link to={currentPage.to}>{currentPage.linkText}</Link>
          </p>
        )}
      </Nav>
    </>
  );
}

export default AuthNavbar;
