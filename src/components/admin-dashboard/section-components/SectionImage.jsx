import React from "react";
import myImage from "../../../assets/svg/sections/hero-banner-1.svg";
const SectionImage = ({ data }) => {
  console.log(data);
  const imageUrl = require(`../../../assets/svg/sections/${data}`);
  const style = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "300px",
    height: "300px",
  };
  return <div style={style}></div>;
};

export default SectionImage;
