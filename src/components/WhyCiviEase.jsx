import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCheck, FiArrowRight, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import Image from '../assets/Untitled design.svg';



const WhyCiviEase = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [expanded, setExpanded] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

 

  const benefits = [
    {
      title: "End-to-end service",
      description: "From consents to equipment hire, all under one roof",
      icon: "🏗️",
      detail: "We handle every aspect of your traffic management needs, eliminating the hassle of coordinating multiple vendors."
    },
    {
      title: "Faster approvals",
      description: "Council-ready reports with what councils actually need",
      icon: "⚡",
      detail: "Our team knows exactly what councils look for in applications, reducing back-and-forth and getting you approved faster."
    },
    {
      title: "DIY traffic management",
      description: "Reduce your long-term site costs",
      icon: "🚧",
      detail: "Train your team with our DIY program and save significantly on ongoing traffic management expenses."
    },
    {
      title: "Expert support",
      description: "Flexible hire terms built for real-site conditions",
      icon: "👨‍💼",
      detail: "24/7 access to our team of experts who understand the challenges of real construction sites."
    },
    {
      title: "24-hour TMP turnaround",
      description: "Fast, accurate plans delivered next day",
      icon: "⏱️",
      detail: "Emergency job? We'll have your Traffic Management Plan ready within 24 hours, guaranteed."
    },
    {
      title: "24/7 emergency TM",
      description: "On-call traffic management anytime",
      icon: "🆘",
      detail: "Unexpected issues don't keep business hours - neither do we. Call us anytime for emergency support."
    },
    {
      title: "Canterbury-based",
      description: "Strong local knowledge, trusted by locals",
      icon: "📍",
      detail: "As locals, we understand Canterbury's unique traffic challenges and council requirements better than anyone."
    },
    {
      title: "No minimum charges",
      description: "Every job, big or small, matters",
      icon: "💲",
      detail: "We don't believe in punishing small jobs - you only pay for what you need, when you need it."
    },
    {
      title: "No weekend charges",
      description: "Keep building, even on Sunday night",
      icon: "📅",
      detail: "Weekend work is common in construction - we don't charge extra for working when you do."
    },
    {
      title: "No night charges",
      description: "We work when you do, no extra cost",
      icon: "🌙",
      detail: "Night works incur no additional fees - we're here to support your project's schedule."
    },
    {
      title: "Videographic evidence",
      description: "Site checks to eliminate disputes and costs",
      icon: "🎥",
      detail: "We document everything with video evidence to protect you from false claims and disputes."
    },
  ];

  // Split benefits into columns
  const visibleBenefits = expanded ? benefits : benefits.slice(0, 6);
  const column1 = visibleBenefits.slice(0, Math.ceil(visibleBenefits.length / 2));
  const column2 = visibleBenefits.slice(Math.ceil(visibleBenefits.length / 2));

 

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/3 left-1/2 w-64 h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header with creative design */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block relative">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 relative z-10">
              Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">CiviEase</span> Stands Out
            </h2>
            <div className="absolute -bottom-2 left-0 w-full h-3 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-full"></div>
          </div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mt-6">
            Comprehensive solutions designed to accelerate your projects and reduce costs
          </p>
        </motion.div>

        {/* 3-Column Layout */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Left Column - Visual Gallery */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/3 px-4 sticky top-20"
          >
            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 p-8 rounded-2xl border border-gray-700 backdrop-blur-sm h-full">
          
              
              <div className="relative">
                <img
                  src={Image}
                  alt="CiviEase Benefits"
                  className="w-full h-auto object-contain transform hover:scale-105 transition-transform duration-500 mb-6"
                />
                <h3 className="text-2xl font-bold text-white mb-4">Our Promise</h3>
                <p className="text-gray-300 mb-6">
                  We combine local expertise with innovative solutions to deliver unmatched service in traffic management.
                </p>
                <a 
                  href="/contact" 
                  className="inline-flex items-center text-blue-400 hover:text-cyan-400 group transition-colors"
                >
                  Get started today
                  <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Middle and Right Columns - Benefits */}
          <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Middle Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {column1.map((benefit, index) => (
                <BenefitCard 
                  key={`col1-${index}`}
                  id={`col1-${index}`}
                  benefit={benefit}
                  hoveredItem={hoveredItem}
                  setHoveredItem={setHoveredItem}
                />
              ))}
            </motion.div>

            {/* Right Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {column2.map((benefit, index) => (
                <BenefitCard 
                  key={`col2-${index}`}
                  id={`col2-${index}`}
                  benefit={benefit}
                  hoveredItem={hoveredItem}
                  setHoveredItem={setHoveredItem}
                />
              ))}
            </motion.div>
          </div>
        </div>

        {/* View More/Less Button */}
        {benefits.length > 6 && (
          <motion.div 
            className="mt-8 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <button
              onClick={() => setExpanded(!expanded)}
              className="inline-flex items-center px-6 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white hover:bg-gray-700/50 transition-all group"
            >
              {expanded ? (
                <>
                  <span>Show Less</span>
                  <FiChevronUp className="ml-2 group-hover:-translate-y-0.5 transition-transform" />
                </>
              ) : (
                <>
                  <span>View More Benefits</span>
                  <FiChevronDown className="ml-2 group-hover:translate-y-0.5 transition-transform" />
                </>
              )}
            </button>
          </motion.div>
        )}

        {/* Enhanced CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-block relative group">
            <a
              href="/contact"
              className="relative z-10 inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-semibold overflow-hidden hover:shadow-lg hover:shadow-blue-500/20 transition-all"
            >
              <span className="relative z-10">Get Your Free Consultation</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <div className="absolute -z-0 -inset-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl blur-md opacity-70 group-hover:opacity-100 group-hover:-inset-3 transition-all duration-300"></div>
          </div>
          <p className="text-gray-400 mt-4 text-sm">
            No obligations, just expert advice tailored to your project
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const BenefitCard = ({ id, benefit, hoveredItem, setHoveredItem }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div 
      key={id}
      className="relative mb-6 group"
      onMouseEnter={() => setHoveredItem(id)}
      onMouseLeave={() => setHoveredItem(null)}
    >
      <motion.div
        className={`bg-gray-800/70 backdrop-blur-sm p-6 rounded-xl border ${
          hoveredItem === id 
            ? 'border-blue-400 shadow-lg shadow-blue-500/10' 
            : 'border-gray-700'
        } transition-all cursor-pointer`}
        whileHover={{ y: -5 }}
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex items-start gap-4">
          <div className={`p-3 rounded-lg ${
            hoveredItem === id 
              ? 'bg-gradient-to-br from-blue-500 to-cyan-500' 
              : 'bg-blue-500/10'
          } transition-colors flex-shrink-0`}>
            <span className="text-2xl">{benefit.icon}</span>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
            <p className="text-gray-300">{benefit.description}</p>
            
            <AnimatePresence>
              {expanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="text-gray-400 mt-3 text-sm">{benefit.detail}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
      {hoveredItem === id && (
        <motion.div 
          className="absolute -z-10 inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl blur-md"
          layoutId="hoverBackground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
        />
      )}
    </div>
  );
};

export default WhyCiviEase;