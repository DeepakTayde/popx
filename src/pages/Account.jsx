import React from "react";

const Account = () => {
  return (
    <div className="flex flex-col justify-start items-start w-full h-full">
      <div className="w-full">
        <h3 className="text-gray-900 font-Inter font-bold bg-white py-5">
          Account Settings
        </h3>
      </div>
      <div className="w-full h-full flex flex-col">
        <div className="w-full  flex justify-start items-start py-5 gap-5">
          <img src="../assets/react.svg" alt="" className="w-15 h-15 rounded-full bg-purple-500"/>
          <div className="flex flex-col">
            <h2 className="text-gray-900 font-Inter font-bold">Marry Doe</h2>
            <h3 className="text-gray-600 font-Inter ">deepak@gmail.com</h3>
          </div>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ipsam vitae accusantium deserunt error blanditiis, nihil, </p>
      <div className="w-full h-[1px] bg-gray-300" />

      </div>
    </div>
  );
};

export default Account;
