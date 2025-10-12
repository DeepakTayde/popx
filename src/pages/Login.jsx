import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // Here you can add further submission logic, like sending data to a server
    navigate("/account");
  };

  return (
    <form className="h-full pb-5 pt-5" action="" onSubmit={handleSubmit}>
      <div className="h-full flex flex-col  gap-4 pb-2">
        <div className="text-left flex flex-col">
          <h1 className="text-2xl font-Inter font-bold ">Signin to your</h1>
          <h1 className="text-2xl font-Inter font-bold ">PopX Account</h1>

          <div className="mt-4 flex flex-col gap-4">
            <div className="relative">
              <input
                id="email"
                onChange={handleChange}
                name="email"
                type="email"
                value={formData.email}

                placeholder="Enter Email address"
                className="peer block w-full font-Inter font-medium  appearance-none rounded border border-input-border bg-transparent px-3 pb-2.5 pt-4 text-sm text-gray-900 focus:outline-none focus:ring-0 "
                aria-label="Email"
                required
              />
              <label
                htmlFor="email"
                className="absolute left-3 z-10 bg-global-bg px-2 transform font-Inter font-bold  text-primary duration-200
                     top-0 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100
                      "
              >
                Email<span className="text-red-500">*</span>
              </label>
            </div>
            <div className="relative">
              <input
                onChange={handleChange}
                id="password"
                name="password"
                type="password"
                value={formData.password}
                // onChange={}
                placeholder=" Enter Password"
                className="peer block w-full font-Inter font-medium  appearance-none rounded border border-input-border bg-transparent px-3 pb-2.5 pt-4 text-sm text-gray-900 focus:outline-none focus:ring-0 "
                aria-label="Password"
                required
              />
              <label
                htmlFor="password"
                className="absolute left-3 z-10 bg-global-bg px-2 transform font-Inter font-bold  text-primary duration-200
                     top-0 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100
                      "
              >
                Password<span className="text-red-500">*</span>
              </label>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <button
            disabled={!formData.email && !formData.password}
            type="submit"
            className={`w-full  py-2 rounded font-bold font-Inter  ${
              formData.email && formData.password
                ? "bg-primary text-white cursor-pointer"
                : "bg-muted text-white cursor-not-allowed"
            }`}
          >
            Login
          </button>
        </div>
      </div>
    </form>
  );
};

export default Login;
