import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BreadCums from '../../component/BreadCums';

function Testimonials() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const handleLoad = () => setLoading(false);
  const handleError = () => {
    setLoading(false);
    setError(true);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
     }, []);

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'Testinomail' }
];

  return (
    <div>
    
      <BreadCums headText={"What Our Client Say"} items={breadcrumbItems}/>

      {loading && (
        <div className="w-full bg-slate-50 px-1  flex flex-wrap gap-4 justify-center">
          {[...Array(12)].map((_, index) => (
            <div
              key={index}
              className="bg-gray-400 animate-pulse w-80 h-40 rounded-md"
            ></div>
          ))}
        </div>
      )}

      {!error ? (
           <div className="flex justify-center items-center p-4  bg-gray-100">

<iframe
          src="https://widget.tagembed.com/2147211"
          className="w-full min-h-screen my-8 bg-slate-50 px-6"
          onLoad={handleLoad}
          onError={handleError}
          style={loading ? { display: 'none' } : {}}
        ></iframe>
         </div>
      
      ) : (
        <div className="w-full text-center my-8">
          <p className="text-red-500 text-lg font-bold">
            Unable to load testimonials at the moment. Please try again later.
          </p>
        </div>
      )}
    </div>
  );
}

export default Testimonials;