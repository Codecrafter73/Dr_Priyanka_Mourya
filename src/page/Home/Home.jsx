import React, { useEffect } from 'react'
import HomeSlider from './HomeSlider'
import HomeAbout from './HomeAbout'
import HomeService from './HomeService'
import ClientStats from '../../component/ClientStats'
import Feature from './OurFeature'
import BjpPriyanka from './BjpPriyanka'
import ServiceHome from './ServiceHome'
import ContactCta from '../../component/ContactCta'
import HomeBlog from '../Blog/HomeBlog'
import BjpSocailWork from './BjpSocialWork'
import Feedback from './Feedback'
import YouTubeSlider from './YoutubeLink'
import ReviewComponent from '../../component/ReviewComponent'
import SocialGallery from '../About/SocialWork/Gallery'
import { useLocation } from 'react-router-dom'


const Home = () => {

  const location=useLocation()
 
  useEffect(() => {
    if (location.pathname === '/') {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className=''>
        <HomeSlider/>
        <HomeAbout/>
        <ServiceHome/>
        <Feature/>
        <ContactCta/>
        <BjpPriyanka/>
        <YouTubeSlider/>
        <SocialGallery/>
        <HomeBlog/>
        

      
    </div>
  )
}

export default Home