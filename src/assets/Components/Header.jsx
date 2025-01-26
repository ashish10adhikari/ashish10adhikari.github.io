import React from "react";
import profileImg from "../images/profile.jpg";

const Header = () => {
  return (
    <div id="#Header" className="min-h-screen flex items-center justify-center pt-20">
      <div className="flex justify-evenly container mx-auto">
        <div className=" flex flex-col items-center justify-center">
          <h3 className="text-2xl">Hi, I am</h3>
          <h2 className="text-4xl font-bold">Ashish Adhikari</h2>
          <h1 className="text-5xl font-bold">Software Developer</h1>
        </div>
        <div>
          <img src={profileImg} alt="" className="h-50 rounded-full w-full max-w-lg"/>
        </div>
      </div>
      
    </div>
  );
};

export default Header;
