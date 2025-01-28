import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faLocationDot, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div className="container mx-auto py-20" id="Contact">
      <h1 className="text-center text-3xl font-bold text-gray-600">
        <span className="bg-gray-600 px-1 mr-2"></span>CONTACT ME
      </h1>
      <div className="flex gap-5 w-full justify-center items-center pt-10">
        <div className="flex flex-col gap-5 w-1/2 pl-52">
          <div className="flex items-center space-x-4">
            <FontAwesomeIcon icon={faLocationDot} className="text-3xl text-gray-700" />
            <p className="font-bold text-gray-600">Chitwan, Bharatpur-21</p>
          </div>

          <div className="flex items-center space-x-4">
            <FontAwesomeIcon icon={faEnvelope} className="text-3xl text-gray-700" />
            <p className="font-bold text-gray-600">ashish10adhikari@gmail.com</p>
          </div>

          <div className="flex items-center space-x-4">
            <FontAwesomeIcon icon={faLinkedin} className="text-3xl text-gray-700" />
            <p className="font-bold text-gray-600">Ashish Adhikari</p>
          </div>
        </div>

        <div className="flex flex-col gap-5 w-1/2">
          <h2 className="text-xl font-bold text-gray-600">GET IN TOUCH</h2>
          <form action="" className="flex flex-col gap-5">
            <input
              type="text"
              name="fname"
              placeholder="Enter First Name"
              className="border"
            />
            <input type="text" name="lname" placeholder="Enter Last Name" />
            <input type="email" name="email" placeholder="Enter Email" />
            <input type="text" name="subject" placeholder="Enter Subject" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
