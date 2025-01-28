import React from "react";
import { asset } from "../assets/icons/asset";

const Skill = () => {
  return (
    <div
      className="container-fluid flex flex-col justify-evenly items-center min-h-screen"
      id="Skill"
    >
      <h1 className="text-center text-3xl font-bold text-gray-600">
        <span className="bg-gray-600 px-1 mr-2"></span> MY SKILLS
      </h1>
      <div className="container flex justify-evenly text-center gap-16 mt-5 px-40">
        <div className="w-1/2 border-2 shadow-md rounded-lg pt-5">
          <h1 className="text-3xl font-bold text-gray-600 underline">Technical Skill</h1>
          <div className="flex flex-wrap gap-10 py-10 px-28 justify-start">
            <div className="flex flex-col text-center text-xl">
              <img src={asset.html} alt="HTML" className="h-14 w-14"/>
              <h3>HTML</h3>
            </div>
            <div className="flex flex-col items-center text-xl">
              <img src={asset.css} alt="CSS" className="h-14 w-14"/>
              <h3>CSS</h3>
            </div>
            <div className="flex flex-col items-center text-xl">
              <img src={asset.js} alt="JAVASCRIPT" className="h-14 w-14" />
              <h3>JAVASCRIPT</h3>
            </div>
            <div className="flex flex-col items-center text-lg">
              <img src={asset.bootstrap} alt="BOOTSTRAP" className="h-14 w-14"/>
              <h3>BOOTSTRAP</h3>
            </div>
            <div className="flex flex-col items-center text-xl">
              <img src={asset.tailwind} alt="TAILWIND" className="h-14 w-14"/>
              <h3>TAILWIND</h3>
            </div>
            <div className="flex flex-col items-center text-xl">
              <img src={asset.react} alt="REACT" className="h-14 w-14"/>
              <h3>REACT</h3>
            </div>
            <div className="flex flex-col items-center text-xl">
              <img src={asset.jquery} alt="CSS" className="h-14 w-14"/>
              <h3>JQUERY</h3>
            </div>
            <div className="flex flex-col items-center text-xl">
              <img src={asset.php} alt="PHP" className="h-14 w-14"/>
              <h3>PHP</h3>
            </div>
            <div className="flex flex-col items-center text-xl">
              <img src={asset.laravel} alt="LARAVEL" className="h-14 w-14"/>
              <h3>LARAVEL</h3>
            </div>
            <div className="flex flex-col items-center text-xl">
              <img src={asset.git} alt="GIT" className="h-14 w-14"/>
              <h3>GIT</h3>
            </div>
            <div className="flex flex-col items-center text-xl">
              <img src={asset.github} alt="GITHUB" className="h-14 w-14"/>
              <h3>GITHUB</h3>
            </div>
            <div className="flex flex-col items-center text-xl">
              <img src={asset.python} alt="PYTHON" className="h-14 w-14"/>
              <h3>PYTHON</h3>
            </div>
            <div className="flex flex-col items-center text-xl">
              <img src={asset.selenium} alt="SELENIUM" className="h-14 w-14"/>
              <h3>SELENIUM</h3>
            </div>
            <div className="flex flex-col items-center text-xl">
              <img src={asset.mysql} alt="MYSQL" className="h-14 w-14"/>
              <h3>MYSQL</h3>
            </div>
          </div>
        </div>
        <div className="w-1/2 border-2 shadow-md rounded-lg pt-5">
          <h1 className="text-3xl font-bold text-gray-600 underline">
            Professional Skill
          </h1>
          <div className="flex flex-wrap gap-5 py-10 px-28">

          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
