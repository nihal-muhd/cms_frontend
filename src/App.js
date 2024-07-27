import { Route, Routes } from "react-router-dom";
import AdminLayout from "./layout/AdminLayout";
import UserLayout from "./layout/UserLayout";
import Login from "./pages/login/Login";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        {/* User routes */}
        <Route path="/*" element={<UserLayout />} />

        {/* Admin login route */}
        <Route path="/admin/login" element={<Login />} />

        {/* Admin protected routes */}
        <Route path="/admin/*" element={<AdminLayout />} />
      </Routes>
    </>
  );
}

export default App;
