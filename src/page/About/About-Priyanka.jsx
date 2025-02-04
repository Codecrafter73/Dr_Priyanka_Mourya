import React, { useEffect } from 'react';
import BreadCums from '../../component/BreadCums';
import doctor from '../../assets/dr-priyanka/doctormain.jpg';
import shape1 from '../../assets/dr-priyanka/shape1.svg'
import shape2 from '../../assets/dr-priyanka/shape2.svg'
import doctor1 from '../../assets/dr-priyanka/appoit_dr2.jpg';
import doctor2 from '../../assets/dr_priyanka_opd/image1.jpg';
import BjpCarrer from './BjpCarrer';
import bgImage from '../../assets/pattern/pattern10.jpg'
import CarrerPriyanka from './CarrerPriyanka';
import HomeService from '../Home/HomeService';
import ServiceHome from '../Home/ServiceHome';
import CallToAction from '../../component/DoctorCta';
import FeedbackComponent from './PatientFeedback';
import AboutFaq from '../../component/Faq';
import TimeTable from './TimeTable';
import DoctorTimetable from './DoctorTable';
import { useLocation } from 'react-router-dom';
const AboutPriyanka = () => {
    const breadcrumbItems = [
        { label: 'Home', href: '/' },
        { label: 'About Dr. Priyanka Maurya' }
    ];
    
      const location=useLocation()
        // Scroll to top on component mount
        useEffect(() => {
            window.scrollTo(0, 0);
          }, []);

        
 
          useEffect(() => {
            if (location.pathname === '/about/dr-priyanka') {
              window.scrollTo(0, 0);
            }
          }, [location]);
          

          
  
  

    return (
        <section>
            <BreadCums headText={"About Dr. Priyanka Maurya"} items={breadcrumbItems} />
            <div className='max-w-7xl mx-auto  sm:py-12 md:py-14 lg:py-16'>

                <div className="grid lg:grid-cols-2 gap-10 lg:pb-20  relative max-w-7xl py-10">
                    <div
                        className="absolute inset-0 "
                        style={{
                            backgroundImage: `url(${bgImage})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            opacity: 0.7,
                            zIndex: -10,
                        }}
                    ></div>
                    {/* Doctor Info */}
                    <div className="space-y-4 text-center md:text-left px-4">
                        <h2 className="text-start">About Dr. Priyanka Maurya</h2>
                        <p className="text-lg text-gray-600 leading-relaxed text-justify">
                            Dr. Priyanka Maurya is a highly respected homeopathic doctor, consultant, and social worker with over 10 years of experience in healthcare and wellness. She has dedicated her career to providing top-quality medical assistance and compassionate treatment to her patients.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed text-justify">
                            Dr. Priyanka is deeply committed to holistic healing, integrating modern homeopathic techniques with traditional values of patient care. She believes in continuous learning and stays updated with the latest advancements in medical science to ensure the best possible care.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed text-justify">
                            She also led several health campaigns on cleanliness, hygiene, food nutrition, and other vital health-related issues. Her dedication has earned her numerous prestigious awards, including:
                        </p>
                        <ul className="text-lg text-gray-600 leading-relaxed list-disc pl-5 ">
                            <li>Women of Excellence Award (2020)</li>
                            <li>RedFM Achievers Award (2021)</li>
                            <li>Corona Warrior Award (2020)</li>
                        </ul>

                        <p className="text-lg text-gray-600 leading-relaxed text-justify"><strong>Contact:</strong> 7667238292</p>
                    </div>

                    <div className="flex justify-center">
                        <div className='md:max-w-[28rem] w-full aspect-w-4 aspect-h-3 relative sm:mb-5 md:mb-0 sm:mr-16 md:mr-0 lg:mr-20 ' data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="800">
                            <img src={doctor} className='w-full h-full drop-shadow-[-3px_4px_4px_#808080] relative z-[10]' alt="Main visual" />
                            {/* <img src={doctor1} alt="Supplementary image" className='w-[60%] z-[20] h-auto hidden lg:block absolute drop-shadow-[0px_5px_6px_#808080] bottom-[-100px] right-[-100px]' /> */}
                            {/* <img src={doctor2} alt="Supplementary image" className='w-[60%] z-[20] h-auto hidden lg:block absolute drop-shadow-[0px_5px_6px_#808080] bottom-[-100px] left-[0px]' /> */}
                            <img src={shape1} alt="Decorative shape 1" className='w-[28%] h-auto hidden lg:block absolute top-[85px] right-[-80px]' />
                            <img src={shape2} alt="Decorative shape 2" className='w-[26%] h-auto hidden lg:block absolute bottom-[-92px] right-[140px]' />
                        </div>
                    </div>
      
                </div>
            </div>
            <CarrerPriyanka />
            <CallToAction />
            <ServiceHome />
        
            <FeedbackComponent />
            <DoctorTimetable/>
            {/* <AboutFaq /> */}
     
        </section>
    );
}

export default AboutPriyanka;
