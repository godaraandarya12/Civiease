
import React, { useState, memo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaHome,
  FaInfoCircle,
  FaFileSignature,
  FaTrafficLight,
  FaTools,
  FaEnvelope,
} from 'react-icons/fa';
import logo from '../assets/logo.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  const navItems = [
    { name: 'Home', href: '/', icon: <FaHome /> },
    { name: 'About Us', href: '/about', icon: <FaInfoCircle /> },
    { name: 'Resource Consent', href: '/resource-consents', icon: <FaFileSignature /> },
    { name: 'DIY Traffic Management', href: '/traffic-management', icon: <FaTrafficLight /> },
    { name: 'Equipment Hire', href: '/equipment-hire', icon: <FaTools /> },
    { name: 'Contact', href: '/getintouch', icon: <FaEnvelope /> },
  ];

  // Logo animation
  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 15,
        duration: 0.8,
      },
    },
    hover: {
      scale: 1.05,
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 1,
        repeat: Infinity,
        repeatType: 'reverse',
      },
    },
  };

  // Nav item animations
  const navItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        type: 'spring',
        stiffness: 300,
        damping: 15,
      },
    }),
    hover: {
      scale: 1.05,
      color: '#a5b4fc',
      transition: {
        type: 'spring',
        stiffness: 400,
      },
    },
  };

  // Mobile menu animation
  const mobileMenuVariants = {
    open: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <header className="bg-gradient-to-r from-gray-900 via-indigo-950 to-gray-900 backdrop-blur-lg sticky top-0 z-50 border-b border-indigo-500/30 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo with Navigation */}
          <motion.div
            className="flex items-center"
            initial="hidden"
            animate="visible"
            whileHover="hover"
            variants={logoVariants}
          >
            <Link to="/" aria-label="Navigate to homepage">
              <img
                src={logo}
                alt="CiviEase Logo"
                className="h-16 w-auto rounded-lg shadow-lg"
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation with Icons */}
          <nav className="hidden lg:flex items-center">
            <div className="flex space-x-4">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  className="relative group"
                  custom={index}
                  variants={navItemVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  onHoverStart={() => setHoveredItem(index)}
                  onHoverEnd={() => setHoveredItem(null)}
                >
                  <Link
                    to={item.href}
                    className="flex flex-col items-center px-3 py-2 text-gray-200 hover:text-indigo-300 focus:outline-none"
                  >
                    <span className="text-2xl mb-1">{item.icon}</span>
                    <span className="text-sm font-medium whitespace-nowrap">
                      {item.name}
                    </span>
                    <motion.div
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-500 rounded-full"
                      initial={{ scaleX: 0 }}
                      animate={{
                        scaleX: hoveredItem === index ? 1 : 0,
                        boxShadow: hoveredItem === index ? '0 0 8px rgba(165, 180, 252, 0.7)' : 'none',
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                </motion.div>
              ))}
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-3 rounded-full text-indigo-300 hover:text-white hover:bg-indigo-800/50 focus:outline-none"
              whileTap={{ scale: 0.9 }}
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ type: 'spring', stiffness: 300 }}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.nav
        className="lg:hidden overflow-hidden"
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
        variants={mobileMenuVariants}
      >
        <div className="px-4 pt-2 pb-6 bg-gradient-to-b from-gray-800 to-indigo-900/95 backdrop-blur-sm">
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              custom={index}
              variants={navItemVariants}
              initial="hidden"
              animate="visible"
              whileHover={{
                x: 5,
                backgroundColor: 'rgba(99, 102, 241, 0.2)',
              }}
            >
              <Link
                to={item.href}
                className="flex items-center px-4 py-3 text-gray-200 hover:text-white focus:outline-none"
                onClick={() => setIsOpen(false)}
              >
                <span className="text-indigo-300 mr-3 text-lg">{item.icon}</span>
                <span className="font-medium">{item.name}</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.nav>
    </header>
  );
};

export default memo(Header);