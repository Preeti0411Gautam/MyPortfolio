import React from 'react';
import { FiGithub, FiLinkedin, FiMail, FiTwitter } from 'react-icons/fi';

const Footer = () => {
  const socialLinks = [
    { icon: <FiGithub />, url: 'https://github.com/Preeti0411Gautam' },
    { icon: <FiLinkedin />, url: 'https://www.linkedin.com/in/preeti-gautam-704179137/' },
    // { icon: <FiTwitter />, url: 'https://twitter.com' },
    { icon: <FiMail />, url: 'mailto:preetigautam0411@gmail.com' }
  ];

  return (
    <footer className="bg-white border-t border-t-gray-100">
      <div className="max-w-6xl mx-auto px-5 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <div className="mb-6 md:mb-0">
            <p className=" text-sm">
              © {new Date().getFullYear()} Preeti Gautam. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:text-indigo-600 transition-colors text-xl"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Back to Top */}
        <div className="mt-8 text-center">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;