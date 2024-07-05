import React from "react";
import { Link } from "react-scroll";
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { toolbarPlugin } from '@react-pdf-viewer/toolbar';
import '@react-pdf-viewer/toolbar/lib/styles/index.css';

const About = () => {
  const toolbarPluginInstance = toolbarPlugin();
  const { Toolbar } = toolbarPluginInstance;

  return (
    <section className="body-font">
      <div className="p-5 mt-3 mx-auto md:mt-5 md:mx-10 lg:mx-16">
        <div id="about" className="flex flex-col text-center w-full mb-3">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-black">
            About Me
          </h1>
          <p
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-once="false"
            className="text-lg mx-auto leading-relaxed font-medium text-dark-orange text-center"
          >
            Why hire me?
          </p>
        </div>
        <div className="mx-auto flex lg:flex-row flex-col items-center justify-center">
          <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-once="false"
            className="lg:max-w-lg sm:w-2/3 lg:w-1/2 w-full mb-10 md:mb-0"
          >
            <img
              className="object-cover object-center pointer-events-none rounded backdrop-contrast-200 backdrop-brightness-200"
              alt="hero"
              src={require("../assets/Images/aboutme.png")}
            />
          </div>
          <div className="lg:w-1/2 justify-center lg:p-5 xl:p-7 md:p-5 flex flex-col items-center text-justify">
            <p
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-once="false"
              className="font-medium text-gray-700 text-lg lg:text-base xl:text-xl leading-loose xl:leading-8"
            >
              Seeking opportunities to apply my expertise in software engineering to drive impactful projects and
               contribute to technological advancements. With a passion for leveraging cutting-edge 
               technologies to solve complex challenges,I thrive in environments that foster innovation
                and continuous learning.<br/>

               I am completed my Master's in Computer Software Engineering from Northeastern University, 
               complemented by a solid foundation in Electronics Engineering from
               Shri Ramdeobaba College of Engineering, India. <br/>
               I have a strong background in software development,database management, and cloud computing.
            </p>
            <div
              data-aos="zoom-in"
              data-aos-duration="1500"
              data-aos-once="false"
              className="mt-7 flex gap-x-4 md:gap-x-5 justify-center md:justify-between"
            >
              <button className="inline-flex font-medium text-white bg-black border-2 border-black py-3 px-7 focus:outline-none hover:bg-cornsilk hover:border-dark-orange hover:text-black rounded-full text-md xl:px-10">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  Contact Me
                </Link>
              </button>
              <button className="inline-flex font-medium text-white bg-dark-orange border-2 border-dark-orange py-3 px-7 focus:outline-none hover:bg-cornsilk hover:border-dark-orange hover:text-black rounded-full text-md xl:px-10">
                <a
                  href="/Resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  Get Resume
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
       
          </Worker>
        </div>
      </div>
    </section>
  );
};

export default About;
