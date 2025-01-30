import React from "react";
import { asset } from "../assets/icons/asset";

const Skill = () => {
  return (
    <div
      className="flex flex-col justify-evenly items-center min-h-screen px-4"
      id="Skill"
    >
      <h1 className="text-center text-3xl font-bold text-gray-600 mb-8">
        <span className="bg-gray-600 px-1 mr-2"></span> MY SKILLS
      </h1>
      <div className="container flex flex-wrap justify-center gap-10">
        {/* Technical Skills Section */}
        <div className="w-full lg:w-1/2 shadow-md rounded-lg pt-5 bg-white">
          <h1 className="text-2xl font-bold text-gray-600 underline text-center">
            Technical Skill
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 py-10 px-5">
            {[
              { src: asset.html, label: "HTML" },
              { src: asset.css, label: "CSS" },
              { src: asset.js, label: "JAVASCRIPT" },
              { src: asset.bootstrap, label: "BOOTSTRAP" },
              { src: asset.tailwind, label: "TAILWIND" },
              { src: asset.react, label: "REACT" },
              { src: asset.jquery, label: "JQUERY" },
              { src: asset.php, label: "PHP" },
              { src: asset.laravel, label: "LARAVEL" },
              { src: asset.git, label: "GIT" },
              { src: asset.github, label: "GITHUB" },
              { src: asset.python, label: "PYTHON" },
              { src: asset.selenium, label: "SELENIUM" },
              { src: asset.mysql, label: "MYSQL" },
            ].map((skill, index) => (
              <div key={index} className="flex flex-col items-center text-md">
                <img src={skill.src} alt={skill.label} className="h-14 w-14" />
                <h3>{skill.label}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Skills Section */}
        <div className="w-full lg:w-1/2 shadow-md rounded-lg pt-5 bg-white">
          <h1 className="text-2xl font-bold text-gray-600 underline text-center">
            Professional Skill
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 py-10 px-5">
            {[
              { src: asset.communication, label: "Communication" },
              { src: asset.creativity, label: "Creativity" },
              { src: asset.ethics, label: "Ethics" },
              { src: asset.presentation, label: "Presentation" },
              { src: asset.problemsolving, label: "Problem Solving" },
              { src: asset.teamwork, label: "Teamwork" },
              { src: asset.timemgmt, label: "Time Management" },
            ].map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center text-md"
              >
                <img src={skill.src} alt={skill.label} className="h-14 w-14" />
                <h3>{skill.label}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
