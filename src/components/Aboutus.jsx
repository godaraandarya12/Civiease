import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import aboutusimage from '../assets/aboutus1.jpeg';

const AboutUs = () => {
    // Memoized color theme
    const colors = useMemo(() => ({
        primary: '#2563EB',
        secondary: '#3B82F6',
        accent: '#93C5FD',
        dark: '#0F172A',
        light: '#E2E8F0'
    }), []);

    // Construction icons
    const constructionIcons = useMemo(() => 
        ['🏗️', '🚧', '🔨', '📐', '🏭', '🚜', '🏢', '🛠️'], 
    []);

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3
            }
        }
    };

    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1]
            }
        }
    };

    const float = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: [0.7, 1, 0.7],
            y: [0, -20, 0],
            transition: {
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    // Core values with symmetrical design
    const coreValues = useMemo(() => [
        { 
            name: 'Cutting-Edge Innovation', 
            description: 'We leverage the latest construction technologies',
            icon: '🚀'
        },
        { 
            name: 'Precision Engineering', 
            description: 'Millimeter-perfect execution on every project',
            icon: '🎯'
        },
       
    ], []);

    // Background icons with symmetrical distribution
    const backgroundIcons = useMemo(() => {
        const positions = [];
        const rows = 4;
        const cols = 4;
        
        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                positions.push({
                    id: `${row}-${col}`,
                    left: `${(col / (cols - 1)) * 90 + 5}%`,
                    top: `${(row / (rows - 1)) * 90 + 5}%`,
                    icon: constructionIcons[(row * cols + col) % constructionIcons.length],
                    size: `${Math.random() * 1 + 1.5}rem`
                });
            }
        }
        return positions;
    }, [constructionIcons]);

    return (
        <section className="relative bg-gray-900 text-white overflow-hidden py-28">
            {/* Symmetrical background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {backgroundIcons.map(({ id, left, top, icon, size }) => (
                    <motion.div
                        key={id}
                        className="absolute opacity-10"
                        style={{ 
                            left, 
                            top,
                            fontSize: size
                        }}
                        animate={{
                            y: [0, Math.random() * 40 - 20],
                            x: [0, Math.random() * 20 - 10],
                            rotate: [0, Math.random() * 360],
                            scale: [1, 1.2, 1]
                        }}
                        transition={{
                            duration: Math.random() * 15 + 10,
                            repeat: Infinity,
                            repeatType: 'reverse',
                            ease: 'linear'
                        }}
                    >
                        {icon}
                    </motion.div>
                ))}
            </div>

            {/* Blueprint grid overlay with perfect symmetry */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <svg width="100%" height="100%">
                    <pattern 
                        id="blueprint" 
                        width="80" 
                        height="80" 
                        patternUnits="userSpaceOnUse"
                    >
                        <circle cx="40" cy="40" r="1" fill={colors.accent} />
                        <path 
                            d="M 0 40 H 80 M 40 0 V 80" 
                            stroke={colors.accent} 
                            strokeWidth="0.5" 
                            strokeDasharray="2 2"
                        />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#blueprint)" />
                </svg>
            </div>

            {/* Main content container with equal height columns */}
            <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
                <motion.div 
                    className="flex flex-col lg:flex-row gap-12 items-stretch"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    {/* Text content - now matching image height */}
                    <div className="lg:w-1/2 flex flex-col justify-center py-8">
                        <motion.div variants={fadeUp} className="space-y-8">
                            <div>
                              
                                <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-400 to-blue-600">
                                        About CiviEase
                                    </span>
                                </h1>
                                <h2 className="text-3xl mt-4 text-white">
                                    Building Tomorrow's Landmarks Today
                                </h2>
                            </div>

                            <div className="space-y-6">
                            <p className="text-lg text-gray-300 leading-relaxed justify">
  <span className="font-semibold text-blue-300">CiviEase</span> is your go-to partner for resource consents, traffic solutions, and hire equipment across Canterbury. From our base in Christchurch, we empower builders and developers to move swiftly, stay compliant, and save costs. Whether it's traffic impact assessments, billboard approvals, TMPs, or on-site management, we provide sharp insight and fast turnaround. Need VMS boards, CCTV, or traffic trucks? We’ve got that too — practical support, anytime, at any stage.
</p>

{/*                                 
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {coreValues.slice(0, 2).map((value, index) => (
                                        <motion.div
                                            key={index}
                                            className="p-4 bg-blue-900/20 rounded-lg border border-blue-700/30"
                                            whileHover={{ y: -5 }}
                                        >
                                            <div className="flex items-start gap-3">
                                                <span className="text-2xl">{value.icon}</span>
                                                <div>
                                                    <h3 className="font-semibold text-blue-300">{value.name}</h3>
                                                    <p className="text-sm text-blue-100">{value.description}</p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div> */}
                                
                                <p className="text-lg text-gray-300 leading-relaxed">
                                    Based in Christchurch, we specialize in resource consents, traffic impact assessments, and comprehensive construction solutions with clear advice and fast turnaround.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div 
                            variants={fadeUp}
                            className="mt-8"
                        >
                            <Link to="/services">
                                <motion.button
                                    whileHover={{
                                        scale: 1.03,
                                        boxShadow: "0 10px 30px -5px rgba(37, 99, 235, 0.25)"
                                    }}
                                    whileTap={{ scale: 0.98 }}
                                    className="flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium group relative overflow-hidden"
                                >
                                    <span className="relative z-10 flex items-center">
                                        Explore Our Services
                                        <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                                    </span>
                                    <motion.div 
                                        className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        initial={{ x: '-100%' }}
                                        whileHover={{ x: '0%' }}
                                        transition={{ duration: 0.6 }}
                                    />
                                </motion.button>
                            </Link>
                        </motion.div>
                    </div>

                    {/* Image section with mirrored creative elements */}
                    <div className="lg:w-1/2 flex items-center justify-center relative">
                        <div className="relative w-full h-full max-w-2xl">
                            {/* Main image container with symmetrical decorative elements */}
                            <motion.div 
                                className="relative z-10 overflow-hidden rounded-2xl shadow-2xl h-full min-h-[400px]"
                                initial={{ opacity: 0, y: 60, rotate: -2 }}
                                animate={{ opacity: 1, y: 0, rotate: 0 }}
                                transition={{ duration: 0.8, delay: 0.4, type: 'spring' }}
                                whileHover={{ y: -10 }}
                            >
                                {/* Main image with gradient overlay */}
                                <div className="relative h-full">
                                    <img
                                        src={aboutusimage}
                                        alt="CiviEase construction team"
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 via-blue-800/30 to-transparent" />
                                </div>
                                
                               
                            </motion.div>

                            {/* Background glow effects - symmetrical */}
                            <motion.div
                                className="absolute -top-12 -left-12 w-40 h-40 rounded-full bg-blue-500/10 blur-xl z-0"
                                variants={float}
                            />
                            <motion.div
                                className="absolute -bottom-12 -right-12 w-40 h-40 rounded-full bg-blue-500/10 blur-xl z-0"
                                variants={float}
                            />
                        </div>
                    </div>
                </motion.div>

                {/* Additional symmetrical content below */}
                <motion.div 
                    className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.2
                            }
                        }
                    }}
                >
                    {/* {coreValues.map((value, index) => (
                        <motion.div
                            key={index}
                            className="p-6 bg-blue-900/20 rounded-xl border border-blue-700/30 backdrop-blur-sm"
                            variants={fadeUp}
                            whileHover={{ 
                                y: -5,
                                backgroundColor: 'rgba(29, 78, 216, 0.3)'
                            }}
                        >
                            <div className="flex items-start gap-4">
                                <span className="text-3xl mt-1">{value.icon}</span>
                                <div>
                                    <h3 className="text-xl font-semibold text-blue-300 mb-2">{value.name}</h3>
                                    <p className="text-blue-100">{value.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))} */}
                </motion.div>
            </div>
        </section>
    );
};

export default AboutUs;