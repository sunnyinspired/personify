import React from 'react';
import { FaEnvelope, FaPhone, FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-cyan-600 mb-8 text-center">Contact Us</h1>
        
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-8">
            <p className="text-lg text-gray-700 mb-6">
              We&apos;d love to hear from you! Whether you have a question about our personality tests, need technical support, or want to explore collaboration opportunities, our team is here to help.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <FaEnvelope className="text-cyan-600 mr-4 text-xl" />
                <a href="mailto:info@personify.com" className="text-gray-600 hover:text-cyan-600">info@personify.com</a>
              </div>
              <div className="flex items-center">
                <FaPhone className="text-cyan-600 mr-4 text-xl" />
                <a href="tel:+2348100123309" className="text-gray-600 hover:text-cyan-600">+234(0) 810 0123 6309</a>
              </div>
            </div>
            
            <h2 className="text-2xl font-semibold text-cyan-600 mb-4">Connect With Us</h2>
            
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-cyan-600 transition-colors duration-300">
                <FaTwitter className="text-3xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-600 transition-colors duration-300">
                <FaFacebook className="text-3xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-600 transition-colors duration-300">
                <FaInstagram className="text-3xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-600 transition-colors duration-300">
                <FaLinkedin className="text-3xl" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-cyan-600 mb-4">Send Us a Message</h2>
          <form className="space-y-4 bg-white p-8 shadow-lg rounded-lg">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input type="text" id="name" name="name" className="mt-1 block w-full h-8 border-2 border-cyan-600 rounded-md shadow-sm focus:ring-cyan-500  focus:border-cyan-500" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" id="email" name="email" className="mt-1 block w-full h-8 border-2 border-cyan-600 rounded-md shadow-sm focus:ring-cyan-500  focus:border-cyan-500" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea id="message" name="message" rows="4" className="mt-1 block w-full  border-2 border-cyan-600 rounded-md shadow-sm focus:ring-cyan-500  focus:border-cyan-500"></textarea>
            </div>
            <div>
              <button type="submit" className="w-full bg-cyan-600 text-white font-bold py-3 px-6 rounded-md hover:bg-cyan-700 transition duration-300">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;