import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faLocationDot, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div className="pt-24 min-h-screen text-center justify-center items-center" id="Contact">
      <h1 className="text-3xl font-bold text-gray-600">
        <span className="bg-gray-600 px-1 mr-2"></span>CONTACT ME
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full pt-5 px-5 lg:px-20">
        {/* Contact Details */}
        <div className="flex flex-col gap-8 lg:pt-20">
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

        {/* Contact Form */}
        <div className="flex flex-col gap-5">
          <h2 className="text-xl font-bold text-gray-600 text-center">GET IN TOUCH</h2>
          <form className="flex flex-col gap-5 border-2 px-5 py-10 rounded-2xl shadow-lg bg-white">
            <div className="flex flex-col lg:flex-row justify-between gap-5">
              <input
                type="text"
                name="fname"
                placeholder="Enter First Name"
                className="border rounded-md p-2 w-full lg:w-1/2 text-gray-600"
              />
              <input
                type="text"
                name="lname"
                placeholder="Enter Last Name"
                className="border rounded-md p-2 w-full lg:w-1/2 text-gray-600"
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              className="border rounded-md p-2 w-full text-gray-600"
            />
            <textarea
              name="subject"
              cols="30"
              rows="5"
              placeholder="Enter Subject"
              className="border rounded-md p-2 text-gray-600"
            />
            <button className="border-2 bg-gray-200 p-3 rounded-md hover:bg-gray-100 text-gray-600 font-bold">
              SEND
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
