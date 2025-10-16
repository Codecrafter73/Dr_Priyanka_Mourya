import React from 'react';
import cclogo from '../assets/logo/cclogo.png';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { MdKeyboardArrowRight } from 'react-icons/md';

const Footer = () => {
    return (
        <div>
            <section className="pt-[2rem] pb-[0.75rem] bg-black">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 min-[400px]:grid-cols-2 md:grid-cols-4 gap-y-8 py-8 border-b-2 border-gray-700">
                        <div>
                            <h6 className="text-[1.5rem] font-semibold text-white mb-4">Quick Links</h6>
                            <ul className="flex flex-col">
                                {[
                                    { to: "/", label: "Home" },
                                    { to: "/about/dr-priyanka", label: "About Us" },
                                    { to: "/about/politics", label: "Mahila Ayog" },
                                    { to: "/testimonials", label: "Testimonials" },
                                    { to: "/gallery/photo", label: "Gallery Photo" },
                                    { to: "/contact", label: "Contact Us" },
                                ].map((item, index) => (
                                    <li key={index}>
                                        <Link
                                            to={item.to}
                                            className="flex items-center gap-0 text-[16px] font-normal text-gray-400 hover:text-violet-400 transition"
                                        >
                                            <MdKeyboardArrowRight className="text-lg" />
                                            <span>{item.label}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>

                        </div>
                        <div>
                            <h6 className="text-[1.5rem] font-semibold text-white mb-4">Our Services</h6>
                            <ul>
                                <li className="flex items-center text-[16px] font-normal text-gray-400 w-fit  rounded-md hover:text-gray-300 hover:border-red-400 transition">
                                    <Link to="/service/obs-gynecology" className="flex items-center">
                                        <MdKeyboardArrowRight className="text-lg" />
                                        <span>Obs & Gynecology</span>
                                    </Link>
                                </li>
                                <li className="flex items-center text-[16px] font-normal text-gray-400 w-fit  rounded-md hover:text-gray-300 hover:border-red-400 transition">
                                    <Link to="/service/nervous-disorders" className="flex items-center">
                                        <MdKeyboardArrowRight className="text-lg" />
                                        <span>Nervous Disorder</span>
                                    </Link>
                                </li>

                                <li className="flex items-center text-[16px] font-normal text-gray-400 w-fit  rounded-md hover:text-gray-300 hover:border-red-400 transition">
                                    <Link to="/service/pediatrics" className="flex items-center">
                                        <MdKeyboardArrowRight className="text-lg" />
                                        <span>Pediatrics</span>
                                    </Link>
                                </li>

                                <li className="flex items-center text-[16px] font-normal text-gray-400 w-fit  rounded-md hover:text-gray-300 hover:border-red-400 transition">
                                    <Link to="/service/tb-chest-diseases" className="flex items-center">
                                        <MdKeyboardArrowRight className="text-lg" />
                                        <span>TB & Chest</span>
                                    </Link>
                                </li>

                                {/* <li className="text-[16px] font-normal text-gray-400">
                                    <Link to="/service/tb-chest-diseases" className="hover:text-gray-300">TB & Chest</Link>
                                </li> */}
                                {/* <li className="text-[16px] font-normal text-gray-400">
                                    <Link to="/service/orthopedics" className="hover:text-gray-300">Orthopedics</Link>
                                </li>
                                 */}
                                <li className="flex items-center text-[16px] font-normal text-gray-400 w-fit  rounded-md hover:text-gray-300 hover:border-red-400 transition">
                                    <Link to="/service/orthopedics" className="flex items-center">
                                        <MdKeyboardArrowRight className="text-lg" />
                                        <span>Orthopedics</span>
                                    </Link>
                                </li>

                                <li className="flex items-center text-[16px] font-normal text-gray-400 w-fit  rounded-md hover:text-gray-300 hover:border-red-400 transition">
                                    <Link to="/service/ear-nose-throat" className="flex items-center">
                                        <MdKeyboardArrowRight className="text-lg" />
                                        <span>Ear, Nose & Throat</span>
                                    </Link>
                                </li>

                                <li className="flex items-center text-[16px] font-normal text-gray-400 w-fit  rounded-md hover:text-gray-300 hover:border-red-400 transition">
                                    <Link to="/service/gall-kidney" className="flex items-center">
                                        <MdKeyboardArrowRight className="text-lg" />
                                        <span>Gallbladder & Kidney</span>
                                    </Link>
                                </li>

                            </ul>

                        </div>
                        <div className='w-full'>
                            <h6 className="text-[1.5rem] font-semibold text-white mb-4">Contact Us</h6>
                            <ul className="flex flex-col gap-[0.2rem]">
                                <li className="text-[16px] font-normal text-gray-400 flex items-center gap-2">
                                    <FaEnvelope /> priyankamaurya27@gmail.com
                                </li>
                                <li className="text-[16px] font-normal text-gray-400 flex items-center gap-2">
                                    <FaPhoneAlt /> +91 7667238292
                                </li>
                                <li className="text-[16px] font-normal text-gray-400 flex items-start gap-2">
                                    <FaMapMarkerAlt /> UGF3, Pratap Plaza, Sector B, LDA Colony, Lucknow, India, 226012
                                </li>
                            </ul>
                        </div>
                        {/* Map Section */}
                        <div className="w-full ">
                            <h3 className="text-xl font-semibold mb-4 text-white">Find Us</h3>
                            <div className="h-48  w-full bg-gray-300">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.382347894296!2d80.895727074891!3d26.795951665099665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfb042d623d8f%3A0x2f6761648c20102f!2sDr.%20Priyanka%20Maurya%20Homeopathy%20Clinic!5e0!3m2!1sen!2sin!4v1738392253515!5m2!1sen!2sin"
                                    width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" title="Location Map"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                    <div className="pt-2 flex flex-col sm:flex-row items-center justify-center">
                        <p className="text-center text-sm sm:text-base font-normal mb-2 sm:mb-0 sm:mr-4 text-white">
                            Copyright © 2025<span className="font-semibold text-white">Dr. Priyanka Maurya </span> || All Rights Reserved ||                        </p>
                        <a href="https://www.codecrafter.co.in/" target="_blank" rel="noopener noreferrer" className="flex items-center text-base font-normal text-gray-400">
                            <span className='text-base text-white'>Developed By:</span>
                            <img src={cclogo} alt="Code Crafter Web Solutions" className="w-32 sm:w-[8rem] h-auto object-contain" />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Footer;
