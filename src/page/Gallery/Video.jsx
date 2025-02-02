import React from "react";
import BreadCums from "../../component/BreadCums";

const youtubeLinks = [
  "https://www.youtube.com/embed/1uJS3vTijmw",
  "https://www.youtube.com/embed/Nbd-jj5pmjs",
  "https://www.youtube.com/embed/O7-RS1WmW5c",
  "https://www.youtube.com/embed/9jd_vUHXemA",
  "https://www.youtube.com/embed/G4nxJWaNOHg",
  "https://www.youtube.com/embed/apHOU2wgTpY",
  "https://www.youtube.com/embed/BI49JNkh74Q",
  "https://www.youtube.com/embed/RepJs40tApI"
];

const Video = () => {
  return (
    <section>
        <BreadCums headText={"Our Video"}/>
    <div className="max-w-7xl mx-auto px-4 py-10">
 
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {youtubeLinks.map((link, index) => (
          <div key={index} className="w-full">
            <iframe
              className="w-full aspect-video rounded-lg shadow-lg"
              src={link}
              title={`YouTube Video ${index + 1}`}
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default Video;
