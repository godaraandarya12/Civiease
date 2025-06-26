import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiMapPin, FiPhone, FiMail, FiLinkedin } from 'react-icons/fi';
import { FaFacebook } from 'react-icons/fa';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 border-t border-gray-800 relative overflow-hidden">
      {/* Floating decorative circle */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute right-10 bottom-10 w-32 h-32 rounded-full border-2 border-blue-900/30 pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Top grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          
          {/* --- Logo and description --- */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col space-y-4"
          >
            <img 
              src={logo} 
              alt="CiviEase Logo" 
              className="w-48 h-auto" // Made logo larger
            />
            <p className="text-sm text-gray-400">
              CiviEase provides comprehensive traffic management and consenting solutions, trusted by builders and developers across Canterbury.
            </p>
          </motion.div>

          {/* --- Navigation links --- */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col items-center"
          >
            <h3 className="text-lg font-semibold text-white mb-4">Explore</h3>
            <ul className="space-y-3 text-center">
              {[
                { name: 'Home', path: '/' },
                { name: 'Services', path: '/services' },
                { name: 'About', path: '/about' },
                { name: 'Contact', path: '/getintouch' },
              ].map((item, index) => (
                <motion.li key={index} whileHover={{ x: 5 }}>
                  <Link
                    to={item.path}
                    className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* --- Contact + Map side-by-side --- */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col md:flex-row gap-6"
          >
            {/* Contact info - left */}
            <div className="flex flex-col space-y-4 md:w-1/2">
              <h3 className="text-lg font-semibold text-white mb-2">Contact</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <FiMapPin className="text-blue-400 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-sm text-gray-400 leading-snug">
                    Unit 7, 2 William Lewis Drive<br />
                    Sockburn, Christchurch 8042
                  </span>
                </div>
                <div className="flex items-center">
                  <FiPhone className="text-blue-400 mr-3 flex-shrink-0" />
                  <span className="text-sm text-gray-400">08000 CIVIL</span>
                </div>
                <div className="flex items-center">
                  <FiMail className="text-blue-400 mr-3 flex-shrink-0" />
                  <span className="text-sm text-gray-400">information@civiease.co.nz</span>
                </div>
              </div>
            </div>

            {/* Map - right */}
            <div className="rounded-lg overflow-hidden shadow-lg md:w-1/2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2891.233392322417!2d172.5483023154779!3d-43.54916637912401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d318afb6e7f4e7d%3A0x1a5e3a1a1a1a1a1a!2s2%20William%20Lewis%20Drive%2C%20Sockburn%2C%20Christchurch%208042!5e0!3m2!1sen!2snz!4v1620000000000!5m2!1sen!2snz"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </motion.div>
        </div>

        {/* --- Bottom bar --- */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-xs text-gray-500 mb-3 md:mb-0">
            © {new Date().getFullYear()} CiviEase. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com/company/civiease-limited"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              <FiLinkedin className="w-5 h-5" />
            </a>
            <a
              href="https://www.facebook.com/people/CiviEase-Ltd/61566789790982/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              <FaFacebook className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
