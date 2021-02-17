import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
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

const Sidebar = ({ username }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const toggleSidebar = () => {
    setShowSidebar((showSidebar) => !showSidebar);
  };

  const handleLogout = () => {
    dispatch(logoutUser());
    history.push("/");
  };
  return (
    <>
      <div className='sidebar'>
        <HiMenu className='open-nav' onClick={toggleSidebar} />
      </div>

      <div className={showSidebar ? "nav-menu nav-menu-active" : "nav-menu"}>
        <BsArrowBarLeft className='close-nav' onClick={toggleSidebar} />
        <div
          style={{
            outline: "2px solid black",
            fontSize: "20px",
            float: "right",
          }}>
          <p>{username}</p>
        </div>

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
        <div className='sidebar-logout'>
          <h5 onClick={handleLogout}>Logout</h5>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
