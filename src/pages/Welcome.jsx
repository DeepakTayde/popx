import React from "react";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-2 justify-end pb-2">
      <div className="text-left mb-2">
        <h1 className="text-3xl font-Inter font-bold mb-1">Welcome to PopX</h1>
        <p className=" text-gray-600 ">Lorem ipsum dolor sit amet,</p>
        <p className=" text-gray-600 "> consectetur adipiscing elit.</p>
      </div>
      <div className="flex flex-col gap-4">
        <button
          type="button"
          className="w-full bg-primary text-white py-2 rounded font-bold font-Inter cursor-pointer "
          onClick={() => navigate("/signup")}
        >
          Create Account
        </button>
        <button
          type="button"
          onClick={() => navigate("/login")}
          className="w-full bg-secondary text-indigo-950 py-2 rounded font-bold font-Inter cursor-pointer "
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
};

export default Welcome;
