import Button from "../ui/button";
import GreenButton from "../ui/button/GreenButton";
import Nav from "../ui/nav";
import { Link } from "react-router-dom";
import MobileNav from "../ui/nav/MobileNav";
import { useState } from "react";
import { useAuth } from "../../Context/AuthContext";
import logo from "../../_static/img/logo-1.5x.png";
import logo1 from "../../_static/img/logo-1x.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenu = () => setMenuOpen(!menuOpen);
  const auth = useAuth();

  return (
    <>
      <Nav>
        <Link to="/">
          <img src={logo} alt={"Logo Camply"} />
        </Link>
        <div className="toggle-menu" onClick={handleMenu}>
          Menu
          <ul id={"nav-itemss"} className={menuOpen ? "nav-open" : "nav-close"}>
            <li>
              <Link to="/">Beranda</Link>
            </li>
            <li>
              <Link to="/gear">Sewa Alat</Link>
            </li>
            <li>
              <Link to="/guide">Panduan Camping</Link>
            </li>
            {auth.user && (
              <li>
                <Link to="/checklist">Checklist Item</Link>
              </li>
            )}
            <li>
              <Link to="/about-us">Tentang Kami</Link>
            </li>
          </ul>
        </div>
        <ul className="large-menu">
          <li>
            <Link to="/">Beranda</Link>
          </li>
          <li>
            <Link to="/gear">Sewa Alat</Link>
          </li>
          <li>
            <Link to="/guide">Panduan Camping</Link>
          </li>
          {auth.user && (
            <li>
              <Link to="/checklist">Checklist Item</Link>
            </li>
          )}
          <li>
            <Link to="/about-us">Tentang Kami</Link>
          </li>
        </ul>
        <div className="menu-button">
          {!auth.user ? (
            <>
              <Link to="/login">
                <Button $small>Masuk</Button>
              </Link>
              <Link to="/register">
                <GreenButton $small $full>
                  Buat Akun
                </GreenButton>
              </Link>
            </>
          ) : (
            <Button $small onClick={() => auth.logOut()}>
              Logout
            </Button>
          )}
        </div>
      </Nav>

      <MobileNav>
        <Link to="/">
          <img src={logo1} alt={"Logo Camply"} />
        </Link>
        <div onClick={handleMenu}>Icon Burger</div>
        <div id="nav-items" className={menuOpen ? "nav-open" : "nav-close"}>
          <div className="nav-header">
            <Link to="/">
              <img src={logo1} alt={"Logo Camply"} />
            </Link>
            <div onClick={handleMenu}>Icon Close</div>
          </div>
          <ul>
            <li>
              <Link to="/" onClick={() => setMenuOpen(false)}>
                Beranda
              </Link>
            </li>
            <li>
              <Link to="/gear" onClick={() => setMenuOpen(false)}>
                Sewa Alat
              </Link>
            </li>
            <li>
              <Link to="/guide" onClick={() => setMenuOpen(false)}>
                Panduan Camping
              </Link>
            </li>
            {auth && (
              <li>
                <Link to="/checklist">Checklist Item</Link>
              </li>
            )}
            <li>
              <Link to="/about-us" onClick={() => setMenuOpen(false)}>
                Tentang Kami
              </Link>
            </li>
          </ul>

          <div className="menu-button">
            <Link to="/login">
              <Button $small $full>
                Masuk
              </Button>
            </Link>
            <Link to="/register">
              <GreenButton $small $full>
                Buat Akun
              </GreenButton>
            </Link>
          </div>
        </div>
      </MobileNav>
    </>
  );
}

export default Navbar;
