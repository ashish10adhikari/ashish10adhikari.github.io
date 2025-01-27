import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import profileImg from "../assets/profile.jpg";

const Header = () => {
  return (
    <div
      id="Header"
      className="min-h-screen flex justify-center pt-10 items-center"
    >
      <div className="flex flex-wrap gap-16 justify-center container mx-auto">
        <div className=" flex flex-col items-center justify-center">
          <h3 className="text-2xl">Hi, I am</h3>
          <h2 className="text-4xl font-bold">Ashish Adhikari</h2>
          <h1 className="text-5xl font-bold">Software Developer</h1>
          <div className="flex gap-5 pt-5">
            <button className="font-bold hover:bg-gray-200 py-2 px-6 rounded-3xl border-2 border-gray-400">
              <a href="#Project">PROJECTS</a>
            </button>
            <button className="font-bold hover:bg-gray-200 py-2 px-6 rounded-3xl border-2 border-gray-400">
              <a href="#Contact">HIRE ME</a>
            </button>
          </div>
          <div className="gap-5 flex justify-center items-center pt-5">
            <a
              href="https://github.com/ashish10adhikari"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className="text-4xl text-gray-700 hover:text-gray-800"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/ashish-adhikari-92364217a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="text-4xl text-blue-700 hover:text-blue-600"
              />
            </a>
          </div>
        </div>
        <div className="rounded-full bg-gray-100 p-5">
          <div className="rounded-full bg-gray-200 p-5">
            <div>
              <img
                src={profileImg}
                alt=""
                className="h-auto rounded-full w-96 max-w-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
