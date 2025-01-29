import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-evenly container py-5 px-20 shadow-md gap-20 fixed z-50 bg-white">
      <div className="justify-start">
        <a href="#Header"><h1 className="text-4xl font-bold hover:text-blue-500">Ashish.</h1></a>
      </div>
      <ul className="flex gap-8 px-5 py-3 font-bold">
        <a className="hover:text-blue-500 transition-all" href="#Header">HOME</a>
        <a className="hover:text-blue-500 transition-all" href="#About">ABOUT ME</a>
        <a className="hover:text-blue-500 transition-all" href="#Skill">SKILLS</a>
        <a className="hover:text-blue-500 transition-all" href="#Experience">EXPERIENCE</a>
        {/* <a className="hover:text-blue-500 transition-all" href="#Project">PROJECTS</a> */}
        <a className="hover:text-blue-500 transition-all" href="#Contact">CONTACT</a>
      </ul>
    </div>
  );
};

export default Navbar;
