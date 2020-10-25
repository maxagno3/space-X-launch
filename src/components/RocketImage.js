import React from "react";
import BgImage from "../assets/images/space-x.png";
import "../assets/custom.css";

function RocketImage() {
  return (
    <div className="container-image">
      <img src={`${BgImage}`} alt="Coming Soon..." />
    </div>
  );
}

export default RocketImage;
