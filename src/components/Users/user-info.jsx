import React, { useEffect, useContext } from "react";
import GithubContext from "../../context/github/githubContext";
import { Link } from "react-router-dom";
import { GrFormPreviousLink } from "react-icons/gr";
import { FcCheckmark } from "react-icons/fc";
import { MdClose } from "react-icons/md";

import moment from "moment";
import CustomBounceLoader from "../spinner";

const UserInfo = ({ params: { username } }) => {
  const githubContext = useContext(GithubContext);

  useEffect(() => {
    githubContext.setOneUser(username);
    //eslint-disable-next-line
  }, []);

  const {
    user: {
      avatar_url,
      login,
      name,
      company,
      blog,
      location,
      email,
      hirebale,
      bio,
      followers,
      following,
      public_repos,
      public_gists,
      created_at,
    },
    loading,
  } = githubContext;

  return (
    <>
      <CustomBounceLoader loading={loading}>
        <div className="flex items-center">
          <Link to="/" className="flex items-center px-4 py-2 bg-gray-400 ">
            <GrFormPreviousLink size="1.5rem" />
            <p> go back</p>
          </Link>
          <p className="flex items-center font-semibold ml-4">
            Hirebale:
            {hirebale ? (
              <FcCheckmark size="1.3rem" width="2rem" className="ml-1" />
            ) : (
              <MdClose size="1.3rem" color="red" className="ml-1" />
            )}
          </p>
        </div>
        <div className="flex lg:flex-row flex-col flex-wrap border border-gray-400 p-8 text-base ">
          <div className="w-full lg:w-1/2 text-center ">
            <img
              src={avatar_url}
              alt={avatar_url}
              className="rounded-full h-40 w-40 m-4 mx-auto"
            />
            <h3 className="text-3xl font-semibold"> {name} </h3>
            <p> {login}</p>
            <p>
              {" "}
              <b>Location </b> : {location && location}{" "}
            </p>
          </div>
          <div className="w-full lg:w-1/2">
            {bio && <b>Bio</b>}
            <p> {bio && bio} </p>
            <a
              href={`https://github.com/${login}`}
              target="/_blank"
              className="inline-flex items-center px-4 py-2 my-4 bg-gray-900 text-white "
            >
              {" "}
              Visit Github Profile{" "}
            </a>

            <p>
              {" "}
              <b> Username </b> : {login}{" "}
            </p>
            {email && (
              <p>
                <b> Email Address </b> : {email}
              </p>
            )}
            {company && (
              <p>
                <b> Company </b> : {company}
              </p>
            )}
            {blog && (
              <p>
                <b> Website </b> :{" "}
                <a
                  href={
                    blog.includes("https") || blog.includes("http")
                      ? blog
                      : `https://${blog}`
                  }
                  target="/_blank"
                  className="text-blue-600"
                >
                  {blog}
                </a>
              </p>
            )}
            <p>
              {" "}
              <b>Joined</b> : {moment(created_at).format("MMMM Do YYYY")}{" "}
            </p>
          </div>
        </div>
        <div className="border border-gray-400 my-4 flex flex-wrap items-center justify-center py-2">
          <div className="rounded-md inline-flex items-center px-4 py-1 my-2 mx-2 bg-blue-600 text-white ">
            Followers : {followers}
          </div>
          <div className="rounded-md inline-flex items-center px-4 py-1 my-2 mx-2 bg-green-600 text-white ">
            Following : {following}
          </div>
          <div className="rounded-md inline-flex items-center px-4 py-1 my-2 mx-2 bg-gray-600 text-white ">
            Repositories : {public_repos}
          </div>
          <div className="rounded-md inline-flex items-center px-4 py-1 my-2 mx-2 bg-gray-900 text-white ">
            Gists : {public_gists}
          </div>
        </div>
      </CustomBounceLoader>
    </>
  );
};

export default UserInfo;
