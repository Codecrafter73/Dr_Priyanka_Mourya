import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import image from '../../assets/dr-priyanka/priyanka_2.jpg';

import bgImage from '../../assets/pattern/pattern7.avif'
import { FaUserMd } from 'react-icons/fa';
const Feature = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration in milliseconds
            once: true, // Animation happens only once
        });
    }, []);

    return (

        <section className="relative bg-white z-10 py-10 sm:py-12 md:py-14 lg:py-16">
            <div
                className="absolute inset-0 hidden lg:block"
                style={{
                    backgroundImage: `url(${bgImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: 0.4,
                    zIndex: -10,
                }}
            ></div>
            <div className="max-w-7xl  sm:py-10 mx-auto py-10">
                <div className="lg:flex lg:items-start">

                    <div className="hidden lg:flex lg:items-center lg:w-1/2 lg:justify-center relative ">
                        <img
                            className="w-[10rem] h-[10rem] object-cover xl:w-[28rem] xl:h-[28rem] rounded-xl"
                            src={image}
                            alt="Healthcare services"
                        />
                        
                        {/* Doctor's Information Above Image */}
                        <div className="absolute left-[2rem] bottom-[-1.8rem]  bg-opacity-90 rounded-lg shadow-lg  text-start lg:text-left w-[20rem] px-4 py-6 rounded-tr-4xl justify-center flex flex-col items-center md:ml-[1rem] ml-[0.5rem] mb-[1rem] bg-gradient-to-r from-[#A6182E] via-[#D72638] to-[#FF4D6D]">
                            <div className='flex items-start justify-center gap-4'>
                            <p className="md:text-2xl sm:text-xl text-sm font-semibold text-white w-[70%]">Better Health &  A Better Way
                            </p>
                            </div>
                        </div>

                    </div>


                    <div className="w-full space-y-6 lg:w-1/2 ">
                        <div>
                            <h2 className="mb-4">Why Choose Us</h2>
                            <h1 className="">
                                Dr. Priyanka – Best Homeopathic Doctor in Lucknow
                            </h1>

                        </div>

                        <div className='flex items-start gap-10 '>
                            {/* First Point */}
                            <div data-aos="fade-up" className="flex  flex-col md:items-start  w-fit ">
                                <span className="inline-block p-2  text-main bg-blue-100 rounded-xl text-[#fff] bg-primary">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                    </svg>
                                </span>
                                <div className="mt-4 ">
                                    <h3 className="font-semibold text-main capitalize text-xl color-primary !important">
                                    Holistic Treatment
                                    </h3>
                                    <p className="mt-1 text-black dark:text-black">
                                    We focus on treating the root cause, not just symptoms, for long-term wellness.
                                    </p>
                                </div>
                            </div>

                            {/* Second Point */}
                            <div data-aos="fade-up" data-aos-delay="200" className="flex flex-col md:items-start md:-mx-4 w-fit">
                                <span className="inline-block p-2 text-[#1E88E5] rounded-xl md:mx-4 dark:text-[#fff] bg-primary">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                                    </svg>
                                </span>
                                <div className="mt-4 md:mx-4 md:mt-4">
                                    <h3 className="text-xl font-semibold color-primary  capitalize ">
                                    Natural & Safe Remedies
                                    </h3>
                                    <p className="mt-1 text-black dark:text-black">
                                    Our treatments are free from harmful chemicals, ensuring safe and effective healing.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className='flex items-start gap-10 '>
                            {/* third Point */}
                            <div data-aos="fade-up" className="flex  flex-col md:items-start   w-fit ">
                                <span className="inline-block p-2  text-main bg-blue-100 rounded-xl text-[#fff] bg-primary">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                    </svg>
                                </span>
                                <div className="mt-4 ">
                                    <h3 className="font-semibold text-main capitalize text-xl color-primary !important">
                                       Experienced Practitioner
                                    </h3>
                                    <p className="mt-1 text-black dark:text-black">
                                    Years of expertise in homeopathy to provide the best possible care.
                                    </p>
                                </div>
                            </div>

                            {/* fourth Point */}
                            <div data-aos="fade-up" data-aos-delay="200" className="flex flex-col md:items-start md:-mx-4 w-fit">
                                <span className="inline-block p-2 text-[#1E88E5] rounded-xl md:mx-4 dark:text-[#fff] bg-primary">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                                    </svg>
                                </span>
                                <div className="mt-4 md:mx-4 md:mt-4">
                                    <h3 className="text-xl font-semibold color-primary  capitalize ">
                                    Patient-Centric Approach
                                    </h3>
                                    <p className="mt-1 text-black dark:text-black">
                                    Compassionate care tailored to each patient's unique needs.
                                    </p>
                                </div>
                            </div>
                        </div>



                    </div>


                </div>
            </div>


        </section>

    );
};

export default Feature;
