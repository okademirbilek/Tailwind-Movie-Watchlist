import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Icon from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";

export default function SignUp() {
  const [inputType, setInputType] = useState("password");
  const [signUpFormData, setSignUpFormData] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
  });
  //signup function from useAuth context (email, password)

  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);
  const { signup } = useAuth();

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    if (signUpFormData.password !== signUpFormData.passwordConfirm) {
      return setError("Passwords do not match");
    }

    await signup(signUpFormData.email, signUpFormData.password)
      .then((user) => {
        navigate("/login", { replace: true });
      })
      .catch((error) => {
        setError("Failed to create an account");
      })
      .finally(() => {
        setStatus("idle");
      });
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setSignUpFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <div className="login-container flex items-center  h-screen text-white">
      <div className="glass-container ">
        <h1 className="text-5xl my-2 text-[#53ddff] ">Sign up</h1>
        <div className=" pl-1 py-2.5 my-2 rounded">
          <p className="max-w-[267px] text-lg">
            ⚠️You can use a random email and password for signing up.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-2 my-3">
          <label className="text-2xl" htmlFor="sign-up-email">
            Email
          </label>
          <input
            name="email"
            onChange={handleChange}
            type="email"
            placeholder="✉️ example@hotmail.com"
            value={signUpFormData.email}
            id="sign-up-email"
            className="input"
            required
          />
          <label className="text-2xl" htmlFor="sign-up-password">
            Password
          </label>
          <div className="flex items-center px-2 rounded-md bg-white">
            <input
              id="sign-up-password"
              className="input -ml-2"
              name="password"
              onChange={handleChange}
              type={inputType}
              placeholder="Type your password"
              value={signUpFormData.password}
              minLength={6}
              maxLength={40}
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
          <label className="text-2xl" htmlFor="sign-up-confirm">
            Confirm password
          </label>
          <input
            id="sign-up-confirm"
            name="passwordConfirm"
            onChange={handleChange}
            type={inputType}
            placeholder="Confirm your password"
            value={signUpFormData.passwordConfirm}
            maxLength={40}
            required
            className="input"
          />
          {error && (
            <div className="alert">
              <h3>{error}</h3>
            </div>
          )}
          <button
            className="bg-gray-600  disabled:bg-gray-300 hover:bg-[#00ccff] py-2.5 rounded-md my-3"
            disabled={status === "submitting"}
          >
            {status === "submitting" ? "Signing up..." : "Sign up"}
          </button>
        </form>
        <div className="text-xl">
          Already have an account?{" "}
          <Link
            className="text-[#53ddff]  hover:text-[#00ccff] text-xl"
            to="/login"
          >
            {" "}
            Sign In{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}
