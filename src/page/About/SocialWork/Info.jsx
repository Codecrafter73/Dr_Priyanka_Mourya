import React from "react";

const ImportantInfo = () => {
  return (
    <section className="bg-white py-10 sm:py-12 md:py-14 lg:py-16">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-xl font-bold text-black border-b pb-2">आवश्यक सूचना</h2>
      <ul className="text-black mt-4 space-y-2">
        <li className="text-red-600 font-semibold">
          किसी भी प्रकार की सहायता / परामर्श के लिए कार्यालय दिवसों (सोमवार - शुक्रवार) कार्यालय समय के मध्य दिए हुए दूरभाष नं पर संपर्क करें |
        </li>
        <li>
          <span className="font-bold">कार्यालय दूरभाष नं :</span> <span className="text-red-600">0522 - 2306403</span>
        </li>
        <li>
          <span className="font-bold">कार्यालय फैक्स नं :</span> <span className="text-red-600">0522 - 2728671</span>
        </li>
        <li>
          <span className="font-bold">व्हाट्सएप नं :</span> <span className="text-red-600">6306511708</span>
        </li>
        <li>
          <span className="font-bold">ईमेल :</span> <span className="text-red-600">up.mahilayog@yahoo.com</span>
        </li>
        <li>
          किसी भी आपातकालीन स्थिति में उत्तर प्रदेश सरकार द्वारा संचालित हेल्पलाइन नं <span className="text-red-600">112</span> पर अपनी शिकायत दर्ज करा सकते हैं अथवा निकटतम थाने में संपर्क किया जा सकता है।
        </li>
        <li>
          <span className="font-bold">विशेष सूचना :</span> गोमती नगर, लखनऊ के अतिरिक्त उत्तर प्रदेश के किसी भी अन्य जनपद में कोई भी अन्य शाखा नहीं है।
        </li>
      </ul>
    </div>
    </section>
  );
};

export default ImportantInfo;
