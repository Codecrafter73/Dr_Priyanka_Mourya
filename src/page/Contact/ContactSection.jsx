import React, { useState } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";

import { MdContactPhone, MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdTime } from "react-icons/io";

const ContactForm = () => {

     const socialLinks = [
             {
                 icon: <FaFacebookF />,
                 url: "https://www.facebook.com/",
                 color: "bg-blue-600", // Facebook blue
             },
             {
                 icon: <FaInstagram />,
                 url: "https://www.instagram.com",
                 color: "bg-gradient-to-r from-pink-500 to-yellow-500", // Instagram gradient
             },
             {
                 icon: <FaYoutube />,
                 url: "https://www.youtube.com",
                 color: "bg-red-600", // YouTube red
             },
             {
                 icon: <FaWhatsapp />,
                 url: `https://wa.me/917570018529?text=${encodeURIComponent("Hello, I need help!")}`, // Replace with your WhatsApp number
                 color: "bg-green-500", // WhatsApp green
             },
         ];


  // State for form inputs
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);


  // Handle change for input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async(e) => {
    e.preventDefault(); // Prevent the default form submission behavior
   
  };

  return (
    <div className="relative w-full  flex items-center justify-center p-8 bg-gray-100 overflow-hidden">
    <div className="absolute w-[500px] h-[500px] bg-gradient-to-b from-teal-500 to-teal-600 rounded-full transform translate-x-[40%] translate-y-[40%] opacity-30"></div>
  
    <div className="grid md:grid-cols-2 w-full bg-white rounded-lg shadow-lg overflow-hidden max-w-7xl h-fit">
      {/* Contact Info Section */}
      <div className="max-w-[34rem] px-4 md:max-w-[35rem] flex pt-6 ">
        <div>
          <h1 className="sora-600 leading-[3rem]  text-xl sm:text-2xl lg:text-2xl text-[#3597c8] mb-6">
          Get In Touch With Us
          </h1>
      
          <div className="space-y-4">
  
            <div className="flex items-start space-x-4">
              <a 
                href="https://www.google.com/maps/dir//dr+somya+singh/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3999580646718413:0xee7dcdad487cc31b?sa=X&ved=1t:3061&ictx=111"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#A6182E] p-3 rounded-md"
              >
                <FaLocationDot className="text-[1.4rem] text-white" />
              </a>
              <div>
                <h2 className="text-[#A6182E] text-[1.3rem] sora-600">Address</h2>
                <a 
                  href="https://www.google.com/maps/dir//dr+somya+singh/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3999580646718413:0xee7dcdad487cc31b?sa=X&ved=1t:3061&ictx=111"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sora-400 text-[1rem] text-[#535760] no-underline"
                >
                 Dr. Priyanka Maurya Homeopathy Clinic, UGF3, Pratap Plaza, Sector B, LDA Colony, <br />
                  Lucknow, Uttar Pradesh
                </a>
              </div>
            </div>
  
            <div className="flex items-start space-x-4">
              <a 
                href="tel:917379127000" 
                className="bg-[#A6182E] p-3 rounded-md"
              >
                <MdContactPhone className="text-[1.4rem] text-white" />
              </a>
              <div>
                <h2 className="text-[#A6182E] text-[1.3rem] sora-600">Call for Help</h2>
                <a 
                  href="tel:917379127000" 
                  className="sora-400 text-[1rem] text-[#535760] no-underline"
                >
                  +91-7379127000
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <a 
                href="tel:+917570018529" 
                className="bg-[#A6182E] p-3 rounded-md"
              >
                <IoMdTime className="text-[1.4rem] text-white" />
              </a>
              <div>
                <h2 className="text-[#A6182E] text-[1.3rem] sora-600">Clinic Opening Hours</h2>
                <a 
                  href="tel:917379127000" 
                  className="sora-400 text-[1rem] text-[#535760] no-underline"
                >
                  6:00PM-9:00 PM
                </a>
              </div>
            </div>
  
            {/* <div className="flex items-start space-x-4">
              <a 
                href="mailto:saumya.751983@gmail.com" 
                className="bg-[#3597c8] p-3 rounded-md"
              >
                <MdEmail className="text-[1.4rem] text-white" />
              </a>
              <div>
                <h2 className="text-[#3597c8] text-[1.3rem] sora-600">Mail for Information</h2>
                <a 
                  href="mailto:saumya.751983@gmail.com" 
                  className="sora-400 text-[1rem] text-[#535760] no-underline"
                >
                  saumya.751983@gmail.com
                </a>
              </div>
            </div> */}

            {/* <div className=" flex flex-row space-x-4 mt-20 " style={{ zIndex: 1000 }}>
            {socialLinks.map((social, index) => (
                <a 
                    key={index} 
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={`flex items-center justify-center w-12 h-12 ${social.color} rounded-full shadow-lg transition-transform transform hover:scale-105 hover:opacity-80`}
                    style={{ transition: 'transform 0.2s' }}
                >
                    <div className="text-white text-2xl">
                        {social.icon}
                    </div>
                </a>
            ))}
        </div> */}
            


          </div>
        </div>
      </div>
  
      {/* Form Section */}
      <div className="p-4 bg-[#A6182E] text-white relative shadow-md rounded-lg mt-4 lg:mt-0">
        <form onSubmit={handleSubmit} className="space-y-6">
          <h3 className="lg:text-3xl text-xl sm:text-2xl font-semibold">Contact Us</h3>
  
          <div className="relative">
            <input 
              type="text" 
              name="fullName" 
              value={formData.fullName}
              onChange={handleChange}
              className="w-full bg-transparent border-b-2 border-white py-2 outline-none pr-2 focus:border-teal-300 placeholder-white" 
              placeholder="Name" 
              required 
            />
          </div>
          <div className="relative">
            <input 
              type="email" 
              name="email" 
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-transparent border-b-2 border-white py-2 pr-2 outline-none focus:border-teal-300 placeholder-white" 
              placeholder="Email" 
              required 
            />
          </div>
          <div className="relative">
            <input 
              type="tel" 
              name="phoneNumber" 
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full bg-transparent border-b-2 border-white py-2  pr-2 outline-none focus:border-teal-300 placeholder-white" 
              placeholder="Phone" 
              required 
            />
          </div>
          <div className="relative">
            <textarea 
              name="message" 
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-transparent border-b-2 border-white py-2 outline-none focus:border-teal-300 placeholder-white resize-none" 
              rows="2" 
              placeholder="Message" 
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="py-2 px-4 bg-white text-[#3597c8] font-semibold rounded-full hover:bg-teal-300 transition duration-300"
            disabled={isLoading}
          >
            {isLoading ? (
              <span className="flex justify-center items-center">
                <svg
                  className="animate-spin h-5 w-5 mr-3 border-2 border-t-white border-[#1A466D] rounded-full"
                  viewBox="0 0 24 24"
                ></svg>
                Sending...
              </span>
            ) : (
              "Send Message"
            )}
          </button>
        </form>
      </div>
    </div>
  </div>
  
  
  );
};

export default ContactForm;
