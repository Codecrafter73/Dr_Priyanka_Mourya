import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from '../../../assets/Bjp_Social/bjp1.jpg'
import img2 from '../../../assets/Bjp_Social/bjp2.jpg'
import img3 from '../../../assets/Bjp_Social/bjp3.jpg'
import img4 from '../../../assets/Bjp_Social/bjp4.jpg'
import img5 from '../../../assets/Bjp_Social/bjp5.jpg'
import img6 from '../../../assets/Bjp_Social/bjp6.jpg'
import img7 from '../../../assets/Bjp_Social/bjp7.jpg'
import img8 from '../../../assets/Bjp_Social/bjp8.jpg'

const SocialGallery = () => {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,  // ✅ LG pe 3 images ek sath dikhengi
    slidesToScroll: 1, // ✅ Slide ek-ek image se move karega
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true,
    centerMode: true,
    centerPadding: "20px", // ✅ Thoda gap maintain rahe
    responsive: [
      {
        breakpoint: 1024, // ✅ Medium screens (md) - 2 images
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768, // ✅ Small screens (sm) - 1 image
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className="flex flex-col justify-center items-center w-full  py-6 ">
      <h2 className="text-xl font-semibold mb-4">Some Best Moments</h2>
      <div className="w-full max-w-5xl py-4 ">  {/* ✅ Max-width set for clean design */}
        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index} className="px-2">
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                className="w-full h-auto object-cover rounded-xl shadow-md"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SocialGallery;
