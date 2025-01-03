import React, { useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Hero from '../Hero/Hero';
import BrandsLogo from '../BrandsLogo/BrandsLogo';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';
import BlogsComp from '../Blogs/BlogsComp';
import Footer from '../Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

// const App = () => {
//   useEffect(() => {
//     AOS.init({
//       duration: 800,
//       easing: 'ease-in',
//       delay: 100,
//     });
//     AOS.refresh();
//   }, []);

const LandingPage = () => {
  return (
    <div className="bg-white dark:bg-black dark:text-white text-black overflow-x-hidden">
        <Navbar />
        <Hero />
        <BrandsLogo />
        <Services />
        <Testimonial />
        <BlogsComp />
        <Footer />
    </div>
  )
}


export default LandingPage
