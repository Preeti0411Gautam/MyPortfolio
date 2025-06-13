import React from "react";
import { FaGithub, FaLinkedin, FaFileDownload } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import img from '../../assets/myimg.jpg'
const Profile = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-100 to-white px-6 py-16"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Side - Image */}
        <div className="w-[260px] h-[260px] md:w-[300px] md:h-[300px] rounded-full overflow-hidden border-4 border-blue-200 shadow-xl shrink-0">
          <img src={img} alt="Profile" className="w-full h-full object-cover" />
        </div>

        {/* Right Side - Content */}
        <div className="text-center md:text-left max-w-2xl">
          <p className="text-blue-500 text-lg mb-2">Hello, I'm</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Preeti Gautam
          </h1>
          <h2 className="text-xl md:text-2xl text-blue-600 font-semibold mb-6">
            Fullstack Web Developer
          </h2>

          <p className="text-gray-600 mb-8 leading-relaxed">
            Pursuing Master of Computer Applications from Maulana Azad
            National Institute of Technology, passionate about web development
            and problem-solving. Skilled in frontend and backend technologies,
            committed to writing clean, efficient code. Always eager to learn
            and grow in a dynamic work environment.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mb-6">
            <a
              href="#contact"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center justify-center gap-2"
            >
              <HiMail /> Contact Me
            </a>
            <a
  href="https://drive.google.com/file/d/1U8uzW8zOvkeFbq7pjmxUfACAWqgxKNh_/view?usp=sharing"
  target="_blank"
  rel="noopener noreferrer"
  className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition flex items-center justify-center gap-2"
>
  <FaFileDownload />
  Download CV
</a>

          </div>

          {/* Social Links */}
          <div className="flex justify-center md:justify-start gap-6 text-2xl">
            <a
              href="https://github.com/Preeti0411Gautam"
              className="text-gray-700 hover:text-black transition"
            >
              <FaGithub size={35} />
            </a>
            <a
              href="https://linkedin.com"
              className="text-gray-700 hover:text-blue-700 transition"
            >
              <FaLinkedin size={35} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
