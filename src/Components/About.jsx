import React from "react";
import profile from "../assets/img.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import cv from "../assets/ashishcv.pdf";

const About = () => {
  return (
    <div className="mx-auto py-16 min-h-screen flex flex-col lg:flex-row justify-center items-center px-6 lg:px-16" id="About">
      {/* Profile Image */}
      <div className="w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0">
        <img
          src={profile}
          alt="profile"
          className="rounded-3xl w-72 h-72 object-cover shadow-lg"
        />
      </div>

      {/* About Text Section */}
      <div className="w-full lg:w-1/2 flex flex-col">
        <h1 className="text-3xl font-bold text-gray-600">
          <span className="bg-gray-600 px-1 mr-2"></span>ABOUT ME
        </h1>
        <p className="text-lg mt-5 text-gray-500">
          Hi, I'm
          <span className="text-blue-600 font-bold"> Ashish Adhikari</span>! I'm
          a passionate software developer specializing in crafting dynamic,
          responsive, and user-friendly websites. With expertise in Laravel and
          React, I thrive on solving complex problems and building innovative
          solutions that bring ideas to life.
        </p>

        {/* Download CV Button */}
        <div className="flex justify-start">
          <a href={cv} download>
            <button className="mt-8 text-gray-600 border-2 border-gray-300 px-6 py-3 rounded-3xl hover:bg-gray-200 font-bold flex items-center gap-2">
              Download CV <FontAwesomeIcon icon={faDownload} />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
