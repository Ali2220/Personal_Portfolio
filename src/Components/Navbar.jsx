import React from 'react';

const Navbar = () => {
  return (
    <>
      <div
        data-aos="fade-down"
        data-aos-duration="1000"
        className="container mx-auto flex flex-wrap justify-between items-center p-4 font-bold text-lg gap-5 text-white"
      >
        {/* Left */}
        <div className="p-3 hover:border-b-2 border-cyan-300 transition-all duration-75">
          My Portfolio
        </div>

        {/* Right - Menu Items */}
        <div className="w-full md:w-auto flex flex-col md:flex-row md:space-x-4 text-center md:text-left">
          <a
            href="#home"
            className="p-3 hover:border-b-2 border-cyan-400 transition-all duration-75"
          >
            Home
          </a>
          <a
            href="#experience"
            className="p-3 hover:border-b-2 border-cyan-400 transition-all duration-75"
          >
            Experience
          </a>
          <a
            href="#skills"
            className="p-3 hover:border-b-2 border-cyan-400 transition-all duration-75"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="p-3 hover:border-b-2 border-cyan-400 transition-all duration-75"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="p-3 hover:border-b-2 border-cyan-400 transition-all duration-75"
          >
            Contact
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
