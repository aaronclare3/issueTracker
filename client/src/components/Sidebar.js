import React, { useState } from "react";
import { Link } from "react-router-dom";

//Icons
import { HiMenu } from "react-icons/hi";
import { BsArrowBarLeft } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { FaChalkboard } from "react-icons/fa";

//Styles
import "./Sidebar.css";

// Actions
import { logoutUser } from "../redux/actions/userActions";

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const toggleSidebar = () => {
    setShowSidebar((sidebar) => !showSidebar);
  };
  return (
    <>
      <div className='sidebar'>
        <HiMenu className='open-nav' onClick={toggleSidebar} />
      </div>

      <div className={showSidebar ? "nav-menu nav-menu-active" : "nav-menu"}>
        <BsArrowBarLeft className='close-nav' onClick={toggleSidebar} />
        <ul className='side-list'>
          <li className='side-list-item' onClick={toggleSidebar}>
            <Link to='/'>
              <FaHome className='fa' /> Home
            </Link>
          </li>
          <li className='side-list-item' onClick={toggleSidebar}>
            <Link to='/projects'>
              <FaChalkboard className='fa' /> Boards
            </Link>
          </li>
          <li className='side-list-item' onClick={toggleSidebar}>
            <Link to='/about'>
              <FaChalkboard className='fa' /> About
            </Link>
          </li>
          <li className='side-list-item' onClick={toggleSidebar}>
            <Link to='/contact'>
              <FaChalkboard className='fa' /> Contact
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
