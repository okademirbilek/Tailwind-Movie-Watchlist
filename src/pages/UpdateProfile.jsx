import React, { useState } from "react";

import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Icon } from "react-icons-kit";
import { chevronLeft } from "react-icons-kit/fa/chevronLeft";

export default function UpdateProfile() {
  const { currentUser, updateEmailUser, updatePasswordUser } = useAuth();
  const [updateFormData, setUpdateFormData] = useState({
    email: currentUser.email,
    password: "",
    passwordConfirm: "",
  });

  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (updateFormData.password !== updateFormData.passwordConfirm) {
      return setError("Passwords do not match");
    }

    const promises = [];
    setStatus("idle");
    setError("");

    if (updateFormData.email !== currentUser.email) {
      promises.push(updateEmailUser(updateFormData.email));
    }
    if (updateFormData.password) {
      promises.push(updatePasswordUser(updateFormData.password));
    }

    Promise.all(promises)
      .then(() => {
        navigate("/dashboard");
      })
      .catch(() => {
        setError("Failed to update account");
      })
      .finally(() => {
        setStatus("idle");
      });
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setUpdateFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <div className="container mx-auto min-h-[700px] flex flex-col items-center justify-center rounded-xl  lg:bg-slate-800  pb-5 ">
      <div className="w-fit flex flex-col  justify-center gap-2  bg-gray-700 px-6 pt-6 pb-8 my-4 rounded-md">
        <h1 className="text-4xl">Update Profile</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <label className="text-xl text-gray-300" htmlFor="email">
            Email
          </label>
          <input
            name="email"
            onChange={handleChange}
            type="email"
            placeholder="Email address"
            value={updateFormData.email}
            required
            className=" text-gray-800 tracking-wide text-md font-bold rounded-sm pl-2 py-1.5 pr-8 min-w-[275px] "
          />
          <label className="text-xl  text-gray-300" htmlFor="password">
            Password
          </label>
          <label className="text-sm -mt-2 text-gray-400" htmlFor="password">
            (Leave blank to keep the same)
          </label>
          <input
            id="password"
            name="password"
            onChange={handleChange}
            type="password"
            placeholder="★★★★★★★★★★★"
            value={updateFormData.password}
            className=" text-gray-800 tracking-wide text-md font-bold rounded-sm pl-2 py-1.5 pr-8 "
          />
          <label className="text-xl text-gray-300" htmlFor="passwordConfirm">
            Password Confirm
          </label>
          <input
            name="passwordConfirm"
            onChange={handleChange}
            type="password"
            placeholder="★★★★★★★★★★★"
            value={updateFormData.passwordConfirm}
            className=" text-gray-800 tracking-wide text-md font-bold rounded-sm pl-2 py-1.5 pr-8 "
          />
          {error && (
            <div className="alert">
              <h3 className="login-error">{error}</h3>
            </div>
          )}
          <button
            className="  bg-slate-800 hover:bg-gray-500 rounded-md py-1.5 mt-5"
            disabled={status === "submitting"}
          >
            {status === "submitting" ? "Updating..." : "Update"}
          </button>
        </form>
        <Link
          to="/dashboard"
          className="flex gap-2  cursor-pointer  bg-[#141212] mt-1  hover:bg-slate-800 w-fit px-4 py-1.5 rounded-md"
        >
          <Icon icon={chevronLeft} size={16} />
          <h2>Cancel</h2>
        </Link>
      </div>
    </div>
  );
}
