import React, { useState } from "react";
import AdminSidemenu from "../components/admin-sidemenu/AdminSidemenu";
import AdminRoutes from "../routes/AdminRoutes";
import AdminHeader from "../components/admin-header/AdminHeader";

const AdminLayout = () => {
  const [selectedSidemenu, setSelectedSidemenu] = useState("Dashboard");

  const handleSidemenuChange = (sidemenu) => {
    setSelectedSidemenu(sidemenu);
  };
  return (
    <div style={{ backgroundColor: "#F9FAFB", height: "100dvh" }}>
      <AdminSidemenu onSidemenuChange={handleSidemenuChange} />
      <AdminHeader selectedSidemenu={selectedSidemenu} />
      <AdminRoutes />
    </div>
  );
};

export default AdminLayout;
