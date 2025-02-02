import React from 'react';
import { BsMegaphone } from 'react-icons/bs';
import { FaLayerGroup, FaUserSecret } from 'react-icons/fa';
import { GiLightBulb } from 'react-icons/gi';
import logo from '../../assets/bjp/bjplogo.png'
import pattern from '../../assets/pattern/pattern11.jpg'

const BjpCarrer = () => {
    return (
        <section className="relative bg-white z-10">
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
            <section className="py-10">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className='flex items-end h-fit gap-6'>
                            <img src={logo} alt="bjplogo" className='w-30 h-30 object-cover' />
                            <h3 className="bg-gradient-to-r from-orange-600 via-orange-500 to-yellow-400 bg-clip-text text-transparent text-xl md:text-2xl lg:text-4xl font-bold leading-tight text-start md:text-center">
                                Dr. Priyanka Maurya - Political Career Journey
                            </h3>

                        </div>
                    </div>

                    <ul className="max-w-3xl mx-auto mt-16 space-y-12">
                        <li className="relative flex items-start">
                            <div className="-ml-0.5 absolute mt-0.5 top-14 left-8 w-px border-l-4 border-dotted border-gray-300 h-full" aria-hidden="true"></div>

                            <div className="relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-white rounded-full shadow">
                                <FaUserSecret className="w-10 h-10 text-orange-600" />
                            </div>
                            <div className="ml-6">
                                <h3 className="text-lg font-semibold text-black">Entry into Politics</h3>
                                <p className="mt-4 text-base text-gray-600">
                                    Dr. Priyanka Maurya began her political journey with a vision to empower women and uplift marginalized communities. With a strong background in social work and public service, she actively participated in grassroots movements advocating for better healthcare and education policies.
                                </p>
                            </div>
                        </li>

                        <li className="relative flex items-start">
                            <div className="-ml-0.5 absolute mt-0.5 top-14 left-8 w-px border-l-4 border-dotted border-gray-300 h-full" aria-hidden="true"></div>

                            <div className="relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-white rounded-full shadow">
                                <FaLayerGroup className="w-10 h-10 text-orange-600" />
                            </div>
                            <div className="ml-6">
                                <h3 className="text-lg font-semibold text-black">Association with BJP</h3>
                                <p className="mt-4 text-base text-gray-600">
                                    Dr. Priyanka Maurya officially joined the Bharatiya Janata Party (BJP) to contribute to Prime Minister Narendra Modi's vision of "Sabka Saath, Sabka Vikas." She played a key role in various party campaigns, focusing on women’s empowerment and social justice initiatives.
                                </p>
                            </div>
                        </li>

                        <li className="relative flex items-start">
                            <div className="-ml-0.5 absolute mt-0.5 top-14 left-8 w-px border-l-4 border-dotted border-gray-300 h-full" aria-hidden="true"></div>

                            <div className="relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-white rounded-full shadow">
                                <BsMegaphone className="w-10 h-10 text-orange-600" />
                            </div>
                            <div className="ml-6">
                                <h3 className="text-lg font-semibold text-black">Leadership and Campaigns</h3>
                                <p className="mt-4 text-base text-gray-600">
                                    As a prominent BJP leader, Dr. Maurya has led multiple awareness campaigns and public rallies addressing key issues like women’s safety, health reforms, and education for underprivileged children. Her efforts have been recognized at both state and national levels.
                                </p>
                            </div>
                        </li>

                        <li className="relative flex items-start">
                            <div className="relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-white rounded-full shadow">
                                <GiLightBulb className="w-10 h-10 text-orange-600" />
                            </div>
                            <div className="ml-6">
                                <h3 className="text-lg font-semibold text-black">Future Vision</h3>
                                <p className="mt-4 text-base text-gray-600">
                                    Dr. Priyanka Maurya envisions a stronger, self-reliant India where every citizen, especially women and youth, have equal opportunities. She continues to work towards policies that support economic growth, education, and healthcare advancements in the country.
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </section>
    );
};

export default BjpCarrer;
