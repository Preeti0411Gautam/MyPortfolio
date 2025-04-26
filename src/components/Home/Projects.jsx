import React from 'react'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

const projects = [
  {
    title: 'GreenHub',
    description: 'A community platform for sustainable development knowledge sharing',
    tags: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/Preeti0411Gautam/GreenCampus',
    demo: 'https://greenhub-campus.vercel.app/',
  },
  {
    title: 'BillStack',
    description: 'Bill management system for organizing and tracking expenses',
    tags: ['React', 'Express', 'MongoDB'],
    github: 'https://github.com/Preeti0411Gautam/BillStack',
    demo: '#',
  },
]

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-white to-blue-50"
    >
      <div className="container mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-blue-500 text-lg mb-2">My Work</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Projects</h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Here are some projects I've worked on during my studies and personal time.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all"
            >
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-100 text-gray-800 rounded-md  hover:bg-gray-200 flex items-center gap-2 transition"
                  >
                    <FiGithub /> Code
                  </a>
                  {project.demo !== '#' && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-blue-100 text-blue-800 rounded-md hover:bg-blue-200 flex items-center gap-2 transition"
                    >
                      <FiExternalLink /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Projects
