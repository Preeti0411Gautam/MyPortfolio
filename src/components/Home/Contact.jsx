import React, { useState } from 'react';
import { FaEnvelope, FaLinkedin, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [message, setMessage] = useState(null);      // for success or error message
  const [isError, setIsError] = useState(false);      // to style based on success or error

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_d6iihso',   // your EmailJS service ID
        'template_5q5hyc1',  // your EmailJS template ID
        e.target,
        'nmHJCRATLYl4Ke6RF'  // your EmailJS public key
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsError(false);
          setMessage('Thanks for contacting me! Please check your email.');
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          setIsError(true);
          setMessage('Oops! Something went wrong. Please try again.');
        }
      );
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-blue-500 text-sm font-medium tracking-wider">GET IN TOUCH</span>
          <h2 className="text-3xl font-bold text-gray-800 mt-2">Contact Me</h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto mt-4"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Info */}
          <div className="w-full lg:w-2/5 space-y-6">
            <p className="text-gray-600">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
              I'll get back to you as soon as possible!
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="text-blue-500 mt-1"><FaEnvelope /></div>
                <div>
                  <h4 className="font-medium text-gray-800">Email</h4>
                  <a href="mailto:preetigautam0411@gmail.com" className="text-gray-600 hover:text-blue-500 transition">
                    preetigautam0411@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-blue-500 mt-1"><FaLinkedin /></div>
                <div>
                  <h4 className="font-medium text-gray-800">LinkedIn</h4>
                  <a 
                    href="https://www.linkedin.com/in/preeti-gautam-704179137/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-500 transition"
                  >
                    linkedin.com/in/preeti-gautam
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-blue-500 mt-1"><FaPhone /></div>
                <div>
                  <h4 className="font-medium text-gray-800">Phone</h4>
                  <a href="tel:+1234567890" className="text-gray-600 hover:text-blue-500 transition">
                    +91 XXXXX XXXXX
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-blue-500 mt-1"><FaMapMarkerAlt /></div>
                <div>
                  <h4 className="font-medium text-gray-800">Location</h4>
                  <p className="text-gray-600">Uttar Pradesh, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full lg:w-3/5">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="from_name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                  <input
                    type="text"
                    id="from_name"
                    name="from_name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="from_email" className="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
                  <input
                    type="email"
                    id="from_email"
                    name="from_email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  placeholder="What's this about?"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  placeholder="Your message here..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center gap-2"
              >
                <FiSend /> Send Message
              </button>

              {/* Display the success or error message */}
              {message && (
                <div className={`mt-4 p-3 rounded-lg ${isError ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                  {message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
