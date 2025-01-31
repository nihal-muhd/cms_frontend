import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { BASE_URL, API_URL, API_VERSION } from "../../constants/environment";
import axios from "axios";
import "./Login.scss";
import { toast } from "react-toastify";
import { useCookies } from "react-cookie";
import getUserInfo from "../../utils/userInfo";
import { setUserInfo } from "../../store/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [visibleErrors, setVisibleErrors] = useState(null);
  const [cookies, setCookie] = useCookies(["token"]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        BASE_URL + API_URL + API_VERSION + "/admin/auth/login",
        {
          data,
        }
      );
      if (response) {
        const { token } = response.data;
        setCookie("token", token, {
          path: "/admin",
          expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        });
        const userInfo = await getUserInfo(token);
        dispatch(setUserInfo(userInfo));
        toast.success(response.data.message);
        navigate("/admin");
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    if (errors.email || errors.password) {
      setVisibleErrors(errors);
      const timer = setTimeout(() => {
        setVisibleErrors(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  return (
    <>
      <div className="login-wrap">
        <div className="left-col">
          <div className="left-col-wrap">
            <div className="logo"></div>
            <div className="login-title">Welcome back!</div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              style={{ marginTop: "20px" }}
            >
              <div>
                <div className="input-label">Email</div>
                <input
                  id="email"
                  type="text"
                  className="login-form"
                  {...register("email", { required: "Email is required" })}
                />
                {/* {errors.email && (
                  <p style={{ color: "red" }}>{errors.email.message}</p>
                )} */}
              </div>

              <div>
                <div className="input-label">Password</div>
                <input
                  id="password"
                  type="password"
                  className="login-form"
                  {...register("password", {
                    required: "Password is required",
                  })}
                />
              </div>
              {visibleErrors && (
                <div className="err-msg">
                  {visibleErrors.email?.message ||
                    visibleErrors.password?.message}
                </div>
              )}

              <button type="submit" className="btn login-btn">
                Login
              </button>
            </form>
          </div>
        </div>
        <div className="right-col">
          <div className="login-banner"></div>
        </div>
      </div>
    </>
  );
};

export default Login;
