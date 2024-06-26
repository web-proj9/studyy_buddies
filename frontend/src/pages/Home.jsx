import React, { useState } from "react";
import Sidebar from "../components/Sidebar.jsx";
import { useNavigate } from "react-router-dom";
import './loginRegistration.css';

function Home() {
  const navigate = useNavigate();

  const handleNavToSolo = () => {
    // Navigate to the '/solo' route
    navigate("/solo");
  };
  const handleNavToGroup = () => {
    navigate("/group");
    // Add navigation logic here
  };

  return (
    <div className="flex">
       <div className="w-16 h-screen bg-primary">
          <Sidebar />
        </div>
        <div className="h-screen flex-1 bg-cover flex">
      <div className="h-screen w-1/2  flex flex-1 border-r-2 border-slate-600 items-center justify-center">
        <div
          className="h-1/3 w-1/2 bg-[#195b74] rounded-lg flex items-center justify-center hover:scale-105 delay-75"
          onClick={handleNavToSolo}
        >
          <h1 className="text-text text-4xl">Start Studying Solo</h1>
        </div>
      </div>
      <div className="h-screen w-1/2  flex flex-1 items-center justify-center">
        <div
          className="w-1/2 h-1/3 bg-[#243257] rounded-lg flex items-center justify-center hover:scale-105 delay-75"
          onClick={handleNavToGroup}
        >
          <h1 className="text-text text-4xl">Start a Study Group</h1>
        </div>
      </div>
    </div>
    </div>
    
  );
}

export default Home;
