import React from 'react';
import image from '../../assets/logo/socailwork.jpg'
import Button from '../../component/Button';
import logo from '../../assets/logo/socialworkbg.png'
import video from '../../assets/bjp/socailwork.mp4'

const BjpSocailWork = () => {
  return (
    <section className='py-10 sm:py-12 md:py-14 lg:py-16 bg-gray-100'>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row-reverse  items-center lg:items-start  rounded-xl overflow-hidden">
          {/* Left Side - Image */}
          <div className="w-full lg:w-1/2 ">
            {/* <img
            src={image}
            alt="Dr. Priyanka Maurya"
            className="w-full h-full object-cover"
          /> */}
            <video
              data-aos="fade-up"
              className="object-cover h-[40rem] w-full"
              src={video}
              autoPlay
              loop
              muted
              playsInline
            />
          </div>

          {/* Right Side - Content */}
          <div className="w-full lg:w-2/3 px-6 lg:px-8 text-[#201654] space-y-6 ">
            <div className='flex items-end h-fit gap-6'>
              <img src={logo} alt="bjplogo" className='w-30 h-30 object-cover' />
              <h4 className="text-xl font-semibold text-[#A6182E] text-end ">"Meet Dr. Priyanka Maurya" - BJP Socail Worker</h4>

            </div>




            {/* About Section */}
            <section>
              <h1 className="font-bold text-[#201654] mb-4">
                BJP Leader & Member of Uttar Pradesh Women's Commission
              </h1>
              <p className="leading-relaxed mb-2">
                Dr. Priyanka Maurya, a prominent homeopathic physician, social worker, and BJP leader, has been appointed by the <strong>Yogi Adityanath</strong> government of Uttar Pradesh as a member of the state’s Women’s Commission. She gained attention for her role in the Congress campaign <strong>"Ladki Hoon, Lad Sakti Hoon"</strong> during the 2022 assembly elections but later left Congress due to internal party conflicts. After joining BJP, Dr. Maurya has been an advocate for various candidates and causes, with a particular focus on <strong>Women’s empowerment</strong>.
              </p>

              <p className="leading-relaxed">
                With over <strong>10 years of experience</strong> in social service, Dr. Maurya has been a dedicated contributor to numerous initiatives. She is the founder of <strong>"Neki Ki Deewar"</strong> in Lucknow, a project designed to support the underprivileged. Furthermore, she serves as the National Coordinator for <strong>Roti Bank</strong> and is the National Vice President of the Shambhuka Foundation.
              </p>
              <div className='pt-6'>
                <Button text={"View More Detail"} />
              </div>

            </section>




          </div>
        </div>
      </div>
    </section>
  );
};

export default BjpSocailWork;
