import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faLocationDot, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div className="container pt-24 min-h-screen text-center justify-center items-center " id="Contact">
      <h1 className="text-center text-3xl font-bold text-gray-600">
        <span className="bg-gray-600 px-1 mr-2"></span>CONTACT ME
      </h1>
      <div className="flex gap-5 w-full justify-center items-center pt-5">
        <div className="flex flex-col gap-5 w-1/2 pl-52">
          <div className="flex items-center space-x-4">
            <FontAwesomeIcon
              icon={faLocationDot}
              className="text-3xl text-gray-700"
            />
            <p className="font-bold text-gray-600">Chitwan, Bharatpur-21</p>
          </div>

          <div className="flex items-center space-x-4">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="text-3xl text-gray-700"
            />
            <p className="font-bold text-gray-600">
              ashish10adhikari@gmail.com
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-3xl text-gray-700"
            />
            <p className="font-bold text-gray-600">Ashish Adhikari</p>
          </div>
        </div>

        <div className="flex flex-col gap-5 w-1/2 mr-20">
          <h2 className="text-xl font-bold text-gray-600 text-center">GET IN TOUCH</h2>
          <form
            action=""
            className="flex flex-col gap-5 border-2 px-5 py-10 rounded-2xl shadow-lg bg-white"
          >
            <div className="flex justify-evenly gap-5">
                <input
              type="text"
              name="fname"
              placeholder="Enter First Name"
              className="border rounded-md p-2 w-1/2 text-gray-600"
            />
            <input
              type="text"
              name="lname"
              placeholder="Enter Last Name"
              className="border rounded-md p-2 w-1/2 text-gray-600"
            />
            </div>
            
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              className="border rounded-md p-2 text-gray-600"
            />
            <textarea
              type="textarea"
              name="subject" cols="30" rows="5"
              placeholder="Enter Subject"
              className="border rounded-md p-2 text-gray-600"
            />
            <button className="bg-gray-600 p-3 text-white rounded-md hover:bg-gray-700">SEND</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
