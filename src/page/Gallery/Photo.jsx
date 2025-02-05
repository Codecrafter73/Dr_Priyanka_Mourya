import React, { useState, useEffect } from 'react';
import BreadCums from '../../component/BreadCums';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos';

import img1 from '../../assets/gallery/gallery1.jpg';
import img2 from '../../assets/gallery/gallery2.jpg';
import img3 from '../../assets/gallery/gallery3.jpg';
import img4 from '../../assets/gallery/gallery4.jpg';
import img5 from '../../assets/gallery/gallery5.jpg';
import img6 from '../../assets/gallery/gallery6.jpg';
import img7 from '../../assets/gallery/gallery7.jpg';
import img8 from '../../assets/gallery/gallery8.jpg';
import img9 from '../../assets/gallery/gallery9.jpg';
import img10 from '../../assets/gallery/gallery10.jpg';
import img11 from '../../assets/gallery/gallery11.jpg';
import img12 from '../../assets/gallery/gallery12.jpg';
import img13 from '../../assets/gallery/gallery13.jpg';
import img14 from '../../assets/gallery/gallery14.jpg';
import img15 from '../../assets/gallery/gallery15.jpg';
import img16 from '../../assets/gallery/gallery16.jpg';
import img17 from '../../assets/gallery/gallery17.jpg';
import img18 from '../../assets/gallery/gallery18.jpg';
import img19 from '../../assets/gallery/gallery19.jpg';
import img20 from '../../assets/gallery/gallery20.jpg';

import img21 from '../../assets/gallery/GalleryColl/gal1.jpg'
import img22 from '../../assets/gallery/GalleryColl/gal2.jpg'
import img23 from '../../assets/gallery/GalleryColl/gal3.jpg'
import img24 from '../../assets/gallery/GalleryColl/gal4.jpg'
import img25 from '../../assets/gallery/GalleryColl/gal5.jpg'
import img26 from '../../assets/gallery/GalleryColl/gal6.jpg'
import img27 from '../../assets/gallery/GalleryColl/gal7.jpg'
import img28 from '../../assets/gallery/GalleryColl/gal8.jpg'
import img29 from '../../assets/gallery/GalleryColl/gal9.jpg'
import img30 from '../../assets/gallery/GalleryColl/gal10.jpg'
import img31 from '../../assets/gallery/GalleryColl/gal11.jpg'
import img32 from '../../assets/gallery/GalleryColl/gal12.jpg'
import img33 from '../../assets/gallery/GalleryColl/gal13.jpg'
import img34 from '../../assets/gallery/GalleryColl/gal14.jpg'
import img35 from '../../assets/gallery/GalleryColl/gal15.jpg'
import img36 from '../../assets/gallery/GalleryColl/gal16.jpg'



import { useLocation } from 'react-router-dom';


const Photo = () => {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Gallery' },
    { label: 'Photo' },
  ];

  const images = [
   img21,img22,img23,img24,img25,img26,img27, img28,img29,img30,img31,img32,img33,img34,img35,img36
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const location = useLocation()

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (location.pathname === '/gallery/photo') {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <section className='bg-gray-100'>
      {/* Breadcrumb */}
      <BreadCums headText="Our Happy Moment" items={breadcrumbItems} />

      {/* gallery Section */}

      <div className="py-10 sm:py-12 md:py-14 lg:py-16 max-w-7xl  mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg shadow-md"
              data-aos="fade-up"
            >
              <img
                src={image}
                alt={`gallery ${index + 1}`}
                className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110 cursor-pointer"
                onClick={() => openModal(index)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Full-Screen Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          onClick={closeModal}
        >
          <div
            className="relative max-w-5xl mx-auto"
            onClick={(e) => e.stopPropagation()} // Prgallery closing on content click
          >
            <button
              className="absolute top-4 right-4 text-white text-3xl bg-main  rounded-full w-10 h-10 flex items-center justify-center"
              onClick={closeModal}
            >
              &times;
            </button>
            <img
              src={images[currentIndex]}
              alt={`gallery ${currentIndex + 1}`}
              className="w-full max-h-[80vh] object-contain"
            />
            <button
              className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-3xl bg-main  rounded-full w-10 h-10 flex items-center justify-center"
              onClick={prevImage}
            >
              &#8592;
            </button>
            <button
              className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-3xl bg-main  rounded-full w-10 h-10 flex items-center justify-center"
              onClick={nextImage}
            >
              &#8594;
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Photo;
