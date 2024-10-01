import React from 'react';
import experience from './data/experience.json';

const Experience = () => {
  const company_img =
    'https://media.licdn.com/dms/image/v2/D4D0BAQEjjnNKueZX9w/company-logo_200_200/company-logo_200_200/0/1697292919746?e=1735776000&v=beta&t=KFFPHTC8MQDi5DdQxn2Tp02DqfwfDkw71-sJx6zfBXc';

  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="container mx-auto p-8"
      >
        <h1 className="text-4xl font-bold text-center text-white mb-8">
          Experience
        </h1>

        {experience.map((data) => {
          return (
            <div
              key={data.id}
              className="flex flex-col md:flex-row bg-white/80 backdrop-blur-lg rounded-lg shadow-lg p-6 mb-6"
            >
              {/* Left Section (Image) */}
              <div className="left md:w-1/3 flex justify-center items-center">
                <img
                  src={company_img}
                  alt=""
                  className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-indigo-600"
                />
              </div>

              {/* Right Section */}
              <div className="right md:w-2/3 md:ml-6">
                <h2 className="text-2xl font-semibold text-gray-800">
                  {data.role}
                </h2>
                <h4 className="text-gray-600">
                  {data.startDate} - {data.endDate}, {data.location}
                </h4>
                <ul className="mt-4">
                  {data.experiences.map((exp, index) => (
                    <li
                      key={index}
                      className="text-gray-700 list-disc list-inside"
                    >
                      {exp}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Experience;
