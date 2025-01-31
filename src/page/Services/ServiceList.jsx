import React from 'react'
import img1 from '../../assets/service/gynecology.png'
import img2 from '../../assets/service/epilepsy.png'
import img3 from '../../assets/service/pediatrics.png'
import img4 from '../../assets/service/joint.png'
import img5 from '../../assets/service/stress.png'
import img6 from '../../assets/service/head.png'
import img7 from '../../assets/service/kidney.png'
import img8 from '../../assets/service/urology.png'
import img9 from '../../assets/service/tooth.png'
import img10 from '../../assets/service/cardiac.jpg'

import bgImage from '../../assets/pattern/pattern7.avif'
import background from '../../assets/pattern/pattern8.avif'
import { Link } from 'react-router-dom'
import BreadCums from '../../component/BreadCums'


const services = [
    {
        "image1": img1,
        "name": "Obs & Gynecology",
        "para": "Comprehensive care for women's reproductive health and pregnancy issues."
    },
    {
        "image1": img2,
        "name": "Nervous Disorder",
        "para": "Treatment for nervous system disorders like headaches, epilepsy, and neuropathy."
    },
    {
        "image1": img3,
        "name": "Pediatrics",
        "para": "Complete healthcare, growth monitoring, and treatment of childhood illnesses."
    },
    {
        "image1": img5,
        "name": "TB & Chest",
        "para": "Diagnosis and treatment of tuberculosis, asthma, and lung diseases."
    },
    {
        "image1": img4,
        "name": "Orthopedics",
        "para": "Specialized care for bone, joint, and muscle-related conditions and treatment"
    },

    {
        "image1": img6,
        "name": "Ear, Nose & Throat",
        "para": "Expert treatment for conditions related to the ear, nose, and throat."
    },
    {
        "image1": img7,
        "name": "Gall & Kidney",
        "para": "Management of gallbladder, kidney stones, and urinary tract issues."
    },
    {
        "image1": img8,
        "name": "Urology",
        "para": "Specialized care for urinary system and reproductive organ disorders."
    },
    {
        "image1": img9,
        "name": "Dental Problems",
        "para": "Diagnosis and treatment of oral health and dental issues."
    },
    {
        "image1": img10,
        "name": "Cardiac Complaints",
        "para": "Comprehensive care for heart-related diseases and conditions"
    }
];



const ServiceList = () => {
    const breadcrumbItems = [
        { label: 'Home', href: '/' },
        { label: 'Service' }     
    ];
    return (
        <section>
            <BreadCums headText={"Our Services"} items={breadcrumbItems}/>
        <div className='py-10 sm:py-12 md:py-14 lg:py-16 relative z-10 bg-gray-100'>
            <div className="w-full max-w-7xl mx-auto ">
                <div className='flex flex-col gap-2'>
                    {/* <h2 className="text-center">Our Best Services </h2> */}
                    <h1 className="font-bold text-gray-800  w-1/2 text-center mx-auto">
                        Transforming Lives with best Homeopathic Services in Lucknow
                    </h1>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 mt-4">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white px-4 pt-4 pb-6  rounded-2xl shadow-lg flex flex-col items-center text-center cursor-pointer relative z-10 hover:border border-white">
                            <div
                                className="absolute inset-0 hidden lg:block"
                                style={{
                                    backgroundImage: `url(${bgImage})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    opacity: 10,
                                    zIndex: -10,
                                }}
                            ></div>
                            <img src={service.image1} alt={service?.name} className="w-16 h-16 object-cover rounded-full mb-2  bg-white p-2  shadow-[#A6182E] shadow-2xl" />
                            <p className="text-lg font-semibold text-gray-800">{service.name}</p>
                            <p className="text-sm text-gray-600 mt-2">{service?.para}</p>
                            <Link className='font-semibold text-[#1B3C74] justify-end mt-4 hover:text-[#A6182E] ease-in-out duration-300'>Explore More</Link>
                        </div>
                    ))}
                </div>

            </div>

        </div>
        </section>
    )
}

export default ServiceList