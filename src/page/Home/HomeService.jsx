import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bgService from '../../assets/service/nervous.webp';
import bgService1 from '../../assets/service/cardiac.jpg';
import bgService2 from '../../assets/service/orthopedics.jpg';

const services = [
    {
        title: "Improved Texture",
        description:
            "Quisque sagittis purus sit amet volutpat consequat mauris. Gravida in fermentum et sollicitudin ac.",
        icon: "💧",
        bgImage: bgService2
    },
    {
        title: "Hydration",
        description:
            "Magna fringilla urna porttitor rhoncus dolor purus non enim. Nullam eget felis eget nunc lobortis.",
        icon: "👐",
        bgImage: bgService1
    },
    {
        title: "Reduction Of Acne",
        description:
            "Libero volutpat sed cras ornare arcu dui. In est ante in nibh mauris cursus mattis molestie.",
        icon: "📉",
        bgImage: bgService
    },
];

const HomeService = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2 },
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 1 },
            },
        ],
    };

    return (
        <section className="py-10 sm:py-12 md:py-14 lg:py-10  ">
            <div className="w-full max-w-7xl mx-auto ">
                <div className='flex flex-col gap-2'>
                    <h2 className="text-center">Our Best Services </h2>
                    <h1 className="font-bold text-gray-800 lg:text-center text-justify">
                        Transforming Lives with best Homeopathic Services in Lucknow
                    </h1>
                </div>

                <Slider {...settings} className=" py-6">
                    {services.map((service, index) => (
                        <div key={index} className="px-2  py-6 ">
                            <div
                                className="relative group rounded-xl shadow-lg overflow-hidden px-6 border  py-[8rem] text-black text-center flex flex-col justify-center items-center transition-all duration-500 cursor-pointer"
                                style={{
                                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${service.bgImage})`, // Add a gradient overlay
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                }}
                            >
                                <div className="text-5xl mb-4">{service.icon}</div>
                                <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                                <p className="text-sm mt-2 opacity-90 text-white">{service.description}</p>
                                <div className="absolute inset-0 bg-black/50 opacity-80 group-hover:opacity-100 transition-all duration-500"></div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default HomeService;
