import React from "react";

const CommissionActivities = () => {
  const activities = [
    {
      title: "Whatsapp Number Facility",
      description: "After the formation of the new Commission, as per the instructions of the Hon'ble Chairman, with the objective of taking prompt action on the complaint applications received in the Commission and their prompt disposal, on 29.08.2018, the facility of Whatsapp Number (6306511708) was created in the Commission and circulated. The aggrieved women from various districts of the state are sending their complaint applications to the Commission quickly and very easily. The Commission takes immediate cognizance of the complaint applications received through Whatsapp related to women harassment and orders the competent officers of the concerned district for investigation/necessary action and prompt action is ensured on them."
    },
    {
      title: "Regular Hearing at the Commission Headquarters",
      description: "With the objective of taking prompt action on the complaint applications received through various mediums in the Commission and to provide justice to the aggrieved women, on all the working days of the week, as per the instructions of the Hon'ble Chairman, separate days are fixed for the Hon'ble Members and the cases are heard on the fixed days and disposed of quickly."
    },
    {
      title: "Field Public Hearing (First and Third Wednesday of Every Month)",
      description: "For prompt redressal of complaints related to harassment of women of the state, Hon'ble officers of the Commission organize programs of on-site public hearing in all the districts of the state on the first and third Wednesday of every month. The cases of applicants present in the public hearing are resolved by hearing them in the presence of the administrative officers of the district, officers of the police department, women police station in-charge, and district officers of various departments related to women."
    },
    {
      title: "Inspection of Various Homes Operating in Different Districts",
      description: "Hon'ble officers of the Commission inspect the girls' homes, women's hospitals, women's prisons and various homes related to women operating in different districts and instruct the concerned officers to remove the deficiencies noticed and suggestions/recommendations are also sent to the government as per the need."
    }
  ];

  return (
    <section className="py-10 sm:py-12 md:py-14 lg:py-16 bg-white">
    <div className="">
      <h1 className="text-2xl font-bold text-center text-purple-700 mb-4">Activities of the Commission</h1>
      <div className="max-w-4xl mx-auto bg-white p-6 shadow-lg rounded-lg">
        {activities.map((activity, index) => (
          <div key={index} className="mb-6">
            <h3 className="text-lg font-semibold text-black ">{index + 1}. {activity.title}:-</h3>
            <p className="text-gray-700 mt-1 text-justify">{activity.description}</p>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default CommissionActivities;
