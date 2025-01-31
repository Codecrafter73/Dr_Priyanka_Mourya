import React from 'react'
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


const Home = () => {
  return (
    <div className=''>
        <HomeSlider/>
        <HomeAbout/>
        {/* <HomeService/> */}
        <ServiceHome/>
        {/* <ClientStats/> */}
        <Feature/>
        <ContactCta/>
        <BjpPriyanka/>
        {/* <BjpSocailWork/> */}
        <HomeBlog/>

      
    </div>
  )
}

export default Home