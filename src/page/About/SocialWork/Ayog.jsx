import React from "react";
import ayoImage from "../../../assets/bjp/ayo.jpg";
import firstImage from "../../../assets/socialwork/social3.jpg";
import secondImage from "../../../assets/socialwork/social2.jpg";
import thirdImage from "../../../assets/socialwork/social1.jpg";

const Ayog = () => {
    return (
        <div className="flex justify-center mb-6">
            <img src={ayoImage} alt="Ayog" className="w-2/3 md:w-1/2 rounded-lg shadow-lg" />
        </div>
    );
};

const ComponentOne = () => {
    return (
        <div className="flex flex-col md:flex-row items-center gap-6 p-6 rounded-lg shadow-lg">
            <img src={firstImage} alt="First" className="w-full md:w-1/3 rounded-lg" />
            <div className="md:w-2/3 text-left">
                <h2 className="text-xl font-bold mb-2">Introduction to the Commission</h2>
                <p>
                    Women Commission was formed in 2002 with the objective of redressal of complaints related to harassment of women
                    in the state, advising the government in the development process and taking necessary steps for their empowerment.
                    In the year 2004, Uttar Pradesh State Women Commission Act 2004 came into existence to provide legal basis to the
                    activities of the commission. Thereafter, the commission was reconstituted again in June 2007 by making certain
                    amendments in the Act. Once again on 26 April 2013, the commission was reconstituted by making necessary amendments
                    in the Act.
                </p>
            </div>
        </div>
    );
};

const ComponentTwo = () => {
    return (
        <div className="flex flex-col md:flex-row-reverse items-center gap-6  p-6 rounded-lg shadow-lg">
            <img src={secondImage} alt="Second" className="w-full md:w-1/3 rounded-lg" />
            <div className="md:w-2/3 text-left">
                <h2 className="text-xl font-bold mb-2">Objective of the Commission</h2>
                <ul className="list-disc pl-5">
                    <li>To protect the rights of women's welfare, safety, protection.</li>
                    <li>To continuously strive for the educational, economic and social development of women.</li>
                    <li>To send suggestions and recommendations to the State Government after monitoring for remedial measures
                        related to the constitutional and legal rights given to women.</li>
                </ul>
            </div>
        </div>
    );
};

const ComponentThree = () => {
    return (
        <div className="flex flex-col md:flex-row items-center gap-6  p-6 rounded-lg shadow-lg">
            <img src={thirdImage} alt="Third" className="w-full md:w-1/3 rounded-lg" />
            <div className="md:w-2/3 text-left">
                <h2 className="text-xl font-bold mb-2">Powers of the Commission</h2>
                <ul className="list-disc pl-5">
                    <li>Right to exercise the powers of a civil court to try a suit.</li>
                    <li>To summon.</li>
                    <li>Requesting documents.</li>
                    <li>Obtaining public records.</li>
                    <li>Issuing commissions for examination of evidence and records, etc.</li>
                </ul>
            </div>
        </div>
    );
};

const MainComponent = () => {
    return (
        <section className="bg-gray-100 py-10 sm:py-12 md:py-14 lg:py-6">
            <div className="max-w-7xl mx-auto space-y-6 p-6">
                <Ayog />
                <ComponentOne />
                <ComponentTwo />
                <ComponentThree />
            </div>
        </section>
    );
};

export default MainComponent;
