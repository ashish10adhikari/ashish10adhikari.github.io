import React from "react";
import { asset } from "../assets/icons/asset";

const Skill = () => {
  return (
    <div
      className="container-fluid flex flex-col justify-evenly items-center min-h-screen "
      id="Skill"
    >
      <h1 className="text-center text-3xl font-bold text-gray-600">
        <span className="bg-gray-600 px-1 mr-2"></span> MY SKILLS
      </h1>
      <div className="container flex justify-evenly text-center gap-16 mt-5 px-40">
        <div className="w-1/2 shadow-md rounded-lg pt-5 bg-white">
          <h1 className="text-2xl font-bold text-gray-600 underline">
            Technical Skill
          </h1>
          <div className="flex flex-wrap gap-10 py-10 px-14">
            <div className="flex flex-col text-center text-md">
              <img src={asset.html} alt="HTML" className="h-14 w-14" />
              <h3>HTML</h3>
            </div>
            <div className="flex flex-col items-center text-md">
              <img src={asset.css} alt="CSS" className="h-14 w-14" />
              <h3>CSS</h3>
            </div>
            <div className="flex flex-col items-center text-md">
              <img src={asset.js} alt="JAVASCRIPT" className="h-14 w-14" />
              <h3>JAVASCRIPT</h3>
            </div>
            <div className="flex flex-col items-center text-md">
              <img
                src={asset.bootstrap}
                alt="BOOTSTRAP"
                className="h-14 w-14 filter"
              />
              <h3>BOOTSTRAP</h3>
            </div>
            <div className="flex flex-col items-center text-md">
              <img src={asset.tailwind} alt="TAILWIND" className="h-14 w-14" />
              <h3>TAILWIND</h3>
            </div>
            <div className="flex flex-col items-center text-md">
              <img src={asset.react} alt="REACT" className="h-14 w-14" />
              <h3>REACT</h3>
            </div>
            <div className="flex flex-col items-center text-md">
              <img src={asset.jquery} alt="CSS" className="h-14 w-14" />
              <h3>JQUERY</h3>
            </div>
            <div className="flex flex-col items-center text-md">
              <img src={asset.php} alt="PHP" className="h-14 w-14" />
              <h3>PHP</h3>
            </div>
            <div className="flex flex-col items-center text-md">
              <img src={asset.laravel} alt="LARAVEL" className="h-14 w-20" />
              <h3>LARAVEL</h3>
            </div>
            <div className="flex flex-col items-center text-md">
              <img src={asset.git} alt="GIT" className="h-14 w-14" />
              <h3>GIT</h3>
            </div>
            <div className="flex flex-col items-centertext-md">
              <img src={asset.github} alt="GITHUB" className="h-14 w-14" />
              <h3>GITHUB</h3>
            </div>
            <div className="flex flex-col items-center text-md">
              <img src={asset.python} alt="PYTHON" className="h-14 w-14" />
              <h3>PYTHON</h3>
            </div>
            <div className="flex flex-col items-center text-md">
              <img src={asset.selenium} alt="SELENIUM" className="h-14 w-14" />
              <h3>SELENIUM</h3>
            </div>
            <div className="flex flex-col items-center text-md">
              <img src={asset.mysql} alt="MYSQL" className="h-14 w-14" />
              <h3>MYSQL</h3>
            </div>
          </div>
        </div>
        <div className="w-1/2 shadow-md rounded-lg pt-5 bg-white">
          <h1 className="text-2xl font-bold text-gray-600 underline">
            Professional Skill
          </h1>
          <div className="flex flex-wrap gap-10 py-10 px-14">
            <div className="flex flex-col text-center justify-center items-center text-md">
              <img
                src={asset.communication}
                alt="communication"
                className="h-14 w-14 justify-center"
              />
              <h3>Communication</h3>
            </div>
            <div className="flex flex-col text-center justify-center items-center text-md">
              <img
                src={asset.creativity}
                alt="Creativity"
                className="h-14 w-14"
              />
              <h3>Creativity</h3>
            </div>
            <div className="flex flex-col text-center justify-center items-center text-md">
              <img
                src={asset.ethics}
                alt="ethics"
                className="h-14 w-14 justify-center"
              />
              <h3>Ethics</h3>
            </div>
            <div className="flex flex-col text-center justify-center items-center text-md">
              <img
                src={asset.presentation}
                alt="presentation"
                className="h-14 w-14 justify-center"
              />
              <h3>Presentation</h3>
            </div>
            <div className="flex flex-col text-center justify-center items-center text-md">
              <img
                src={asset.problemsolving}
                alt="problemsolving"
                className="h-14 w-14 justify-center"
              />
              <h3>Problem Solving</h3>
            </div>
            <div className="flex flex-col text-center justify-center items-center text-md">
              <img
                src={asset.teamwork}
                alt="teamwork"
                className="h-14 w-14 justify-center"
              />
              <h3>Teamwork</h3>
            </div>
            <div className="flex flex-col text-center justify-center items-center text-md">
              <img
                src={asset.timemgmt}
                alt="timemgmt"
                className="h-14 w-14 justify-center"
              />
              <h3>Time Management</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
