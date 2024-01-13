import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Icon from "react-icons-kit";

import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";

export default function Login() {
  const [inputType, setInputType] = useState("password");
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);
  const { login } = useAuth();

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    setError("");
    setStatus("submitting");
    await login(loginFormData.email, loginFormData.password)
      .then((user) => {
        navigate("/", { replace: true });
      })
      .catch((error) => {
        const errorString = error.message
          .split("/")[1]
          .slice(0, -2)
          .split("-")
          .join(" ");
        setError(`Failed to log in : ${errorString} `);
      })
      .finally(() => {
        setStatus("idle");
      });
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setLoginFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <div className="login-container flex items-center  h-screen text-white">
      <div className="glass-container ">
        <h1 className="text- text-5xl my-2 text-[#53ddff] ">Sign in </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-2 my-3  ">
          <label className="text-2xl" htmlFor="login-email">
            Email
          </label>
          <input
            id="login-email"
            name="email"
            onChange={handleChange}
            type="email"
            placeholder="✉️ example@hotmail.com"
            value={loginFormData.email}
            className="input"
            required
          />
          <label className="text-2xl" htmlFor="login-password">
            Password
          </label>
          <div className="flex items-center px-2 rounded-md bg-white">
            <input
              id="login-password"
              name="password"
              onChange={handleChange}
              type={inputType}
              placeholder="🔒 123456"
              value={loginFormData.password}
              minLength={6}
              className="input -ml-2"
              required
            />
            {inputType === "password" ? (
              <Icon
                icon={eyeOff}
                onClick={() => setInputType("text")}
                className="cursor-pointer"
                size={25}
                style={{ display: "flex", color: "black" }}
              />
            ) : (
              <Icon
                icon={eye}
                onClick={() => setInputType("password")}
                className="cursor-pointer"
                size={25}
                style={{ display: "flex", color: "black" }}
              />
            )}
          </div>

          {error && (
            <div className="alert">
              <h3>{error}</h3>
            </div>
          )}
          <button
            className="bg-gray-600 hover:bg-[#00ccff] py-2.5 rounded-md my-3"
            disabled={status === "submitting"}
          >
            {status === "submitting" ? "Logging in..." : "Log In"}
          </button>
        </form>
        <div>
          <Link
            className="text-xl text-[#53ddff] hover:text-[#00ccff]"
            to="/forgot-password"
          >
            Forgot Password?
          </Link>
        </div>
        <div className="flex items-center gap-1 mt-2">
          <h2 className="text-xl">Don’t have an account?</h2>{" "}
          <Link
            className="text-[#53ddff]  hover:text-[#00ccff] text-xl"
            to="/sign-up"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}
