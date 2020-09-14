import React from "react";
import { Link } from "react-router-dom";

const UserItem = ({ user: { login, avatar_url } }) => {
  return (
    <div className="text-center border border-gray-400 p-8">
      <img
        src={avatar_url}
        alt={avatar_url}
        className="rounded-full h-32 w-32 m-4 mx-auto"
      />
      <p> {login}</p>
      <Link
        className="flex items-center justify-center py-2 px-4 rounded bg-gray-900 w-48 mx-auto mt-8 m-4 text-white "
        to={`/user/${login}`}
      >
        More Info
      </Link>
    </div>
  );
};

export default UserItem;
