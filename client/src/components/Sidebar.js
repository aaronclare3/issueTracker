import React, { useState } from "react";
import { Link, Redirect, useHistory, withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";

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
  const dispatch = useDispatch();
  const history = useHistory();

  const toggleSidebar = () => {
    setShowSidebar((showSidebar) => !showSidebar);
  };

  const handleLogout = () => {
    setShowSidebar(false);
    dispatch(logoutUser());
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
            <Link to='/dashboard'>
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
        <div className='footerLinks'>
          <div>{/* <p>{username.charAt(0).toUpperCase()}</p> */}</div>
          <h5 onClick={handleLogout}>Logout</h5>
        </div>
      </div>
    </>
  );
};

export default withRouter(Sidebar);
