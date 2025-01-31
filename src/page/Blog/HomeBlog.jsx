import React from "react";

import PropTypes from "prop-types";
import { LuBookMarked } from "react-icons/lu";
import pattern from '../../assets/pattern/pattern3.jpg'
import Button from "../../component/Button";
const blogs = [
    {
        bannerImg: "https://cdn.easyfrontend.com/pictures/blog/blog_14_1.jpg",
        authorImg: "https://cdn.easyfrontend.com/pictures/users/user1.jpg",
        title: "The Complete Digital Marketing Guide Course",
        date: "August 10th, 2022",
        text: "Assumenda non repellendus distinctio nihil dicta sapiente, quibusdam maiores.",
    },
    {
        bannerImg: "https://cdn.easyfrontend.com/pictures/blog/blog_3.jpg",
        authorImg: "https://cdn.easyfrontend.com/pictures/users/user25.jpg",
        title: "The Complete Digital Marketing Guide Course",
        date: "August 10th, 2022",
        text: "Assumenda non repellendus distinctio nihil dicta sapiente, quibusdam maiores.",
    },
    {
        bannerImg: "https://cdn.easyfrontend.com/pictures/blog/blog_14_3.jpg",
        authorImg: "https://cdn.easyfrontend.com/pictures/users/user7.jpg",
        title: "The Complete Digital Marketing Guide Course",
        date: "August 10th, 2022",
        text: "Assumenda non repellendus distinctio nihil dicta sapiente, quibusdam maiores.",
    },
];

const BlogItem = ({ item }) => (
    <div className="mt-6 md:mt-12 text-white bg-[#A6182E] rounded-xl overflow-hidden">
        <div className="relative">
            <img src={item.bannerImg} alt="" className="w-full" />
            <img
                className="absolute -bottom-6 left-6 w-12 h-12 rounded-full"
                src={item.authorImg}
                alt=""
            />
        </div>
        <div className="p-6 pb-2">
            <a href="#!" className="hover:text-blue-600">
                <h5 className="text-[19px] font-medium leading-6 mt-3 mb-3">
                    {item.title}
                </h5>
            </a>
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
                className="absolute inset-0 hidden lg:block"
                style={{
                    backgroundImage: `url(${pattern})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: 0.2,
                    zIndex: -10,
                }}
            ></div>
            <div className="max-w-7xl mx-auto">
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
