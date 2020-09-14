import React from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

const Header = () => {
  return (
    <nav className="lg:flex flex-wrap items-center lg:justify-between p-4 lg:px-12 text-white bg-gray-900 ">
      <ul>
        <li className="text-2xl flex items-center ">
          <FaGithub className="inline mr-1" size="1.5rem" />{" "}
          <Link to="/">
            {" "}
            Github <em> Mini </em>{" "}
          </Link>{" "}
        </li>
      </ul>

      <ul>
        <li>
          {" "}
          <Link to="/">Home</Link>{" "}
        </li>
      </ul>
    </nav>
  );
};

export default Header;
