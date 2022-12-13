import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar, BigSidebar, SmallSidebar } from "../../components";
import Wrapper from "../../assets/wrappers/SharedLayout";

export const SharedLayout = () => {
  return (
    <Wrapper>
      <main className="dashboard">
        <SmallSidebar />
        <BigSidebar />
        <div>
          <Navbar />
          <div className="dashbord-page">
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  );
};
