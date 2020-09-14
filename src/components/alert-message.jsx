import React from "react";

import { AiOutlineWarning } from "react-icons/ai";

const AlertMessage = ({ err }) => {
  return (
    <>
      {err && (
        <div className="flex items-center text-center bg-red-600 text-sm fixed rounded-md py-4 px-8 mx-5 mt-20 top-0 right-0">
          <AiOutlineWarning className="mr-1" fill="#fff" size="1.2rem" />{" "}
          <p className="text-white text-base"> {err} </p>
        </div>
      )}
    </>
  );
};

export default AlertMessage;
