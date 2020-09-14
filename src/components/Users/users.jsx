import React, { useContext } from "react";
import UserItem from "./user-item";
import Welcome from "../welcome";
import "./users.css";
import GithubContext from "../../context/github/githubContext";
import CustomBounceLoader from "../spinner";

const Users = () => {
  const githubContext = useContext(GithubContext);

  const { loading, users } = githubContext;

  return (
    <>
      <CustomBounceLoader loading={loading}>
        {users.length < 1 ? (
          <Welcome />
        ) : (
          <div className="wrapper m-4">
            {users?.map((user) => (
              <UserItem key={user.id} user={user} />
            ))}
          </div>
        )}
      </CustomBounceLoader>
    </>
  );
};

export default Users;
