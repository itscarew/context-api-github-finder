import React, { useEffect } from "react";
import Repos from "../components/Users/repos";
import UserInfo from "../components/Users/user-info";
import MainLayout from "../layouts/main-layout";

const EachUserPage = ({ match: { params } }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <MainLayout>
      <div className="mx-1 lg:mx-32 my-4">
        <UserInfo params={params} />
        <Repos params={params} />
      </div>
    </MainLayout>
  );
};

export default EachUserPage;
