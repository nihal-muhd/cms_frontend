import React, { useEffect, useState } from "react";
import "./AdminDashboard.scss";
import axios from "axios";
import { API_URL, API_VERSION, BASE_URL } from "../../../constants/environment";
import { useCookies } from "react-cookie";
import AdminSectionRenderer from "../../../components/admin-dashboard/AdminSectionRenderer";

const AdminDashboard = () => {
  const [cookies] = useCookies(["token"]);
  const [config, setConfig] = useState(null);
  useEffect(() => {
    const fetchUiConfig = async () => {
      const response = await axios.get(
        BASE_URL + API_URL + API_VERSION + "/admin/ui-preference/dashboard",
        {
          headers: { Authorization: `Bearer ${cookies.token}` },
        }
      );
      setConfig(response.data);
    };

    fetchUiConfig();
  }, []);

  return (
    <div className="admin-dashboard-wrap">
      {config
        ? config.sectionConfig.map((section) => (
            <AdminSectionRenderer key={section.name} section={section} />
          ))
        : "Loading..."}
    </div>
  );
};

export default AdminDashboard;
