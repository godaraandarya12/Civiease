import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiUser, FiMessageSquare, FiClock, FiArrowRight } from 'react-icons/fi';
import emailjs from '@emailjs/browser';

const GetInTouchForm = () => {
    const formRef = useRef();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        services: [],
        equipment: [],
        serviceOption: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [submitError, setSubmitError] = useState('');

    const services = [
        'Resource Consents',
        'New Billboard Applications',
        'Quantity Surveying',
        'Traffic Impact Assessments',
        'Traffic Surveying',
        'Parking Area Design',
        'Traffic Management'
    ];

    const equipment = [
        'VMS Boards',
        'Temporary Traffic Lights',
        'Site CCTV',
        'Traffic Trucks',
        'Signage & Barriers'
    ];

    const serviceOptions = [
        'Full-service Management',
        'DIY Equipment Hire'
    ];

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            setFormData(prev => ({
                ...prev,
                [name]: checked
                    ? [...prev[name], value]
                    : prev[name].filter(item => item !== value)
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitError('');

        emailjs.sendForm(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            formRef.current,
            process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        )
        .then((result) => {
            setIsSubmitting(false);
            setSubmitSuccess(true);
            setFormData({
                name: '',
                email: '',
                phone: '',
                message: '',
                services: [],
                equipment: [],
                serviceOption: ''
            });
            setTimeout(() => setSubmitSuccess(false), 5000);
        }, (error) => {
            setIsSubmitting(false);
            setSubmitError('Failed to send message. Please try again later.');
            console.error('EmailJS Error:', error.text);
        });
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1]
            }
        }
    };

    return (
        <section className="relative bg-gray-900 text-white py-20 overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-40 h-40 rounded-full bg-blue-500 blur-3xl"></div>
                <div className="absolute bottom-1/3 right-1/3 w-32 h-32 rounded-full bg-blue-600 blur-3xl"></div>
            </div>
            
            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <motion.div 
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                >
                    <motion.div variants={itemVariants} className="space-y-8">
                        <div>
                            <span className="inline-block mb-3 px-3 py-1 rounded-full bg-blue-800/50 text-blue-300 text-sm font-medium">
                                CONTACT US
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-400 to-blue-600">
                                    Get in Touch
                                </span>
                            </h2>
                            <p className="text-xl text-gray-300 mt-4">
                                Have a project in mind or need equipment? Reach out to our team.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-lg bg-blue-900/30 text-blue-400">
                                    <FiMail className="text-xl" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-blue-300">Email Us</h3>
                                    <p className="text-gray-300">information@civiease.co.nz</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-lg bg-blue-900/30 text-blue-400">
                                    <FiPhone className="text-xl" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-blue-300">Call Us</h3>
                                    <p className="text-gray-300">08000 CIVIL (08000 24845)</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-lg bg-blue-900/30 text-blue-400">
                                    <FiMapPin className="text-xl" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-blue-300">Visit Us</h3>
                                    <p className="text-gray-300">
                                        Unit 7, 2 William Lewis Drive<br />
                                        Sockburn, Christchurch 8042
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 bg-blue-900/20 rounded-xl border border-blue-700/30 backdrop-blur-sm">
                            <h3 className="text-lg font-semibold text-blue-300 mb-3 flex items-center gap-2">
                                <FiClock /> Office Hours
                            </h3>
                            <ul className="space-y-3 text-gray-300">
                                <li className="flex justify-between">
                                    <span>Monday - Friday</span>
                                    <span className="font-medium text-blue-300">9:00 AM – 6:00 PM</span>
                                </li>
                                <li className="flex justify-between">
                                    <span>Saturday</span>
                                    <span className="font-medium text-blue-300">9:00 AM – 4:00 PM</span>
                                </li>
                                <li className="flex justify-between">
                                    <span>Sunday</span>
                                    <span className="text-gray-400">Closed</span>
                                </li>
                            </ul>
                        </div>

                        <div className="p-6 bg-blue-900/20 rounded-xl border border-blue-700/30 backdrop-blur-sm">
                            <h3 className="text-lg font-semibold text-blue-300 mb-3">Our Specialized Services</h3>
                            <ul className="space-y-2 text-gray-300">
                                {services.map((service, index) => (
                                    <li key={index} className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                                        {service}
                                    </li>
                                ))}
                            </ul>
                            <h3 className="text-lg font-semibold text-blue-300 mt-4 mb-3">Service Options</h3>
                            <ul className="space-y-2 text-gray-300">
                                <li className="flex items-start gap-2">
                                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2"></span>
                                    <div>
                                        <strong>Full-service Management:</strong> TMP design, RCA submission, council liaison, certified crews, equipment setup, and 24/7 support.
                                    </div>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2"></span>
                                    <div>
                                        <strong>DIY Equipment Hire:</strong> High-quality, compliant equipment for your traffic management needs.
                                    </div>
                                </li>
                            </ul>
                            <h3 className="text-lg font-semibold text-blue-300 mt-4 mb-3">Equipment Available</h3>
                            <ul className="space-y-2 text-gray-300">
                                {equipment.map((item, index) => (
                                    <li key={index} className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    <motion.div variants={itemVariants} className="bg-gray-800/50 rounded-2xl p-8 backdrop-blur-sm border border-gray-700/30">
                        {submitSuccess ? (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="p-6 bg-green-900/30 rounded-xl border border-green-700/30 text-center"
                            >
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-800/50 rounded-full mb-4">
                                    <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-semibold text-green-300 mb-2">Message Sent!</h3>
                                <p className="text-gray-300">
                                    Thank you for contacting us. Our team will get back to you within 24 hours.
                                </p>
                                <button
                                    onClick={() => setSubmitSuccess(false)}
                                    className="mt-6 px-6 py-2 rounded-lg bg-green-800/50 text-green-300 hover:bg-green-700/50 transition-colors"
                                >
                                    Send Another Message
                                </button>
                            </motion.div>
                        ) : (
                            <>
                                <h3 className="text-2xl font-semibold text-blue-300 mb-6">Send us a message</h3>
                                {submitError && (
                                    <motion.div 
                                        initial={{ opacity: 0, y: -20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="mb-4 p-3 bg-red-900/30 rounded-lg border border-red-700/30 text-red-300 text-sm"
                                    >
                                        {submitError}
                                    </motion.div>
                                )}
                                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                                    <motion.div
                                        whileHover={{ scale: 1.01 }}
                                        whileFocus={{ scale: 1.01 }}
                                        className="relative"
                                    >
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                                            <FiUser />
                                        </div>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Your Name"
                                            className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600/30 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                            required
                                        />
                                    </motion.div>

                                    <motion.div
                                        whileHover={{ scale: 1.01 }}
                                        whileFocus={{ scale: 1.01 }}
                                        className="relative"
                                    >
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                                            <FiMail />
                                        </div>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="Email Address"
                                            className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600/30 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                            required
                                        />
                                    </motion.div>

                                    <motion.div
                                        whileHover={{ scale: 1.01 }}
                                        whileFocus={{ scale: 1.01 }}
                                        className="relative"
                                    >
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                                            <FiPhone />
                                        </div>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="Phone Number"
                                            className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600/30 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                        />
                                    </motion.div>

                                    <motion.div
                                        whileHover={{ scale: 1.01 }}
                                        whileFocus={{ scale: 1.01 }}
                                        className="relative"
                                    >
                                        <label className="text-gray-300 text-sm font-medium mb-2 block">Select Services</label>
                                        <div className="grid grid-cols-2 gap-2">
                                            {services.map((service, index) => (
                                                <label key={index} className="flex items-center gap-2 text-gray-300">
                                                    <input
                                                        type="checkbox"
                                                        name="services"
                                                        value={service}
                                                        checked={formData.services.includes(service)}
                                                        onChange={handleChange}
                                                        className="h-4 w-4 text-blue-500 focus:ring-blue-500 border-gray-600 rounded"
                                                    />
                                                    {service}
                                                </label>
                                            ))}
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        whileHover={{ scale: 1.01 }}
                                        whileFocus={{ scale: 1.01 }}
                                        className="relative"
                                    >
                                        <label className="text-gray-300 text-sm font-medium mb-2 block">Select Equipment (Optional)</label>
                                        <div className="grid grid-cols-2 gap-2">
                                            {equipment.map((item, index) => (
                                                <label key={index} className="flex items-center gap-2 text-gray-300">
                                                    <input
                                                        type="checkbox"
                                                        name="equipment"
                                                        value={item}
                                                        checked={formData.equipment.includes(item)}
                                                        onChange={handleChange}
                                                        className="h-4 w-4 text-blue-500 focus:ring-blue-500 border-gray-600 rounded"
                                                    />
                                                    {item}
                                                </label>
                                            ))}
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        whileHover={{ scale: 1.01 }}
                                        whileFocus={{ scale: 1.01 }}
                                        className="relative"
                                    >
                                        <label className="text-gray-300 text-sm font-medium mb-2 block">Service Option</label>
                                        <select
                                            name="serviceOption"
                                            value={formData.serviceOption}
                                            onChange={handleChange}
                                            className="w-full pl-4 pr-4 py-3 bg-gray-700/50 border border-gray-600/30 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                        >
                                            <option value="">Select Service Option</option>
                                            {serviceOptions.map((option, index) => (
                                                <option key={index} value={option}>{option}</option>
                                            ))}
                                        </select>
                                    </motion.div>

                                    <motion.div
                                        whileHover={{ scale: 1.01 }}
                                        whileFocus={{ scale: 1.01 }}
                                        className="relative"
                                    >
                                        <div className="absolute inset-y-0 left-0 pl-3 pt-3 flex items-start pointer-events-none text-gray-500">
                                            <FiMessageSquare />
                                        </div>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Your Message (Include site details, work dates, activities, vehicle types, etc.)"
                                            rows="5"
                                            className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600/30 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none"
                                            required
                                        ></textarea>
                                    </motion.div>

                                    <motion.button
                                        type="submit"
                                        disabled={isSubmitting}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-lg hover:from-blue-500 hover:to-blue-600 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                Send Message
                                                <FiArrowRight className="ml-1 transition-transform group-hover:translate-x-1" />
                                            </>
                                        )}
                                    </motion.button>
                                </form>
                            </>
                        )}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default GetInTouchForm;