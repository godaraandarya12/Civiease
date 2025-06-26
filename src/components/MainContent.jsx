import React from 'react';
import { motion } from 'framer-motion';
import backgroundImage from '../assets/Bg.png';

const MainContent = () => {
  // Simplified floating elements with consistent styling
  const floatingElements = [
    { type: 'crane', size: 100 },
    { type: 'hammer', size: 80 },
    { type: 'helmet', size: 70 },
    { type: 'truck', size: 90 },
  ];

  // Clean color palette
  const colors = {
    primary: '#1E40AF', // Rich blue
    secondary: '#3B82F6', // Vibrant blue
    accent: '#93C5FD', // Light blue
    background: '#111827', // Dark background
  };

  return (
    <main
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        backgroundColor: colors.background,
        backgroundImage: `linear-gradient(rgba(17, 24, 39, 0.9), rgba(49, 52, 58, 0.35)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Subtle animated particles */}
      {/* <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute rounded-full bg-blue-400"
            style={{
              width: `${Math.random() * 8 + 4}px`,
              height: `${Math.random() * 8 + 4}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.6 + 0.2,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        ))}
      </div> */}

      {/* Floating construction elements
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingElements.map((element, i) => (
          <motion.div
            key={`element-${i}`}
            className="absolute"
            style={{
              width: `${element.size}px`,
              height: `${element.size}px`,
              left: `${Math.random() * 80 + 10}%`,
              top: `${Math.random() * 70 + 15}%`,
              filter: 'drop-shadow(0 0 10px rgba(59, 130, 246, 0.3))',
            }}
            animate={{
              rotate: [0, 360],
              y: [0, Math.random() * 40 - 20],
            }}
            transition={{
              duration: Math.random() * 25 + 25,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {element.type === 'crane' && (
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <path
                  d="M50 10 L50 80 M50 40 L80 20 M80 20 L80 70 M80 40 L95 25"
                  stroke={colors.accent}
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            )}
            {element.type === 'hammer' && (
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <rect
                  x="40"
                  y="20"
                  width="10"
                  height="60"
                  rx="5"
                  fill={colors.secondary}
                />
                <rect
                  x="20"
                  y="70"
                  width="50"
                  height="15"
                  rx="5"
                  fill={colors.secondary}
                />
              </svg>
            )}
            {element.type === 'helmet' && (
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <path
                  d="M50 20 C70 20 85 35 85 55 C85 75 70 90 50 90 C30 90 15 75 15 55 C15 35 30 20 50 20"
                  fill="none"
                  stroke={colors.primary}
                  strokeWidth="4"
                />
              </svg>
            )}
            {element.type === 'truck' && (
              <svg viewBox="0 0 100 60" className="w-full h-full">
                <rect
                  x="20"
                  y="20"
                  width="60"
                  height="30"
                  rx="3"
                  fill="none"
                  stroke={colors.accent}
                  strokeWidth="2"
                />
                <circle cx="35" cy="50" r="8" fill="none" stroke={colors.accent} strokeWidth="2" />
                <circle cx="65" cy="50" r="8" fill="none" stroke={colors.accent} strokeWidth="2" />
              </svg>
            )}
          </motion.div>
        ))}
      </div> */}

      {/* Main content */}
      <div className="relative max-w-4xl mx-auto px-6 py-20 text-center z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.2 }}
        >
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <span className="block">Building The Future</span>
            <motion.span
              className="block text-blue-400 mt-3"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              With Precision & Care
            </motion.span>
          </motion.h1>
          
          <motion.p
            className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-10"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
           Your permanent partner from Conception to Completion, CiviEase supports construction principals at every critical stage of their project journey. 
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
             <motion.a
              href="/services"
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              Our Services
            </motion.a>
            <motion.a
              href="/contact"
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              Contact Us
            </motion.a>
            
           
          </motion.div>
        </motion.div>

       
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent z-0"></div>
    </main>
  );
};

export default MainContent;