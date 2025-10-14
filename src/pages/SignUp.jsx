import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext.jsx";


const SignUp = () => {
  const {setUser} = React.useContext(UserContext);

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency: "no",
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
    setUser(formData);
    navigate("/account");
  };

  return (
    <form className="h-full pb-5 pt-5" action="" onSubmit={handleSubmit}>
      <div className="h-full flex flex-col justify-between gap-2 pb-2">
        <div className="text-left flex flex-col">
          <h1 className="text-2xl font-Inter font-bold ">Create your</h1>
          <h1 className="text-2xl font-Inter font-bold ">PopX Account</h1>

          <div className="mt-4 flex flex-col gap-4">
            <div className="relative">
              <input
                id="fullName"
                name="fullName"
                type="text"
                value={formData.fullName}
                onChange={handleChange}
                placeholder=" Enter Full Name"
                className="peer block w-full font-Inter font-medium  appearance-none rounded border border-input-border bg-transparent px-3 pb-2.5 pt-4 text-sm text-gray-900 focus:outline-none focus:ring-0 "
                aria-label="Name"
                required
              />
              <label
                htmlFor="name"
                className="absolute left-3 z-10 bg-global-bg px-2  font-Inter font-bold  text-primary 
                     top-0 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100
                      "
              >
                Full Name<span className="text-red-500">*</span>
              </label>
            </div>
            <div className="relative">
              <input
                onChange={handleChange}
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                placeholder="Enter Phone No."
                pattern="[0-9]{10}"
                className="peer block w-full font-Inter font-medium  appearance-none rounded border border-input-border bg-transparent px-3 pb-2.5 pt-4 text-sm text-gray-900 focus:outline-none focus:ring-0 "
                aria-label="Phone"
                required
              />
              <label
                htmlFor="phone"
                className="absolute left-3 z-10 bg-global-bg px-2 transform font-Inter font-bold  text-primary duration-200
                     top-0 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100
                      "
              >
                Phone number<span className="text-red-500">*</span>
              </label>
            </div>
            <div className="relative">
              <input
                id="email"
                onChange={handleChange}
                name="email"
                type="email"
                value={formData.email}
                // onChange={}
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
                Email address<span className="text-red-500">*</span>
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
                placeholder="Enter Password"
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
            <div className="relative">
              <input
                onChange={handleChange}
                id="company"
                name="company"
                type="text"
                value={formData.company}
                // onChange={}
                placeholder="Enter Company"
                className="peer block w-full font-Inter font-medium  appearance-none rounded border border-input-border bg-transparent px-3 pb-2.5 pt-4 text-sm text-gray-900 focus:outline-none focus:ring-0 "
                aria-label="Company"
                required
              />
              <label
                htmlFor="company"
                className="absolute left-3 z-10 bg-global-bg px-2 transform font-Inter font-bold  text-primary duration-200
                     top-0 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100
                      "
              >
                Company name<span className="text-red-500">*</span>
              </label>
            </div>
            <h4 className="font-Inter text-gray-900">Are you an Agency?<span className="text-red-500">*</span></h4>
            <div className="flex gap-6">
              <div className="flex items-center me-4">
                <input
                  onChange={handleChange}
                  id="agency-yes"
                  type="radio"
                  value="yes"
                  name="agency"
                  checked={formData.agency === "yes"}
                  className="w-4 h-4 text-blue-600 outline-none bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 "
                />
                <label
                  htmlFor="agency-yes"
                  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-900"
                >
                  Yes
                </label>
              </div>
              <div className="flex items-center me-4">
                <input
                  onChange={handleChange}
                  id="agency-no"
                  type="radio"
                  value="no"
                  name="agency"
                  checked={formData.agency === "no"}
                  className="w-4 h-4 text-blue-600 bg-gray-100 outline-none border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="agency-no"
                  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-900"
                >
                  No
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded font-bold font-Inter cursor-pointer "
          >
            Create Account
          </button>
        </div>
      </div>
    </form>
  );
};

export default SignUp;
