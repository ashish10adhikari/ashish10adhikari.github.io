import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import profileImg from "../images/profile.jpg";

const Header = () => {
  return (
    <div
      id="#Header"
      className="min-h-screen flex items-center justify-center pt-20 -z-50"
    >
      <div className="flex flex-wrap justify-evenly container mx-auto">
        <div className=" flex flex-col items-center justify-center">
          <h3 className="text-2xl">Hi, I am</h3>
          <h2 className="text-4xl font-bold">Ashish Adhikari</h2>
          <h1 className="text-5xl font-bold">Software Developer</h1>
          <div className="gap-5 flex justify-center items-center pt-5">
            <button>
              <a
                href="https://github.com/ashish10adhikari"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className="text-4xl hover:text-gray-700"
                />
              </a>
            </button>
            <button>
              <a
                href="https://www.linkedin.com/in/ashish-adhikari-92364217a/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-4xl hover:text-gray-700"
                />
              </a>
            </button>
          </div>
        </div>
        <div>
          <div>
            <img
              src={profileImg}
              alt=""
              className="h-auto rounded-full w-full max-w-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
