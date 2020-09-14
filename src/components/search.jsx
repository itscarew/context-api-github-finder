import React, { useState, useContext } from "react";
import GithubContext from "../context/github/githubContext";

const Search = () => {
  const githubContext = useContext(GithubContext);

  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      githubContext.setAlertMessage("Please enter something");
    } else {
      githubContext.searchUsers(text);
    }
  };

  const clear = (e) => {
    e.preventDefault();
    githubContext.clearUsers();
  };

  const onChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="m-4 lg:w-1/2 mx-auto">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Search Users ....."
          value={text}
          name="text"
          onChange={onChange}
          className="w-full px-4 py-1 text-1xl border border-gray-500 placeholder-gray-900 focus:outline-none focus:shadow-outline rounded-sm  "
        />
        <div className="flex justify-between flex-wrap lg:flex-no-wrap">
          <button
            type="submit"
            className="flex items-center justify-center py-1 px-4 rounded bg-blue-600 hover:bg-blue-700 w-full lg:w-1/2 m-2 text-white "
          >
            Search
          </button>
          <button
            type="reset"
            onClick={clear}
            className="flex items-center justify-center py-2 px-4 rounded bg-gray-900 w-full lg:w-1/2 m-2 text-white "
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
