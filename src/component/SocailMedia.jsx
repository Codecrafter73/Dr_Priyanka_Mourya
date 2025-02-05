// src/SocialMediaIcons.js
import React from 'react';
import { FaInstagram, FaFacebookF, FaYoutube, FaWhatsapp } from 'react-icons/fa';

const SocialMediaIcons = () => {
    const socialLinks = [
        {
            icon: <FaFacebookF />,
            url: "https://www.facebook.com/drpriyankamaurya27/",
            color: "bg-blue-600", // Facebook blue
        },
        {
            icon: <FaInstagram />,
            url: "https://www.instagram.com/drpriyankamaurya27/?hl=en",
            color: "bg-gradient-to-r from-pink-500 to-yellow-500", // Instagram gradient
        },
        {
            icon: <FaYoutube />,
            url: "https://www.youtube.com/@DrPriyankaMauryaHomeopathy",
            color: "bg-red-600", // YouTube red
        },
        {
            icon: <FaWhatsapp />,
            url: `https://wa.me/917667238292?text=${encodeURIComponent("Hello, I need help!")}`, // Replace with your WhatsApp number
            color: "bg-green-500", // WhatsApp green
        },
    ];

    return (
        <div className="fixed top-20 xl:hidden right-[0.2rem] flex flex-col space-y-4" style={{ zIndex: 1000 }}>
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
        </div>
    );
};

export default SocialMediaIcons;
