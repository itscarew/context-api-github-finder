import React, { useContext } from "react";
import GithubContext from "../context/github/githubContext";
import Header from "../components/header";
import Footer from "../components/footer";
import AlertMessage from "../components/alert-message";

const MainLayout = ({ children }) => {
  const githubContext = useContext(GithubContext);
  const { err } = githubContext;
  return (
    <div className="min-h-screen flex flex-col justify-between ">
      <AlertMessage err={err} />
      <div>
        <Header />
        <div className={`w-full`}>{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
