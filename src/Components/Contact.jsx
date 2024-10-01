import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

const Contact = () => {
  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="container mx-auto px-5 py-10 text-center"
      >
        <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">
          Contact Me
        </h1>

        <div className="flex flex-wrap justify-center space-x-0 space-y-6 md:space-y-0 md:space-x-6">
          <a
            href="https://www.instagram.com/sarwar841/"
            className="bg-pink-500 hover:bg-pink-600 text-white p-4 rounded-full transition duration-300 border-2 border-yellow-400"
          >
            <FaInstagram className="text-3xl md:text-5xl" />
          </a>
          <a
            href="https://www.facebook.com/ali.sarwar.3726"
            className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full transition duration-300 border-2 border-yellow-400"
          >
            <FaFacebook className="text-3xl md:text-5xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/ali-sarwar-b85899208/"
            className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full transition duration-300 border-2 border-yellow-400"
          >
            <FaLinkedin className="text-3xl md:text-5xl" />
          </a>
          <a
            href="https://github.com/Ali2220"
            className="bg-gray-800 hover:bg-gray-900 text-white p-4 rounded-full transition duration-300 border-2 border-yellow-400"
          >
            <FaGithub className="text-3xl md:text-5xl" />
          </a>
          <a
            href="mailto:alisarwar0277@gmail.com"
            className="bg-red-500 hover:bg-red-600 text-white p-4 rounded-full transition duration-300 border-2 border-yellow-400"
          >
            <SiGmail className="text-3xl md:text-5xl" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
