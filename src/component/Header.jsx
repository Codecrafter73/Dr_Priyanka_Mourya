import React, { useEffect, useRef, useState } from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';
import { MdArrowDropUp } from "react-icons/md";
import { IoMdArrowDropright } from "react-icons/io";
import { Link, useLocation, NavLink, useNavigate } from 'react-router-dom';
import logo from "../assets/logo/DrPriyankaMauryalogo.png";
import { FiMenu, FiX, FiMinus } from 'react-icons/fi';
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';
import { FaSquareThreads } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { MdOutlineHomeWork } from "react-icons/md";
import { FiPlus } from 'react-icons/fi';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const menuRef = useRef();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef();


    const [activeSubDropDown, setActiveSubDropDown] = useState(null);
    const [activeAbout, setActiveAbout] = useState(false)


    const [activeDropdown, setActiveDropdown] = useState(null);
    const [activeSubDropdown, setActiveSubDropdown] = useState(null);
    const navigate = useNavigate()

    const [toogleTreatment, setToogleTreatment] = useState(false)
    const [sideDrop, setSideDrop] = useState(false)

    const [openDropdown, setOpenDropdown] = useState(null);

    const socialLinks = [
        {
            icon: <FaFacebookF />,
            url: "https://www.facebook.com/drpriyankamaurya27/",
            color: "bg-blue-600", // Facebook blue
        },
        {
            icon: <FaInstagram />,
            url: "https://www.instagram.com/drpriyankamaurya27/?hl=en",
            color: "bg-gradient-to-r from-pink-500 to-yellow-500", // Instagram gradient
        },
        {
            icon: <FaYoutube />,
            url: "https://www.youtube.com/@DrPriyankaMauryaHomeopathy",
            color: "bg-red-600", // YouTube red
        },
        // {
        //     icon: <FaLinkedin />,
        //     url: "https://www.linkedin.com/company/ashirwad-vastu-consulting/",
        //     color: "bg-[#007BB6]", // LinkedIn blue
        // },
        {
            icon: <FaSquareThreads />,
            url: `https://www.threads.net/@drpriyankamaurya27`, // Replace with your WhatsApp number
            color: "bg-[#000000]", // WhatsApp green
        },
        {
            icon: <BsTwitterX />,
            url: `https://x.com/dpriyankamaurya?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor`, // Replace with your WhatsApp number
            color: "bg-[#141414]", // WhatsApp green
        },
    ];




    const toggleDropMobiledown = (index) => {
        if (openDropdown === index) {
            setOpenDropdown(null); // Close if the same dropdown is clicked again
        } else {
            setOpenDropdown(index); // Open the clicked dropdown
        }
    };

    const toggleTreatmentDropdown = (isActive) => {
        setActiveDropdown(isActive);
    };

    const toggleTreatmentSubDropdown = (item) => {
        setActiveSubDropDown(activeSubDropDown === item ? null : item);
    };



    const toggleMenu = () => {
        setIsOpen(prevIsOpen => !prevIsOpen);
    };


    const handleLinkClick = () => {

        setActiveDropdown(null);
        setActiveSubDropDown(null);
    };


    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };


    const toogleSideDropDown = () => {
        setSideDrop(true)
    }

    const handletoogleTreatment = () => {
        setToogleTreatment(!toogleTreatment)
    }

    useEffect(() => {
        const handleOutsideClick = (event) => {
            // Check if the click is outside the menu and the dropdown
            if (
                menuRef.current && !menuRef.current.contains(event.target) &&
                dropdownRef.current && !dropdownRef.current.contains(event.target)
            ) {
                setIsOpen(false); // Close the menu
                setActiveDropdown(null); // Reset active dropdown
                setActiveSubDropDown(null); // Reset active sub-dropdown
            }
        };

        // Only add the event listener if the menu is open
        if (isOpen) {
            window.addEventListener('click', handleOutsideClick);
        }

        // Clean up the event listener
        return () => {
            window.removeEventListener('click', handleOutsideClick);
        };
    }, [isOpen]);



    const treatments = [
        {
            name: "Obs & Gynecology",
            hasSubItems: false,
            path: "/service/obs-gynecology"
        },
        {
            name: "Nervous Disorder",
            hasSubItems: false,
            path: "/service/nervous-disorders"
        },
        {
            name: "Pediatrics",
            hasSubItems: false,
            path: "/service/pediatrics"
        },
        {
            name: "TB & Chest",
            hasSubItems: false,
            path: "/service/tb-chest-diseases"
        },
        {
            name: "Orthopedics",
            hasSubItems: false,
            path: "/service/orthopedics"
        },
        {
            name: "Ear, Nose & Throat",
            hasSubItems: false,
            path: "/service/ear-nose-throat"
        },
        {
            name: "Gallbladder & Kidney",
            hasSubItems: false,
            path: "/service/gall-kidney"
        },
        {
            name: "Urology",
            hasSubItems: false,
            path: "/service/urology"
        },
        {
            name: "Dental Problems",
            hasSubItems: false,
            path: "/service/dental-problems"
        },
        {
            name: "Cardiac Complaints",
            hasSubItems: false,
            path: "/service/cardiac-complaints"
        }
    ];



    const aboutItems = [
        {
            name: "Photo Gallery",
            path: "/gallery/photo",
            hasSubItems: false,

        },
        {
            name: " Video Gallery",
            path: "/gallery/video",
            hasSubItems: false,

        },
    ];

    const galleryItems = [
        {
            name: "Photo",
            path: "/about/clinic",
            hasSubItems: false,

        },
        {
            name: "Video",
            path: "/about/doctor",
            hasSubItems: false,

        },
    ];

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'; // Disable scroll
        } else {
            document.body.style.overflow = 'auto';   // Enable scroll
        }
        return () => {
            document.body.style.overflow = 'auto';   // Cleanup on component unmount
        };
    }, [isOpen]);


    return (
        <div>
            {isOpen && <div className="fixed inset-0 bg-[#00072c] opacity-70 z-40" onClick={() => setIsOpen(false)}></div>}
            <div className='flex items-start xl:justify-between  mx-auto border  '>
                <div className='mx-auto '>
                    <Link to="/">
                        <img src={logo} alt="Dr.Priyanka Logo" className='w-[6rem] md:w-[8rem] sm:w-[7rem] lg:w-[8rem] xl:w-[9rem] h-auto object-cover ' />
                    </Link>
                </div>


                <div className=''>
                    <div className="bg-primary text-white py-0 xl:py-1 shadow-lg p-2">
                        <div className="xl:max-w-full mx-auto  flex flex-col md:flex-row px-2  items-center gap-2 md:gap-4">
                            {/* Contact Info Section */}
                            <div className="flex flex-row  sm:flex-row items-center gap-2 lg:gap-6 py-3  ">
                                {/* Phone */}
                                <div className="flex items-center gap-1">
                                    <FaPhoneAlt className="text-sm text-white" />
                                    <a href="tel:917667238292" className="text-xs sm:text-sm lg:text-base font-normal tracking-wide group-hover:text-[#0e2024] transition-colors duration-300 ">
                                        +91 7667238292
                                    </a>
                                </div>

                                {/* Email */}
                                <div className="flex items-center gap-2 group transition-transform duration-300 transform hover:scale-105">
                                    <FaEnvelope className="text-base lg:text-lg text-[#fff] group-hover:text-[#0e2024] transition-colors duration-300" />
                                    <a
                                        href="mailto:shanyaglobal.lko@gmail.com"
                                        className="text-xs sm:text-sm lg:text-base font-normal tracking-wide group-hover:text-[#0e2024] transition-colors duration-300"
                                    >
                                        priyankamaurya27@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex md:hidden lg:flex items-center gap-2 group transition-transform duration-300 transform hover:scale-105">
                                <MdOutlineHomeWork className="text-base lg:text-lg text-[#fff] group-hover:text-[#0e2024] transition-colors duration-300" />
                                <a
                                    href="mailto:shanyaglobal.lko@gmail.com"
                                    className="text-xs sm:text-sm lg:text-base font-normal tracking-wide group-hover:text-[#0e2024] transition-colors duration-300"
                                >
                                     Mon - Sun: 8:00AM - 08:00PM
                                </a>
                            </div>


                        </div>
                    </div>


                    <header className="bg-white text-gray-900  sticky top-0 w-full font-[500]   shadow-lg z-50 ">
                        <div className="relative  ">


                            {/* Desktop Menu */}
                            <nav className="hidden relative lg:flex px-1 py-1 lg:text-[1rem] text-[1.1rem] xl:text-[1.2rem] items-center  lg:justify-around lg:gap-2 xl:gap-8 border border-green-500  pt-4">
                                <Link to="/" className={`relative transition-all duration-300 hover:text-primary ${location.pathname === '/' ? 'text-primary' : ''}`}>
                                    Home
                                    {location.pathname === '/' && <span className="absolute left-0 right-0 bottom-[-3px] h-[2px] bg-primary"></span>}
                                </Link>
                                <Link to="/about/dr-priyanka" className={`relative transition-all duration-300 hover:text-primary ${location.pathname === '/' ? 'text-primary' : ''}`}>
                                    About Dr. Priyanka Maurya
                                    {location.pathname === '/about/dr-priyanka' && <span className="absolute left-0 right-0 bottom-[-3px] h-[2px] bg-primary"></span>}
                                </Link>
                                <Link to="/about/politics" className={`relative transition-all duration-300 hover:text-primary ${location.pathname === '/' ? 'text-primary' : ''}`}>
                                Rajya Mahila Ayog
                                    {location.pathname === '/about/politics' && <span className="absolute left-0 right-0 bottom-[-3px] h-[2px] bg-primary"></span>}
                                </Link>

                                

                                {/* <Link to="/about/politics" className={`relative transition-all duration-300 hover:text-primary ${location.pathname === '/about/politic' ? 'text-primary' : ''}`}>
                                     Bjp Socail Worker
                                    {location.pathname === '/about/politic' && <span className="absolute left-0 right-0 bottom-[-3px] h-[2px] bg-primary"></span>}
                                </Link> */}


                                <div
                                    className="relative "
                                    onMouseEnter={() => setActiveDropdown('treatments')}
                                    onMouseLeave={() => {
                                        setActiveDropdown(null);
                                        setActiveSubDropdown(null);
                                    }}
                                >
                                    <button
                                        className={`flex items-center gap-1 transition-all duration-300 hover:text-primary ${activeDropdown ? 'text-primary' : ''
                                            }`}
                                        style={{ whiteSpace: 'nowrap' }}
                                    >
                                        Our Service
                                        {activeDropdown === null ? <IoMdArrowDropdown /> : <MdArrowDropUp />}
                                    </button>

                                    {activeDropdown === 'treatments' && (
                                        <div className="absolute left-0 bg-white shadow-lg text-[0.9rem] rounded-lg w-[18rem] py-2 z-50 border border-gray-300 transition-transform duration-300 ease-in-out">
                                            {treatments.map((treatment, index) => (
                                                <div
                                                    key={treatment.name}
                                                    className="relative border-b last:border-0"
                                                    onMouseEnter={() => setActiveSubDropdown(treatment.name)}
                                                    onMouseLeave={() => setActiveSubDropdown(null)}
                                                >
                                                    <button
                                                        className="flex justify-between items-center w-full px-4 py-2 hover:bg-gray-100 focus:outline-none"
                                                        onClick={() => {
                                                            if (treatment.hasSubItems) {
                                                                setActiveSubDropdown(treatment.name); // Show sub-items if available
                                                            } else {
                                                                // Navigate to the treatment page directly if no sub-items
                                                                window.location.href = treatment.path; // Or use history.push if using react-router
                                                            }
                                                        }}
                                                    >
                                                        {treatment.name}
                                                        {treatment.hasSubItems && <IoMdArrowDropright />} {/* Only show icon if there are sub-items */}
                                                    </button>

                                                    {/* Sub-dropdown (if applicable) */}
                                                    {activeSubDropdown === treatment.name && treatment.hasSubItems && (
                                                        <div className="absolute left-full top-0 bg-white shadow-lg rounded-lg w-48 z-50">
                                                            {treatment.subItems.map((subItem, subIndex) => (
                                                                <Link
                                                                    key={subItem.name}
                                                                    to={subItem.path}
                                                                    className={`block px-4 py-2 hover:bg-gray-200 ${subIndex !== treatment.subItems.length - 1 ? 'border-b border-gray-300' : ''}`}
                                                                    onClick={() => {
                                                                        setActiveDropdown(null); // Close main dropdown on click
                                                                        setActiveSubDropdown(null); // Close sub-dropdown on click
                                                                    }}
                                                                >
                                                                    {subItem.name}
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                            ))}
                                        </div>

                                    )}
                                </div>

{/* 
                                <Link to="/gallery/photo" className={`relative transition-all duration-300 hover:text-primary ${location.pathname === '/gallery/photo' ? 'text-primary' : ''}`}>
                                    Photo
                                    {location.pathname === '/gallery/photo' && <span className="absolute left-0 right-0 bottom-[-3px] h-[2px] bg-primary"></span>}
                                </Link>

                                <Link to="/gallery/video" className={`relative transNition-all duration-300 hover:text-primary ${location.pathname === '/gallery/video' ? 'text-primary' : ''}`}>
                                    Video
                                    {location.pathname === '/gallery/video' && <span className="absolute left-0 right-0 bottom-[-3px] h-[2px] bg-primary"></span>}
                                </Link> */}


                                <div
                                    className="relative"
                                    onMouseEnter={() => setActiveAbout(!activeAbout)}
                                    onMouseLeave={() => {
                                        setTimeout(() => {
                                            if (!activeDropdown) setActiveAbout(null);
                                        }, 200); // Delay hiding the dropdown
                                    }}
                                >
                                    <button
                                        className={`flex items-center gap-1 transition-all duration-300 hover:text-primary ${activeAbout === 'about' ? 'text-primary' : ''}`}
                                    >
                                        Gallery <IoMdArrowDropdown />
                                    </button>

                                    {/* Dropdown Menu */}
                                    {activeAbout && (
                                        <div className="absolute left-0 bg-white shadow-lg text-[0.9rem] rounded-lg w-[18rem] py-2 z-50 border border-gray-300 transition-transform duration-300 ease-in-out transform-gpu">
                                            {aboutItems.map((treatment) => (
                                                <div
                                                    key={treatment.name}
                                                    className="border-b relative"
                                                    onMouseEnter={() => setActiveSubDropdown(treatment.name)}
                                                    onMouseLeave={() => setActiveSubDropdown(null)}
                                                >
                                                    <button
                                                        className="flex justify-between items-center w-full px-2 py-2 hover:bg-gray-100"
                                                        onClick={() => {
                                                            if (treatment.hasSubItems) {
                                                                setActiveSubDropdown(treatment.name); // Show sub-items if available
                                                            } else {
                                                                // Navigate to the treatment page directly if no sub-items
                                                                window.location.href = treatment.path; // Or use history.push if using react-router
                                                            }
                                                        }}
                                                    >
                                                        {treatment.name}
                                                        {treatment.hasSubItems && <IoMdArrowDropright />} {/* Only show icon if there are sub-items */}
                                                    </button>

                                                    {activeSubDropdown === treatment.name && treatment.hasSubItems && (
                                                        <div className="absolute left-full top-0 bg-white shadow-lg rounded-lg w-48 z-50">
                                                            {treatment.subItems.map((subItem, index) => (
                                                                <Link
                                                                    key={subItem.name}
                                                                    to={subItem.path}
                                                                    className={`block px-4 py-2 hover:bg-gray-200 ${index !== treatment.subItems.length - 1 ? 'border-b border-gray-300' : ''}`}
                                                                    onClick={() => {
                                                                        setActiveDropdown(null); // Close main dropdown on click
                                                                        setActiveSubDropdown(null); // Close sub-dropdown on click
                                                                    }}
                                                                >
                                                                    {subItem.name}
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                <Link to="/testonomial" className={`relative transition-all duration-300 hover:text-primary ${location.pathname === '/testimonial' ? 'text-primary' : ''}`}>
                                    Testimonial
                                    {location.pathname === '/testonomial' && <span className="absolute left-0 right-0 bottom-[-3px] h-[2px] bg-primary"></span>}
                                </Link>

                                <Link
                                    to="/contact"
                                    className={`relative transition-all duration-300 hover:text-primary ${location.pathname === '/contact' ? 'text-primary' : ''}`}
                                    style={{ whiteSpace: 'nowrap' }}
                                >
                                    Contact Us
                                    {location.pathname === '/contact' && <span className="absolute left-0 right-0 bottom-[-3px] h-[2px] bg-primary"></span>}
                                </Link>

                                {/* Social Media Icons Section */}
                                <div className="items-center gap-3 md:hidden flex ">
                                    {socialLinks.map((link, index) => (
                                        <a
                                            key={index}
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`text-white w-8 h-8 flex items-center justify-center rounded-full ${link.color} hover:opacity-80`}
                                            aria-label="Social Media Link"
                                        >
                                            {link.icon}
                                        </a>
                                    ))}
                                </div>


                            </nav>


                            <div className="lg:hidden gap-4 flex items-start justify-around  md:pt-4 ">
                                <button onClick={toggleMenu}>
                                    <FiMenu className="w-6 h-6" />
                                </button>
                                <div className="items-center gap-3 lg:hidden flex xl:flex">
                                    {socialLinks.map((link, index) => (
                                        <a
                                            key={index}
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`text-white w-8 h-8 flex items-center justify-center rounded-full ${link.color} hover:opacity-80`}
                                            aria-label="Social Media Link"
                                        >
                                            {link.icon}
                                        </a>
                                    ))}
                                </div>
                                
                            </div>
                        </div>
                        {sideDrop && (
                            <div
                                className="fixed inset-0 z-40 bg-gray-800 bg-opacity-50 transition-opacity duration-300"
                                onClick={toogleSideDropDown}
                            />
                        )}


                        <div
                            className={`${isOpen ? 'translate-x-0' : '-translate-x-full'
                                } fixed left-0 top-0 h-full w-64 bg-white z-50 shadow-lg transition-transform duration-300 ease-in-out`}
                            style={{ overflowY: 'auto' }} // Enable sidebar scrolling
                        >
                            <div className="flex justify-between items-center p-5 border-b">
                                <span className="text-lg font-semibold">Menu</span>
                                <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
                                    <FiX className="w-8 h-8" />
                                </button>
                            </div>
                            <div className="p-6 space-y-6 text-lg font-medium text-gray-700">
                                <NavLink to="/" className="block hover:text-teal-600" onClick={toggleMenu}>
                                    Home
                                </NavLink>
                                <div
                                    className="relative"
                                    onClick={() => setActiveAbout(!activeAbout)}
                                    onMouseEnter={() => setActiveAbout(!activeAbout)}
                                    onMouseLeave={() => {
                                        setTimeout(() => {
                                            if (!activeDropdown) setActiveAbout(null);
                                        }, 200); // Delay hiding the dropdown
                                    }}
                                >
                                    <button
                                        className={`flex items-center gap-1 transition-all duration-300 hover:text-primary ${activeAbout === 'about' ? 'text-primary' : ''}`}
                                    >
                                        About <IoMdArrowDropdown />
                                    </button>

                                    {/* Dropdown Menu */}
                                    {activeAbout && (
                                        <div className="absolute left-0 bg-white shadow-lg text-[0.9rem] rounded-lg w-[14rem] py-2 z-50 border border-gray-300 transition-transform duration-300 ease-in-out transform-gpu">
                                            {aboutItems.map((treatment) => (
                                                <div
                                                    key={treatment.name}
                                                    className="border-b relative"
                                                    onMouseEnter={() => setActiveSubDropdown(treatment.name)}
                                                    onMouseLeave={() => setActiveSubDropdown(null)}
                                                >
                                                    <button
                                                        className="flex justify-between items-center w-full px-2 py-2 hover:bg-gray-100"
                                                        onClick={() => {
                                                            if (treatment.hasSubItems) {
                                                                setActiveSubDropdown(treatment.name); // Show sub-items if available
                                                            } else {
                                                                // Navigate to the treatment page directly if no sub-items
                                                                window.location.href = treatment.path; // Or use history.push if using react-router
                                                            }
                                                        }}
                                                    >
                                                        {treatment.name}
                                                        {treatment.hasSubItems && <IoMdArrowDropright />} {/* Only show icon if there are sub-items */}
                                                    </button>

                                                    {activeSubDropdown === treatment.name && treatment.hasSubItems && (
                                                        <div className="absolute left-full top-0 bg-white shadow-lg rounded-lg w-48 z-50">
                                                            {treatment.subItems.map((subItem, index) => (
                                                                <Link
                                                                    key={subItem.name}
                                                                    to={subItem.path}
                                                                    className={`block px-4 py-2 hover:bg-gray-200 ${index !== treatment.subItems.length - 1 ? 'border-b border-gray-300' : ''}`}
                                                                    onClick={() => {
                                                                        setActiveDropdown(null); // Close main dropdown on click
                                                                        setActiveSubDropdown(null); // Close sub-dropdown on click
                                                                    }}
                                                                >
                                                                    {subItem.name}
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                <div>
                                    <button
                                        className={`flex items-center gap-1 transition-all duration-300 hover:text-primary ${activeDropdown ? 'text-primary' : ''}`}
                                        style={{ whiteSpace: 'nowrap' }}
                                        onClick={() => handletoogleTreatment()}
                                    >
                                        Our Treatments <IoMdArrowDropdown />
                                    </button>
                                </div>

                                {toogleTreatment && (
                                    <div className="space-y-4">
                                        {treatments.map((treatment, index) => (
                                            <div key={treatment.name} className="border-b pb-2">
                                                <button
                                                    onClick={() => {
                                                        // If treatment has no subItems, navigate directly to its path
                                                        if (!treatment.hasSubItems) {
                                                            navigate(treatment.path); // Replace with your navigation method
                                                        } else {
                                                            toggleDropMobiledown(index); // Toggle dropdown if it has subItems
                                                        }
                                                    }}
                                                    className="w-full text-left  hover:text-teal-600 flex items-center justify-between"
                                                >
                                                    <span>{treatment.name}</span>
                                                    {/* Show plus/minus sign only for items with subItems */}
                                                    {treatment.hasSubItems && (
                                                        <>
                                                            {openDropdown === index ? <FiMinus className="ml-2" /> : <FiPlus className="ml-2" />}
                                                        </>
                                                    )}
                                                </button>

                                                {/* Submenu */}
                                                {openDropdown === index && treatment.hasSubItems && (
                                                    <div className="ml-4 space-y-2 mt-2">
                                                        {treatment.subItems.map((subItem) => (
                                                            <NavLink
                                                                key={subItem.path}
                                                                to={subItem.path}
                                                                className="block hover:text-teal-600"
                                                                onClick={toggleMenu}
                                                            >
                                                                {subItem.name}
                                                            </NavLink>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                )}

                                <NavLink to="/cases" className="block hover:text-teal-600" onClick={toggleMenu}>
                                    Cases
                                </NavLink>



                                <NavLink to="/cases" className="block hover:text-teal-600" onClick={toggleMenu}>
                                    Cases111
                                </NavLink>

                                <NavLink to="/contact" className="block hover:text-teal-600" onClick={toggleMenu}>
                                    Contact Us
                                </NavLink>
                            </div>
                        </div>



                    </header>


                </div>


            </div>







        </div>
    );
};

export default Header;
