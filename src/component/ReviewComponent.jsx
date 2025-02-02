import React, { useEffect } from 'react';

const ReviewComponent = () => {
  useEffect(() => {
    // Dynamically load the Tagembed script
    const script = document.createElement('script');
    script.src = "https://widget.tagembed.com/embed.min.js";
    script.type = "text/javascript";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Clean up the script when the component unmounts
    };
  }, []);


//   <div class="tagembed-widget" style="width:100%;height:100%" data-widget-id="2145663" data-tags="false"  view-url="https://widget.tagembed.com/2145663"></div><script src="https://widget.tagembed.com/embed.min.js" type="text/javascript"></script>



  return (
    <section className='py-10 mx-auto bg-gray-100'>
        <h2 className='text-center mb-4'>What Our Patient Say</h2>
    <div
      className="tagembed-widget max-w-7xl mx-auto "
      style={{ width: '100%', height: '100%' }}
      data-widget-id="2150999"
      data-tags="false"
      view-url="https://widget.tagembed.com/2150999"
      

    ></div>
    </section>
  );
};

export default ReviewComponent;
