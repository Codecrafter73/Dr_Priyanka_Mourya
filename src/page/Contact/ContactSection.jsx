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
                <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer" className="bg-[#A6182E] p-3 rounded-md">
                  <FaLocationDot className="text-[1.4rem] text-white" />
                </a>
                <div>
                  <h2 className="text-[#A6182E] lg:text-[1.3rem] ">Address</h2>
                  <p className="text-[#535760] text-[1rem]">
                    Dr. Priyanka Maurya Homeopathy Clinic, Lucknow, Uttar Pradesh
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <a href="tel:917379127000" className="bg-[#A6182E] p-3 rounded-md">
                  <MdContactPhone className="text-[1.4rem] text-white" />
                </a>
                <div>
                  <h2 className="text-[#A6182E] lg:text-[1.3rem]">Call for Help</h2>
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
                  <h2 className="text-[#A6182E] lg:text-[1.3rem]">Clinic Opening Hours</h2>
                  <p className="text-[#535760] text-[1rem]">6:00PM-9:00 PM</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <a href="mail:priyankamaurya27@gmail.com" className="bg-[#A6182E] p-3 rounded-md">
                  <BiMailSend className="text-[1.4rem] text-white" />
                </a>
                <div>
                  <h2 className="text-[#A6182E] lg:text-[1.3rem]">Email-Id</h2>
                  <p className="text-[#535760] text-[1rem]">priyankamaurya27@gmail.com</p>
                </div>
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
