import React from 'react'
import BreadCums from '../../component/BreadCums'
import image from '../../assets/service-detail/servicedetail.jpg'
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

import background from '../../assets/dr-priyanka/bjp_dr_1.jpg'
import pattern from '../../assets/pattern/pattern7.avif'
import pattern1 from '../../assets/pattern/pattern1.jpg'


import { Link } from 'react-router-dom'
import { BiCheck } from 'react-icons/bi'
const ServiceDetail = () => {
    const breadcrumbItems = [
        { label: 'Home', href: '/' },
        { label: 'Service' },
        { label: 'Name' }
    ];
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


    return (
        <section>
            <BreadCums headText={"TB & Chest"} items={breadcrumbItems} />

            <div className="flex flex-col-reverse md:flex-row-reverse max-w-7xl mx-auto gap-4 py-6 ">
                <div className="w-full md:w-1/4 shadow-lg p-4 h-fit">
                    <h2 className="text-xl font-bold mb-4">Services</h2>
                    <ul className="space-y-2">
                        {services.map((service) => (
                            <li
                                key={service.id}
                                className={`flex items-center p-3 cursor-pointer rounded-lg transition duration-300 border border-[#808080] hover:bg-[#808080] z-10 relative bg-gray-100`} >
                                     <div
                                className="absolute inset-0 hidden lg:block"
                                style={{
                                    backgroundImage: `url(${pattern})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    opacity: 6,
                                    zIndex: -10,
                                }}
                            ></div>
                                {/* <span className="mr-2 text-xl">{service.icon}</span> */}
                                <img src={service?.image1} alt="service.name" className='w-10 h-10 object-cover' />
                                <span>{service.name}</span>
                            </li>
                        ))}
                    </ul>
                    <div
                        className="w-full bg-primary text-white rounded-lg shadow-lg p-6 mx-auto mt-8 relative overflow-hidden bg-cover bg-center"
                        style={{ backgroundImage: `url(${background}')` }}
                    >
                        {/* Overlay to improve readability */}
                        <div className="absolute inset-0 bg-primary opacity-70"></div>

                        {/* <div className="relative z-10">
                            <h4 className="text-2xl font-bold mb-2">How to Book An Appointment:</h4>
                            <p className="text-gray-200 mb-4">
                                For more information about our comprehensive treatment options, or to request an appointment with the Best Homeopathic Doctor in Lucknow, call{" "}
                                <span className="font-bold">+91-76672 38292</span> or click on the button below for online booking.
                            </p>
                            <Link to={"https://chandanhospital.in/BookAppoinment/Appointment?DoctorId=DR00157"} target="_blank">
                                <button className="bg-white text-[#4A6F8F] px-6 py-3 rounded-lg font-semibold shadow-md transition hover:bg-gray-200">
                                    Book Appointment
                                </button>
                            </Link>
                        </div> */}
                    </div>



                </div>


                <div className="md:w-3/4 w-full ml-auto pl-4">
                    <img src={image} alt="" className="h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[480px]" />
                    <div >

                        <div className="bg-blue-100 p-4 rounded-lg relative z-10">
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

                            <h2 className="text-xl font-semibold text-gray-800">About TB & Chest Diseases</h2>
                            <p className="text-gray-700 mt-2">
                                Tuberculosis (TB) is a serious infectious disease that primarily affects the lungs. It is caused by the bacteria <i>Mycobacterium tuberculosis</i>. Chest diseases include a range of respiratory conditions that can impact breathing and lung health.   Tuberculosis (TB) is a serious infectious disease that primarily affects the lungs. It is caused by the bacteria <i>Mycobacterium tuberculosis</i>. Chest diseases include a range of respiratory conditions that can impact breathing and lung health.   Tuberculosis (TB) is a serious infectious disease that primarily affects the lungs. It is caused by the bacteria <i>Mycobacterium tuberculosis</i>. Chest diseases include a range of respiratory conditions that can impact breathing and lung health.   Tuberculosis (TB) is a serious infectious disease that primarily affects the lungs. It is caused by the bacteria <i>Mycobacterium tuberculosis</i>. Chest diseases include a range of respiratory conditions that can impact breathing and lung health.
                            </p>
                        </div>

                        <div>
                            <div className="p-4 mt-4 ">
                                <h2 className="text-xl font-semibold text-gray-800">Causes</h2>
                                <ul className="text-gray-700 mt-2 space-y-1">
                                    <li className="flex items-center gap-2">
                                        <BiCheck className="text-green-600" size={20} /> Exposure to TB bacteria
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <BiCheck className="text-green-600" size={20} /> Weakened immune system
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <BiCheck className="text-green-600" size={20} /> Smoking and air pollution
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <BiCheck className="text-green-600" size={20} /> Chronic respiratory infections
                                    </li>
                                </ul>
                            </div>

                            <div className="px-4 mt-2">
                                <h2 className="text-xl font-semibold text-gray-800">Treatment</h2>
                                <p className="text-gray-700 mt-2">
                                    Treatment involves long-term medication, homeopathic remedies, and lifestyle changes. A holistic approach, including proper nutrition and stress management, can aid recovery.
                                </p>
                            </div>
                        </div>

                        <div className="bg-purple-100 p-4 rounded-lg mt-4">
                            <h2 className="text-xl font-semibold text-gray-800">Dr. Priyanka Maurya</h2>
                            <p className="text-gray-700 mt-2">
                                Dr. Priyanka Maurya is a renowned homeopathic doctor specializing in TB & Chest diseases. With years of experience, she provides personalized treatments and holistic care to help patients recover naturally.
                            </p>
                        </div>
                    </div>
                </div>



            </div>
        </section>
    )
}

export default ServiceDetail