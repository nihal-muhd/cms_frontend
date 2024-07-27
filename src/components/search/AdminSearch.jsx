import React from "react";
import "./AdminSearch.scss";

const AdminSearch = () => {
  return (
    <div className="search-wrap">
      <div className="search-icon"></div>
      <input type="text" placeholder="Search here" className="search-input" />
    </div>
  );
};

export default AdminSearch;
