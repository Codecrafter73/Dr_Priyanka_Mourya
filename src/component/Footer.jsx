import React from 'react';
import { MdCall, MdMail, MdLocationOn, MdKeyboardArrowRight } from 'react-icons/md'; // Added MdKeyboardArrowRight
import { Link } from 'react-router-dom';
import { IoMdMail } from "react-icons/io";

const Footer = () => {
    return (
        <footer className="relative overflow-hidden bg-black text-white">
            {/* Footer Background Design */}
            <div className="relative w-full overflow-hidde bg-primary">
                <svg
                    className="absolute w-full h-32 text-black"
                    preserveAspectRatio="none"
                    viewBox="0 0 1440 320"
                >
                    <path fill="#1F708E" d="M0,288L48,272C96,256,192,224,288,213.3C384,203,480,213,576,202.7C672,192,768,160,864,138.7C960,117,1056,107,1152,112C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
            </div>

            <div className="relative  bg-[#6c2525] py-6 ">
                <div className="mx-auto max-w-7xl flex flex-col lg:flex-row justify-between max-w-8xl px-4 gap-6">
                    {/* Contact Section */}
                    <div className="w-full lg:w-1/4 mb-8">
                        <h3 className="text-xl font-semibold mb-4 text-white ">Contact Us</h3>
                        <li className="mb-4 flex items-center text-lg lg:text-lg">
                            <IoMdMail className="mr-3 text-2xl lg:text-4xl" />
                            <a href="mailto:aggarwal.manas@gmail.com" className="hover:text-gray-800">priyankamaurya27@gmail.com</a>
                        </li>
                        <li className="mb-4 flex items-center text-lg lg:text-lg">
                            <MdCall className="mr-3 text-2xl lg:text-[1rem]" />
                            <a href="tel:+918318208837" className="hover:text-gray-800">+91 7667238292</a>
                        </li>
                        <li className="flex items-center text-lg lg:text-lg">
                            <MdLocationOn className="mr-3 text-4xl lg:text-3xl" />
                            <a href="https://www.google.com/maps/dir//Dr+Manas+Aggarwal+-+Best+Gastroenterologist+Gomti+Nagar+Lucknow"
                                target="_blank" rel="noopener noreferrer"
                                className="hover:text-gray-800 transition-all duration-300">
                               LDA Colony, Lucknow, India, Uttar Pradesh
                            </a>
                        </li>
                    </div>

    

                    {/* Treatment Section */}
                    <div className="w-full lg:w-1/4 mb-8 lg:ml-[4rem]">
                        <h3 className="text-xl text-white font-semibold mb-4">Our Services</h3>
                        <ul className="text-lg lg:text-xl">
                            <Link to={`/treatment/gallbladder/gallbladderstones`}>
                                <li className="mb-2 hover:text-gray-800 flex items-center">
                                    <MdKeyboardArrowRight className="mr-2" /> Obs & Gynecology
                                </li>
                            </Link>
                            <Link to={`/treatment/hernia/Inguinalhernial`}>
                                <li className="mb-2 hover:text-gray-800 flex items-center">
                                    <MdKeyboardArrowRight className="mr-2" /> Nervous Disorder
                                </li>
                            </Link>
                            <Link to={`/treatment/stomach-cancer/polyps`}>
                                <li className="mb-2 hover:text-gray-800 flex items-center">
                                    <MdKeyboardArrowRight className="mr-2" /> Pediatrics
                                </li>
                            </Link>
                            <Link to={`/treatment/pancreas/pancreaticcancer`}>
                                <li className="mb-2 hover:text-gray-800 flex items-center">
                                    <MdKeyboardArrowRight className="mr-2" /> TB & Chest
                                </li>
                            </Link>
                            <Link to={`/treatment/intestine/obstruction`}>
                                <li className="mb-2 hover:text-gray-800 flex items-center">
                                    <MdKeyboardArrowRight className="mr-2" /> Orthopedics
                                </li>
                            </Link>
                            <Link to={`/treatment/colon-rectum/inflammatoryboweldiseases`}>
                                <li className="mb-2 hover:text-gray-800 flex items-center">
                                    <MdKeyboardArrowRight className="mr-2" /> Ear, Nose & Throat
                                </li>
                            </Link>
                            <Link to={`/treatment/liver/livercancer`}>
                                <li className="mb-2 hover:text-gray-800 flex items-center">
                                    <MdKeyboardArrowRight className="mr-2" /> Liver Cancer
                                </li>
                            </Link>
                            {/* <Link to={`/treatment/liver/livercancer`}>
                                <li className="mb-2 hover:text-gray-800 flex items-center">
                                    <MdKeyboardArrowRight className="mr-2" />Urology
                                </li>
                            </Link>
                            <Link to={`/treatment/liver/livercancer`}>
                                <li className="mb-2 hover:text-gray-800 flex items-center">
                                    <MdKeyboardArrowRight className="mr-2" />Dental Problems
                                </li>
                            </Link>
                            <Link to={`/treatment/liver/livercancer`}>
                                <li className="mb-2 hover:text-gray-800 flex items-center">
                                    <MdKeyboardArrowRight className="mr-2" />Cardiac Complaints
                                </li>
                            </Link> */}
                        </ul>
                    </div>

                    {/* Quick Links Section */}
                    <div className="w-full lg:w-1/4 mb-8 lg:ml-[4rem]">
                        <h3 className="text-xl font-semibold mb-4 text-white">Quick Links</h3>
                        <ul className="text-lg lg:text-xl">
                            <Link to={"/"}>
                                <li className="mb-2 hover:text-gray-800 flex items-center">
                                    <MdKeyboardArrowRight className="mr-2" /> Home
                                </li>
                            </Link>
                            <Link to={"/about"}>
                                <li className="mb-2 hover:text-gray-800 flex items-center">
                                    <MdKeyboardArrowRight className="mr-2" /> About Us
                                </li>
                            </Link>
                            <Link to={"/cases"}>
                                <li className="mb-2 hover:text-gray-800 flex items-center">
                                    <MdKeyboardArrowRight className="mr-2" /> Cases
                                </li>
                            </Link>
                            <Link to={"/testonomial"}>
                                <li className="mb-2 hover:text-gray-800 flex items-center">
                                    <MdKeyboardArrowRight className="mr-2" /> Testimonials
                                </li>
                            </Link>
                            <Link to={"/blog"}>
                                <li className="mb-2 hover:text-gray-800 flex items-center">
                                    <MdKeyboardArrowRight className="mr-2" /> Blog
                                </li>
                            </Link>
                            <Link to={"/contact"}>
                                <li className="mb-2 hover:text-gray-800 flex items-center">
                                    <MdKeyboardArrowRight className="mr-2" /> Contact Us
                                </li>
                            </Link>
                            {/* <li className="mb-2 hover:text-gray-800 flex items-center">
                                <MdKeyboardArrowRight className="mr-2" />
                                <a href="https://pancreas.co.in/" target="_blank" rel="noopener noreferrer">Pancreas</a>
                            </li> */}
                            {/* <li className="mb-2 hover:text-gray-800 flex items-center">
                                <MdKeyboardArrowRight className="mr-2" />
                                <a href="https://master.drmanasaggarwal.com" target="_blank" rel="noopener noreferrer">Admin Login</a>
                            </li> */}
                        </ul>
                    </div>

                    {/* Map Section */}
                    <div className="w-full lg:w-1/4">
                        <h3 className="text-xl font-semibold mb-4">Find Us</h3>
                        <div className="h-48 lg:h-64 w-full bg-gray-300">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d42860.65260849085!2d80.99093774602933!3d26.863119911700657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfb781a8e1edf%3A0xbb68c9fe3bbab90b!2sDr%20Manas%20Aggarwal%20-%20Best%20Gastroenterologist%20Gomti%20Nagar%20Lucknow%20%7C%20Gastroenterology%20Cancer%20Surgeon%20Lucknow%20%26%20Piles%20Specialist!5e0!3m2!1sen!2sin!4v1729253169876!5m2!1sen!2sin"
                                width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" title="Location Map"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
