import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminDashboard from "../pages/admin/dashboard/AdminDashboard";
import AdminAboutUs from "../pages/admin/about-us/AdminAboutUs";

const AdminRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="" element={<AdminDashboard />} />
        <Route path="about-us" element={<AdminAboutUs />} />
      </Routes>
    </div>
  );
};

export default AdminRoutes;
