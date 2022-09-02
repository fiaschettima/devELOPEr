import React from "react";

import { FaUserCircle, FaRegCalendarAlt } from "react-icons/fa";
import { RiHeartsFill } from "react-icons/ri";
import { BsFillChatDotsFill } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { BsFillTerminalFill } from "react-icons/bs";
import "./Sidebar.css";
const Sidebar = () => {
  return (
    <>
      <div className="menu">
        <ul>
          {/* {navLinks.map(({ url, name }) => ( */}
          <li>
            <a href="/swipe">
              <AiFillHome />
            </a>
          </li>
          <li>
            <a href="/profile">
              <FaUserCircle />
            </a>
          </li>
          <li>
            <a href="/matches">
              <RiHeartsFill />
            </a>
          </li>

          <li>
            <a href="/chat">
              <BsFillChatDotsFill />
            </a>
          </li>

          <li>
            <a href="/leetcode">
              <BsFillTerminalFill />
            </a>
          </li>
        </ul>
      </div>
      <div className="vertical"></div>
    </>
  );
};

export default Sidebar;
//     <li>
// <a href="/events">
// <FaRegCalendarAlt />
// </a>
// </li>
