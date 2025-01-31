import React from 'react';
import image from '../../assets/bjp/bjp1.jpg';
import Button from '../../component/Button';
import logo from '../../assets/bjp/bjplogo.png'

const BjpPriyanka = () => {
  return (
    <section className='py-10 sm:py-12 md:py-14 lg:py-16'>
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row items-center lg:items-start  rounded-xl overflow-hidden">
        {/* Left Side - Image */}
        <div className="w-full lg:w-1/2">
          <img
            src={image}
            alt="Dr. Priyanka Maurya"
            className="w-full h-full object-cover"
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
              Dr. Priyanka Maurya, a renowned homeopathic physician, social worker, and BJP leader, has been appointed by the <strong>Yogi Adityanath</strong> government of Uttar Pradesh as a member of the state’s Women Commission. She is known for her significant role in the Congress campaign <strong>"Ladki Hoon, Lad Sakti Hoon"</strong>    during the 2022 assembly elections but later parted ways with Congress due to internal party issues. Since joining BJP, she has been actively campaigning for various candidates and causes, especially <strong>Women's empowerment</strong>.
            </p>
          
            <p className="leading-relaxed">
              Dr. Maurya has more than <strong>10 years of experience</strong> in social service and is actively involved in numerous social initiatives. She is the founder of <strong>"Neki Ki Deewar"</strong> in Lucknow, an initiative aimed at helping the underprivileged. She is also the National Coordinator for <strong>Roti Bank and National Vice</strong> President of the Shambhuka Foundation.
            </p>
            {/* <p className="text-lg leading-relaxed">
              Despite her busy political career, Dr. Maurya continues to serve as a highly respected homeopathic doctor, offering free consultations during the COVID-19 pandemic. She has been recognized with several prestigious awards, including the RedFM Achievers Award (2021) and Women of Excellence Award (2020).
            </p> */}
      
  
          </section>

               
          <Button text={"Know More About "}/>

          {/* Career Section */}
  

          {/* Women's Commission Section */}
          {/* <section>
            <h2 className="text-2xl font-semibold mb-2">Women's Commission Role</h2>
            <p className="text-lg leading-relaxed">
              As a member of the Uttar Pradesh Women's Commission, Dr. Maurya is dedicated to resolving women's issues, especially domestic violence, which she believes remains one of the biggest challenges women face today.
            </p>
          </section> */}



        </div>
      </div>
    </div>
    </section>
  );
};

export default BjpPriyanka;
