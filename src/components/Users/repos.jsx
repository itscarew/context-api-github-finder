import React, { useEffect, useContext } from "react";
import GithubContext from "../../context/github/githubContext";
import CustomBounceLoader from "../spinner";
import RepoItem from "./repo-item";

const Repos = ({ params: { username } }) => {
  const githubContext = useContext(GithubContext);

  useEffect(() => {
    githubContext.setRepos(username);
    //eslint-disable-next-line
  }, []);

  const { repos, loading } = githubContext;
  return (
    <>
      <CustomBounceLoader loading={loading}>
        {repos?.map((repo) => (
          <RepoItem repo={repo} key={repo.id} />
        ))}

        <a
          href={`https://github.com/${username}?tab=repositories`}
          target="/_blank"
          className="inline-flex items-center px-4 py-2 my-4 bg-gray-900 text-white "
        >
          Continue on Github profile
        </a>
      </CustomBounceLoader>
    </>
  );
};

export default Repos;
