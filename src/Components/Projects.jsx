import React from 'react';
import projects from './data/projects.json';

const Projects = () => {
  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="container mx-auto px-5 py-10"
      >
        <h1 className="text-4xl font-bold text-center mb-10 text-gray-900 dark:text-white">
          Projects
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((data) => (
            <div
              key={data.key}
              className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-2xl dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-between"
            >
              <a href={data.demo}>
                <img
                  className="rounded-t-lg h-48 w-full object-cover"
                  src={data.imageSrc}
                  alt={data.title}
                />
              </a>
              <div className="p-5 flex-grow">
                <a href={data.demo}>
                  <h5 className="mb-3 text-2xl font-semibold text-gray-900 dark:text-white">
                    {data.title}
                  </h5>
                </a>
                <p className="mb-4 font-normal text-gray-700 dark:text-gray-400">
                  {data.description}
                </p>
              </div>
              <div className="p-5 flex justify-between space-x-2">
                <a
                  href={data.demo}
                  className="w-1/2 inline-flex justify-center items-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:from-blue-700 hover:to-purple-700 transition duration-300 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
                >
                  Demo
                </a>
                <a
                  href={data.source}
                  className="w-1/2 inline-flex justify-center items-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-green-500 to-teal-600 rounded-lg hover:from-green-600 hover:to-teal-700 transition duration-300 focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-teal-800"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
