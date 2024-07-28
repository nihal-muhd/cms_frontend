import { Route, Routes, useNavigate } from "react-router-dom";
import AdminLayout from "./layout/AdminLayout";
import UserLayout from "./layout/UserLayout";
import Login from "./pages/login/Login";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from "./utils/protectRoutes";
import { useCookies } from "react-cookie";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getUserInfo from "./utils/userInfo";
import { setUserInfo } from "./store/userSlice";
function App() {
  const [cookies] = useCookies(['token']);
  const { user } = useSelector((state) => state.user)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const fetchUserInfo = async () => {
      if (cookies.token) {
        const userInfo = await getUserInfo(cookies.token);
        dispatch(setUserInfo(userInfo));
        navigate('/admin')
      } else {
        navigate('/admin/login')
      }
    };

    fetchUserInfo();
  }, [dispatch])
  return (
    <>
      <ToastContainer />
      <Routes>
        {/* User routes */}
        <Route path="/*" element={<UserLayout />} />
        {/* Admin login route */}
        <Route>
          <Route path="/admin/login" element={<Login />} />
        </Route>

        {/* Admin protected routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/admin/*" element={<AdminLayout />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
