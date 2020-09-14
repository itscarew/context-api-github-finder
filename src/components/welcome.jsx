import React from "react";
import { FaGithub } from "react-icons/fa";

const Welcome = () => {
  return (
    <div className="lg:w-1/2 w-full mx-auto flex items-center justify-center mt-20 ">
      <FaGithub className="inline mr-1" size="12rem" color="#000" />
    </div>
  );
};

export default Welcome;
