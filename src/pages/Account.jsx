import React, { useContext } from "react";
import { UserContext } from "../context/UserContext.jsx";
import { useNavigate } from "react-router-dom";
import ProfilePhoto from "../assets/ProfilePhoto.jpg"

const Account = () => {

  const {user, setUser} = useContext(UserContext);
  const navigate = useNavigate()
  const handleLogout = ()=>{
    setUser(null)
    navigate('/')
  }

  return (
    <div className="flex flex-col justify-start items-start w-full h-full">
      <div className="w-full flex justify-between bg-white items-center">
        <h3 className="text-gray-900 font-Inter font-bold  py-5">
          Account Settings
        </h3>
        <button onClick={handleLogout} className=" px-3 py-2 text-sm rounded font-Inter bg-primary text-white">Logout</button>
      </div>
      <div className="w-full h-full flex flex-col">
        <div className="w-full  flex justify-start items-start py-5 gap-5">
          <img src={ProfilePhoto} alt="" className="w-15 h-15 rounded-full bg-purple-500"/>
          <div className="flex flex-col">
            <h2 className="text-gray-900 font-Inter font-bold">{user?.fullName || "John Doe"}</h2>
            <h3 className="text-gray-600 font-Inter ">{user?.email || "johndoe@gmail.com"}</h3>
          </div>
        </div>
        <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ipsam vitae accusantium deserunt error blanditiis, nihil, </p>
      <div className="w-full h-[1px] bg-gray-300" />

      </div>
    </div>
  );
};

export default Account;
