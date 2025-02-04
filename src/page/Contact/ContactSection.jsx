import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { MdContactPhone } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdTime } from "react-icons/io";
import { BiMailSend } from "react-icons/bi";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    message: ""
  });

  const [captchaValue, setCaptchaValue] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!captchaValue) {
      alert("Please verify that you are not a robot.");
      return;
    }

    setIsLoading(true);

    // Simulate API request
    setTimeout(() => {
      alert("Form submitted successfully!");
      setIsLoading(false);
      setFormData({ fullName: "", email: "", phoneNumber: "", message: "" });
      setCaptchaValue(null);
    }, 2000);
  };

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
    <div className="relative w-full flex items-center justify-center lg:p-8 bg-gray-100 overflow-hidden">
      <div className="grid md:grid-cols-2 w-full bg-white rounded-lg shadow-lg overflow-hidden max-w-7xl h-fit">

        {/* Contact Info Section */}
        <div className=" md:max-w-[35rem] flex pt-6 px-4">
          <div>
            <h1 className="mb-6">
              Get In Touch With Us
            </h1>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <a href="https://www.google.com/maps/place/Dr.+Priyanka+Maurya+Homeopathy+Clinic/@26.7959517,80.8957271,17z/data=!3m1!4b1!4m6!3m5!1s0x399bfb042d623d8f:0x2f6761648c20102f!8m2!3d26.7959469!4d80.898302!16s%2Fg%2F11h01hj_0d?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="bg-[#A6182E] p-3 rounded-md">
                  <FaLocationDot className="text-[1.4rem] text-white" />
                </a>
                <div>
                  <h3 className="text-[#A6182E] text-[1.5rem] font-semibold ">Address</h3>
                  <p className="text-[#535760] text-[1rem]">
                  Dr. Priyanka Maurya Homeopathy Clinic, UGF3, Pratap Plaza, Sector B, LDA Colony, Lucknow, India, 226012
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <a href="tel:917667238292" className="bg-[#A6182E] p-3 rounded-md">
                  <MdContactPhone className="text-[1.4rem] text-white" />
                </a>
                <div>
                  <h3 className="text-[#A6182E] text-[1.5rem] font-semibold ">Call for Help</h3>
                  <a href="tel:917667238292" className="text-[#535760] text-[1rem]">
                    +91-7667238292
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <a href="tel:+917570018529" className="bg-[#A6182E] p-3 rounded-md">
                  <IoMdTime className="text-[1.4rem] text-white" />
                </a>
                <div>
                  <h3 className="text-[#A6182E] text-[1.5rem] font-semibold">Clinic Opening Hours</h3>
                  <ul className="text-[#535760] text-[1rem]">
                    <li>Sat – Wed: 10:30 AM – 1 PM, 6 – 8 PM</li>
                    <li>Thursday: Closed</li>
                    <li>Friday: 10:30 AM – 1 PM, 6 – 8 PM</li>
                  </ul>

                </div>
              </div>

              <div className="flex items-start space-x-4">
                <a href="mail:priyankamaurya27@gmail.com" className="bg-[#A6182E] p-3 rounded-md">
                  <BiMailSend className="text-[1.4rem] text-white" />
                </a>
                <div>
                  <h3 className="text-[#A6182E] text-[1.5rem] font-semibold ">Email-Id</h3>
                  <p className="text-[#535760] text-[1rem]">priyankamaurya27@gmail.com</p>
                </div>
              </div>

              <div className=" flex flex-row space-x-4  " style={{ zIndex: 1000 }}>
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


            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="p-4 bg-[#A6182E] text-white relative shadow-md rounded-lg mt-4 lg:mt-0">
          <form onSubmit={handleSubmit} className="space-y-6">
            <h3 className="text-xl sm:text-2xl font-semibold">Contact Us</h3>

            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full bg-transparent border-b-2 border-white py-2 outline-none placeholder-white"
              placeholder="Name"
              required
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-transparent border-b-2 border-white py-2 outline-none placeholder-white"
              placeholder="Email"
              required
            />

            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full bg-transparent border-b-2 border-white py-2 outline-none placeholder-white"
              placeholder="Phone"
              required
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-transparent border-b-2 border-white py-2 outline-none placeholder-white resize-none"
              rows="2"
              placeholder="Message"
              required
            ></textarea>

            {/* reCAPTCHA */}
            <div className="flex justify-center">
              <ReCAPTCHA
                sitekey="YOUR_RECAPTCHA_SITE_KEY"
                onChange={handleCaptchaChange}
              />
            </div>

            <button
              type="submit"
              className="py-2 px-4 bg-white text-[#000] font-semibold rounded-full hover:bg-teal-300 transition duration-300 w-full"
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default ContactForm;
