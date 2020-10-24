import React from "react";
import DashBoard from "./components/DashBoard";
import Header from "./components/Header";
import BgImage from "./assets/images/spacex-bg-image.webp";
import { withRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <div
        style={{
          backgroundImage: `url(${BgImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          opacity: 0.95,
          color: "white",
        }}
      >
        <DashBoard />
      </div>
    </div>
  );
}

export default withRouter(App);
