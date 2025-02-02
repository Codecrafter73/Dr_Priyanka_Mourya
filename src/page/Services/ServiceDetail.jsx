import React, { useEffect, useState } from 'react'
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

// service details image
import chest from '../../assets/service-detail/tb_chest.jpg'
import dental from '../../assets/service-detail/dental_problem.jpg'
import gallkidney from '../../assets/service-detail/gallbalnder.jpg'
import heart from '../../assets/service-detail/heart.jpg'
import nervous from '../../assets/service-detail/nervous.jpg'
import nose from '../../assets/service-detail/nose.jpg'
import orthopedic from '../../assets/service-detail/ortheopedic.jpg'
import pedetric from '../../assets/service-detail/pedriotic.jpg'
import urology from '../../assets/service-detail/urology.jpg'
// import chest from '../../assets/service-detail/servicedetail.jpg'
import gyne from '../../assets/service-detail/gyne_.jpg'
import cardiac from '../../assets/service-detail/cardiac_complaints.jpg'




import { Link, useLocation, useParams } from 'react-router-dom'
import { BiCheck } from 'react-icons/bi'
const ServiceDetail = () => {

    const { serviceSlug } = useParams();  // Get the slug from the URL
    const [activeService, setActiveService] = useState(null)
    const location = useLocation();
    const breadcrumbItems = [
        { label: 'Home', href: '/' },
        { label: 'Service' ,href:'/service'},
        { label: 'Name' }
    ];
    const services = [
        {
            "image1": img1,
            "name": "Obs & Gynecology",
            "para": "Comprehensive care for women's reproductive health and pregnancy issues.",
            "serviceUrl": "/service/obs-gynecology"
        },
        {
            "image1": img2,
            "name": "Nervous Disorder",
            "para": "Treatment for nervous system disorders like headaches, epilepsy, and neuropathy.",
            "serviceUrl": "/service/nervous-disorders"
        },
        {
            "image1": img3,
            "name": "Pediatrics",
            "para": "Complete healthcare, growth monitoring, and treatment of childhood illnesses.",
            "serviceUrl": "/service/pediatrics"
        },
        {
            "image1": img5,
            "name": "TB & Chest",
            "para": "Diagnosis and treatment of tuberculosis, asthma, and lung diseases.",
            "serviceUrl": "/service/tb-chest-diseases"
        },
        {
            "image1": img4,
            "name": "Orthopedics",
            "para": "Specialized care for bone, joint, and muscle-related conditions and treatment",
            "serviceUrl": "/service/orthopedics"
        },
        {
            "image1": img6,
            "name": "Ear, Nose & Throat",
            "para": "Expert treatment for conditions related to the ear, nose, and throat.",
            "serviceUrl": "/service/ear-nose-throat"
        },
        {
            "image1": img7,
            "name": "Gall & Kidney",
            "para": "Management of gallbladder, kidney stones, and urinary tract issues.",
            "serviceUrl": "/service/gall-kidney"
        },
        {
            "image1": img8,
            "name": "Urology",
            "para": "Specialized care for urinary system and reproductive organ disorders.",
            "serviceUrl": "/service/urology"
        },
        {
            "image1": img9,
            "name": "Dental Problems",
            "para": "Diagnosis and treatment of oral health and dental issues.",
            "serviceUrl": "/service/dental-problems"
        },
        {
            "image1": img10,
            "name": "Cardiac Complaints",
            "para": "Comprehensive care for heart-related diseases and conditions",
            "serviceUrl": "/service/cardiac-complaints"
        }
    ];
    


    const serviceDetails = [
        {
            serviceName: "TB & Chest Diseases",
            description: "Tuberculosis (TB) is a serious infectious disease primarily affecting the lungs, caused by the bacteria Mycobacterium tuberculosis. It spreads through the air and can cause persistent coughing, chest pain, fatigue, fever, and night sweats. If left untreated, TB can cause severe lung damage and can be life-threatening. Chest diseases refer to a variety of respiratory conditions such as asthma, pneumonia, and chronic obstructive pulmonary disease (COPD). These conditions affect lung health, causing symptoms like shortness of breath, coughing, and chest discomfort. Early diagnosis and treatment are essential for managing these conditions and preventing further complications. Holistic and medical approaches can support recovery and improve lung function",
            causes: [
                "Exposure to TB bacteria",
                "Weakened immune system",
                "Smoking and air pollution",
                "Chronic respiratory infections"
            ],
            treatment: "Treatment involves long-term medication, homeopathic remedies, and lifestyle changes. A holistic approach, including proper nutrition and stress management, can aid recovery.",
            doctorInfo: "Dr. Priyanka Maurya is a renowned homeopathic doctor specializing in TB & Chest diseases. With years of experience, she provides personalized treatments and holistic care to help patients recover naturally.",
            serviceUrl: "tb-chest-diseases",
            image:chest
        },
        {
            serviceName: "Obs & Gynecology",
            description: "Obs & Gynecology offers comprehensive care for women's reproductive health, addressing a wide range of issues such as pregnancy, menstrual disorders, and hormonal imbalances. The field focuses on providing specialized care for women during all stages of life, from adolescence to menopause and beyond. This includes managing pregnancy, childbirth, and postnatal care, as well as diagnosing and treating conditions like polycystic ovary syndrome (PCOS), endometriosis, fibroids, and irregular menstrual cycles. Hormonal balance is also a key area of focus, as it affects many aspects of a woman’s health, including fertility, mood, skin health, and overall well-being. Personalized, holistic treatment options are used to support women in achieving optimal reproductive health and improving their quality of life",
            causes: [
                "Hormonal imbalances",
                "Genetic factors",
                "Poor lifestyle choices",
                "Reproductive system infections"
            ],
            treatment: "Holistic and homeopathic treatments focusing on restoring hormonal balance and reproductive health through natural remedies and lifestyle changes.",
            doctorInfo: "Dr. Priyanka Maurya offers expert homeopathic care for women's health issues, providing safe and effective treatments for gynecological disorders.",
            serviceUrl: "obs-gynecology",
            image:gyne
        },
        {
            serviceName: "Nervous Disorders",
            description: "Treatment for nervous disorders focuses on addressing a variety of neurological conditions, including migraines, depression, anxiety, and sleep disorders. These conditions can have a profound impact on a person's mental and physical well-being. Homeopathic approaches aim to restore balance in the nervous system by using natural remedies tailored to the individual's specific symptoms and underlying causes. Treatment may involve addressing triggers like stress, nutritional deficiencies, hormonal imbalances, or emotional trauma. The goal is to alleviate symptoms such as headaches, mood swings, sleep disturbances, and fatigue, while promoting overall mental clarity, emotional stability, and restful sleep. A holistic treatment plan supports both short-term relief and long-term healing, helping individuals regain control over their nervous health",
            causes: [
                "Genetic predisposition",
                "Chronic stress",
                "Nutritional deficiencies",
                "Brain chemical imbalances"
            ],
            treatment: "A holistic approach including homeopathic medicine, diet management, and stress reduction techniques to improve nervous system health.",
            doctorInfo: "Dr. Priyanka Maurya specializes in treating nervous disorders with homeopathy, providing relief from chronic neurological conditions.",
            serviceUrl: "nervous-disorders",
            image:nervous
            
        },
        {
            serviceName: "Pediatrics",
            description: "Pediatrics offers specialized healthcare for infants, children, and adolescents, focusing on their growth, development, and disease prevention. Pediatric care includes routine check-ups, immunizations, and screenings to monitor a child’s physical, emotional, and cognitive development. It also addresses common childhood illnesses, such as respiratory infections, allergies, and digestive disorders, while providing guidance on nutrition, healthy lifestyle choices, and managing childhood behavioral concerns. Pediatricians play a critical role in ensuring that children grow and develop in a healthy environment, offering early diagnosis and treatment of medical conditions to promote long-term health. The approach emphasizes preventative care, helping children achieve optimal health and well-being at every stage of their growth",
            causes: [
                "Genetic disorders",
                "Nutritional deficiencies",
                "Infectious diseases",
                "Environmental factors"
            ],
            treatment: "Holistic and homeopathic treatments ensuring safe and natural remedies for children's health conditions.",
            doctorInfo: "Dr. Priyanka Maurya provides expert pediatric care, offering homeopathic solutions for common childhood diseases.",
            serviceUrl: "pediatrics",
            image:pedetric
        },
        {
            serviceName: "TB & Chest Diseases",
            description: "Tuberculosis (TB) is a serious infectious disease that primarily affects the lungs, caused by the bacterium Mycobacterium tuberculosis. It spreads through the air when an infected person coughs or sneezes. Symptoms of TB include a persistent cough, chest pain, weight loss, fever, and night sweats. If left untreated, TB can cause severe lung damage and may be fatal. Chest diseases, on the other hand, include a wide range of respiratory conditions that affect lung function, such as pneumonia, asthma, bronchitis, and chronic obstructive pulmonary disease (COPD). These diseases can lead to breathing difficulties, coughing, wheezing, and a decline in lung health. Timely diagnosis and treatment are essential for managing both TB and other chest diseases, helping to restore lung health and improve overall quality of life",
            causes: [
                "Exposure to TB bacteria",
                "Weakened immune system",
                "Smoking and air pollution",
                "Chronic respiratory infections"
            ],
            treatment: "TB treatment involves long-term medication, homeopathic remedies, and lifestyle changes. Proper nutrition and stress management can aid recovery.",
            doctorInfo: "Dr. Priyanka Maurya specializes in TB & Chest diseases, offering personalized and holistic treatment plans.",
            serviceUrl: "tb-chest-diseases",
            image:chest
        },
        {
            serviceName: "Orthopedics",
            description: "Orthopedics focuses on the diagnosis, treatment, and prevention of musculoskeletal conditions that affect the bones, joints, muscles, tendons, and ligaments. This includes a wide range of issues such as fractures, sprains, arthritis, osteoporosis, and sports injuries. Orthopedic care aims to restore mobility, alleviate pain, and improve the quality of life through both surgical and non-surgical methods. Treatment options may include physical therapy, medication, injections, or surgical procedures depending on the severity of the condition. The goal is to ensure optimal function and recovery, helping individuals regain their strength, mobility, and independence. Orthopedics also emphasizes preventive care to maintain bone and joint health, particularly in older adults and athletes.",
            causes: [
                "Age-related bone deterioration",
                "Injuries and fractures",
                "Arthritis and joint disorders",
                "Postural issues and lifestyle factors"
            ],
            treatment: "Non-invasive homeopathic treatments for joint pain, bone fractures, and musculoskeletal disorders, improving mobility and reducing pain.",
            doctorInfo: "Dr. Priyanka Maurya provides natural orthopedic solutions, focusing on long-term musculoskeletal health without side effects.",
            serviceUrl: "orthopedics",
            image:orthopedic
        },
        {
            serviceName: "Ear, Nose & Throat (ENT)",
            description: "Ear, Nose & Throat (ENT) care provides comprehensive treatment for a wide range of conditions affecting the head and neck, including the ears, nose, sinuses, throat, and vocal cords. This specialized care focuses on both medical and surgical treatments to address issues such as hearing loss, sinus infections, allergies, tonsillitis, sleep apnea, and voice disorders. ENT specialists are trained to diagnose and treat conditions related to balance, swallowing, breathing, and speaking, using a combination of diagnostic tools, medication, and surgical interventions when necessary. Preventive care is also emphasized to maintain ear, nose, and throat health, ensuring individuals can live comfortably and effectively manage these common yet often debilitating conditions",
            causes: [
                "Infections (e.g., ear infections, sinusitis)",
                "Allergies",
                "Environmental factors (e.g., pollutants)",
                "Genetic conditions (e.g., hearing loss)"
            ],
            treatment: "Holistic treatments for common ENT disorders such as ear infections, sinus issues, and throat conditions using homeopathy and natural remedies.",
            doctorInfo: "Dr. Priyanka Maurya specializes in ENT conditions, offering non-invasive treatments that focus on restoring natural health.",
            serviceUrl: "ear-nose-throat",
            image:nose
        },
        {
            serviceName: "Gall & Kidney",
            description: "Gall & Kidney care focuses on the treatment of diseases and conditions related to the gallbladder and kidneys. This includes managing common issues such as gallstones, kidney stones, infections, and inflammation. Gallstones are solid particles that form in the gallbladder and can cause severe pain and blockages, while kidney stones are hard deposits that form in the kidneys, often causing sharp pain and urinary issues. Kidney infections and other related disorders, such as kidney disease and bladder dysfunction, are also addressed. Treatment options vary depending on the severity of the condition and may include lifestyle changes, medication, non-invasive procedures, or surgery. The goal is to restore proper function and alleviate pain while preventing future complications related to the gallbladder and kidneys.",
            causes: [
                "Gallstones",
                "Kidney stones",
                "Infections and inflammation",
                "Genetic disorders"
            ],
            treatment: "A natural approach to treating gallstones, kidney infections, and related conditions using homeopathic remedies and lifestyle changes.",
            doctorInfo: "Dr. Priyanka Maurya provides holistic treatment for gallbladder and kidney diseases, focusing on natural healing methods.",
            serviceUrl: "gall-kidney",
            image:gallkidney
        },
        {
            serviceName: "Urology",
            description: "Urology specializes in the diagnosis and treatment of conditions affecting the urinary system, including the bladder, kidneys, urethra, and prostate. This field addresses a wide range of disorders, such as urinary tract infections (UTIs), kidney stones, bladder dysfunction, incontinence, prostate issues, and other urological diseases. Urologists focus on restoring normal urinary function, relieving symptoms, and preventing complications. Treatment options can include medications, lifestyle changes, minimally invasive procedures, and surgeries, depending on the severity and nature of the condition. Urology also involves managing reproductive health concerns in both men and women, offering holistic care aimed at improving overall urinary and reproductive health.",
            causes: [
                "Urinary tract infections (UTIs)",
                "Kidney stones",
                "Bladder dysfunction",
                "Prostate disorders"
            ],
            treatment: "Natural remedies to treat urological disorders, including homeopathic solutions for UTIs, kidney stones, and prostate health.",
            doctorInfo: "Dr. Priyanka Maurya offers personalized care for urological issues, providing safe and effective treatment options without harsh medications.",
            serviceUrl: "urology",
            image:urology
        },
        {
            serviceName: "Dental Problems",
            description: "Dental care encompasses a wide range of treatments aimed at addressing various oral health issues, including cavities, gum disease, tooth sensitivity, and general oral hygiene concerns. Regular dental check-ups are crucial for detecting early signs of tooth decay, gum inflammation, and other oral health problems. Treatment options range from basic preventive care, such as cleanings and fluoride treatments, to restorative procedures like fillings, root canals, and crowns for damaged teeth. Addressing gum disease involves treatments aimed at reducing inflammation, preventing tooth loss, and restoring gum health. Dental care also includes managing tooth sensitivity and promoting overall oral hygiene to prevent future issues, ensuring long-term dental health and a bright smile.",
            causes: [
                "Poor oral hygiene",
                "Genetic factors",
                "Diet high in sugar and acid",
                "Smoking and tobacco use"
            ],
            treatment: "Homeopathic and natural remedies for oral health, focusing on preventing and treating cavities, gum disease, and improving overall dental hygiene.",
            doctorInfo: "Dr. Priyanka Maurya offers specialized dental treatments using natural methods to promote long-term oral health and hygiene.",
            serviceUrl: "dental-problems",
            image:dental
        },
        {
            serviceName: "Cardiac Complaints",
            description: "Cardiac care focuses on a holistic approach to treating heart-related issues, such as hypertension, arrhythmias, heart disease, and other cardiovascular disorders. This approach combines medical treatments, lifestyle changes, and natural remedies to support heart health and manage conditions like high blood pressure, irregular heartbeats, coronary artery disease, and heart failure. Cardiologists assess risk factors, offer personalized treatment plans, and provide preventive care to improve heart function and reduce the risk of further complications. Treatment may include medication, diet modification, stress management techniques, exercise, and, in some cases, surgical interventions. The aim is to enhance cardiovascular health, reduce symptoms, and prevent long-term damage to the heart, improving overall quality of life",
            causes: [
                "High blood pressure",
                "Cholesterol imbalances",
                "Genetic factors",
                "Unhealthy lifestyle and poor diet"
            ],
            treatment: "Holistic treatments to support heart health, including homeopathy, diet management, and lifestyle changes to reduce the risk of cardiovascular disease.",
            doctorInfo: "Dr. Priyanka Maurya specializes in treating cardiac complaints using natural therapies to improve heart health and manage symptoms effectively.",
            serviceUrl: "cardiac-complaints",
            image:cardiac
        }
    ];


    useEffect(() => {
        window.scrollTo(0, 0);
        const lastSegment = location.pathname.split('/').pop();
        const foundService = serviceDetails.find(service => service?.serviceUrl === lastSegment);
        console.log(foundService);

        if (foundService) {
            setActiveService(foundService);

        }
    }, [location]);






    return (
        <section>
            <BreadCums headText={activeService?.serviceName} items={breadcrumbItems} />

            <div className="flex flex-col-reverse md:flex-row-reverse max-w-7xl mx-auto gap-4 py-6 ">
                <div className="w-full md:w-1/4 shadow-lg p-4 h-fit">
                    <h2 className="text-xl font-bold mb-4">Services</h2>
                    <ul className="space-y-2">
                        {services.map((service) => (
                            <Link to={service?.serviceUrl}>
                            <li
                                key={service.id}
                                className={`flex items-center py-3 px-1 gap-4 cursor-pointer rounded-lg transition duration-300 border border-[#808080] hover:bg-[#808080] z-10 relative bg-gray-100`} >
                                <div
                                    className="absolute inset-0 block"
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
                            </Link>
                        ))}
                    </ul>
                    <div
                        className="w-full bg-primary text-white rounded-lg shadow-lg p-6 mx-auto mt-8 relative overflow-hidden bg-cover bg-center"
                        style={{ backgroundImage: `url(${background}')` }}
                    >
                        {/* Overlay to improve readability */}
                        <div className="absolute inset-0 bg-primary opacity-70"></div>


                    </div>



                </div>


                <div className="md:w-3/4 w-full ml-auto pl-4">
                    <img src={activeService?.image} alt="" className="h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[480px]" />


                    <div>

                        <div className="bg-blue-100 p-4 rounded-lg relative z-10">
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

                            <h2 className=" font-semibold ">{activeService?.serviceName}</h2>
                            <p className="text-gray-700 mt-2 text-justify">
                                {activeService?.description}
                            </p>
                        </div>

                        <div>
                            <div className="p-4 mt-4 ">
                                <h2 className="text-xl font-semibold text-gray-800">Causes</h2>

                                <ul className="text-gray-700 mt-2 space-y-1">
                                    {activeService?.causes && Array.isArray(activeService?.causes) && (
                                        <ul className="text-gray-700 mt-2 space-y-1">
                                            {activeService?.causes.map((val, index) => (
                                                <li className="flex items-center gap-2" key={index}>
                                                    <BiCheck className="text-green-600" size={20} /> {val}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </ul>
                            </div>

                            <div className="px-4 mt-2">
                                <h2 className="text-xl font-semibold text-gray-800">Treatment</h2>
                                <p className="text-gray-700 mt-2">
                                    {activeService?.treatment}
                                </p>
                            </div>
                        </div>

                        <div className="bg-purple-100 p-4 rounded-lg mt-4">
                            <h2 className="text-xl font-semibold text-gray-800">Dr. Priyanka Maurya</h2>
                            <p className="text-gray-700 mt-2">
                                {activeService?.doctorInfo
                                }
                            </p>
                        </div>
                    </div>

                </div>



            </div>
        </section>
    )
}

export default ServiceDetail