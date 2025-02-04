import React from "react";

import PropTypes from "prop-types";
import { LuBookMarked } from "react-icons/lu";
import pattern from '../../assets/pattern/pattern3.jpg'
import Button from "../../component/Button";

import logo from '../../assets/blog/bloglist.webp'
import blog1 from '../../assets/blog/bloglist1.webp'
import blog2 from '../../assets/blog/bloglist4.jpg'
import { Link } from "react-router-dom";


const blogs = [
    {
        bannerImg: logo,
        authorImg: "https://cdn.easyfrontend.com/pictures/users/user1.jpg",
        title: "Homeopathy: A Natural Approach to Healing",
        date: "Febuary 3th, 2024",
        text: "Explore how homeopathy uses natural remedies to promote overall well-being and health.",
    },
    {
        bannerImg: blog1,
        authorImg: "https://cdn.easyfrontend.com/pictures/users/user25.jpg",
        title: "Top Homeopathic Remedies for Everyday Ailments",
        date: "Febuary 3th, 2024",
        text: "Discover effective homeopathic treatments for common health issues like colds and allergies.",
    },
    {
        bannerImg: blog2,
        authorImg: "https://cdn.easyfrontend.com/pictures/users/user7.jpg",
        title: "The Science Behind Homeopathy: Does It Work?",
        date: "Febuary 3th, 2024",
        text: "Discover effective homeopathic treatments for common health issues like colds and allergies.",
    },
];


const BlogItem = ({ item }) => (
    <div className="mt-6 md:mt-12 text-white bg-[#A6182E] rounded-xl overflow-hidden">
        <div className="relative">
            <img src={item.bannerImg} alt="" className="w-full" />
            {/* <img
                className="absolute -bottom-6 left-6 w-12 h-12 rounded-full"
                src={item.authorImg}
                alt=""
            /> */}
        </div>
        <div className="p-6 pb-2">
            <Link to={`/blog/${item?.title}`} className="hover:text-red-300">
                <h5 className="text-[19px] font-medium leading-6 mt-3 mb-3">
                    {item.title}
                </h5>
            </Link>
            <p className="text-[17px] leading-none opacity-80 mb-5">{item.date}</p>
            <p className="opacity-80 mb-2">{item.text}</p>
            <div className="flex justify-between items-center">
          {/* <Button text={"Read More"}/> */}
                {/* <a href="#!" className="text-xl hover:text-blue-600 transition-colors">
                    <LuBookMarked />
                </a> */}
            </div>
        </div>
    </div>
);

BlogItem.propTypes = {
    item: PropTypes.object.isRequired,
};

const HomeBlog = () => {
    return (
        <section className="bg-gray-100  overflow-hidden py-10 sm:py-12 md:py-14 lg:py-16 relative z-10">
            <div
                className="absolute inset-0 "
                style={{
                    backgroundImage: `url(${pattern})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: 0.2,
                    zIndex: -10,
                }}
            ></div>
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1">
                    <div className="col-span-1">
                        <h1 className="text-center">
                            Our Recent Blogs
                        </h1>
                    </div>

                    <div className="col-span-1">
                        <div className="grid grid-cols-6 gap-x-6">
                            {blogs.map((item, i) => (
                                <div className="col-span-6 md:col-span-3 lg:col-span-2" key={i}>
                                    <BlogItem item={item} />
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


export default HomeBlog
