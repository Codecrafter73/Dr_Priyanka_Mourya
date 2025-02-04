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


import img21 from '../../../assets/gallery/GalleryColl/gal1.jpg'
import img22 from '../../../assets/gallery/GalleryColl/gal2.jpg'
import img23 from '../../../assets/gallery/GalleryColl/gal3.jpg'
import img24 from '../../../assets/gallery/GalleryColl/gal4.jpg'
import img25 from '../../../assets/gallery/GalleryColl/gal5.jpg'
import img26 from '../../../assets/gallery/GalleryColl/gal6.jpg'
import img27 from '../../../assets/gallery/GalleryColl/gal7.jpg'
import img28 from '../../../assets/gallery/GalleryColl/gal8.jpg'
import img29 from '../../../assets/gallery/GalleryColl/gal9.jpg'
import img30 from '../../../assets/gallery/GalleryColl/gal10.jpg'
import img31 from '../../../assets/gallery/GalleryColl/gal11.jpg'
import img32 from '../../../assets/gallery/GalleryColl/gal12.jpg'
import img33 from '../../../assets/gallery/GalleryColl/gal13.jpg'
import img34 from '../../../assets/gallery/GalleryColl/gal14.jpg'
import img35 from '../../../assets/gallery/GalleryColl/gal15.jpg'
import img36 from '../../../assets/gallery/GalleryColl/gal16.jpg'

const SocialGallery = () => {
  const images = [img21, img22, img23, img24, img25, img26, img27, img28,img29,img30,img31,img32,img33,img34,img35,img36];

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
    <div className="flex flex-col justify-center items-center w-full  py-10 sm:py-12 md:py-14 lg:py-16 ">
      <h2 className="text-xl font-semibold mb-4">Some Best Moments</h2>
      <div className="w-full max-w-5xl py-4 ">  {/* ✅ Max-width set for clean design */}
        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index} className="px-2">
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                className="w-full h-64 object-cover rounded-xl shadow-md" // Set fixed height and object-cover to maintain aspect ratio
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SocialGallery;
