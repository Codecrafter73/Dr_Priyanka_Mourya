import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import pattern from '../../assets/pattern/pattern1.jpg';
import image1 from '../../assets/dr-priyanka/welcomepriyanka.jpg';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../component/Button';

const HomeAbout = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
        });

        const handleScroll = () => {
            AOS.refresh();
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navigate = useNavigate()

    return (
        <section className="relative bg-gray-100 z-10 py-2 sm:py-12 md:py-14 lg:py-10">
            <div
                className="absolute inset-0 "
                style={{
                    backgroundImage: `url(${pattern})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: 0.5,
                    zIndex: -10,
                }}
            ></div>
            <div className="relative flex flex-col-reverse lg:flex-row justify-items-start gap-[2rem] px-4 xl:gap-20 max-w-7xl mx-auto">

                <div className="flex-1 z-10 space-y-2 lg:space-y-3 lg:flex-grow " data-aos="fade-right">
                    <div className='lg:text-[1.8rem] '>
                        <h2>About Dr. Priyanka Maurya</h2>
                        <h1 className="font-bold text-gray-800">
                            Leading Homeopathy Doctor & Healthcare Advocate
                        </h1>
                    </div>

                    <p className="text-base text-gray-600 leading-relaxed text-justify">
                        <strong>Dr. Priyanka Maurya</strong> is a renowned <strong>homeopathic physician</strong> dedicated to providing holistic healthcare solutions. With a vast experience in treating chronic and acute diseases, she has transformed the lives of numerous patients through the power of homeopathy. Her expertise spans across various ailments, including <strong>skin disorders, allergies, respiratory diseases, digestive issues, and lifestyle-related health concerns</strong>.
                    </p>

                    <p className="text-base text-gray-600 leading-relaxed text-justify">
                        With <strong>over 10 years of experience</strong> in homeopathy, Dr. Maurya has been at the forefront of promoting natural healing methods. She actively conducts <strong>free health camps, awareness programs, and wellness seminars</strong> to educate people about the benefits of homeopathy. Her commitment to patient care and well-being has earned her numerous accolades, making her a trusted name in homeopathic medicine.
                    </p>

                    <Button text={"Know More"} url="/about/dr-priyanka" />
                </div>

                <div className="flex-none z-10 flex flex-col items-center lg:items-start lg:w-[35%] w-full" data-aos="fade-left">
                    <div className="relative w-full">
                        <img
                            src={image1}
                            alt="Dr. Priyanka Maurya"
                            className="w-full lg:w-[600px] h-auto rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-500 "
                        />
                    </div>
                </div>
            </div>


        </section>
    );
};

export default HomeAbout;
