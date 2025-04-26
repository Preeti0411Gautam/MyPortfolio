import React, { useState } from 'react';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, 
  FaGitAlt, FaSass, FaFigma, FaChevronLeft, FaChevronRight 
} from 'react-icons/fa';
import { 
  SiTypescript, SiNextdotjs, SiMongodb, 
  SiExpress, SiTailwindcss, SiRedux 
} from 'react-icons/si';

const Skills = () => {
  const allSkills = [
    { name: "HTML5", icon: <FaHtml5 />, category: "frontend" },
    { name: "CSS3", icon: <FaCss3Alt />, category: "frontend" },
    { name: "JavaScript", icon: <FaJs />, category: "frontend" },
    { name: "TypeScript", icon: <SiTypescript />, category: "frontend" },
    { name: "React", icon: <FaReact />, category: "frontend" },
    { name: "Redux", icon: <SiRedux />, category: "frontend" },
    { name: "Next.js", icon: <SiNextdotjs />, category: "frontend" },
    { name: "Sass", icon: <FaSass />, category: "frontend" },
    { name: "Tailwind", icon: <SiTailwindcss />, category: "frontend" },
    { name: "Node.js", icon: <FaNodeJs />, category: "backend" },
    { name: "Express", icon: <SiExpress />, category: "backend" },
    { name: "MongoDB", icon: <SiMongodb />, category: "backend" },
    { name: "Git", icon: <FaGitAlt />, category: "tools" },
    { name: "Figma", icon: <FaFigma />, category: "tools" }
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

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-800 mb-3">Technical Skills</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Technologies I use to bring ideas to life
          </p>
        </div>

        {/* Carousel */}
        <div className="relative group">
          <div className="flex justify-center items-center gap-6 mb-8">
            <button 
              onClick={prevSlide}
              className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition shadow"
              aria-label="Previous"
            >
              <FaChevronLeft className="text-gray-600 text-xl" />
            </button>

            <div className="flex flex-wrap justify-center gap-4 w-full overflow-hidden min-h-[140px]">
              {visibleSkills.map((skill, idx) => (
                <div 
                  key={`${skill.name}-${idx}`}
                  className="flex items-center gap-3 px-5 py-4 bg-white border border-gray-200 rounded-xl shadow-sm
                  hover:border-blue-400 hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  <span className="text-3xl text-blue-500">
                    {skill.icon}
                  </span>
                  <span className="font-semibold text-gray-700">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>

            <button 
              onClick={nextSlide}
              className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition shadow"
              aria-label="Next"
            >
              <FaChevronRight className="text-gray-600 text-xl" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-4 space-x-3">
            {Array.from({ length: totalSlides }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx * itemsPerPage)}
                className={`w-4 h-4 rounded-full transition-all ${currentIndex >= idx * itemsPerPage && currentIndex < (idx + 1) * itemsPerPage 
                  ? 'bg-blue-500 scale-110' : 'bg-gray-300'}`}
              />
            ))}
          </div>
        </div>

        {/* Categorized Skills */}
        <div className="mt-16 grid md:grid-cols-3 gap-10">
          {/* Frontend */}
          <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100 shadow-sm">
            <h3 className="text-xl font-semibold text-blue-700 mb-6">Frontend</h3>
            <div className="grid grid-cols-2 gap-4">
              {allSkills.filter(s => s.category === "frontend").map((skill, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <span className="text-2xl text-blue-500">{skill.icon}</span>
                  <span className="text-gray-700">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div className="bg-green-50 p-8 rounded-2xl border border-green-100 shadow-sm">
            <h3 className="text-xl font-semibold text-green-700 mb-6">Backend</h3>
            <div className="grid grid-cols-2 gap-4">
              {allSkills.filter(s => s.category === "backend").map((skill, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <span className="text-2xl text-green-500">{skill.icon}</span>
                  <span className="text-gray-700">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="bg-purple-50 p-8 rounded-2xl border border-purple-100 shadow-sm">
            <h3 className="text-xl font-semibold text-purple-700 mb-6">Tools</h3>
            <div className="grid grid-cols-2 gap-4">
              {allSkills.filter(s => s.category === "tools").map((skill, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <span className="text-2xl text-purple-500">{skill.icon}</span>
                  <span className="text-gray-700">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Skills;
