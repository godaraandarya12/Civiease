import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiFileText,
  FiMap,
  FiDollarSign,
  FiTrendingUp,
  FiBarChart2,
  
  FiSettings,
  FiX,
  FiCheck,
  FiArrowRight
} from 'react-icons/fi';
import { BsFillSignNoParkingFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
  const [selectedService, setSelectedService] = useState(null);

  // Animation Variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const fadeInUp = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

 

  const modalVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.3 }
    },
    visible: { 
      opacity: 1,
      scale: 1,
      transition: { 
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const services = [
    {
      id: 1,
      icon: <FiFileText className="text-4xl text-blue-400" />,
      title: "Resource Consents",
      shortDesc: "Council-ready documentation for faster approvals",
      content: {
        description: "We help you prepare, submit, and manage resource consent applications so you can start your project without unnecessary delays. Whether it's a small residential build or a large commercial development, we know exactly how to meet council requirements and avoid the common mistakes that cause hold-ups.",
        features: [
          "Council-ready documentation",
          "Faster approvals",
          "Fewer surprises or rejected submissions",
          "Site-verified assessments",
          "Safe traffic data collection with our certified gear"
        ],
        process: [
          "Initial site assessment",
          "Document preparation",
          "Council liaison",
          "Approval management"
        ]
      }
    },
    {
      id: 2,
      icon: <FiMap className="text-4xl text-purple-400" />,
      title: "New Billboard Applications",
      shortDesc: "Approval for standard and digital billboards",
      content: {
        description: "We help you secure council approval for both standard and digital billboards — fast, compliant, and hassle-free. Whether it's a roadside advertising board, temporary construction signage, or a digital billboard capable of showing multiple rotating ads, we manage the entire process.",
        features: [
          "End-to-end billboard consent support",
          "Digital signage approval and advice",
          "Faster council decisions",
          "Revenue-generating signage layouts",
          "Legal, safe, and well-placed boards"
        ],
        process: [
          "Site feasibility assessment",
          "Design compliance check",
          "Application preparation",
          "Council negotiation"
        ]
      }
    },
    {
      id: 3,
      icon: <FiDollarSign className="text-4xl text-green-400" />,
      title: "Quantity Surveying",
      shortDesc: "Accurate cost estimates and tender documents",
      content: {
        description: "Our quantity surveying and tendering services provide clear, accurate estimates for materials, labour, and construction costs — so you know where your money's going, and how to manage it. We create detailed Bill of Quantities (BoQ), cost breakdowns, and tender packs that speak the language of councils, funders, and subcontractors.",
        features: [
          "Transparent, accurate cost estimates",
          "Detailed tender-priced documents",
          "Stronger negotiation position",
          "Reduced risk of budget blowouts",
          "Market-aligned pricing guidance"
        ],
        process: [
          "Project scope analysis",
          "Material & labor costing",
          "Document preparation",
          "Tender support"
        ]
      }
    },
    {
      id: 4,
      icon: <FiTrendingUp className="text-4xl text-orange-400" />,
      title: "Traffic Impact Assessments",
      shortDesc: "Council-ready TIAs with practical solutions",
      content: {
        description: "We prepare professional, council-ready TIAs that assess how your development will affect local traffic, road safety, and parking. Whether you're building a commercial site, subdivision, or roadside structure, our reports are designed to meet council requirements and avoid project delays.",
        features: [
          "Council-compliant reports",
          "In-house traffic surveying",
          "Faster consent processing",
          "Practical mitigation plans",
          "Local road network knowledge"
        ],
        process: [
          "Site visit & data collection",
          "Impact analysis",
          "Mitigation planning",
          "Report finalization"
        ]
      }
    },
    {
      id: 5,
      icon: <FiBarChart2 className="text-4xl text-pink-400" />,
      title: "Traffic Surveying",
      shortDesc: "Reliable data collection for your projects",
      content: {
        description: "We conduct comprehensive traffic surveys, including vehicle counts, pedestrian counts, turning movements, parking occupancy, and speed studies. Whether it's for a Traffic Impact Assessment, parking analysis, or infrastructure planning, we use calibrated equipment and trained staff to ensure accurate data collection.",
        features: [
          "Accurate, council-acceptable data",
          "Safe data collection",
          "Quick turnaround",
          "Data formatted for reports",
          "Flexible survey packages"
        ],
        process: [
          "Survey planning",
          "On-site data collection",
          "Data analysis",
          "Report preparation"
        ]
      }
    },
    {
      id: 6,
      icon: <BsFillSignNoParkingFill className="text-4xl text-cyan-400" />,
      title: "Parking Area Design",
      shortDesc: "Compliant, efficient parking layouts",
      content: {
        description: "We design parking areas that are safe, space-efficient, and fully compliant with local council and NZTA standards. We assess or design everything from car parks and loading zones to accessible parking and turning paths, using tools like swept-path analysis to get it right.",
        features: [
          "Compliant, space-smart layouts",
          "Full design services",
          "Swept-path analysis",
          "Fewer RFI delays",
          "Development-specific advice"
        ],
        process: [
          "Site assessment",
          "Layout design",
          "Compliance check",
          "Final documentation"
        ]
      }
    },
    {
      id: 7,
      icon: <FiSettings className="text-4xl text-yellow-400" />,
      title: "Traffic Management",
      shortDesc: "End-to-end traffic planning & control",
      content: {
        description: "We don't just write TMPs — we help you plan, set up, manage, and optimise your entire traffic management approach from design to delivery. Our Traffic Management Plans are designed by a qualified roading and traffic engineer with over 5,000 projects of experience.",
        features: [
          "Expert TMP design",
          "Fast approvals (24-hour turnaround)",
          "Full on-site setup",
          "DIY training available",
          "No hidden charges"
        ],
        process: [
          "Site assessment",
          "Plan development",
          "Authority approval",
          "On-site implementation"
        ]
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-950 text-gray-100 overflow-hidden">
      {/* Floating Background Elements */}
      <motion.div
        animate={{
          x: [0, 20, 0],
          y: [0, -15, 0],
          rotate: [0, 5, 0]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear"
        }}
        className="absolute top-20 left-10 w-40 h-40 rounded-full bg-blue-800 opacity-10 blur-xl"
      />
      
      <motion.div
        animate={{
          x: [0, -15, 0],
          y: [0, 20, 0]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear"
        }}
        className="absolute bottom-1/3 right-10 w-48 h-48 rounded-full bg-blue-700 opacity-10 blur-xl"
      />

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        {/* Hero Section */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={container}
          className="text-center mb-20"
        >
        
          <motion.h1 
            variants={fadeInUp}
            className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-100"
          >
            OUR <span className="">SPECIALIZED SERVICES</span>
          </motion.h1>
          
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-blue-200 max-w-3xl mx-auto"
          >
            Expert services to navigate regulations, optimize designs, and accelerate your projects.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          variants={container}
          className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-20"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={fadeInUp}
              whileHover="hover"
            //   variants={cardHover}
              onClick={() => setSelectedService(service)}
              className="bg-gray-800/60 backdrop-blur-sm p-6 rounded-xl border border-gray-700 cursor-pointer transition-all"
            >
              <div className="flex items-start gap-4 mb-4">
                <motion.div
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  className="flex-shrink-0"
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-white">{service.title}</h3>
              </div>
              
              <p className="text-gray-400">{service.shortDesc}</p>
              
              <motion.div
                whileHover={{ x: 5 }}
                className="mt-4 flex items-center gap-2 text-blue-400 text-sm font-medium"
              >
                Learn more <FiArrowRight className="text-xs" />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <AnimatePresence>
          {selectedService && (
            <motion.div 
              className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4" // Reduced padding
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
            >
              <motion.div
                className="bg-gray-800 rounded-2xl border border-gray-700 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-5 relative"> {/* Reduced padding */}
                  <button 
                    className="absolute top-3 right-3 text-gray-400 hover:text-white" // Adjusted position
                    onClick={() => setSelectedService(null)}
                  >
                    <FiX className="text-xl" /> {/* Reduced size */}
                  </button>
                  
                  <div className="flex items-start gap-3 mb-4"> {/* Reduced gap and margin */}
                    <div className="text-3xl mt-1"> {/* Reduced size */}
                      {selectedService.icon}
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-white"> {/* Reduced text size */}
                      {selectedService.title}
                    </h2>
                  </div>
                  
                  <div className="space-y-4"> {/* Reduced space */}
                    <motion.div
                      variants={fadeInUp}
                      className="prose prose-invert max-w-none"
                    >
                      <p className="text-gray-300"> {/* Removed text-lg */}
                        {selectedService.content.description}
                      </p>
                    </motion.div>
                    
                    <motion.div
                      variants={fadeInUp}
                      className="bg-blue-900/20 p-4 rounded-xl border border-blue-800" // Reduced padding
                    >
                      <h3 className="text-lg font-bold text-blue-300 mb-3 flex items-center gap-2"> {/* Reduced text size and margin */}
                        <FiCheck /> What You Get
                      </h3>
                      <ul className="space-y-2"> {/* Reduced space */}
                        {selectedService.content.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <FiCheck className="text-blue-400 mt-0.5 flex-shrink-0 text-sm" /> {/* Reduced size */}
                            <span className="text-sm text-gray-300">{feature}</span> {/* Reduced text size */}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                    
                    <motion.div
                      variants={fadeInUp}
                    >
                      <h3 className="text-lg font-bold text-white mb-3"> {/* Reduced text size and margin */}
                        Our Process
                      </h3>
                      <div className="space-y-3"> {/* Reduced space */}
                        {selectedService.content.process.map((step, i) => (
                          <div key={i} className="flex items-start gap-3"> {/* Reduced gap */}
                            <div className="bg-blue-600 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5 text-sm"> {/* Reduced size */}
                              {i + 1}
                            </div>
                            <p className="text-sm text-gray-300">{step}</p> {/* Reduced text size */}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                  
                  <Link to="/GetinTouch"><motion.div
                    variants={fadeInUp}
                    className="mt-6 flex flex-col sm:flex-row gap-3" // Reduced margin and gap
                  > 
                  
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      className="bg-transparent border border-blue-400 text-blue-400 hover:bg-blue-900/30 px-4 py-2 rounded-lg font-medium flex-1 text-center text-sm" // Reduced padding, border, and text size
                    >
                      Ask a Question
                    </motion.button>
                  
                  </motion.div>
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
};

export default ServicesPage;