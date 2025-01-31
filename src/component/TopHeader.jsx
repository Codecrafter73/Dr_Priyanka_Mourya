import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';
import { FaSquareThreads } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { MdOutlineHomeWork } from "react-icons/md";

const TopHeader = () => {
  const socialLinks = [
    {
      icon: <FaFacebookF />,
      url: "https://www.facebook.com/people/Ashirwad-Vastu-Consulting/61571230313314/",
      color: "bg-blue-600", // Facebook blue
    },
    {
      icon: <FaInstagram />,
      url: "https://www.instagram.com/ashirwadvastuconsulting/",
      color: "bg-gradient-to-r from-pink-500 to-yellow-500", // Instagram gradient
    },
    {
      icon: <FaYoutube />,
      url: "https://www.youtube.com/@AshirwadVastuConsulting",
      color: "bg-red-600", // YouTube red
    },
    {
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/company/ashirwad-vastu-consulting/",
      color: "bg-[#007BB6]", // LinkedIn blue
    },
      {
                      icon: <FaSquareThreads/>,
                      url: `https://www.threads.net/@ashirwadvastuconsulting`, // Replace with your WhatsApp number
                      color: "bg-[#000000]", // WhatsApp green
                  },
                  {
                      icon: <BsTwitterX/>,
                      url: `https://x.com/AshirwadVastu`, // Replace with your WhatsApp number
                      color: "bg-[#141414]", // WhatsApp green
                  },
  ];

  return (
    <div className="bg-primary text-white py-0 xl:py-1 shadow-lg">
      <div className="max-w-full mx-auto px-4 flex flex-col lg:flex-row lg:justify-around py-2 xl:py-0 items-center gap-2 md:gap-4 lg:gap-60">
        {/* Contact Info Section */}
        <div className="flex flex-col sm:flex-row items-center gap-2 lg:gap-6 ">
          {/* Phone */}
          <div className="flex items-center gap-1">
            <FaPhoneAlt className="text-sm text-white" />
            <a href="tel:917667238292" className="text-xs sm:text-sm lg:text-base font-normal tracking-wide group-hover:text-[#0e2024] transition-colors duration-300 ">
               <span>Toll Free: </span>+91 7667238292
            </a>
          </div>

          {/* Email */}
          <div className="flex items-center gap-2 group transition-transform duration-300 transform hover:scale-105">
            <FaEnvelope className="text-base lg:text-lg text-[#fff] group-hover:text-[#0e2024] transition-colors duration-300" />
            <a
              href="mailto:shanyaglobal.lko@gmail.com"
              className="text-xs sm:text-sm lg:text-base font-normal tracking-wide group-hover:text-[#0e2024] transition-colors duration-300"
            >
           priyankamaurya27@gmail.com
            </a>
          </div>
        </div>

         <div className="flex items-center gap-2 group transition-transform duration-300 transform hover:scale-105">
            <MdOutlineHomeWork  className="text-base lg:text-lg text-[#fff] group-hover:text-[#0e2024] transition-colors duration-300" />
            <a
              href="mailto:shanyaglobal.lko@gmail.com"
              className="text-xs sm:text-sm lg:text-base font-normal tracking-wide group-hover:text-[#0e2024] transition-colors duration-300"
            >
              Working Hours - Mon - Sun: 8:00AM - 08:00PM
            </a>
          </div>


      </div>
    </div>
  );
};

export default TopHeader;
