import React from "react";
import furni from "../assets/furniweb.png";
import portfolio from "../assets/portfolio.png";
import todo from "../assets/todo.png";
import hospital from "../assets/hospitalweb.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Project = () => {
  return (
    <div
      className="flex flex-col justify-evenly items-center pt-10 "
      id="Project"
    >
      <h1 className="text-center text-3xl font-bold text-gray-600">
        <span className="bg-gray-600 px-1 mr-2"></span> MY PROJECTS
      </h1>
      <div className="p-10 flex gap-5">
        <div className="flex flex-col w-1/2 p-5 rounded-lg shadow-lg hover:shadow-2xl">
          <img src={furni} alt="" className="rounded-3xl"/>
          <hr className="border-1 border-black my-4"/>
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-600">Laravel Ecommerce</h2>
            <div>
              <a
                href="https://github.com/ashish10adhikari"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className=" hover:bg-gray-200 py-2 px-14 rounded-md border-2 border-gray-400">
                  <FontAwesomeIcon
                  icon={faGithub}
                  className="text-4xl text-gray-700 hover:text-gray-800"
                />
                </button>
                
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-1/2 p-5 rounded-lg shadow-lg hover:shadow-2xl">
          <img src={hospital} alt="" className="rounded-3xl"/>
          <hr className="border-1 border-black my-4 mt-16"/>
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-600">Hospital Frontend</h2>
            <div>
              <a
                href="https://github.com/ashish10adhikari"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className=" hover:bg-gray-200 py-2 px-14 rounded-md border-2 border-gray-400">
                  <FontAwesomeIcon
                  icon={faGithub}
                  className="text-4xl text-gray-700 hover:text-gray-800"
                />
                </button>
                
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-1/2 p-5 rounded-lg shadow-lg hover:shadow-2xl">
          <img src={todo} alt="" className="rounded-3xl"/>
          <hr className="border-1 border-black my-4"/>
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-600">Todo App</h2>
            <div>
              <a
                href="https://github.com/ashish10adhikari"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className=" hover:bg-gray-200 py-2 px-14 rounded-md border-2 border-gray-400">
                  <FontAwesomeIcon
                  icon={faGithub}
                  className="text-4xl text-gray-700 hover:text-gray-800"
                />
                </button>
                
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-1/2 p-5 rounded-lg shadow-lg hover:shadow-2xl">
          <img src={portfolio} alt="" className="rounded-3xl"/>
          <hr className="border-1 border-black my-4"/>
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-600">Portfolio Website</h2>
            <div>
              <a
                href="https://github.com/ashish10adhikari"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className=" hover:bg-gray-200 py-2 px-14 rounded-md border-2 border-gray-400">
                  <FontAwesomeIcon
                  icon={faGithub}
                  className="text-4xl text-gray-700 hover:text-gray-800"
                />
                </button>
                
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
