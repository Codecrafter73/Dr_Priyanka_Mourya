import React from "react";

const CallToAction = () => {
	return (
		<section className="ezy__cta2 light relative overflow-hidden py-10 bg-[#A6182E]">
			<div className="container relative px-4">
				<div className="grid grid-cols-12 justify-center text-center text-white">
					<div className="col-span-12 lg:col-span-6 lg:col-start-4 mx-auto">
						<div className="lg:px-16">
							<h3 className="text-2xl md:text-[45px] leading-none font-bold mb-6 text-white">
								Did you know?
							</h3>
							<p className="text-lg leading-6 mb-12">
								Good health is the greatest treasure,  
								With homeopathy, feel the pleasure!  
								Find the best care, don’t delay,  
								Book your appointment today!
							</p>
							<button
								type="submit"
								className="bg-white text-black py-3 px-7 rounded transition"
							>
								Book Appointment Now
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CallToAction;
