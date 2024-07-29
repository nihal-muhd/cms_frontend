import React from "react";
import SectionTitle from "../section-components/SectionTitle";
import SectionImage from "../section-components/SectionImage";
import "./HeroSectionRenderer.scss";

const componentMappings = {
  title: SectionTitle,
  image: SectionImage,
};

const HeroSectionRenderer = ({ data, component }) => {
  return (
    <>
      {component?.map((comp, index) => {
        const Component = componentMappings[comp.name];
        if (!Component) {
          return <div key={index}>Unknown component</div>;
        }
        const className = `component-wrapper ${comp.name}-component`;
        return (
          <div key={index} className={className}>
            <Component data={data[comp.name]} />
          </div>
        );
      })}
    </>
  );
};

export default HeroSectionRenderer;
