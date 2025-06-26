import React from 'react';
import { motion } from 'framer-motion';
import {
  FiMapPin,
  FiFileText,
  FiCheckCircle,
  FiAlertCircle,
  FiClock,
  FiArrowRight,
  FiSend,
  FiMessageSquare
} from 'react-icons/fi';
import { FaCity, FaTrafficLight, FaParking, FaRulerCombined } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ResourceConsents = () => {
  // Enhanced animations
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const cardHover = {
    hover: { 
      y: -10,
      boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)",
      transition: { 
        type: "spring",
        stiffness: 300
      }
    }
  };

  const pulse = {
    pulse: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Enhanced services data with more descriptive icons
  const services = [
    { icon: <FaCity className="text-2xl" />, title: "On-site Visits", desc: "Understand your project in context with our comprehensive site analysis" },
    { icon: <FiFileText className="text-2xl" />, title: "Planning Guidance", desc: "Expert navigation through district rules to avoid costly delays" },
    { icon: <FaTrafficLight className="text-2xl" />, title: "Traffic Reports", desc: "Council-ready assessments with professional surveys" },
    { icon: <FaParking className="text-2xl" />, title: "Parking Design", desc: "Innovative yet compliant layout solutions tailored to your space" },
    { icon: <FaRulerCombined className="text-2xl" />, title: "Quantity Surveying", desc: "Precision measurements for tender-ready documentation" },
    { icon: <FiCheckCircle className="text-2xl" />, title: "Full Compliance", desc: "End-to-end assurance meeting all regulatory requirements" }
  ];

  const requirements = [
    { icon: <FiMapPin className="text-blue-300" />, text: "Site address or legal title" },
    { icon: <FiFileText className="text-blue-300" />, text: "Project description & any plans" },
    { icon: <FiFileText className="text-blue-300" />, text: "Council letters or RFI notes" },
    { icon: <FiAlertCircle className="text-blue-300" />, text: "Known overlays or issues" },
    { icon: <FiClock className="text-blue-300" />, text: "Preferred deadlines" }
  ];

  return (
    <section className="min-h-screen px-6 py-20 bg-gradient-to-br from-blue-950 via-blue-900 to-gray-900 text-gray-100 overflow-hidden">
      {/* Floating background elements */}
      <motion.div 
        animate={{ 
          x: [0, 10, 0],
          y: [0, -10, 0],
          rotate: [0, 2, 0]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear"
        }}
        className="absolute top-20 left-10 w-32 h-32 rounded-full bg-blue-800 opacity-10 blur-xl"
      />
      <motion.div 
        animate={{ 
          x: [0, -15, 0],
          y: [0, 15, 0]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear"
        }}
        className="absolute bottom-40 right-10 w-40 h-40 rounded-full bg-blue-700 opacity-10 blur-xl"
      />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="max-w-7xl mx-auto space-y-16 relative z-10"
      >
        {/* Title + Mission */}
        <motion.div 
          variants={fadeIn}
          className="text-center space-y-6"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-blue-200 to-blue-100 leading-tight"
          >
            Resource Consent, <span className="italic">Simplified</span>.
          </motion.h1>
          
          <motion.p 
            variants={fadeIn}
            className="text-blue-200 text-xl md:text-2xl max-w-3xl mx-auto font-medium"
          >
            Council-ready, clear, and done right — we take the stress out of consenting.
          </motion.p>
          
          <motion.p 
            variants={fadeIn}
            className="text-gray-300 max-w-4xl mx-auto text-lg"
          >
            Whether starting a new development or recovering a stalled one, CiviEase delivers the full scope — fast, clear, and without the usual council back-and-forth.
          </motion.p>
        </motion.div>

        {/* Service Cards */}
        <motion.div 
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((item, idx) => (
            <motion.div
              key={idx}
              variants={fadeIn}
              whileHover="hover"
            //   variants={cardHover}
              className="bg-gray-800/80 p-8 rounded-2xl border border-blue-700/50 shadow-lg backdrop-blur-sm hover:backdrop-blur-md transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <motion.span 
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className="text-3xl text-blue-400"
                >
                  {item.icon}
                </motion.span>
                <h3 className="font-bold text-xl text-blue-100">{item.title}</h3>
              </div>
              <p className="text-gray-400">{item.desc}</p>
              
            </motion.div>
          ))}
        </motion.div>

        {/* Requirements + Why More Is Better */}
        <motion.div 
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
        >
          <motion.div variants={fadeIn}>
            <h2 className="text-3xl font-bold text-blue-200 mb-6 flex items-center gap-3">
              <motion.span
                animate="pulse"
                variants={pulse}
              >
                ✨
              </motion.span>
              What We'll Need from You
            </h2>
            <ul className="space-y-4">
              {requirements.map((req, idx) => (
                <motion.li 
                  key={idx}
                  variants={fadeIn}
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 bg-gray-800/60 p-5 rounded-xl border border-gray-700 hover:border-blue-500 transition-colors"
                >
                  <span className="text-xl mt-0.5">{req.icon}</span>
                  <span className="text-gray-200">{req.text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            variants={fadeIn}
            className="bg-gray-800/60 p-8 rounded-2xl border border-gray-700/70 shadow-lg backdrop-blur-sm hover:backdrop-blur-md transition-all duration-500 space-y-6 relative overflow-hidden"
          >
            <div className="absolute -right-10 -top-10 w-32 h-32 rounded-full bg-blue-600 opacity-20 blur-2xl"></div>
            <h3 className="text-2xl font-bold text-blue-300 relative z-10">
              Why More is Better <span className="text-blue-200">(But Less is Okay)</span>
            </h3>
            <p className="text-gray-300 text-lg relative z-10">
              The more you share upfront, the faster we can scope, quote, and deliver. But even a simple address and idea gets us started — we'll fill in the gaps.
            </p>
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-blue-900/40 p-6 rounded-xl border border-blue-700/50 text-blue-200 relative z-10 backdrop-blur-sm"
            >
              <div className="flex items-start gap-3">
                <FiAlertCircle className="text-xl mt-1 flex-shrink-0" />
                <p>
                  With CiviEase, you get practical guidance, fast turnaround, and a team that knows how to keep your project moving — no delays, no hidden fees.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

       <Link to="/getintouch">
        <motion.div 
          variants={fadeIn}
          className="text-center pt-16"
        >
          <div className="relative inline-block">
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.8, 1, 0.8]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 bg-blue-600/30 rounded-full blur-md -z-10"
            />
            <h2 className="text-3xl md:text-4xl font-bold text-blue-300 mb-6">
              Ready to Get Started?
            </h2>
          </div>
          
          <motion.p 
            whileHover={{ scale: 1.01 }}
            className="text-gray-400 mb-8 text-lg max-w-2xl mx-auto"
          >
            Send what you have — we'll handle the rest and keep your consent process smooth.
          </motion.p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 5px 15px rgba(156, 163, 175, 0.3)"
              }}
              whileTap={{ scale: 0.98 }}
              className="bg-gray-700/80 hover:bg-gray-600/80 text-blue-300 py-4 px-8 rounded-xl border border-gray-600 shadow-lg flex items-center gap-2 text-lg font-medium"
            >
              <FiMessageSquare /> Ask Our Experts
            </motion.button>
          </div>
        </motion.div>
        </Link>
      </motion.div>
    </section>
  );
};

export default ResourceConsents;