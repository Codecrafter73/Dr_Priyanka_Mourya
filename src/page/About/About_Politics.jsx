import React from 'react'
import BreadCums from '../../component/BreadCums'
import banner from '../../assets/banner/bread_social.jpg'
import BjpAbout from './BjpAbout';
import DrPriyankaMauryaCareer from './BjpCarrer';
import BjpCTA from './BJPCTA';
import ImportantInfo from './SocialWork/Info';
import CommissionActivities from './SocialWork/CommisionActivies';
import Ayog from './SocialWork/Ayog';

const About_Politics = () => {
    const breadcrumbItems = [
        { label: 'Home', href: '/' },
        { label: 'About' }
    ];
    return (
        <section>
            <BreadCums  image={banner}/>
            <div>
                <ImportantInfo/>
                 <BjpAbout/>
                 <DrPriyankaMauryaCareer/>
                 <Ayog/>
                 <CommissionActivities/>
                 {/* <BjpCTA/> */}
            </div>
        </section>
    )
}

export default About_Politics