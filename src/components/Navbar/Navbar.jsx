import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import "./navBar.scss";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [userDropdown, setUserDropdown] = useState(false);

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
              {/* <a href="" target="_blank" style={{ position: "relative" }}> */}
              <div style={{ position: "relative" }}>
                <FaUserCircle
                  size={24}
                  onClick={() => setUserDropdown(!userDropdown)}
                  style={{ cursor: "pointer" }}
                />
                {/* </a> */}
              </div>
              {userDropdown && (
                <div
                  className="user-dropdown-menu"
                  style={{
                    position: "absolute",
                    top: "30px",
                    right: 0,
                    background: "#fff",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                    zIndex: 1000,
                    width: "150px",
                  }}
                >
                  <ul style={{ listStyle: "none", margin: 0, padding: "10px" }}>
                    <li style={{ padding: "8px 0", cursor: "pointer" }}>
                      <Link to="/userprofile">Profile</Link>
                    </li>
                    <li style={{ padding: "8px 0", cursor: "pointer" }}>
                      Orders
                    </li>
                    <li style={{ padding: "8px 0", cursor: "pointer" }}>
                      Logout
                    </li>
                  </ul>
                </div>
              )}
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
