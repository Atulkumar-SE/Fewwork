import React, { useState } from "react";
import "./Header.css";
import { BsSearch } from "react-icons/bs";
import { FaBars, FaUserCircle, FaTimes } from "react-icons/fa";
import logo from '../../../images/Fewwork.svg'
import { Link } from "react-router-dom";

const Header = () => {
  const [isClose, setIsClose] = useState(false);
  const handleHamburger = () => setIsClose(!isClose);

  // const handleHamburger={() =>

  // }

  return (
    <>
      <div className="H_Container">
        <div className="M_Container">
          <div className="Logo">
          <img src={logo} alt="logo" />
            Few<span>work</span>
          </div>
          <div className="searchBar">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Job title, Keywords and company..."
            />
            <span>
              <BsSearch />
            </span>
          </div>
          <div className={isClose ? "Navbar_user active" : "Navbar_user"}>
            <ul>
              <li>
              <Link to="/">
                Home</Link>
              </li>
              <li>
              <Link to="/Reference">
              Refrence</Link>
                {/* <a href="/"></a> */}
              </li>
              <li>
              <Link to="/Resume">
              Resume</Link>
                
              </li>
              <li>
              <Link to="/LatestJob">
              Latest Job</Link>
                
              </li>
              <li>
                <div className="User">
                  <span>
                    <FaUserCircle />
                  </span>
                  <select name="user" id="user">
                    <option value="User">User</option>
                    <option value="login">Logout</option>
                    <option value="profile">Profile</option>
                  </select>
                </div>
                <div className="searchBar_Open">
                  <input
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Job title, Keywords and company..."
                  />
                  <span>
                    <BsSearch />
                  </span>
                </div>
              </li>
            </ul>
          </div>
          <div className="Hamburger" onClick={handleHamburger}>
            {isClose ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
