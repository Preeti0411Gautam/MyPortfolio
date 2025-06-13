import React from "react";
import { FaCode, FaGraduationCap, FaLightbulb } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-blue-600 text-sm font-bold tracking-wider uppercase">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-2">
            Who I Am
          </h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Content (Text only) */}
        <div className="w-full md:w-4/5 lg:w-3/4 mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            A Passionate Web Developer
          </h3>

          <p className="text-gray-700 mb-10 leading-relaxed text-base md:text-lg text-justify">
            I'm currently pursuing a Master of Computer Applications, with a strong foundation in web development.
            I enjoy turning complex problems into simple, elegant solutions. My journey in programming began with
            curiosity and has since grown into a deep passion for building meaningful digital experiences.
          </p>

          {/* Highlights */}
          <div className="space-y-8 text-left">
            {[
              {
                icon: <FaCode />,
                title: "Problem Solver",
                desc:
                  "I love tackling challenges and finding efficient solutions through logical thinking and creativity."
              },
              {
                icon: <FaGraduationCap />,
                title: "Quick Learner",
                desc:
                  "Always eager to explore new technologies, frameworks, and adapt to emerging trends in the tech world."
              },
              {
                icon: <FaLightbulb />,
                title: "Creative Thinker",
                desc:
                  "I approach development challenges with creativity and an eye for design, ensuring user-friendly experiences."
              }
            ].map(({ icon, title, desc }, index) => (
              <div key={index} className="flex items-start gap-4 group">
                <div className="text-blue-500 text-3xl mt-1 group-hover:scale-110 transition">
                  {icon}
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-1 group-hover:text-blue-600 transition">
                    {title}
                  </h4>
                  <p className="text-gray-600 text-sm md:text-base">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
