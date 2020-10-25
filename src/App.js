import React from "react";
import DashBoard from "./components/DashBoard";
import Header from "./components/Header";
import { withRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <DashBoard />
    </div>
  );
}

export default withRouter(App);
