import React, { useEffect } from "react";
import PropTypes from "prop-types";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";


const faqList = [
	{
		isActive: true,
		question: "What services does Dr. Priyanka Maurya Homeopathy Clinic provide?",
		answer:
			"Dr. Priyanka Maurya Homeopathy Clinic offers specialized homeopathic treatments for various health concerns, including gynecology, pediatrics, nervous disorders, and more.",
	},
	{
		isActive: false,
		question: "Where is Dr. Priyanka Maurya Homeopathy Clinic located?",
		answer:
			"Dr. Priyanka Maurya Homeopathy Clinic is located at UGF3, Pratap Plaza, Sector B, LDA Colony, Lucknow, Uttar Pradesh, India.",
	},
	{
		isActive: false,
		question: "What are the contact details for Dr. Priyanka Maurya Homeopathy Clinic?",
		answer:
			"You can reach Dr. Priyanka Maurya for consultations and inquiries at 7667238292.",
	},
	{
		isActive: false,
		question: "What medical conditions does Dr. Priyanka Maurya treat?",
		answer:
			"The clinic provides expert care for various conditions including Obs & Gynecology, Nervous Disorders, Pediatrics, TB & Chest, Orthopedics, ENT issues, Gall & Kidney problems, Urology, Dental problems, and Cardiac Complaints.",
	},
	{
		isActive: false,
		question: "Do you offer online consultations?",
		answer:
			"Yes, we offer online consultations to ensure accessibility and convenience for patients seeking homeopathic treatment.",
	},
	{
		isActive: false,
		question: "What makes Dr. Priyanka Maurya Homeopathy Clinic unique?",
		answer:
			"Dr. Priyanka Maurya provides personalized homeopathic treatments, focusing on holistic healing and long-term wellness solutions tailored to individual needs.",
	},
	{
		isActive: false,
		question: "How can I book a consultation?",
		answer:
			"You can book a consultation by calling 7667238292 or visiting our clinic at UGF3, Pratap Plaza, Sector B, LDA Colony, Lucknow, Uttar Pradesh.",
	},
];

const FaqItem = ({ faq }) => {
	const [isOpen, setIsOpen] = React.useState(faq.isActive);

	const toggleFaq = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className={`${isOpen && "active"} bg-primary rounded-lg mt-6`}>
			<a
				href="#!"
				className="btn p-4 lg:px-6 pb-4 w-full text-start flex justify-between items-center cursor-pointer text-white"
				onClick={toggleFaq}
			>
				<span>{faq.question}</span>
				{isOpen ? <FaChevronUp /> : <FaChevronDown />}
			</a>
			<div className={`${isOpen ? "block" : "hidden"} px-4 lg:px-6 pt-2 pb-2`}>
				<p className="text-white">{faq.answer}</p>
			</div>
		</div>
	);
};

FaqItem.propTypes = {
	faq: PropTypes.object.isRequired,
};

const AboutFaq = () => {
	return (
		<section className="py-10 sm:py-12 md:py-14 lg:py-16 bg-gray-100 text-black overflow-y-hidden">
			<div className="container px-4 md:px-8 lg:px-28 mx-auto">
				<div className="grid grid-cols-12 justify-center md:mb-6" data-aos="zoom-in">
					<div className="col-span-12 lg:col-span-8 lg:col-start-3 xl:px-12 flex items-center justify-center flex-col">
						<h1 className=" text-center">
							Frequently Asked Questions
						</h1>
						{/* <SVGICON /> */}
					</div>
				</div>

				<div className="grid grid-cols-12 gap-0 md:gap-6 ">
					<div className="col-span-12 md:col-span-6 border-red-500">
						{faqList.slice(0, Math.floor(faqList.length / 2)).map((faq, i) => (
							<FaqItem faq={faq} key={i} />
						))}
					</div>
					<div className="col-span-12 md:col-span-6">
						{faqList.slice(Math.floor(faqList.length / 2), faqList.length).map((faq, i) => (
							<FaqItem faq={faq} key={i} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutFaq;
