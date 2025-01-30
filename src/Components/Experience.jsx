import React from "react";

const Experience = () => {
  return (
    <div
      className=" flex flex-col justify-evenly items-center min-h-screen pt-20 "
      id="Experience"
    >
      <h1 className="text-center text-3xl font-bold text-gray-600">
        <span className="bg-gray-600 px-1 mr-2"></span> MY EXPERIENCE
      </h1>
      <div className="container flex text-center gap-16 mt-5 px-40 ">
        <div className="w-1/2  pt-5">
          <h1 className="text-2xl font-bold text-gray-600 underline">
            EDUCATION
          </h1>
          <div className="flex flex-col py-10 px-14 gap-4">
            <div className="flex flex-col gap-2 shadow-md rounded-lg p-10 text-start bg-white">
              <h2 className="text-2xl text-gray-600">BICTE</h2>
              <h2 className="text-xl  text-sky-500">
                Balkumari College
              </h2>
              <h3 className="text-md font-bold text-sky-500">2018-2024</h3>
              <p className=" text-gray-500 pt-3">
                The College is affiliated to Tribhuvan University, Kathmandu.
                The main focus of the degree is in Web Technologies and
                Networking.
              </p>
            </div>
            <div className="flex flex-col gap-2 shadow-md rounded-lg p-10 text-start bg-white">
              <h2 className="text-2xl text-gray-600">10 +2 (Computer Science)</h2>
              <h2 className="text-xl  text-sky-500">Orchid College</h2>
              <h3 className="text-md font-bold text-sky-500">2016-2018</h3>
              <p className=" text-gray-500 pt-3">
                Completed my High School from this college in Computer Science
                Major. During these two years of exposure into this course, I
                got fascinated towards Programming.
              </p>
            </div>
            <div className="flex flex-col gap-2 shadow-md rounded-lg p-10 text-start bg-white">
              <h2 className="text-2xl text-gray-600">School Leaving Certificate</h2>
              <h2 className="text-xl  text-sky-500">
                Small Heaven School
              </h2>
              <h3 className="text-md text-sky-500">2016</h3>
              <p className=" text-gray-500 pt-3">
                The College is affiliated to National Examination Board.
                Completed my School Leaving Certificate from this school.
              </p>
            </div>
          </div>
        </div>
        <div className="w-1/2  pt-5">
          <h1 className="text-2xl font-bold text-gray-600 underline">WORK</h1>
          <div className="flex flex-col py-10 px-14 gap-4">
            <div className="flex flex-col gap-2 shadow-md rounded-lg p-10 text-start bg-white">
              <h2 className="text-2xl text-gray-600">FullStack Developer Intern</h2>
              <h2 className="text-xl  text-sky-500">Mediisha Nepal</h2>
              <h3 className="text-md text-sky-500">4 months</h3>
              <ul className=" text-gray-500 pt-3 list-disc">
                <h3>Tasks:</h3>
                <li>Worked on PHP & Laravel.</li>
                <li>Deploying software in local server.</li>
                <li>Taking client requirements.</li>
              </ul>
            </div>
            <div className="flex flex-col gap-2 shadow-md rounded-lg p-10 text-start bg-white">
              <h2 className="text-2xl text-gray-600">Frontend Developer Intern</h2>
              <h2 className="text-xl  text-sky-500">PAG Nepal</h2>
              <h3 className="text-md text-sky-500">4 months</h3>
              <ul className=" text-gray-500 pt-3 list-disc">
                <h3>Tasks:</h3>
                <li>Worked on CSS Framework.s</li>
                <li>Worked on JS and Reactjs.</li>
                <li>Minor projects on React JS.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
