import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import "../css/navBar.scss";

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
          <div className="logo">
            <img
              src="/profile-pic.jpg" // replace with your profile image path
              alt="profile"
              className="profile-img"
              onClick={() => setShowPreview(true)}
            />
            <Link to="/">s.n.sanjay</Link>
          </div>

          {/* Desktop Menu */}
          <div className="nav-links-container">
            <ul className="nav-links">
              <li>
                <a onClick={() => handleNavClick("home")}>Home</a>
              </li>
              <li>
                <a onClick={() => handleNavClick("work")}>Work</a>
              </li>
              <li>
                <a onClick={() => handleNavClick("about")}>About</a>
              </li>
              <li>
                <a onClick={() => handleNavClick("contact")}>Contact</a>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="social-icons">
              {/* <a href="#">
                <FaFacebookF />
              </a> */}
              <a href="https://github.com/purfull" target="_blank">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/sn-sanjay" target="_blank">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <ul className="mobile-menu">
            <li>
              <Link to="/" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/work" onClick={() => setIsOpen(false)}>
                Work
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setIsOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
            </li>
            <div className="mobile-social">
              {/* <a href="#">
                <FaFacebookF />
              </a> */}
              <a href="#">
                <FaGithub />
              </a>
              <a href="#">
                <FaLinkedinIn />
              </a>
            </div>
          </ul>
        )}
      </nav>
      {/* Image Preview Modal */}
      {showPreview && (
        <div className="preview-overlay" onClick={() => setShowPreview(false)}>
          <div className="preview-container">
            <img
              src="/profile-pic.jpg" // same as profile image
              alt="profile preview"
              className="preview-img"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
