import React from "react";


const Experience = () => {
  return (
    <div
      className="flex flex-col justify-evenly items-center min-h-screen pt-20 px-4"
      id="Experience"
    >
      <h1 className="text-center text-3xl font-bold text-gray-600">
        <span className="bg-gray-600 px-1 mr-2 "></span> MY EXPERIENCE
      </h1>
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-10 mt-5 w-full">
        {/* Education Section */}
        <div className="pt-5">
          <h1 className="text-2xl font-bold text-gray-600 underline text-center">
            EDUCATION
          </h1>
          <div className="flex flex-col py-10 gap-4">
            {[
              {
                title: "BICTE",
                institution: "Balkumari College",
                duration: "2018-2024",
                description:
                  "The College is affiliated to Tribhuvan University, Kathmandu. The main focus of the degree is in Web Technologies and Networking.",
              },
              {
                title: "10 +2 (Computer Science)",
                institution: "Orchid College",
                duration: "2016-2018",
                description:
                  "Completed my High School from this college in Computer Science Major. During these two years of exposure into this course, I got fascinated towards Programming.",
              },
              {
                title: "School Leaving Certificate",
                institution: "Small Heaven School",
                duration: "2016",
                description:
                  "The College is affiliated to National Examination Board. Completed my School Leaving Certificate from this school.",
              },
            ].map((education, index) => (
              <div
                key={index}
                className="flex flex-col gap-2 shadow-md rounded-lg p-10 text-start bg-white"
              >
                <h2 className="text-2xl text-gray-600">{education.title}</h2>
                <h2 className="text-xl text-sky-500">{education.institution}</h2>
                <h3 className="text-md font-bold text-sky-500">
                  {education.duration}
                </h3>
                <p className="text-gray-500 pt-3">{education.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Work Experience Section */}
        <div className="pt-5">
          <h1 className="text-2xl font-bold text-gray-600 underline text-center">WORK</h1>
          <div className="flex flex-col py-10 gap-4">
            {[
              {
                title: "FullStack Developer Intern",
                company: "Mediisha Nepal",
                duration: "4 months",
                tasks: ["Worked on PHP & Laravel.", "Deploying software in local server.", "Taking client requirements."],
              },
              {
                title: "Frontend Developer Intern",
                company: "PAG Nepal",
                duration: "4 months",
                tasks: ["Worked on CSS Frameworks.", "Worked on JS and Reactjs.", "Minor projects on React JS."],
              },
            ].map((work, index) => (
              <div
                key={index}
                className="flex flex-col gap-2 shadow-md rounded-lg p-10 text-start bg-white"
              >
                <h2 className="text-2xl text-gray-600">{work.title}</h2>
                <h2 className="text-xl text-sky-500">{work.company}</h2>
                <h3 className="text-md text-sky-500">{work.duration}</h3>
                <ul className="text-gray-500 pt-3 list-disc pl-5">
                  <h3>Tasks:</h3>
                  {work.tasks.map((task, idx) => (
                    <li key={idx}>{task}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
