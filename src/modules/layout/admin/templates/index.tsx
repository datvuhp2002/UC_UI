import React from "react";
import Header from "./header";
import Sidebar from "./sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="admin">
        <Header />
        <Sidebar />
        <main className="container">{children}</main>
      </div>
    </>
  );
};

export default Layout;
