import React from "react";
import Slider from "react-slick";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import pattern from '../../assets/pattern/pattern3.jpg';
import logo from '../../assets/blog/bloglist.webp';
import blog1 from '../../assets/blog/bloglist1.webp';
import blog2 from '../../assets/blog/bloglist4.jpg';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const blogs = [
    {
        bannerImg: logo,
        authorImg: "https://cdn.easyfrontend.com/pictures/users/user1.jpg",
        title: "Homeopathy: A Natural Approach to Healing",
        date: "February 3rd, 2024",
        text: "Explore how homeopathy uses natural remedies to promote overall well-being and health.",
    },
    {
        bannerImg: blog1,
        authorImg: "https://cdn.easyfrontend.com/pictures/users/user25.jpg",
        title: "Top Homeopathic Remedies for Everyday Ailments",
        date: "February 3rd, 2024",
        text: "Discover effective homeopathic treatments for common health issues like colds and allergies.",
    },
    {
        bannerImg: blog2,
        authorImg: "https://cdn.easyfrontend.com/pictures/users/user7.jpg",
        title: "The Science Behind Homeopathy: Does It Work?",
        date: "February 3rd, 2024",
        text: "Discover effective homeopathic treatments for common health issues like colds and allergies.",
    },
];

const BlogItem = ({ item }) => (
    <Link to={`/blog/${item?.title}`}>
        <div className="mt-6 md:mt-12 text-white bg-[#A6182E] rounded-xl overflow-hidden">
            <div className="relative">
                <img src={item.bannerImg} alt="" className="w-full" />
            </div>
            <div className="p-6 pb-2">
                <h5 className="text-[19px] font-medium leading-6 mt-3 mb-3 hover:text-red-300">
                    {item.title}
                </h5>
                <p className="text-[17px] leading-none opacity-80 mb-5">{item.date}</p>
                <p className="opacity-80 mb-2">{item.text}</p>
            </div>
        </div>
    </Link>
);

BlogItem.propTypes = {
    item: PropTypes.object.isRequired,
};

const HomeBlog = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <section className="bg-gray-100 overflow-hidden py-10 sm:py-12 md:py-14 lg:py-16 relative z-10">
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `url(${pattern})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: 0.2,
                    zIndex: -10,
                }}
            ></div>
            <div className="max-w-7xl mx-auto px-2">
                <h1 className="text-center">Our Recent Blogs</h1>
                <Slider {...settings} className="mt-6">
                    {blogs.map((item, i) => (
                        <div key={i} className="px-2">
                            <BlogItem item={item} />
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default HomeBlog;
