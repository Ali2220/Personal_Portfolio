import React from 'react';
import Typed from 'typed.js';
import { useEffect, useRef } from 'react';

const Home = () => {

  const my_picture = "https://scontent.fkhi16-1.fna.fbcdn.net/v/t39.30808-6/449694007_2365118327176313_3049195972602756496_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=viVjso6fs8QQ7kNvgFbfrfa&_nc_ht=scontent.fkhi16-1.fna&oh=00_AYC71GMT69xP8kA_VsDAGlztV1DJTr5taH-mQjy2OqknKw&oe=670219B1"

  const typed = useRef();

  useEffect(() => {
    const options = {
      strings: [
        'Hi, I am Ali Sarwar',
        'I am a Frontend Developer',
        'I build creative and functional web apps',
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    const typedRef = new Typed(typed.current, options);

    return () => {
      typedRef.destroy();
    };
  }, []);

  return (
    <>
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between p-8 text-white">
        {/* left */}
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="left text-center md:text-left space-y-6 md:w-1/2"
        >
          <h1
            ref={typed}
            className="text-3xl md:text-5xl font-semibold leading-tight "
          ></h1>
          <a
            href="#"
            download="Resume.pdf"
            className="inline-block mt-4 px-6 py-3 bg-yellow-500 text-black font-semibold rounded hover:bg-yellow-600 transition duration-300"
          >
            Download My Resume
          </a>
        </div>
        {/* right */}
        <div 
        data-aos="fade-left"
        data-aos-duration="1000"
        className="right mt-6 md:mt-0 md:w-1/2 flex justify-center">
          <img
            src={my_picture}
            alt="Profile"
            className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full shadow-lg border-4 border-white hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
