import React from 'react';
import image from '../../../assets/bjp/bjp1.jpg';
import image1 from '../../../assets/Bjp_Social/dr_priyanka_social2.jpg';
import image2 from '../../../assets/Bjp_Social/dr_priyanka_socal3.jpg';
import Button from '../../../component/Button';
import shape1 from '../../../assets/dr-priyanka/shape1.svg'
import shape2 from '../../../assets/dr-priyanka/shape2.svg'
import logo from '../../../assets/bjp/bjplogo.png'
import pattern from '../../../assets/pattern/pattern13.jpg'

const WomenSocialLeaderShip = () => {
    return (
        <section className='py-10 sm:py-12 md:py-14 lg:py-16 bg-gray-100 relative z-10'>
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
                <div className="flex  flex-col-reverse lg:flex-row-reverse items-center lg:items-start  rounded-xl overflow-hidden">
                    {/* Left Side - Image */}
                    <div className="w-full lg:w-1/2 ">
                        <div className="flex justify-center">
                            <div className='max-w-[28rem] w-full aspect-w-4 aspect-h-3 relative sm:mb-5 md:mb-0 sm:mr-16 md:mr-0 lg:mr-20 ' data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="800">
                                <img src={image} className='w-full h-full drop-shadow-[-3px_4px_4px_#808080] relative z-[10]' alt="Main visual" />
                                <img src={image1} alt="Supplementary image" className='w-[60%] z-[20] h-auto hidden lg:block absolute drop-shadow-[0px_5px_6px_#808080] bottom-[-100px] right-[-100px]' />
                                <img src={image2} alt="Supplementary image" className='w-[60%] z-[20] h-auto hidden lg:block absolute drop-shadow-[0px_5px_6px_#808080] bottom-[-100px] left-[0px]' />
                                <img src={shape1} alt="Decorative shape 1" className='w-[28%] h-auto hidden lg:block absolute top-[85px] right-[-80px]' />
                                <img src={shape2} alt="Decorative shape 2" className='w-[26%] h-auto hidden lg:block absolute bottom-[-92px] right-[140px]' />
                            </div>
                        </div>

                    </div>

                    {/* Right Side - Content */}
                    <div className="w-full lg:w-2/3 lg:px-8 text-[#201654] space-y-6 ">
                        <div className='flex items-end h-fit gap-6'>
                            <img src={logo} alt="bjplogo" className='w-30 h-30 object-cover' />
                            <h4 className="text-xl font-semibold text-[#A6182E] text-end text-justify">"नारी शक्ति: बदलाव की नई लहर"</h4>

                        </div>




                        {/* About Section */}
                        <section>
                            <h1 className="font-bold text-[#201654] mb-4">
                                नारी का सम्मान, समाज की पहचान
                            </h1>
                            <p className="leading-relaxed mb-2 font-bold text-[#201654] xl:text-3xl text-lg md:text-2xl">
                                Respect for Women, Identity of Society
                            </p>

                            <p className="leading-relaxed text-justify">
                                Dr. Priyanka Maurya has been a leading voice for <strong>women empowerment</strong>. She was the face of the <strong>"Ladki Hoon, Lad Sakti Hoon"</strong> campaign but later exposed the internal politics of Congress after being denied a ticket unfairly.</p> <p className='text-justify' >She then joined <strong>BJP</strong> and actively contributed to various social causes. A successful homeopathic physician, she is also involved in NGOs like Atal Bharat Trust and Roti Bank, working towards <strong>health, hygiene, and social welfare</strong>
                            </p>
                            <ul className="mt-4 list-disc pl-5 text-justify">
                                <li><strong className='color-primary'>Senior BJP Leader:</strong> Actively campaigning for party candidates and contributing to the party’s mission.</li>
                                <li><strong className='color-primary'>Anti-Drug Awareness Program:</strong> Leading a national initiative in collaboration with Shri Kaushal Kishore, raising awareness about the dangers of drugs.</li>
                                <li><strong className='color-primary'>Road Safety Awareness:</strong> Organizing campaigns in Lucknow to educate the public on road safety and traffic rules.</li>
                                <li><strong>Social Welfare Work:</strong> Engaged with NGOs like Atal Bharat Trust, Roti Bank, and others to support the underprivileged and promote social causes.</li>
                                <li><strong className='color-primary'>Healthcare Initiatives:</strong> Offering free medical consultations during crises like COVID-19 and organizing drives for health and hygiene awareness.</li>
                                <li><strong className='color-primary'>Award Recipient:</strong> Honored with the Women of Excellence Award (2020) and RedFM Achievers Award (2021) for her remarkable contributions.</li>
                            </ul>


                        </section>



                    </div>
                </div>
            </div>
        </section>
    );
};

export default WomenSocialLeaderShip;
