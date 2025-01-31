import React from "react";

import image from "../assets/dr-priyanka/appoit_dr2.jpg";
import { BiPhoneCall } from "react-icons/bi";
import pattern from '../assets/pattern/pattern7.avif'

const ContactCta = () => {
  return (
    <section className="py-16 bg-gray-100 text-white relative z-10">
              {/* Background Shapes */}
      <div className="absolute left-0 top-0 w-80 h-80 bg-[#A6182E] opacity-10 rounded-full -z-10">
   
      </div>
      <div className="absolute right-0 bottom-0 w-80 h-80 bg-green-600 opacity-10 rounded-full -z-10" />
      <div className="max-w-7xl mx-auto px-6 lg:px-12 z-10 relative">
                
        <div className="bg-white text-black rounded-3xl relative z-10 overflow-hidden shadow-lg flex flex-col lg:flex-row items-center">
        <div
                        className="absolute inset-0 hidden lg:block"
                        style={{
                            backgroundImage: `url(${pattern})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            opacity: 0.5,
                            zIndex: -10,
                        }}
                    ></div>
          {/* Left Content */}
          <div className="w-full lg:w-7/12 p-10 lg:p-16">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
              Need Emergency Assistance?
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              If you require urgent medical attention or need to book an appointment, contact us immediately.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href="tel:917667238292"
                className="flex items-center justify-center gap-2 text-lg font-semibold bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg shadow-md transition"
              >
                <BiPhoneCall className="w-5 h-5" /> Call Now: +91 7667238292
              </a>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md transition">
                Book Appointment
              </button>
            </div>
          </div>
          {/* Right Image */}
          <div className="w-full lg:w-5/12">
            <img
              src={image}
              alt="Doctor Consultation"
              className="w-full h-auto rounded-tl-[50%] rounded-tr-[30%] lg:rounded-tr-none lg:rounded-bl-[40%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCta;
