import React, { useState, useEffect } from "react";
import './Header.css';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons';

const Header = ({ BgColor }) => {
  const [isSearchVisible, setSearchVisible] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleSearch = () => {
    if (window.innerWidth > 992) {
      setSearchVisible(!isSearchVisible);
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleBodyClick = (event) => {
      if (!event.target.closest(".navbar")) {
        setMenuOpen(false);
      }
      if (
        !event.target.closest(".search-container") &&
        !event.target.closest(".s-icon") &&
        window.innerWidth > 992
      ) {
        setSearchVisible(false);
      }
    };
    document.body.addEventListener("click", handleBodyClick);

    return () => {
      document.body.removeEventListener("click", handleBodyClick);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 992) {
        setSearchVisible(true); // Always show search on small screens
      } else {
        setSearchVisible(false); // Hide search on larger screens
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check for screen size

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className={`header ${BgColor} ps-lg-5 pe-lg-4`}>
      <nav className="mx-lg-2 navbar bg-transparent navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand image-container" href="#">
            <img className="hover-image" src="https://st.structure.com.pk/wp-content/uploads/2023/07/Sturcture-logo.png" alt="" />
          </a>
          <button
            className={`my-navbar-toggler navbar-toggler ${isMenuOpen ? "active" : ""}`}
            type="button"
            onClick={toggleMenu}
          >
            <FontAwesomeIcon
              className={`menu-icon ${isMenuOpen ? "active" : ""}`}
              icon={isMenuOpen ? faBars : faBars}
              size="2x"
            />
            <span className={`menu-text ${isMenuOpen ? "active" : ""}`}>
              {isMenuOpen ? "Close" : "Menu"}
            </span>
          </button>

          <div className={`collapse navbar-collapse w-100 ${isMenuOpen ? "show" : ""}`} id="navbarSupportedContent">
            <ul className="navbar-nav d-flex justify-content-end w-100 mb-2 mb-lg-0">
              <li className="nav-item n-item">
                <Link className="text-decoration-none" to="/why-us">
                  <a className="nav-link n-item my-menu-btn text-light" aria-current="page" href="#">Why Us</a>
                </Link>
              </li>
              <li className="nav-item n-item">
                <Link className="text-decoration-none" to="/membership">
                  <a className="nav-link n-item my-menu-btn text-light" href="#">Membership</a>
                </Link>
              </li>
              <li className="nav-item n-item">
                <Link className="text-decoration-none" to="/our-branches">
                  <a className="nav-link n-item my-menu-btn text-light" href="#">Our Branches</a>
                </Link>
              </li>
              <li className="nav-item n-item">
                <Link className="text-decoration-none" to="/contact">
                  <a className="nav-link n-item my-menu-btn text-light" href="#">Contact</a>
                </Link>
              </li>
              <li className="nav-item">
              <Link className="text-decoration-none" to="/membership">
                <button type="button" className="join-btn my-menu-btn border-0 text-light">Join Now</button>
                </Link>
              </li>
              <li className="nav-item s-icon">
                <a className="nav-link" onClick={toggleSearch}>
                  <FontAwesomeIcon icon={faSearch} className="search-icon" />
                </a>
              </li>
            </ul>

            {isSearchVisible && (
              <div className="search-container mt-2">
                <input type="text" placeholder="Search" className="search-input" />
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
