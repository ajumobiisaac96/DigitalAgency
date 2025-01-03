import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import BrandsLogo from './components/BrandsLogo/BrandsLogo';
import Services from './components/Services/Services';
import Testimonial from './components/Testimonial/Testimonial';
import BlogsComp from './components/Blogs/BlogsComp';
import Footer from './components/Footer/Footer';
import Dashboard from './components/Dashboard/Dashboard';
// import Signup from './components/Signup/Signup';
// import Login from './components/Login/Login';
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in',
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <Router>
      <div className="bg-white dark:bg-black dark:text-white text-black overflow-x-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} /> */}
        </Routes>
        <BrandsLogo />
        <Services />
        <Testimonial />
        <BlogsComp />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
