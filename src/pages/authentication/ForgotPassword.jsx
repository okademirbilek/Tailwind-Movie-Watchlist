import React, { useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function ForgotPassword() {
  const [loginFormData, setLoginFormData] = useState({
    email: "",
  });
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);
  const [message, setMessage] = useState("");
  const { resetPassword } = useAuth();

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setMessage("");
    setError("");
    setStatus("submitting");
    await resetPassword(loginFormData.email)
      .then((user) => {
        setMessage("Check your inbox for further instructions");
      })
      .catch((error) => {
        setError("Failed to reset password : Email not found");
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
      <div className="glass-container">
        <h1 className="text-4xl my-2 text-[#53ddff] ">Reset password</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-2 my-3">
          <label className="text-2xl" htmlFor="reset-email">
            Email
          </label>
          <input
            id="reset-email"
            name="email"
            onChange={handleChange}
            type="email"
            placeholder="✉️ example@hotmail.com"
            value={loginFormData.email}
            className="input"
            required
          />
          {error && (
            <div className="alert">
              <h3 className="login-error">{error}</h3>
            </div>
          )}
          <button
            className="bg-gray-600 hover:bg-[#00ccff] py-2.5 rounded-md my-3"
            disabled={status === "submitting"}
          >
            {status === "submitting" ? "waiting..." : "Reset Password"}
          </button>
          {message && (
            <div className="bg-green-500 px-1 py-2.5 rounded">
              <h3>{message}</h3>
            </div>
          )}
        </form>
        <div className="text-xl">
          go back to{" "}
          <Link
            className="text-[#53ddff]  hover:text-[#00ccff] text-xl"
            to="/login"
          >
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}
