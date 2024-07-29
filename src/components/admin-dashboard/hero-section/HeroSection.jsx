import React from "react";
import "./HeroSection.scss";
import HeroSectionRenderer from "./HeroSectionRenderer";

const HeroSection = ({ data }) => {
  return (
    <div className="hero-section-wrap">
      <div className="hero-head">
        <div className="section-title">{data?.displayName}</div>
        <div className="section-btn-wrap">
          {data?.buttons?.map((button, index) => (
            <button key={index} className="btn section-btn">
              {button.displayName}
            </button>
          ))}
        </div>
      </div>
      <div className="hero-content-wrap">
        {data.data.map((val, index) => (
          <HeroSectionRenderer
            key={index}
            data={val}
            component={data.components}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
