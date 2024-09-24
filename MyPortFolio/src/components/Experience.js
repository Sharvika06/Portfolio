import React from "react";
import Atoms from '../assets/Images/atoms.png';
import CFSLogo from '../assets/Images/cfs.png';
import TechMLogo from '../assets/Images/techm.png';

const Experience = () => {
  return (
    <section className="py-3 px-3 bg-white mt-4 md:mt-7">
      <div className="mx-auto max-w-xl">
        <div id="experience" className="flex flex-col text-center mb-4 w-full">
          <h1 className="text-3xl sm:text-4xl font-medium title-font mb-2">
            Experience
          </h1>
          <p data-aos="zoom-in" data-aos-duration="1000" data-aos-once="false" className="text-lg mx-auto leading-relaxed font-medium text-dark-orange text-center">
            Professional Experience
          </p>
        </div>
        <div className="relative max-w-xl mx-auto p-4 rounded-xl shadow-md bg-slate-100">
          <div className="border-l-2 border-gray-200 absolute h-full top-0 left-10 md:left-14"></div>
          <div className="ml-12 md:ml-20">
            {/* First Experience */}
            <div className="mb-8 flex items-center w-full">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 z-10">
                <img src={Atoms} alt="Atoms Digital Solution" className="h-6 w-6 lg:h-10 lg:w-10 bg-transparent mix-blend-multiply" />
              </div>
              <div className="flex-1 ml-4 md:ml-8">
                <h2 className="text-xl md:text-2xl font-semibold">Full Stack Developer Intern</h2>
                <div className="text-lg text-gray-700 md:text-xl">Atoms Digital Solutions</div>
                <p className="text-base md:text-base text-gray-500">March, 2023 - Present</p>
                <ul className="pl-4 md:pl-6 list-disc leading-loose text-base md:text-lg font-medium">
                  <li className="py-2 md:py-3">
                    Engineered Vaaradhi Portal, a management website for underprivileged students and orphans with educational facilities.
                  </li>
                  <li className="py-2 md:py-3">
                    Collaborated with a team of 4 developers to ensure seamless integration of the application.
                  </li>
                  <li className="py-2 md:py-3">
                    Implemented the MERN stack (MongoDB, Express.js, React.js, Node.js) with Google Cloud resulting in a 30% reduction in image loading.
                  </li>
                  <li className="py-2 md:py-3">
                    Streamlined data entry and paperwork processes with the website, saving approximately 20 hours per week.
                  </li>
                </ul>
              </div>
            </div>
            {/* Second Experience */}
            <div className="mb-8 flex items-center w-full flex-row-reverse">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 z-10">
                <img src={CFSLogo} alt="Commonwealth Fusion Systems" className="h-6 w-6 lg:h-10 lg:w-10 bg-transparent mix-blend-multiply" />
              </div>
              <div className="flex-1 mr-4 md:mr-8">
                <h2 className="text-xl md:text-2xl font-semibold">Software Engineer</h2>
                <div className="text-lg text-gray-700 md:text-xl">Commonwealth Fusion Systems</div>
                <p className="text-base md:text-base text-gray-500">2023 - 2024</p>
                <ul className="pl-4 md:pl-6 list-disc leading-loose text-base md:text-lg font-medium">
                  <li className="py-2 md:py-3">
                    Developed scalable software solutions for fusion energy systems.
                  </li>
                  <li className="py-2 md:py-3">
                    Collaborated with cross-functional teams to optimize performance.
                  </li>
                  <li className="py-2 md:py-3">
                    Implemented machine learning models to enhance predictive maintenance.
                  </li>
                  <li className="py-2 md:py-3">
                    Reduced system downtime by 40% through proactive monitoring and alert systems.
                  </li>
                </ul>
              </div>
            </div>
            {/* Third Experience */}
            <div className="mb-8 flex items-center w-full">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 z-10">
                <img src={TechMLogo} alt="Tech Mahindra" className="h-6 w-6 lg:h-10 lg:w-10 bg-transparent mix-blend-multiply" />
              </div>
              <div className="flex-1 ml-4 md:ml-8">
                <h2 className="text-xl md:text-2xl font-semibold">Software Developer</h2>
                <div className="text-lg text-gray-700 md:text-xl">Tech Mahindra</div>
                <p className="text-base md:text-base text-gray-500">2019 - 2021</p>
                <ul className="pl-4 md:pl-6 list-disc leading-loose text-base md:text-lg font-medium">
                  <li className="py-2 md:py-3">
                    Developed and maintained enterprise-level applications for clients.
                  </li>
                  <li className="py-2 md:py-3">
                    Led a team of 5 developers in the successful delivery of multiple projects.
                  </li>
                  <li className="py-2 md:py-3">
                    Implemented agile methodologies to improve development efficiency.
                  </li>
                  <li className="py-2 md:py-3">
                    Enhanced application performance, resulting in a 25% increase in user satisfaction.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;

