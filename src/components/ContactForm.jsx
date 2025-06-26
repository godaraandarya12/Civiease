import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiGlobe, FiFacebook } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const ContactSection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Get in Touch with <span className="text-blue-400">CiviEase</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Reach out to discuss your project or learn more about our services.
          </p>
        </motion.div>

        {/* Main Content */}
        <motion.div
          className="flex flex-col lg:flex-row gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Contact Details */}
          <div className="w-full lg:w-1/2 space-y-6">
            <motion.div variants={fadeUp}>
              <h3 className="text-2xl font-semibold text-white mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <FiMapPin className="text-2xl text-blue-400" />
                  <p className="text-gray-300">
                    Unit 7, 2 William Lewis Drive, Sockburn, Christchurch 8042
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <FiMail className="text-2xl text-blue-400" />
                  <a
                    href="mailto:information@civiease.co.nz"
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    information@civiease.co.nz
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <FiPhone className="text-2xl text-blue-400" />
                  <a
                    href="tel:0800024845"
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    08000 CIVIL (08000 24845)
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <FiGlobe className="text-2xl text-blue-400" />
                  <a
                    href="https://civiease.co.nz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    civiease.co.nz
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <FiFacebook className="text-2xl text-blue-400" />
                  <a
                    href="https://www.facebook.com/people/CiviEase-Ltd/61566789790982/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    CiviEase on Facebook
                  </a>
                </div>
              </div>
            </motion.div>

            <Link to ="/GetinTouch" >
            <motion.div variants={fadeUp} className="pt-4">
              <a
                href="mailto:information@civiease.co.nz"
                className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Send Us a Message
              </a>
            </motion.div>
            </Link>
          </div>

          {/* Map */}
          <motion.div variants={fadeUp} className="w-full lg:w-1/2">
            <div className="relative rounded-xl overflow-hidden border-2 border-blue-500/30">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2888.774497615989!2d172.5568843154976!3d-43.54128997912547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d318a7b7b7b7b7b%3A0x7b7b7b7b7b7b7b7b!2s2%20William%20Lewis%20Drive%2C%20Sockburn%2C%20Christchurch%208042%2C%20New%20Zealand!5e0!3m2!1sen!2snz!4v1698279600000!5m2!1sen!2snz"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="CiviEase Location Map"
              ></iframe>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;