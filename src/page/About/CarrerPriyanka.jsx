import React from 'react';
import { BsMegaphone } from 'react-icons/bs';
import { FaBriefcase, FaLayerGroup, FaUserSecret } from 'react-icons/fa';
import { GiLightBulb } from 'react-icons/gi';
import logo from '../../assets/bjp/bjplogo.png'
import pattern from '../../assets/pattern/pattern9.jpg'

const CareerPriyanka = () => {
    return (
        <section className="relative  bg-gray-100 z-10">
            <section className="py-10 max-w-7xl mx-auto">

                <div className="flex items-center text-center space-x-2 mx-auto justify-center">
                    <FaBriefcase className="color-primary text-2xl" />
                    <h2 className="text-3xl font-bold text-gray-800 text-center">
                        Education & Career
                    </h2>
                </div>

                <ul className="max-w-3xl mx-auto mt-16 space-y-12">
                    <li className="relative flex items-start">
                        <div className="-ml-0.5 absolute mt-0.5 top-14 left-8 w-px border-l-4 border-dotted border-gray-300 h-full" aria-hidden="true"></div>

                        <div className="relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-white rounded-full shadow">
                            <FaUserSecret className="w-10 h-10 color-primary" />
                        </div>
                        <div className="ml-6">
                            <h3 className="text-lg font-semibold text-black">Schooling and Higher Education</h3>
                            <p className="mt-4 text-base text-gray-600">
                                Dr. Priyanka Maurya completed her schooling at Children College, Azamgarh, Uttar Pradesh. She later pursued a Bachelor of Homeopathic Medicine and Surgery (BHMS) from Jiwaji University, Gwalior, India.
                            </p>
                        </div>
                    </li>

                    <li className="relative flex items-start">
                        <div className="-ml-0.5 absolute mt-0.5 top-14 left-8 w-px border-l-4 border-dotted border-gray-300 h-full" aria-hidden="true"></div>

                        <div className="relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-white rounded-full shadow">
                            <FaLayerGroup className="w-10 h-10 color-primary" />
                        </div>
                        <div className="ml-6">
                            <h3 className="text-lg font-semibold text-black">Starting Her Clinic</h3>
                            <p className="mt-4 text-base text-gray-600">
                                After completing her education, Dr. Priyanka Maurya started her medical practice by founding Modern Homeopathic Clinic in Lucknow, focusing on patient-centric homeopathic treatments.
                            </p>
                        </div>
                    </li>

                    <li className="relative flex items-start">
                        <div className="-ml-0.5 absolute mt-0.5 top-14 left-8 w-px border-l-4 border-dotted border-gray-300 h-full" aria-hidden="true"></div>

                        <div className="relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-white rounded-full shadow">
                            <BsMegaphone className="w-10 h-10 color-primary" />
                        </div>
                        <div className="ml-6">
                            <h3 className="text-lg font-semibold text-black">10+ Years of Experience</h3>
                            <p className="mt-4 text-base text-gray-600">
                                With over a decade of experience in healthcare, Dr. Maurya has successfully treated numerous patients using innovative homeopathic approaches, earning recognition in the medical community.
                            </p>
                        </div>
                    </li>

                    <li className="relative flex items-start">
                        <div className="relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-white rounded-full shadow">
                            <GiLightBulb className="w-10 h-10 color-primary" />
                        </div>
                        <div className="ml-6">
                            <h3 className="text-lg font-semibold text-black">Future Vision</h3>
                            <p className="mt-4 text-base text-gray-600">
                                Dr. Priyanka Maurya envisions a stronger, self-reliant India where every citizen, especially women and youth, have equal opportunities. She continues to work towards policies that support economic growth, education, and healthcare advancements in the country.
                            </p>
                        </div>
                    </li>
                </ul>
            </section>
        </section>
    );
};

export default CareerPriyanka;
