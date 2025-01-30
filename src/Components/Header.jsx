import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import profileImg from "../assets/profile.jpg";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      id="Header"
      className="min-h-screen flex justify-center items-center pt-16"
    >
      <div className="flex flex-col-reverse lg:flex-row gap-16 justify-center items-center container mx-auto">
        {/* Left Section */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <h3 className="text-2xl bg-blue-500 text-white py-2 px-4 rounded-br-full rounded-tl-full rounded-tr-full">
            Hi, I am
          </h3>
          <h2 className="text-4xl font-bold mt-2">Ashish Adhikari</h2>
          <h1 className="text-5xl font-bold text-gray-700">Software Developer</h1>

          {/* Buttons */}
          <div className="flex gap-5 pt-5">
            <button className="font-bold hover:bg-gray-200 py-2 px-6 rounded-3xl border-2 border-gray-400">
              <a href="#Project">PROJECTS</a>
            </button>
            <button className="font-bold hover:bg-gray-200 py-2 px-6 rounded-3xl border-2 border-gray-400">
              <a href="#Contact">HIRE ME</a>
            </button>
          </div>

          {/* Social Icons */}
          <div className="gap-5 flex justify-center lg:justify-start pt-5">
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

        {/* Profile Image */}
        <div className="flex justify-center items-center">
          <div className="rounded-full bg-gray-100 p-5">
            <div className="rounded-full bg-gray-200 p-5">
              <img
                src={profileImg}
                alt="profile"
                className="h-72 w-72 md:h-96 md:w-96 rounded-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
