import React from "react";
import HeroSection from "./hero-section/HeroSection";
import PageContent from "./page-content/PageContent";

const AdminSectionRenderer = ({ section }) => {
  switch (section.name) {
    case "heroSection":
      return <HeroSection data={section} />;
    case "pageContent":
      return <PageContent data={section} />;
    default:
      return <div>Unknown section type</div>;
  }
};

export default AdminSectionRenderer;
