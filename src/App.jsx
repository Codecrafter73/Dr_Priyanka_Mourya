import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './page/Home/Home'
import Header from './component/Header'
import TopHeader from './component/TopHeader'
import AOS from 'aos';
import 'aos/dist/aos.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import Footer from './component/Footer'
import BottomFooter from './component/BottomFooter'
import SplashScreen from './component/WelcomeScreen'
import ServiceList from './page/Services/ServiceList'
import ServiceDetail from './page/Services/ServiceDetail'
import Photo from './page/Gallery/Photo'
import ContactPage from './page/Contact/ContactPage'
import About_Politics from './page/About/About_Politics'
import Testimonials from './page/Testinomial/Testinomail'
import AboutPriyanka from './page/About/About-Priyanka'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const App = () => {
  const [showSplash, setShowSplash] = useState(true); // Control splash screen visibility

  // Handle initial splash screen display
  useEffect(() => {
    const splashTimeout = setTimeout(() => {
      setShowSplash(false); // Hide splash screen after 1 second
    }, 2000); // Adjust the duration as needed

    return () => clearTimeout(splashTimeout); // Clean up the timeout on unmount
  }, []);
  return (
    <div >
      {false ? <SplashScreen/> : (
        <>
      {/* <TopHeader/> */}
      <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/politics" element={<About_Politics/>} />
          <Route path="/about/dr-priyanka" element={<AboutPriyanka/>} />
          <Route path="/service" element={<ServiceList/>} />
          <Route path="/testonomial" element={<Testimonials/>} />
          <Route path="/contact" element={<ContactPage/>} />
          <Route path="/gallery/photo" element={<Photo/>} />
          <Route path="/service/:name" element={<ServiceDetail/>} />
        </Routes>
      <Footer/>
      <BottomFooter/>
      </>
      )      
}
    </div>
  )
}

export default App