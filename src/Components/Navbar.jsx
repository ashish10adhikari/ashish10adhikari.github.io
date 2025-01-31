import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  useEffect(() => {
    if (mobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenu]);
  return (
    <div className="flex justify-evenly w-full py-5 px-20 shadow-md gap-20 fixed z-50 bg-white">
      <div className="justify-start">
        <a href="#Header">
          <h1 className="text-4xl font-bold hover:text-blue-500 text-gray-600">
            Ashish.
          </h1>
        </a>
      </div>
      <ul className="md:flex gap-8 px-5 py-3 font-bold text-gray-600 hidden">
        <a className="hover:text-blue-500 transition-all" href="#Header">
          HOME
        </a>
        <a className="hover:text-blue-500 transition-all" href="#About">
          ABOUT ME
        </a>
        <a className="hover:text-blue-500 transition-all" href="#Skill">
          SKILLS
        </a>
        <a className="hover:text-blue-500 transition-all" href="#Experience">
          EXPERIENCE
        </a>
        <a className="hover:text-blue-500 transition-all" href="#Project">
          PROJECTS
        </a>
        <a className="hover:text-blue-500 transition-all" href="#Contact">
          CONTACT
        </a>
      </ul>
      <FontAwesomeIcon
        icon={faBars}
        className="text-3xl md:hidden text-center pt-1 pl-10"
        onClick={() => setMobileMenu(true)}
      />
      <div
        className={`md:hidden ${
          mobileMenu ? "fixed w-full h-full" : "hidden"
        } right-0 top-0 bottom-0 bg-white transition-all z-50`}
      >
        <div className="flex justify-end p-6 cursor-pointer text-3xl">
          <FontAwesomeIcon
            icon={faXmark}
            onClick={() => setMobileMenu(false)}
          />
        </div>
        <ul className="flex flex-col items-center font-medium gap-2 mt-5 px-5 text-lg">
          <a
            onClick={() => setMobileMenu(false)}
            href="#Header"
            className="px-4 py-2 rounded-full inline-block hover:bg-gray-100"
          >
            HOME
          </a>
          <a
            onClick={() => setMobileMenu(false)}
            href="#About"
            className="px-4 py-2 rounded-full inline-block hover:bg-gray-100"
          >
            ABOUT
          </a>
          <a
            onClick={() => setMobileMenu(false)}
            href="#Skill"
            className="px-4 py-2 rounded-full inline-block hover:bg-gray-100"
          >
            SKILLS
          </a>
          <a
            onClick={() => setMobileMenu(false)}
            href="#Experience"
            className="px-4 py-2 rounded-full inline-block hover:bg-gray-100"
          >
            EXPERIENCE
          </a>
          <a
            onClick={() => setMobileMenu(false)}
            href="#Project"
            className="px-4 py-2 rounded-full inline-block hover:bg-gray-100"
          >
            PROJECTS
          </a>
          <a
            onClick={() => setMobileMenu(false)}
            href="#Contact"
            className="px-4 py-2 rounded-full inline-block hover:bg-gray-100"
          >
            CONTACT
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
