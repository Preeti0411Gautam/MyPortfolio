import React, { useState } from 'react';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt,
  FaDatabase, FaJava, FaChevronLeft, FaChevronRight
} from 'react-icons/fa';
import {
  SiExpress, SiTailwindcss, SiMongodb, SiMysql, SiSolidity,
  SiPostman, SiJsonwebtokens, SiIpfs, SiEthers
} from 'react-icons/si';

const Skills = () => {
  const allSkills = [
    { name: "Java", icon: <FaJava />, category: "language" },
    { name: "SQL", icon: <FaDatabase />, category: "language" },
    { name: "Solidity", icon: <SiSolidity />, category: "language" },
    { name: "JavaScript", icon: <FaJs />, category: "language" },
    { name: "HTML", icon: <FaHtml5 />, category: "frontend" },
    { name: "CSS", icon: <FaCss3Alt />, category: "frontend" },
    { name: "React.js", icon: <FaReact />, category: "frontend" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, category: "frontend" },
    { name: "Node.js", icon: <FaNodeJs />, category: "backend" },
    { name: "Express.js", icon: <SiExpress />, category: "backend" },
    { name: "Ethers.js", icon: <SiEthers />, category: "backend" },
    { name: "MongoDB", icon: <SiMongodb />, category: "database" },
    { name: "MySQL", icon: <SiMysql />, category: "database" },
    { name: "IPFS", icon: <SiIpfs />, category: "database" },
    { name: "Git", icon: <FaGitAlt />, category: "tools" },
    { name: "Postman", icon: <SiPostman />, category: "tools" },
    { name: "JWT", icon: <SiJsonwebtokens />, category: "tools" },
    { name: "Pinata", icon: <SiIpfs />, category: "tools" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 8;
  const totalSlides = Math.ceil(allSkills.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + itemsPerPage) % allSkills.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - itemsPerPage + allSkills.length) % allSkills.length);
  };

  const visibleSkills = allSkills.slice(currentIndex, currentIndex + itemsPerPage);

  const categorizedSections = [
    { title: "Languages", category: "language", bg: "bg-yellow-50", border: "border-yellow-100", text: "text-yellow-700", icon: "text-yellow-500" },
    { title: "Frontend", category: "frontend", bg: "bg-blue-50", border: "border-blue-100", text: "text-blue-700", icon: "text-blue-500" },
    { title: "Backend", category: "backend", bg: "bg-green-50", border: "border-green-100", text: "text-green-700", icon: "text-green-500" },
    { title: "Databases & Storage", category: "database", bg: "bg-pink-50", border: "border-pink-100", text: "text-pink-700", icon: "text-pink-500" },
    { title: "Tools", category: "tools", bg: "bg-purple-50", border: "border-purple-100", text: "text-purple-700", icon: "text-purple-500" }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3">Technical Skills</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Technologies I use to bring ideas to life
          </p>
        </div>

        {/* Carousel */}
        <div className="relative group mb-12">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            {/* Prev Button */}
            <button onClick={prevSlide} className="p-2 sm:p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition shadow">
              <FaChevronLeft className="text-gray-600 text-lg sm:text-xl" />
            </button>

            {/* Skill Cards */}
            <div className="grid grid-cols-2 sm:flex flex-wrap justify-center gap-3 w-full min-h-[140px]">
              {visibleSkills.map((skill, idx) => (
                <div
                  key={`${skill.name}-${idx}`}
                  className="flex items-center justify-center gap-2 sm:gap-3 px-4 py-3 bg-white border border-gray-200 rounded-xl shadow-sm hover:border-blue-400 hover:shadow-md transform hover:scale-105 transition-all duration-300 text-sm sm:text-base"
                >
                  <span className="text-xl sm:text-2xl text-blue-500">
                    {skill.icon}
                  </span>
                  <span className="font-semibold text-gray-700">{skill.name}</span>
                </div>
              ))}
            </div>

            {/* Next Button */}
            <button onClick={nextSlide} className="p-2 sm:p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition shadow">
              <FaChevronRight className="text-gray-600 text-lg sm:text-xl" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-4 space-x-2 sm:space-x-3">
            {Array.from({ length: totalSlides }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx * itemsPerPage)}
                className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all ${currentIndex >= idx * itemsPerPage && currentIndex < (idx + 1) * itemsPerPage
                  ? 'bg-blue-500 scale-110' : 'bg-gray-300'}`}
              />
            ))}
          </div>
        </div>

        {/* Categorized Sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {categorizedSections.map((section) => (
            <div key={section.category} className={`${section.bg} p-6 sm:p-8 rounded-2xl border ${section.border} shadow-sm`}>
              <h3 className={`text-lg sm:text-xl font-semibold ${section.text} mb-5`}>{section.title}</h3>
              <div className="grid grid-cols-2 gap-3">
                {allSkills.filter(s => s.category === section.category).map((skill, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className={`text-lg sm:text-2xl ${section.icon}`}>{skill.icon}</span>
                    <span className="text-gray-700 text-sm sm:text-base">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
