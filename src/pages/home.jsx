import React from "react";
import MainLayout from "../layouts/main-layout";
import Search from "../components/search";
import AlertMessage from "../components/alert-message";
import Users from "../components/Users/users";

const HomePage = () => {
  return (
    <MainLayout>
      <AlertMessage />
      <Search />
      <Users />
    </MainLayout>
  );
};

export default HomePage;
