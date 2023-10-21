import React from "react";
import Routes from "./Routes";
import Navbar from "./header/Navbar";

function Layout() {
  return (
    <div>
      <Navbar />
      <h1>Hello world</h1>
      <Routes />
    </div>
  );
}

export default Layout;
