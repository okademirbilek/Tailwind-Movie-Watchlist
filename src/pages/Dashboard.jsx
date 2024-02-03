import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

import { Icon } from "react-icons-kit";

import { userCircle } from "react-icons-kit/fa/userCircle";

export default function Dashboard() {
  const { currentUser, logout, updateUserName } = useAuth();
  const [userName, setUserName] = useState(
    currentUser?.displayName || "MovieStar123"
  );
  const [error, setError] = useState("");

  const navigate = useNavigate();

  async function handleLogout() {
    setError(" ");

    await logout()
      .then(navigate("/login"))
      .catch((error) => {
        setError("Failed to log out");
      });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setError("");
    await updateUserName({ displayName: userName, photoURL: "" })
      .then(() => {})
      .catch(() => {
        setError("Failed to update userName");
      });
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setUserName(value);
  }

  return (
    <div className="container mx-auto min-h-[700px] flex flex-col justify-center rounded-xl  lg:bg-slate-800  pb-5 ">
      <div className="flex justify-center ">
        <div className="flex flex-col gap-2  bg-gray-700 px-4 pt-10 pb-8 my-4 rounded-md">
          <div className="flex items-center gap-3 mb-4">
            <h1 className="text-3xl">Profile </h1>
            <Icon className="mb-1" icon={userCircle} size={35} />
          </div>
          <div>
            <label className="text-xl text-gray-300">Email</label>
            <h3 className="bg-gray-800 tracking-wide rounded-sm py-2 px-4 mt-2">
              {currentUser.email}
            </h3>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-2 ">
            <label className="text-xl text-gray-300" htmlFor="userName">
              Username
            </label>
            <div className="flex gap-1">
              <input
                id="userName"
                name="userName"
                onChange={handleChange}
                type="text"
                value={userName}
                placeholder="Username cannot be empty"
                maxLength={15}
                className=" text-gray-800 tracking-wide text-md font-bold rounded-sm pl-4 py-1.5 pr-6 "
              />
              <button className=" bg-gray-500 hover:bg-slate-800 rounded-sm px-4 py-0.5">
                Save
              </button>
            </div>
          </form>

          {error && <h2>{error}</h2>}
          <Link
            className="bg-slate-800 text-center underline hover:bg-opacity-75 mt-4 rounded-md py-1.5"
            to="/update-profile"
          >
            Update Profile
          </Link>
          <button
            className=" bg-gray-500 hover:bg-slate-800 rounded-md py-1.5 mt-1"
            onClick={handleLogout}
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
}
