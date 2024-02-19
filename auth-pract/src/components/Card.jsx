import React from "react";
import { useLocation } from "react-router-dom";

const Card = () => {
  const location = useLocation();
  const userData = location.state;

  return (
    <>
      <h1 className="font-bold text-2xl mb-2">LoggedIn User Profile</h1>
      <div className="max-w-sm mx-auto bg-white shadow-lg p-2 border-2 border-slate-600 rounded-lg break-all ">
        <img
          className="h-[100px] w-[100px] mx-auto border-2 border-gray-600 rounded-full"
          src={userData.image}
          alt="Card Image"
        />
        <div className="px-6 py-4">
          <h1 className="font-bold text-xl mb-2">
            {`${userData.firstName} ${userData.lastName}`}
          </h1>
          <p className="text-gray-700 text-base">{userData.token}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
