import React from "react";
import { FaCode, FaGraduationCap, FaLightbulb } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="text-blue-500 text-sm font-semibold tracking-wide">
            ABOUT ME
          </span>
          <h2 className="text-4xl font-bold text-gray-800 mt-2">
            Who I Am
          </h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto mt-4 rounded"></div>
        </div>

        {/* Content */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          {/* Left Side - Image */}
          <div className="w-full md:w-1/3 flex justify-center">
            {/* <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-blue-200 shadow-2xl">
              <img
                src="https://via.placeholder.com/400x400"
                alt="Preeti Gautam"
                className="w-full h-full object-cover"
              />
            </div> */}
          </div>

          {/* Right Side - Text */}
          <div className="w-full md:w-2/3">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
              A Passionate Web Developer
            </h3>

            <p className="text-gray-600 mb-8 leading-relaxed">
              I'm currently pursuing a Master of Computer Applications, with a
              strong foundation in web development. I enjoy turning complex
              problems into simple, elegant solutions. My journey in programming
              began with curiosity and has since grown into a deep passion for
              building meaningful digital experiences.
            </p>

            {/* Highlights */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="text-blue-500 text-2xl mt-1">
                  <FaCode />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    Problem Solver
                  </h4>
                  <p className="text-gray-600">
                    I love tackling challenges and finding efficient solutions through logical thinking and creativity.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-blue-500 text-2xl mt-1">
                  <FaGraduationCap />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    Quick Learner
                  </h4>
                  <p className="text-gray-600">
                    Always eager to explore new technologies, frameworks, and adapt to emerging trends in the tech world.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-blue-500 text-2xl mt-1">
                  <FaLightbulb />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    Creative Thinker
                  </h4>
                  <p className="text-gray-600">
                    I approach development challenges with creativity and an eye for design, ensuring user-friendly experiences.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
