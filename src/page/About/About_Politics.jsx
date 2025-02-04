import React, { useEffect } from 'react'
import BreadCums from '../../component/BreadCums'
import banner from '../../assets/banner/bjpbanner.jpg'
import BjpAbout from './BjpAbout';
import DrPriyankaMauryaCareer from './BjpCarrer';
import BjpCTA from './BJPCTA';
import ImportantInfo from './SocialWork/Info';
import CommissionActivities from './SocialWork/CommisionActivies';
import Ayog from './SocialWork/Ayog';
import SocialGallery from './SocialWork/Gallery';
import WomenSocialLeaderShip from './SocialWork/WomenSocailLeaderShip';
import { useLocation } from 'react-router-dom';

const About_Politics = () => {
    const breadcrumbItems = [
        { label: 'Home', href: '/' },
        { label: 'Mahila Ayog' }
    ];
    const location = useLocation()

    // Scroll to top on component mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        if (location.pathname === '/about/politics') {
            window.scrollTo(0, 0);
        }
    }, [location]);
    return (
        <section>
             <div
                className="relative flex flex-col items-center justify-center  bg-cover bg-center z-0"
                // style={{ backgroundImage: `url(${banner})` }} // Background image
                data-aos="fade-in" // Add AOS effect here
            >
                <img src={banner} alt="priyanka_bammer" className="w-full" />
                {/* Dark overlay */}
                {/* <div className="absolute inset-0 bg-black bg-opacity-20 z-10"></div> */}

                {/* Heading */}
                {/* <h1 className="text-black text-center relative z-20 sora-600 px-4 mb-4 font-bold text-4xl" data-aos="fade-up">
                    {"headText"}
                </h1> */}

         
            </div>
            {/* <BreadCums image={banner}  /> */}
            <div>
                <ImportantInfo />
                <BjpAbout />
                <DrPriyankaMauryaCareer />
                <Ayog />
                <SocialGallery />
                <WomenSocialLeaderShip />
                <CommissionActivities />

                {/* <BjpCTA/> */}
            </div>
        </section>
    )
}

export default About_Politics