import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Image1 from '../assets/image1.png';
import Image2 from '../assets/image2.png';

const TrafficManagementQuotePage = () => {
  const [expandedSection, setExpandedSection] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const handleDownload = async () => {
    const images = [
      { src: Image1, name: 'image1.png' },
      { src: Image2, name: 'image2.png' },
    ];

    for (const image of images) {
      try {
        const response = await fetch(image.src);
        if (!response.ok) throw new Error(`Failed to fetch ${image.name}`);
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = image.name;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      } catch (error) {
        console.error(`Error downloading ${image.name}:`, error);
      }
    }
  };

  const equipmentItems = [
    { 
      id: 1, 
      title: "VMS Boards", 
      description: "Solar-powered, remote programmable message boards",
      icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z"
    },
    { 
      id: 2, 
      title: "Traffic Lights", 
      description: "Temporary traffic light systems with programmable timings",
      icon: "M13 10V3L4 14h7v7l9-11h-7z"
    },
    { 
      id: 3, 
      title: "Site CCTV", 
      description: "Construction site surveillance cameras with monitoring",
      icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
    },
    { 
      id: 4, 
      title: "Traffic Trucks", 
      description: "Specialized vehicles for cone placement and retrieval",
      icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100 font-sans">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-8 py-16">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {/* Left Column - Services */}
          <div className="lg:col-span-2 space-y-8">
            {/* Service Options */}
            <section className="bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 shadow-2xl">
              <div className="p-8 border-b border-gray-700">
                <h3 className="text-2xl font-bold mb-2 flex items-center">
                  <span className="bg-orange-500 w-3 h-3 rounded-full mr-3" />
                  Our Service Options
                </h3>
                <p className="text-gray-400">
                  Choose the solution that fits your project requirements and budget
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 divide-x divide-gray-700">
                <div 
                  className={`p-8 transition-all duration-300 ${expandedSection === 'full-service' ? 'bg-gray-700/30' : 'hover:bg-gray-700/20 cursor-pointer'}`}
                  onClick={() => toggleSection('full-service')}
                >
                  <div className="flex items-start mb-4">
                    <div className="bg-blue-500/10 p-2 rounded-lg mr-4 border border-blue-500/30">
                      <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <h4 className="text-xl font-semibold text-blue-300">Full-service Management</h4>
                  </div>
                  
                  {expandedSection === 'full-service' && (
                    <div className="animate-fade-in">
                      <ul className="space-y-3 text-gray-300 pl-16">
                        <li className="flex items-start">
                          <span className="bg-blue-500/10 p-1 rounded-full mr-3 mt-1">
                            <svg className="w-3 h-3 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </span>
                          <span>TMP design and RCA submission</span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-blue-500/10 p-1 rounded-full mr-3 mt-1">
                            <svg className="w-3 h-3 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </span>
                          <span>Council liaison and RFI handling</span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-blue-500/10 p-1 rounded-full mr-3 mt-1">
                            <svg className="w-3 h-3 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </span>
                          <span>Certified STMS/TC crews on site</span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-blue-500/10 p-1 rounded-full mr-3 mt-1">
                            <svg className="w-3 h-3 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </span>
                          <span>Setup and pack-down of all equipment</span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-blue-500/10 p-1 rounded-full mr-3 mt-1">
                            <svg className="w-3 h-3 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </span>
                          <span>24/7 support including emergency callouts</span>
                        </li>
                      </ul>
                      <Link to="/getintouch">
                        <div className="mt-6 pl-16">
                          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-300">
                            Request Full Service
                          </button>
                        </div>
                      </Link>
                    </div>
                  )}
                </div>
                
                <div 
                  className={`p-8 transition-all duration-300 ${expandedSection === 'diy' ? 'bg-gray-700/30' : 'hover:bg-gray-700/20 cursor-pointer'}`}
                  onClick={() => toggleSection('diy')}
                >
                  <div className="flex items-start mb-4">
                    <div className="bg-green-500/10 p-2 rounded-lg mr-4 border border-green-500/30">
                      <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                      </svg>
                    </div>
                    <h4 className="text-xl font-semibold text-green-300">DIY Equipment Hire</h4>
                  </div>
                  
                  {expandedSection === 'diy' && (
                    <div className="animate-fade-in">
                      <ul className="space-y-3 text-gray-300 pl-16">
                        <li className="flex items-start">
                          <span className="bg-green-500/10 p-1 rounded-full mr-3 mt-1">
                            <svg className="w-3 h-3 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </span>
                          <span>TMPS designed for DIY setups</span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-green-500/10 p-1 rounded-full mr-3 mt-1">
                            <svg className="w-3 h-3 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </span>
                          <span>Step-by-step guidance documentation</span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-green-500/10 p-1 rounded-full mr-3 mt-1">
                            <svg className="w-3 h-3 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </span>
                          <span>Hire of fully compliant equipment</span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-green-500/10 p-1 rounded-full mr-3 mt-1">
                            <svg className="w-3 h-3 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </span>
                          <span>Transparent pricing - no hidden costs</span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-green-500/10 p-1 rounded-full mr-3 mt-1">
                            <svg className="w-3 h-3 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </span>
                          <span>Optional toolbox training sessions</span>
                        </li>
                      </ul>
                      <Link to="/getintouch">
                        <div className="mt-6 pl-16">
                          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-300">
                            Request Equipment
                          </button>
                        </div>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </section>

            {/* Equipment Showcase */}
            <section className="bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 shadow-2xl">
              <div className="p-8 border-b border-gray-700">
                <h3 className="text-2xl font-bold mb-2 flex items-center">
                  <span className="bg-yellow-500 w-3 h-3 rounded-full mr-3" />
                  Equipment Available for Hire
                </h3>
                <p className="text-gray-400">
                  High-quality, compliant equipment for all your traffic management needs
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8">
                {equipmentItems.map((item) => (
                  <div 
                    key={item.id}
                    className={`bg-gray-700/30 border rounded-xl p-6 transition-all duration-300 ${hoveredItem === item.id ? 'border-yellow-500 shadow-lg transform scale-[1.02]' : 'border-gray-700 hover:border-gray-600'}`}
                    onMouseEnter={() => setHoveredItem(item.id)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <div className="flex items-start">
                      <div className={`p-3 rounded-lg mr-4 transition-all duration-300 ${hoveredItem === item.id ? 'bg-yellow-500/20 border border-yellow-500/30' : 'bg-gray-700 border border-gray-600'}`}>
                        <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-1">{item.title}</h4>
                        <p className="text-gray-400">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="px-8 pb-8">
                <button 
                  className="w-full bg-gray-700 hover:bg-gray-600 text-gray-300 py-3 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center gap-2"
                  onClick={handleDownload}
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  <span>Download Equipment Catalog</span>
                  <img src={Image1} alt="icon1" className="w-5 h-5 ml-2" />
                  <img src={Image2} alt="icon2" className="w-5 h-5" />
                </button>
              </div>
            </section>
          </div>
          
          {/* Right Column - Requirements & Process */}
          <div className="space-y-8">
            {/* Requirements Card */}
            <section className="bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 shadow-2xl">
              <div className="p-6 bg-gradient-to-r from-blue-900/50 to-blue-800/30 border-b border-blue-800/50">
                <h3 className="text-xl font-bold flex items-center">
                  <svg className="w-5 h-5 text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  </svg>
                  What We Need From You
                </h3>
              </div>
              
              <div className="p-6">
                <p className="text-gray-400 mb-4">
                  To design your Traffic Management Plan or deliver equipment, we require:
                </p>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="bg-blue-500/10 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-3 h-3 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span>Completed request form with site details</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-500/10 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-3 h-3 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span>Work dates and daily hours</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-500/10 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-3 h-3 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span>Description of work activities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-500/10 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-3 h-3 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span>Vehicle types and site conditions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-500/10 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-3 h-3 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span>Affected pedestrians/cyclists</span>
                  </li>
                </ul>
                
                <div className="bg-blue-900/20 border border-blue-800/50 rounded-lg p-4 mb-4">
                  <h4 className="text-sm font-semibold text-blue-300 mb-2">Why This Matters</h4>
                  <p className="text-xs text-blue-400">
                    This information is required by councils and RCAs to ensure your TMP is compliant. 
                    Complete details prevent processing delays.
                  </p>
                </div>
                
                <Link to="/getintouch">
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                    Get in Touch
                  </button>
                </Link>
              </div>
            </section>
            
            {/* Process Timeline */}
            <section className="bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 shadow-2xl">
              <div className="p-6 bg-gradient-to-r from-green-900/50 to-green-800/30 border-b border-green-800/50">
                <h3 className="text-xl font-bold flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                  </svg>
                  Our Process Timeline
                </h3>
              </div>
              
              <div className="p-6">
                <div className="relative">
                  {/* Timeline line */}
                  <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-green-900/50" />
                  
                  {/* Timeline items */}
                  <div className="space-y-8 pl-10">
                    <div className="relative">
                      <div className="absolute -left-10 top-1 w-6 h-6 rounded-full bg-green-600/20 border-2 border-green-500 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-300">Submission</h4>
                        <p className="text-sm text-gray-400">We prepare and submit your TMP within 2-3 working days</p>
                      </div>
                    </div>
                    
                    <div className="relative">
                      <div className="absolute -left-10 top-1 w-6 h-6 rounded-full bg-green-600/20 border-2 border-green-500 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-300">Approval</h4>
                        <p className="text-sm text-gray-400">Coordinate with council (5 days standard, 10+ for closures)</p>
                      </div>
                    </div>
                    
                    <div className="relative">
                      <div className="absolute -left-10 top-1 w-6 h-6 rounded-full bg-green-600/20 border-2 border-green-500 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-300">Implementation</h4>
                        <p className="text-sm text-gray-400">Equipment delivery and job commencement</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 bg-green-900/20 border border-green-800/50 rounded-lg p-4">
                  <h4 className="text-sm font-semibold text-green-300 mb-2">Typical Approval Times</h4>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div className="bg-green-900/30 p-2 rounded text-center">
                      <div className="font-medium">Standard TMP</div>
                      <div className="text-green-400">5 days</div>
                    </div>
                    <div className="bg-green-900/30 p-2 rounded text-center">
                      <div className="font-medium">Complex TMP</div>
                      <div className="text-green-400">7-10 days</div>
                    </div>
                    <div className="bg-green-900/30 p-2 rounded text-center">
                      <div className="font-medium">Road Closure</div>
                      <div className="text-green-400">10-15 days</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrafficManagementQuotePage;