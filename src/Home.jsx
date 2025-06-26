// src/components/Home.jsx
import React from 'react';
import MainContent from './components/MainContent';
import AboutUs from './components/Aboutus';
import OurVision from './components/OurVision';
import ServicesPage from './components/ServicesPage';
import EquipmentHirePage from './components/EquipmentHirePage';
import TrafficManagementQuotePage from './components/TrafficManagementQuotePage';
import ResourceConsents from './components/ResourceConsents';
import ContactForm from './components/ContactForm';


const Home = () => {
  return (
    <>
      <MainContent />
      <AboutUs/>
      <OurVision />
      <ServicesPage />
   
      <ContactForm />
    </>
  );
};

export default Home;