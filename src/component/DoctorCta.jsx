import React from "react";
import { Link } from "react-router-dom";
import bgimg from '../assets/other/cta2.jpg';

const CallToAction = () => {
    return (
		<section 
		className="overflow-hidden bg-[#A6182E] relative z-10 py-10" 
		style={{
		  backgroundImage: `url(${bgimg})`, 
		//   backgroundSize: 'cover', 
		//   backgroundPosition: 'center'
		}}
	  >
            {/* <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `url(${bgimg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
        
                    zIndex: -10,
                    height: '100%',
                }}
            ></div> */}
			      {/* Darker Overlay */}
				  <div className="absolute py-10 inset-0 bg-black opacity-60"></div>
            <div className="container relative px-4">
                <div className="grid grid-cols-12 justify-center text-center text-white">
                    <div className="col-span-12 lg:col-span-6 lg:col-start-4 mx-auto">
                        <div className="lg:px-16">
                            <h3 className="text-2xl md:text-[35px] leading-none font-bold mb-6 text-white">
                                Did you know?
                            </h3>
                            <p className="text-lg leading-6 mb-12">
                                Good health is the greatest treasure,  
                                With homeopathy, feel the pleasure!  
                                Find the best care, don’t delay,  
                                Book your appointment today!
                            </p>
                            <Link
                                to={"/contact"}
                                className="bg-[#A6182E]  py-3 px-7 rounded transition hover:bg-[#894d56]"
                            >
                                Book Appointment Now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;
