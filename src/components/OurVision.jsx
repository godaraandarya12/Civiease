import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiZap,
  FiCompass,
  FiTrendingUp
} from 'react-icons/fi';
import { FaLightbulb, FaGlobeAmericas } from 'react-icons/fa';
import { RiTeamLine } from 'react-icons/ri';

const OurVision = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const fadeInUp = {
    hidden: { y: 15, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.2, 0.65, 0.3, 0.9]
      }
    }
  };

  const cardHover = {
    hover: {
      y: -3,
      scale: 1.02,
      boxShadow: "0 8px 16px -4px rgba(99, 102, 241, 0.25)",
      transition: {
        type: "spring",
        stiffness: 400
      }
    }
  };

  const visionPillars = [
    {
      icon: <FaLightbulb className="text-xl" />,
      title: "Innovation",
      desc: "Cutting-edge construction solutions",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <FaGlobeAmericas className="text-xl" />,
      title: "Local Impact",
      desc: "Building better NZ communities",
      color: "from-teal-500 to-teal-600"
    },
    {
      icon: <RiTeamLine className="text-xl" />,
      title: "Collaboration",
      desc: "Partnerships drive success",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      icon: <FiTrendingUp className="text-xl" />,
      title: "Growth",
      desc: "Sustainable scaling",
      color: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <motion.section 
      className="relative bg-gradient-to-br from-gray-900 to-blue-950 text-gray-100 py-12 overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={container}
    >
      {/* Dynamic background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-blue-500/10 blur-xl"
          animate={{
            x: [0, 20, 0],
            y: [0, -15, 0],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/3 right-1/4 w-40 h-40 rounded-full bg-indigo-600/10 blur-xl"
          animate={{
            x: [0, -15, 0],
            y: [0, 20, 0],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 z-10">
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-12"
          variants={container}
        >
          <motion.div 
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/40 border border-blue-700/50 mb-3 text-xs sm:text-sm tracking-wide"
          >
            <FiZap className="text-blue-400 animate-pulse" />
            <span className="text-blue-300 font-medium">THE FUTURE WE BUILD</span>
          </motion.div>
          
          <motion.h1 
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 leading-tight"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-teal-300">Our </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-blue-300">Vision</span>
          </motion.h1>
          
          <motion.p 
            variants={fadeInUp}
            className="text-base sm:text-lg text-blue-200 max-w-2xl mx-auto"
          >
            Paperwork to Pavement — We Make Construction Easier.
          </motion.p>
        </motion.div>

        {/* Core Vision Statement */}
        <motion.div 
          className="mb-12"
          variants={container}
        >
          <motion.div
            variants={fadeInUp}
            className="bg-gray-800/50 backdrop-blur-sm p-5 sm:p-6 rounded-xl border border-gray-700/50 relative overflow-hidden"
          >
            <div className="absolute -right-10 -top-10 w-32 h-32 rounded-full bg-blue-500/10 blur-lg"></div>
            <motion.h2 
              variants={fadeInUp}
              className="text-lg sm:text-xl font-bold mb-3 flex items-center gap-2 text-blue-100"
            >
              <FiCompass className="text-blue-400" />
              <span>Our Guiding Star</span>
            </motion.h2>
            
            <motion.p 
              variants={fadeInUp}
              className="text-gray-300 text-sm sm:text-base"
            >
              To be NZ's most practical construction partner, combining compliance, 
              traffic safety, and equipment hire into one seamless service that delivers 
              real results — not red tape.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Vision Pillars - Compact Grid */}
        <motion.div 
          className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-10"
          variants={container}
        >
          {visionPillars.map((pillar, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              whileHover={cardHover.hover}
              className={`bg-gradient-to-br ${pillar.color} p-4 rounded-lg shadow-sm relative overflow-hidden h-full border border-white/10`}
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-md bg-white/10 flex items-center justify-center flex-shrink-0">
                  {pillar.icon}
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-1">{pillar.title}</h3>
                  <p className="text-blue-100 text-xs sm:text-sm leading-tight">{pillar.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default OurVision;