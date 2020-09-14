import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./pages/home";
import NotFoundPage from "./pages/404";
import EachUserPage from "./pages/each-user";

//context api
import GithubState from "./context/github/githubState";

const App = () => {
  return (
    <GithubState>
      <div className="bg-white text-gray-900 ">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/user/:username" component={EachUserPage} />
            <Route exact path="*" component={NotFoundPage} />
          </Switch>
        </BrowserRouter>
      </div>
    </GithubState>
  );
};

export default App;
