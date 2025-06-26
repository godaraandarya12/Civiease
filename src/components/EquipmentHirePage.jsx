import React, { useState, useEffect } from 'react';
import { 
  FaSun, 
  FaTrafficLight, 
  FaVideo, 
  FaTruck, 
  FaSign, 
  FaCheckCircle, 
  FaPhone, 
  FaCalendarAlt, 
  FaTools,
  FaArrowRight
} from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

const EquipmentCard = ({ icon, title, features, perfectFor, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15, duration: 0.6, ease: 'easeOut' }}
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className={`bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm p-6 rounded-xl border border-gray-600/50 shadow-lg transition-all duration-300 hover:shadow-xl overflow-hidden ${isExpanded ? 'min-h-[350px]' : 'min-h-[200px]'}`}>
        {/* Floating decorative element */}
        <motion.div
          animate={{ 
            x: isHovered ? [0, 5, -5, 0] : 0,
            y: isHovered ? [0, -5, 5, 0] : 0 
          }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute -top-10 -right-10 w-32 h-32 opacity-10"
        >
          {React.cloneElement(icon, { className: 'text-6xl text-blue-400/20' })}
        </motion.div>

        <div className="flex items-start mb-4 z-10 relative">
          <motion.div 
            animate={{ 
              scale: isHovered ? [1, 1.1, 1] : 1,
              rotate: isHovered ? [0, 5, -5, 0] : 0
            }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-blue-600 to-blue-800 p-3 rounded-lg"
          >
            {React.cloneElement(icon, { className: 'text-xl text-white' })}
          </motion.div>
          <h4 className="ml-4 text-xl font-semibold text-white mt-1">{title}</h4>
        </div>

        <motion.p
          initial={{ opacity: 1 }}
          animate={{ opacity: isExpanded ? 0 : 1 }}
          className="text-sm text-blue-300 italic mb-2"
        >
          Perfect for: {perfectFor}
        </motion.p>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4"
            >
              <ul className="space-y-2.5 mb-5">
                {features.map((feature, i) => (
                  <motion.li
                    key={i}
                    initial={{ x: -15, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.08 + 0.2 }}
                    className="flex items-start text-sm text-gray-200"
                  >
                    <FaCheckCircle className="text-green-400 mt-0.5 mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: features.length * 0.08 + 0.3 }}
              >
                <motion.button
                  whileHover={{ 
                    scale: 1.03,
                    boxShadow: '0 5px 15px -3px rgba(59, 130, 246, 0.3)'
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2.5 rounded-lg font-medium flex items-center justify-center gap-2"
                >
                  Request Quote <FaArrowRight className="text-sm" />
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const StepIndicator = ({ number, title, icon, delay }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay * 150);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="flex flex-col items-center text-center p-4"
    >
      <motion.div 
        className="relative mb-4"
        whileHover={{ scale: 1.05 }}
        animate={{
          rotate: [0, 2, -2, 0],
          transition: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
      >
        <div className="absolute inset-0 bg-blue-500 rounded-full blur-md opacity-20"></div>
        <div className="relative w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg">
          {number}
        </div>
        <div className="absolute -bottom-2 -right-2 bg-white text-blue-600 rounded-full p-2 shadow-md">
          {React.cloneElement(icon, { className: 'text-sm' })}
        </div>
      </motion.div>
      <h4 className="text-base font-medium text-white">{title}</h4>
    </motion.div>
  );
};

const FloatingOrbs = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full ${i % 2 ? 'bg-blue-500/10' : 'bg-teal-500/10'}`}
          style={{
            width: `${100 + Math.random() * 200}px`,
            height: `${100 + Math.random() * 200}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            filter: 'blur(60px)'
          }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0.1, 0.3, 0.1],
            x: [0, Math.random() * 100 - 50],
            y: [0, Math.random() * 100 - 50]
          }}
          transition={{
            duration: 20 + Math.random() * 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
};

const EquipmentHirePage = () => {
  const [activeBenefit, setActiveBenefit] = useState(0);
  const [isHovered, setIsHovered] = useState(null);

  const equipmentList = [
    {
      icon: <FaSun />,
      title: 'VMS Boards',
      features: [
        'Solar-powered LED displays',
        'Remote message updating',
        'NZTA and council compliant',
        'Multi-message sequencing',
        'Speed display capabilities'
      ],
      perfectFor: 'Roadworks, events, safety alerts',
    },
    {
      icon: <FaTrafficLight />,
      title: 'Temporary Traffic Lights',
      features: [
        'Fully NZTA compliant',
        'Pedestrian crossing modes',
        'Programmable timing',
        'Solar/battery powered',
        'Rapid deployment system'
      ],
      perfectFor: 'Lane closures, intersections',
    },
    {
      icon: <FaVideo />,
      title: 'Site CCTV',
      features: [
        '24/7 remote monitoring',
        'Live streaming capability',
        'Solar or mains powered',
        'Infrared night vision',
        'Weatherproof housing'
      ],
      perfectFor: 'Security, progress monitoring',
    },
    {
      icon: <FaTruck />,
      title: 'Traffic Trucks',
      features: [
        'TMA equipped for safety',
        'Optional crew included',
        'LED arrow boards',
        'Flexible hire periods',
        'Emergency response ready'
      ],
      perfectFor: 'Mobile operations, night works',
    },
    {
      icon: <FaSign />,
      title: 'Signage & Barriers',
      features: [
        'Full NZTA compliance',
        'Cones, signs & sandbags',
        'Plastic or steel options',
        'Weighted bases included',
        'Cost-effective bundles'
      ],
      perfectFor: 'DIY setups, temporary works',
    },
  ];

  const benefits = [
    'Transparent Pricing - No hidden fees or surprise charges',
    'Flexible Terms - Rent by the hour, day, or month',
    'Fully Compliant - Meets all NZTA and council standards',
    'Rapid Delivery - Same-day service in Christchurch',
    'Expert Support - Setup guidance and troubleshooting',
    'Premium Quality - Well-maintained, reliable equipment',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (isHovered === null) {
        setActiveBenefit((prev) => (prev + 1) % benefits.length);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [benefits.length, isHovered]);

  return (
    <ParallaxProvider>
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white font-sans overflow-x-hidden">
        <FloatingOrbs />
        
        {/* Blueprint grid overlay */}
        <div className="fixed inset-0 opacity-5 pointer-events-none">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBvcGFjaXR5PSIwLjEiPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25VzZSI+PHBhdGggZD0iTSA0MCAwIEwgMCAwIDAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          {/* Hero Section */}
          <Parallax speed={-10}>
            <section className="mb-20">
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="bg-gradient-to-br from-gray-800/95 to-gray-900/95 backdrop-blur-lg rounded-3xl p-8 md:p-10 shadow-2xl border border-gray-600/50 relative overflow-hidden"
              >
                {/* Decorative elements */}
                <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-blue-600/10 blur-xl"></div>
                <div className="absolute -left-20 -bottom-20 w-64 h-64 rounded-full bg-teal-600/10 blur-xl"></div>
                
                <div className="relative z-10 max-w-2xl">
                  <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight"
                  >
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">Premium Equipment</span> for Your Construction Needs
                  </motion.h1>
                  
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-lg text-gray-300 mb-8 max-w-xl"
                  >
                    Reliable, compliant traffic management equipment with flexible rental terms and expert support.
                  </motion.p>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="flex flex-wrap gap-4"
                  >
                    <motion.a
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.3)'
                      }}
                      whileTap={{ scale: 0.98 }}
                      href="#equipment"
                      className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg flex items-center gap-2"
                    >
                      Explore Equipment <FaArrowRight className="text-sm" />
                    </motion.a>
                    
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      href="tel:0800248453"
                      className="bg-gray-700/80 hover:bg-gray-700 text-white px-6 py-3 rounded-xl font-medium shadow-lg flex items-center gap-2"
                    >
                      <FaPhone /> 0800 CIVIL
                    </motion.a>
                  </motion.div>
                </div>
              </motion.div>
            </section>
          </Parallax>

          {/* Equipment List */}
          <section id="equipment" className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
              className="mb-12 text-center"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 flex items-center justify-center gap-3">
                <FaTools className="text-blue-400" />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
                  Our Equipment Range
                </span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                High-quality, NZTA-compliant gear for all your traffic management and construction needs
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {equipmentList.map((item, index) => (
                <EquipmentCard key={index} index={index} {...item} />
              ))}
            </motion.div>
          </section>

          {/* Benefits Section */}
          <Parallax speed={5}>
            <section className="mb-20">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-900/30 to-blue-800/30 backdrop-blur-lg rounded-3xl p-8 md:p-10 border border-blue-800/30 shadow-xl overflow-hidden relative"
              >
                {/* Decorative elements */}
                <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-blue-600/10 blur-xl"></div>
                <div className="absolute -left-20 -bottom-20 w-64 h-64 rounded-full bg-teal-600/10 blur-xl"></div>
                
                <motion.h2
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="text-2xl md:text-3xl font-bold text-white mb-8 text-center"
                >
                  Why Choose <span className="text-blue-300">CiviEase</span> Equipment Hire?
                </motion.h2>

                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="relative min-h-[300px]">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeBenefit}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.4 }}
                        className="bg-blue-900/20 p-6 rounded-xl border border-blue-800/50 h-full"
                        onMouseEnter={() => setIsHovered(activeBenefit)}
                        onMouseLeave={() => setIsHovered(null)}
                      >
                        <div className="flex items-start mb-4">
                          <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-3 rounded-lg mr-4">
                            <FaCheckCircle className="text-xl text-blue-200" />
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-white mb-1">
                              {benefits[activeBenefit].split(' - ')[0]}
                            </h3>
                            <p className="text-blue-100">
                              {benefits[activeBenefit].split(' - ')[1]}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                    
                    <div className="flex justify-center mt-4 space-x-2">
                      {benefits.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setActiveBenefit(index)}
                          className={`w-3 h-3 rounded-full transition-all ${
                            activeBenefit === index ? 'bg-white w-6' : 'bg-blue-600/50'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {benefits.slice(0, 4).map((benefit, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 + 0.3 }}
                        viewport={{ once: true }}
                        whileHover={{ 
                          y: -5,
                          backgroundColor: 'rgba(16, 112, 202, 0.2)'
                        }}
                        className={`p-5 rounded-xl border ${
                          index % 2 === 0 
                            ? 'bg-blue-900/20 border-blue-700/50' 
                            : 'bg-blue-800/20 border-blue-600/50'
                        }`}
                        onMouseEnter={() => setIsHovered(index)}
                        onMouseLeave={() => setIsHovered(null)}
                      >
                        <div className="flex items-start mb-2">
                          <div className={`p-2 rounded-lg mr-3 ${
                            index % 2 === 0 
                              ? 'bg-blue-600/80' 
                              : 'bg-blue-700/80'
                          }`}>
                            <FaCheckCircle className="text-blue-200 text-sm" />
                          </div>
                          <h4 className="text-base font-medium text-white">
                            {benefit.split(' - ')[0]}
                          </h4>
                        </div>
                        <p className="text-blue-100 text-sm ml-10">
                          {benefit.split(' - ')[1]}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </section>
          </Parallax>

          {/* Booking Process */}
          <section className="mb-20">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12 text-center"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Simple <span className="text-blue-300">4-Step</span> Rental Process
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Get the equipment you need quickly and efficiently
              </p>
            </motion.div>

            <div className="relative">
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-600/50 hidden sm:block z-0">
                <motion.div 
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 1.5 }}
                  viewport={{ once: true }}
                  className="h-full bg-gradient-to-r from-blue-600 to-teal-600 origin-left"
                />
              </div>
              
              <div className="grid sm:grid-cols-4 gap-6 relative z-10">
                <StepIndicator number={1} title="Request" icon={<FaTools />} delay={1} />
                <StepIndicator number={2} title="Schedule" icon={<FaCalendarAlt />} delay={2} />
                <StepIndicator number={3} title="Confirm" icon={<FaCheckCircle />} delay={3} />
                <StepIndicator number={4} title="Delivery" icon={<FaTruck />} delay={4} />
              </div>
            </div>

         
          </section>

        </div>
      </div>
    </ParallaxProvider>
  );
};

export default EquipmentHirePage;