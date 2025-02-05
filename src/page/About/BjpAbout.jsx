import React from 'react';
import image from '../../assets/bjp/bjp1.jpg';
import Button from '../../component/Button';
import logo from '../../assets/bjp/bjplogo.png'
import video from '../../assets/bjp/bgvideo.mp4'

const BjpAbout = () => {
  return (
    <section className='py-10 sm:py-12 md:py-14 lg:py-16 bg-gray-100 relative z-10'>
      <div className="absolute left-0 top-0 w-80 h-80 bg-[#A6182E] opacity-10 rounded-full -z-10">

      </div>
      <div className="absolute right-0 bottom-0 w-80 h-80 bg-green-600 opacity-10 rounded-full -z-10" />
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start  rounded-xl overflow-hidden">
          {/* Left Side - Image */}
          <div className="w-full lg:w-1/2 ">
            {/* <img
            src={image}
            alt="Dr. Priyanka Maurya"
            className="w-full h-full object-cover"
          /> */}
            <video
              data-aos="fade-up"
              className="object-cover h-[40rem] w-full px-4"
              src={video}
              autoPlay
              loop
              muted
              playsInline
            />
          </div>

          {/* Right Side - Content */}
          <div className="w-full lg:w-2/3 px-4 lg:px-8 text-[#201654] space-y-6 ">
            <div className='flex items-end h-fit gap-6'>
              <img src={logo} alt="bjplogo" className='w-30 h-30 object-cover' />
              <h4 className="text-xl font-semibold text-[#A6182E] xl:text-end text-center ">"Meet Dr. Priyanka Maurya" - BJP Socail Worker</h4>

            </div>




            {/* About Section */}
            <section>
              <h1 className="font-bold text-[#201654] mb-4">
                BJP Leader & Member of Uttar Pradesh Women's Commission
              </h1>
              <p className="leading-relaxed mb-2 text-justify">
                Dr. Priyanka Maurya, a renowned homeopathic physician, social worker, and BJP leader, has been appointed by the <strong>Yogi Adityanath</strong> government of Uttar Pradesh as a member of the state’s Women Commission. She is known for her significant role in the Congress campaign <strong>"Ladki Hoon, Lad Sakti Hoon"</strong>    during the 2022 assembly elections but later parted ways with Congress due to internal party issues. Since joining BJP, she has been actively campaigning for various candidates and causes, especially <strong>Women's empowerment</strong>.
              </p>

              <p className="leading-relaxed text-justify">
                Dr. Maurya has more than <strong>10 years of experience</strong> in social service and is actively involved in numerous social initiatives. She is the founder of <strong>"Neki Ki Deewar"</strong> in Lucknow, an initiative aimed at helping the underprivileged. She is also the National Coordinator for <strong>Roti Bank and National Vice</strong> President of the Shambhuka Foundation.
              </p>



            </section>



          </div>
        </div>
      </div>
    </section>
  );
};

export default BjpAbout;
