import React from "react";
import "./AdminHeader.scss";
import AdminSearch from "../search/AdminSearch";
import AdminProfile from "../admin-profile/AdminProfile";
import Notification from "../notification/Notification";

const AdminHeader = ({ selectedSidemenu }) => {
  return (
    <>
      <div className="header-wrapper">
        <div className="header-title">{selectedSidemenu}</div>
        <div className="header-right">
          <AdminSearch />
          <Notification />
          <AdminProfile />
        </div>
      </div>
    </>
  );
};

export default AdminHeader;
