import React, { lazy, Suspense, useMemo, memo, useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FiArrowUp } from 'react-icons/fi';
import Header from './components/Header';
import Footer from './components/Footer';
import GetInTouchForm from './components/GetInTouchForm';
import { motion } from 'framer-motion';
// Lazy load components
const MainContent = lazy(() => import('./components/MainContent'));
const AboutUs = lazy(() => import('./components/Aboutus'));
const WhyCiviEase = lazy(() => import('./components/WhyCiviEase'));
const ServicesPage = lazy(() => import('./components/ServicesPage'));
const ContactForm = lazy(() => import('./components/ContactForm'));
const OurVision = lazy(() => import('./components/OurVision'));
const TrafficManagementQuotePage = lazy(() => import('./components/TrafficManagementQuotePage'));
const EquipmentHirePage = lazy(() => import('./components/EquipmentHirePage'));
const ResourceConsents = lazy(() => import('./components/ResourceConsents'));

// Error Boundary Component
const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = React.useState(false);
  useEffect(() => {
    const errorHandler = (error) => {
      console.error('Component failed to load:', error);
      setHasError(true);
    };
    window.addEventListener('error', errorHandler);
    return () => window.removeEventListener('error', errorHandler);
  }, []);

  if (hasError) {
    return <div className="text-center py-20 text-red-600">Something went wrong. Please try again.</div>;
  }
  return children;
};

// Intersection Observer Component
const LazyLoadComponent = ({ component: Component, ...props }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = React.useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '50px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref}>
      {isVisible ? (
        <Suspense
          fallback={
            <div className="flex justify-center items-center min-h-[100px]">
              <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-blue-600"></div>
            </div>
          }
        >
          <Component {...props} />
        </Suspense>
      ) : (
        <div className="min-h-[100px]"></div>
      )}
    </div>
  );
};

// Memoized Header and Footer
const MemoHeader = memo(Header);
const MemoFooter = memo(Footer);

// Scroll to Top Component
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.button
      className={`fixed bottom-8 right-8 p-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg hover:shadow-blue-500/50 transition-all duration-300 ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
      }`}
      onClick={scrollToTop}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      aria-label="Scroll to top"
    >
      <FiArrowUp className="w-6 h-6" />
    </motion.button>
  );
};

// Scroll to Top on Route Change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
};

function App() {
  // Memoize routes with SEO meta tags
  const routes = useMemo(
    () => [
      {
        path: '/',
        element: (
          <>
            <Helmet>
              <title>CiviEase - Resource Consents & Traffic Management in Christchurch, NZ</title>
              <meta
                name="description"
                content="CiviEase offers expert resource consents, traffic management, billboard applications, quantity surveying, traffic surveying, and parking design in Christchurch, NZ."
              />
              <meta
                name="keywords"
                content="CiviEase, resource consents Christchurch, traffic management NZ, billboard applications, quantity surveying, traffic surveying, parking design, construction services NZ"
              />
              <link rel="preload" href="/src/components/ServicesPage" as="script" />
              <link rel="preload" href="/src/components/GetInTouchForm" as="script" />
            </Helmet>
            <MainContent />
            <LazyLoadComponent component={AboutUs} />
            <LazyLoadComponent component={WhyCiviEase} />
            <LazyLoadComponent component={ServicesPage} />
            <LazyLoadComponent component={ContactForm} />
            <LazyLoadComponent component={OurVision} />
          </>
        ),
      },
      {
        path: '/about',
        element: (
          <>
            <Helmet>
              <title>About CiviEase - Construction Solutions in Christchurch, NZ</title>
              <meta
                name="description"
                content="Learn about CiviEase, your trusted partner for resource consents, traffic management, and construction services in Christchurch, NZ."
              />
              <meta name="keywords" content="CiviEase about, construction services Christchurch, traffic management NZ" />
            </Helmet>
            <AboutUs />
          </>
        ),
      },
      {
        path: '/vision',
        element: (
          <>
            <Helmet>
              <title>Our Vision - CiviEase Christchurch, NZ</title>
              <meta
                name="description"
                content="Discover CiviEase’s vision for innovative, sustainable construction and traffic management solutions in Christchurch, NZ."
              />
              <meta name="keywords" content="CiviEase vision, sustainable construction NZ, Christchurch construction" />
            </Helmet>
            <OurVision />
          </>
        ),
      },
      {
        path: '/services',
        element: (
          <>
            <Helmet>
              <title>CiviEase Services - Resource Consents, Traffic Management & More</title>
              <meta
                name="description"
                content="Explore CiviEase’s services: resource consents, traffic management, billboard applications, quantity surveying, traffic surveying, and parking area design in Christchurch, NZ."
              />
              <meta
                name="keywords"
                content="CiviEase services, resource consents NZ, traffic management Christchurch, billboard applications, quantity surveying, traffic surveying, parking design, construction services NZ"
              />
              <link rel="canonical" href="https://civiease.co.nz/services" />
            </Helmet>
            <ServicesPage />
          </>
        ),
      },
      {
        path: '/equipment-hire',
        element: (
          <>
            <Helmet>
              <title>Equipment Hire - CiviEase Christchurch, NZ</title>
              <meta
                name="description"
                content="Hire VMS boards, traffic lights, CCTV, and traffic trucks for your construction projects with CiviEase in Christchurch, NZ."
              />
              <meta name="keywords" content="CiviEase equipment hire, traffic equipment Christchurch, construction equipment NZ" />
            </Helmet>
            <EquipmentHirePage />
          </>
        ),
      },
      {
        path: '/traffic-management',
        element: (
          <>
            <Helmet>
              <title>Traffic Management Services - CiviEase Christchurch, NZ</title>
              <meta
                name="description"
                content="Expert traffic management plans and services by CiviEase, ensuring safe and compliant construction sites in Christchurch, NZ."
              />
              <meta
                name="keywords"
                content="traffic management Christchurch, CiviEase traffic management, TMP planning NZ, construction site safety"
              />
            </Helmet>
            <TrafficManagementQuotePage />
          </>
        ),
      },
      {
        path: '/resource-consents',
        element: (
          <>
            <Helmet>
              <title>Resource Consents - CiviEase Christchurch, NZ</title>
              <meta
                name="description"
                content="Fast, council-ready resource consent applications by CiviEase for construction projects in Christchurch, NZ."
              />
              <meta
                name="keywords"
                content="resource consents Christchurch, CiviEase resource consents, construction permits NZ"
              />
            </Helmet>
            <ResourceConsents />
          </>
        ),
      },
      {
        path: '/getintouch',
        element: (
          <>
            <Helmet>
              <title>Contact CiviEase - Christchurch, NZ</title>
              <meta
                name="description"
                content="Get in touch with CiviEase for resource consents, traffic management, billboard applications, quantity surveying, traffic surveying, and parking design in Christchurch, NZ."
              />
              <meta
                name="keywords"
                content="CiviEase contact, construction services Christchurch, traffic management inquiry NZ, billboard applications, quantity surveying, traffic surveying, parking design"
              />
              <link rel="canonical" href="https://civiease.co.nz/getintouch" />
            </Helmet>
            <GetInTouchForm />
          </>
        ),
      },
      {
        path: '/contact',
        element: (
          <>
            <Helmet>
              <title>Contact CiviEase - Christchurch, NZ</title>
              <meta
                name="description"
                content="Get in touch with CiviEase for resource consents, traffic management, billboard applications, quantity surveying, traffic surveying, and parking design in Christchurch, NZ."
              />
              <meta
                name="keywords"
                content="CiviEase contact, construction services Christchurch, traffic management inquiry NZ, billboard applications, quantity surveying, traffic surveying, parking design"
              />
              <link rel="canonical" href="https://civiease.co.nz/contact" />
            </Helmet>
            <ContactForm />
          </>
        ),
      },
      {
        path: '*',
        element: (
          <>
            <Helmet>
              <title>Page Not Found - CiviEase</title>
              <meta name="description" content="Page not found on CiviEase. Explore our construction and traffic management services in Christchurch, NZ." />
              <meta name="keywords" content="CiviEase, construction services Christchurch, traffic management NZ" />
            </Helmet>
            <div className="text-center py-20 text-xl">Page Not Found</div>
          </>
        ),
      },
    ],
    []
  );

  // Prefetch likely routes
  useEffect(() => {
    const prefetchRoutes = [
      '/services',
      '/getintouch',
      '/contact',
      '/resource-consents',
      '/traffic-management',
      '/equipment-hire',
    ];
    prefetchRoutes.forEach((route) => {
      const componentMap = {
        '/services': 'ServicesPage',
        '/getintouch': 'GetInTouchForm',
        '/contact': 'ContactForm',
        '/resource-consents': 'ResourceConsents',
        '/traffic-management': 'TrafficManagementQuotePage',
        '/equipment-hire': 'EquipmentHirePage',
      };
     
    });
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 text-gray-800">
        {/* SEO for base page */}
        <Helmet>
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href="https://civiease.co.nz" />
        </Helmet>

        {/* Memoized Header */}
        <MemoHeader />

        {/* Scroll to Top on Route Change */}
        <ScrollToTop />

        {/* Wrap routes in ErrorBoundary and Suspense */}
        <ErrorBoundary>
          <Suspense
            fallback={
              <div className="flex justify-center items-center min-h-[50vh]">
                <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-600"></div>
              </div>
            }
          >
            <Routes>
              {routes.map(({ path, element }, index) => (
                <Route key={index} path={path} element={element} />
              ))}
            </Routes>
          </Suspense>
        </ErrorBoundary>

        {/* Scroll to Top Button */}
        <ScrollToTopButton />

        {/* Memoized Footer */}
        <MemoFooter />
      </div>
    </Router>
  );
}

export default App;