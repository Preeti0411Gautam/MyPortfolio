import React from 'react'
import { FaGraduationCap } from 'react-icons/fa'

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">Education</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded"></div>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative">
          

          {[ 
            {
              title: 'Secondary Education',
              school: 'Bhaskar Convent School',
              date: '',
              detail: 'CGPA: 8.8',
            },
            {
              title: 'Higher Secondary Education',
              school: 'RRB Convent School',
              date: '',
              detail: 'Percentage: 80.6%',
            },
            {
              title: 'Master of Computer Applications',
              school: 'Maulana Azad National Institute Of Technology',
              date: '2023 — 2026',
              detail: 'CGPA: 8.145',
            },
          ].map((edu, idx) => {
            const isLeft = idx % 2 === 0
            return (
              <div
                key={idx}
                className={`
                  flex ${isLeft ? 'justify-start' : 'justify-end'} items-center mb-12
                  ${isLeft ? 'pl-16 pr-4 md:pr-0' : 'pr-16 pl-4 md:pl-0'}
                `}
              >
                {/* Dot */}
                <div
                  className={`w-8 h-8 rounded-full bg-blue-500 border-4 border-white flex justify-center items-center`}
                  style={{ marginLeft: isLeft ? '-30px' : '30px' }}
                >
                  <FaGraduationCap className="text-white text-xl" />
                </div>

                {/* Card */}
                <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md ml-4">
                  <h3 className="text-2xl font-semibold text-gray-800">{edu.title}</h3>
                  <span className="text-sm text-blue-500">{edu.date}</span>
                  <p className="mt-2 text-lg font-medium text-gray-700">{edu.school}</p>
                  <p className="text-gray-600 mt-1">{edu.detail}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Education
