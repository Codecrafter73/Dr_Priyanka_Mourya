import React from "react";
import TimeTable from "./TimeTable";
import Button from '../../component/Button'
import pattern from '../../assets/pattern/pattern7.avif'
import AboutFaq from "../../component/Faq";

const timetable = [
    { day: "Monday", time: "10:30 am–1 pm, 6–8 pm" },
    { day: "Tuesday", time: "10:30 am–1 pm, 6–8 pm" },
    { day: "Wednesday", time: "10:30 am–1 pm, 6–8 pm" },
    { day: "Thursday", time: "Closed" },
    { day: "Friday", time: "10:30 am–1 pm, 6–8 pm" },
    { day: "Saturday", time: "10:30 am–1 pm, 6–8 pm" },
    { day: "Sunday", time: "Closed" },
];

const DoctorTimetable = () => {
    return (
        <section className="bg-gray-100 py-10 sm:py-12 md:py-14 lg:py-16 z-10 relative ">
            <div className="flex flex-col lg:flex-row lg:items-start items-center justify-between mx-auto gap-10  max-w-7xl ">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `url(${pattern})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        opacity: 0.6,
                        zIndex: -10,
                    }}
                ></div>
                <div className="lg:max-w-[50%] mx-auto px-4 z-10 ">
                    <h2 className="text-2xl font-bold text-center mb-4">Dr. Priyanka Maurya Homeopathy Clinic</h2>
                    <div className=" shadow-md rounded-lg overflow-hidden">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-200">
                                    <th className="p-3 text-gray-700">Day</th>
                                    <th className="p-3 text-gray-700">Time</th>
                                </tr>
                            </thead>
                            <tbody>
                                {timetable.map((entry, index) => (
                                    <tr key={index} className="border-b border-gray-300">
                                        <td className="p-3 font-semibold">{entry.day}</td>
                                        <td className={`p-3 ${entry.time === "Closed" ? "text-red-500" : "text-green-600"}`}>{entry.time}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="text-center mt-6">
                        <Button text={"Book Appointment"} url={"/contact"} />
                    </div>
                </div>
                <AboutFaq/>
            </div>

        </section>
    );
}

export default DoctorTimetable
