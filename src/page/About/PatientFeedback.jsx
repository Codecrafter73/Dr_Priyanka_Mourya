import { useState } from "react";


const FeedbackComponent=()=> {
  const youtubeLinks = [
    "https://youtu.be/1uJS3vTijmw",
    "https://youtu.be/Nbd-jj5pmjs",
    "https://youtu.be/O7-RS1WmW5c",
    "https://youtu.be/9jd_vUHXemA",
   " https://youtu.be/G4nxJWaNOHg?si=A1w4uMJ4K90nXMt",
   "https://youtu.be/apHOU2wgTpY?si=l2RXe06AOWSVP30W",
   "https://youtu.be/BI49JNkh74Q?si=WNk1A9K0tIPSI73I",
   "https://youtu.be/RepJs40tApI?si=45L9UeREjqgOxvTU"
  ];

  return (
    <section  className="py-10 sm:py-12 md:py-14 lg:py-16 mx-auto">
    <div className="max-w-7xl mx-autorounded-2xl mx-auto">
      <h2 className="text-2xl font-bold  text-center">Patient Feedback</h2>
      <h1 className="text-center w-2/3 mx-auto mb-4">What Our Patient Says</h1>
      <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-4 px-4">
        {youtubeLinks.map((link, index) => (
          <div key={index} className="shadow-md rounded-lg">
            <iframe
              className="w-full h-80 rounded-lg"
              src={link.replace("youtu.be", "www.youtube.com/embed")}
              title={`YouTube Video ${index + 1}`}
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
}


export default FeedbackComponent