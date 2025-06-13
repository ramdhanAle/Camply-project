import { Link } from "react-router-dom";
import StyledFooter from "../ui/StyledFooter";
import logo from "../../_static/img/logo-1.5x.png";

function Footer() {
  return (
    <>
      <StyledFooter>
        <div className="top-footer">
          <img src={logo} alt="Camply Logo" />
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/gear">Sewa Alat</Link>
            </li>
            <li>
              <Link to="/guide">Panduan Camping</Link>
            </li>
            <li>
              <Link to="/about-us">Tentang Kami</Link>
            </li>
          </ul>
          <ul>
            <li>&f;</li>
            <li>&i;</li>
            <li>&x;</li>
            <li>&in;</li>
            <li>&y;</li>
          </ul>
        </div>

        <div className="bot-footer">
          <p>© 2025 Camply. All rights reserved.</p>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Cookies Settings</li>
          </ul>
        </div>
      </StyledFooter>
    </>
  );
}

export default Footer;
