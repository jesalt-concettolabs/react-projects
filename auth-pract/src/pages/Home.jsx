import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <h1 className="text-slate-700 text-4xl uppercase">Home</h1>
      <p className="text-2xl text-orange-400 m-2">To Login Click the Button</p>
      <button
        onClick={() => navigate("/login")}
        className="border-2 inline-block text-xl border-gray-700 py-1 px-2 rounded-md hover:bg-slate-400 hover:text-white"
      >
        Login
      </button>
    </div>
  );
};

export default Home;
