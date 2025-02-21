import React, { useEffect } from "react";
import Button from "../../component/Button";

import Aos from "aos";

const BjpCTA = () => {
      useEffect(() => {
        Aos.init({
          duration: 2000,
          once: false,
        });
      }, []);
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-gradient-to-b from-gray-600 to-primary">
      {/* Background Video */}
      <video
        data-aos="fade-up"
        className="absolute opacity-25 top-0 left-0 h-full w-full object-cover"
        src={video}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* <div className="container relative px-4 my-auto">
        <div className="grid grid-cols-12 justify-center text-center text-white">
          <div className="col-span-12 lg:col-span-6 lg:col-start-4 mx-auto">
            <div className="lg:px-16">
              <h2 className="text-2xl md:text-[45px] leading-none font-bold mb-6">
                Elevate Your Experience!
              </h2>
              <p className="text-lg leading-6 mb-12">
                Discover our luxurious and reliable elevator solutions, tailored to redefine comfort, safety, and style for your spaces.
              </p>
              <Button text={"Contact Us Today"} />
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default BjpCTA;
