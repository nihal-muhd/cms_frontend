import React, { useState } from "react";
import { adminSidemenu } from "../../constants/sidemenu";
import { useNavigate } from "react-router-dom";
import "./AdminSidemenu.scss";

import dashboardIcon from "../../assets/svg/admin-sidemenu/dashboard.svg";
import activeDashboardIcon from "../../assets/svg/admin-sidemenu/active-dashboard.svg";
import aboutUsIcon from "../../assets/svg/admin-sidemenu/about-us.svg";
import activeAboutUsIcon from "../../assets/svg/admin-sidemenu/active-about-us.svg";
import servicesIcon from "../../assets/svg/admin-sidemenu/services.svg";
import activeServicesIcon from "../../assets/svg/admin-sidemenu/active-services.svg";
import caseStudyIcon from "../../assets/svg/admin-sidemenu/case-study.svg";
import activeCaseStudyIcon from "../../assets/svg/admin-sidemenu/active-case-study.svg";
import contactUsIcon from "../../assets/svg/admin-sidemenu/contact-us.svg";
import logoutIcon from "../../assets/svg/admin-sidemenu/logout.svg";

const iconMap = {
  "dashboard.svg": { default: dashboardIcon, active: activeDashboardIcon },
  "about-us.svg": { default: aboutUsIcon, active: activeAboutUsIcon },
  "services.svg": { default: servicesIcon, active: activeServicesIcon },
  "case-study.svg": { default: caseStudyIcon, active: activeCaseStudyIcon },
  "contact-us.svg": { default: contactUsIcon },
  "logout.svg": { default: logoutIcon },
};

const AdminSidemenu = ({ onSidemenuChange }) => {
  const [menuItems, setMenuItems] = useState(adminSidemenu);
  const navigate = useNavigate();

  const handleItemClick = (clickedKey, route, sidemenu) => {
    setMenuItems((prevMenu) =>
      prevMenu.map((item) =>
        item.key === clickedKey
          ? { ...item, active: true }
          : { ...item, active: false }
      )
    );
    onSidemenuChange(sidemenu);
    navigate("/admin" + route);
  };
  return (
    <>
      <div className="sidemenu-container">
        <div className="sidemenu-logo"></div>
        {menuItems.map((sidemenu) => (
          <div
            className={`sidemenu-list ${sidemenu.active ? "active" : ""}`}
            key={sidemenu.key}
            onClick={() =>
              handleItemClick(
                sidemenu.key,
                sidemenu.route,
                sidemenu.displayName
              )
            }
          >
            <div
              className="sidemenu-icon"
              style={{
                backgroundImage: `url(${
                  sidemenu.active
                    ? iconMap[sidemenu.icon].active
                    : iconMap[sidemenu.icon].default
                })`,
              }}
            ></div>
            <div className="sidemenu-item">{sidemenu.displayName}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AdminSidemenu;
