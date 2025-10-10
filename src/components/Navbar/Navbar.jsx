import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaUserCircle  } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import "./navBar.scss";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (id) => {
    if (location.pathname === "/") {
      // Already on home → just scroll
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Navigate to home first, then scroll after render
      navigate("/", { state: { scrollTo: id } });
    }
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          {/* Logo */}
          <div className="logo-container">
            <img
              src="" // replace with your profile image path
              alt=""
              className="logo"
              onClick={() => setShowPreview(true)}
            />
            <Link to="/">Logo</Link>
          </div>

          {/* Desktop Menu */}
          <div className="nav-links-container">

            {/* Social Icons */}
            <div className="social-icons">
              {/* <a href="#">
                <FaFacebookF />
              </a> */}
              <a href="" target="_blank">
                <FaShoppingCart />
              </a>
              <a href="" target="_blank">
                <FaUserCircle />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </div>
        </div>

      </nav>
    </>
  );
};

export default NavBar;
