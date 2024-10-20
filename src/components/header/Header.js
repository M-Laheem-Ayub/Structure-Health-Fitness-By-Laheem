import React, { useState } from "react";
import './Header.css';

const Header = () => {
  const [isSearchVisible, setSearchVisible] = useState(false);

  const toggleSearch = () => {
    setSearchVisible(!isSearchVisible);
  };

  return (
    <header className="header ps-lg-5 pe-lg-4">
      <nav className="mx-lg-2 navbar bg-transparent navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand image-container" href="#">
            <img className="hover-image" src="https://st.structure.com.pk/wp-content/uploads/2023/07/Sturcture-logo.png" alt="" />
          </a>
          <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <img src={`${process.env.PUBLIC_URL}/assets/images/menu.png`} className="menu-icon" />
            <span className="text-light menu-text">Menu</span>
          </button>
          
          <div className="collapse navbar-collapse w-100" id="navbarSupportedContent">
            <ul className="navbar-nav d-flex justify-content-end w-100 mb-2 mb-lg-0">
              <li className="nav-item n-item">
                <a className="nav-link n-item text-light" aria-current="page" href="#">Why Us</a>
              </li>
              <li className="nav-item n-item">
                <a className="nav-link n-item text-light" href="#">Membership</a>
              </li>
              <li className="nav-item n-item">
                <a className="nav-link n-item text-light" href="#">Our Branches</a>
              </li>
              <li className="nav-item n-item">
                <a className="nav-link n-item text-light" href="#">Blog</a>
              </li>
              <li className="nav-item n-item">
                <a className="nav-link n-item text-light" href="#">Contact</a>
              </li>
              <li className="nav-item">
                <button type="button" className="join-btn border-0 text-light">Join Now</button>
              </li>
              <li className="nav-item s-icon">
                <a className="nav-link" href="#" onClick={toggleSearch}>
                <img className="search-icon" src={`${process.env.PUBLIC_URL}/assets/images/search icon.png`} alt="Search" />
                </a>
              </li>
            </ul>
            {/* Search input field */}
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
