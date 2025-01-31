import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import pattern from '../../assets/pattern/pattern1.jpg';
import image1 from '../../assets/dr-priyanka/welcome_dr.jpg';
import { Link } from 'react-router-dom';
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

    return (
        <section className="relative bg-gray-100 z-10">
            <div
                className="absolute inset-0 hidden lg:block"
                style={{
                    backgroundImage: `url(${pattern})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: 0.5,
                    zIndex: -10,
                }}
            ></div>
            <div>
                <div className="relative flex flex-col lg:flex-row justify-items-start gap-[5rem] p-6 lg:gap-20 max-w-7xl mx-auto mt-[2.25rem] mb-[2.5rem]">

                    <div className="flex-1 z-10 space-y-6 lg:space-y-6 lg:flex-grow" data-aos="fade-right">
                        <div className='flex flex-col gap-2'>
                            <h2>About Dr. Priyanka Maurya</h2>
                            <h1 className="font-bold text-gray-800">
                                Renowned Social Worker and Homeopathy Doctor
                            </h1>
                        </div>

                        <p className="text-base text-gray-600 leading-relaxed text-justify">
                            Dr. Priyanka Maurya, a famous homeopathic physician, social worker, and BJP leader, has been appointed by the Yogi Adityanath government of Uttar Pradesh to be a member of its Women Commission. Known for being the face of the Congress campaign "Ladki Hoon, Lad Sakti Hoon" during the 2022 assembly elections, Dr. Maurya now begins this new chapter in her journey with the political service for the BJP. Her appointment underscores her endless efforts towards women's empowerment and impactful contributions to social causes across Uttar Pradesh.
                        </p>
                        <p className="text-base text-gray-600 leading-relaxed text-justify">
                            A postgraduate with more than 10 years of experience in social service, Dr. Maurya has been associated with initiatives like "Neki Ki Deewar" and "Roti Bank," focusing on helping the underprivileged. She is also a National Vice President of the Shambhuka Foundation and has led several drug awareness programs across Uttar Pradesh. During the COVID-19 pandemic, she offered free medical consultations to thousands and organized numerous health campaigns, earning prestigious awards such as the Women of Excellence in 2020 and the RedFM Achievers Award in 2021.
                        </p>

                        <Button text={"Know More"} />
                    </div>

                    <div className="flex-none z-10 flex flex-col items-center lg:items-start lg:w-[35%]" data-aos="fade-left">
                        <div className="relative">
                            <img
                                src={image1}
                                alt="Dr. Priyanka Maurya"
                                className="w-full lg:w-[600px] h-auto rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeAbout;
