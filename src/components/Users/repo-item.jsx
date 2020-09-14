import React from "react";
import moment from "moment";
import randomColor from "randomcolor";
import { AiOutlineStar } from "react-icons/ai";
import { IoIosEye } from "react-icons/io";

const RepoItem = ({
  repo: {
    name,
    html_url,
    description,
    updated_at,
    stargazers_count,
    watchers_count,
    language,
  },
}) => {
  const color = randomColor();
  return (
    <div className="border border-gray-400 my-4 flex flex-col py-2  px-4 text-base ">
      <a
        className="font-bold text-2xl text-blue-700 mb-2"
        href={html_url}
        target="/_blank"
      >
        {name}
      </a>
      <p className="font-thin text-gray-600 mb-2"> {description} </p>
      <div className="flex items-center mb-2">
        {language && (
          <div className="flex mr-3 items-center">
            <div
              className="rounded-full h-3 w-3  mr-2"
              style={{ background: color }}
            >
              {" "}
            </div>
            <p> {language} </p>
          </div>
        )}

        <div className="flex items-center mr-3 ">
          <AiOutlineStar size="1.2rem" className="mr-1" />
          <p> {stargazers_count} </p>
        </div>
        <div className="flex items-center mr-3 ">
          <IoIosEye size="1.2rem" className="mr-1" />
          <p> {watchers_count} </p>
        </div>
        <p> Updated {moment(updated_at).fromNow()} </p>
      </div>
    </div>
  );
};

export default RepoItem;
