import React, { useEffect } from 'react';
import Slider from 'react-slick';
import { FaArrowLeft, FaArrowRight, FaPills, FaHeartbeat, FaUserMd, FaMicroscope, FaAppleAlt } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import b1 from '../../assets/banner/banner.jpg'
import b2 from '../../assets/banner/banner3.jpg'
import b3 from '../../assets/banner/banner5.jpg'

const HomeSlider = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { arrows: false } },
      { breakpoint: 600, settings: { arrows: false } },
      { breakpoint: 480, settings: { dots: false, arrows: false } },
    ],
  };

  const services = [
    { icon: <FaPills />, title: 'Birth Control' },
    { icon: <FaMicroscope />, title: 'Pregnancy Testing' },
    { icon: <FaHeartbeat />, title: 'Health Care' },
    { icon: <FaUserMd />, title: 'Abortion Services' },
    { icon: <FaUserMd />, title: 'Gynecology Services' },
    { icon: <FaAppleAlt />, title: 'Family Planning' },
  ];

  return (
    <div className="relative w-full mx-auto ">
      {/* Slider Section */}
      <Slider {...settings} className="relative h-auto">
        {[b1,b2,b3].map((src, index) => (
          <div className="relative" key={index}>
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full  object-cover transition-transform duration-500 transform  hover:opacity-90  h-auto"
              style={{ maxHeight: '100%' }} // Ensure image doesn't overflow
            />
          </div>
        ))}
      </Slider>

    </div>
  );
};

// Reusable Service Item Component
// const ServiceItem = ({ icon, title }) => (
//   <div
//     className="flex flex-col items-center text-center rounded-full  bg-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 transform border border-red-500"
//     data-aos="zoom-in"
//   >
//     <div className="icon bg-[#1E3A8A] text-white rounded-full p-4 mb-4 flex items-center justify-center text-4xl">
//       {icon}
//     </div>
//     <h3 className="text-lg font-semibold text-[#1E3A8A]">{title}</h3>
//   </div>
// );

// Arrows for Slider
const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 right-6 transform -translate-y-1/2 bg-primary text-white rounded-full p-3 shadow-lg cursor-pointer hover:bg-[#0b3d5b] transition duration-300 z-10"
      onClick={onClick}
    >
      <FaArrowRight size={20} />
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 left-6 transform -translate-y-1/2 bg-primary text-white rounded-full p-3 shadow-lg cursor-pointer hover:bg-[#0b3d5b] transition duration-300 z-10"
      onClick={onClick}
    >
      <FaArrowLeft size={20} />
    </div>
  );
};

export default HomeSlider;
