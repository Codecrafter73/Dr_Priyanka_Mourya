import React from 'react'
import BreadCums from '../../component/BreadCums'
import ContactSection from './ContactSection'

const ContactPage = () => {
  return (
    <section>
        <BreadCums headText={"Contact Page"}/>
           <ContactSection/>
               {/* map section */}
               <div className="">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.382497483522!2d80.898302!3d26.795946899999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfb042d623d8f%3A0x2f6761648c20102f!2sDr.%20Priyanka%20Maurya%20Homeopathy%20Clinic!5e0!3m2!1sen!2sin!4v1738154814655!5m2!1sen!2sin"
                    width="100%" height="450" className="border-0 rounded-lg shadow-lg"
                    allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Clinic Location">
                </iframe>
            </div>
    </section>
  )
}

export default ContactPage