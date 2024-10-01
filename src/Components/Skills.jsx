import React from 'react';
import skills from './data/skills.json';

const Skills = () => {
  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="container mx-auto px-4 py-10 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500"
      >
        <h1 className="text-4xl font-bold text-center mb-10 text-white  bg-clip-text bg-gradient-to-r from-purple-500 to-blue-600">
          Skills
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((data) => (
            <div
              key={data.id}
              className="flex flex-col items-center justify-center bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition duration-300"
            >
              <div className="w-20 h-20 mb-4">
                <img
                  src={data.imageSrc}
                  alt={data.title}
                  className="object-contain w-full h-full"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">
                {data.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
