import React from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaGlobeAfrica } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full p-4 lg:p-12 flex text-center justify-center items-center mx-auto ">
      <p className="text-center ">
        &copy; {new Date().getFullYear()} Olaonipekun Carew. All rights
        reserved.
      </p>

      <a
        className="ml-2 inline"
        href="https://twitter.com/itscarew"
        target="_/blank"
      >
        <AiOutlineTwitter size="1.2rem" />{" "}
      </a>
      <a
        className="ml-2 inline"
        href="http://olaonipekuncarew.netlify.app/"
        target="_/blank"
      >
        <FaGlobeAfrica size="1.2rem" />{" "}
      </a>
    </div>
  );
};

export default Footer;
