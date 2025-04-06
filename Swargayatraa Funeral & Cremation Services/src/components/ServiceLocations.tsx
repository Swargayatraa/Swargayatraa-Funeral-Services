
import React from 'react';

const ServiceLocations = () => {
  return (
    <div className="bg-swargayatraa-cream p-6 rounded-lg">
      <h3 className="text-xl font-semibold text-swargayatraa-purple mb-4">Our Service Areas in Bangalore</h3>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
        <div className="bg-white p-3 rounded text-center hover:bg-swargayatraa-lightblue transition-colors">
          <span>Koramangala</span>
        </div>
        <div className="bg-white p-3 rounded text-center hover:bg-swargayatraa-lightblue transition-colors">
          <span>Indiranagar</span>
        </div>
        <div className="bg-white p-3 rounded text-center hover:bg-swargayatraa-lightblue transition-colors">
          <span>Whitefield</span>
        </div>
        <div className="bg-white p-3 rounded text-center hover:bg-swargayatraa-lightblue transition-colors">
          <span>Jayanagar</span>
        </div>
        <div className="bg-white p-3 rounded text-center hover:bg-swargayatraa-lightblue transition-colors">
          <span>JP Nagar</span>
        </div>
        <div className="bg-white p-3 rounded text-center hover:bg-swargayatraa-lightblue transition-colors">
          <span>Bannerghatta</span>
        </div>
        <div className="bg-white p-3 rounded text-center hover:bg-swargayatraa-lightblue transition-colors">
          <span>Electronic City</span>
        </div>
        <div className="bg-white p-3 rounded text-center hover:bg-swargayatraa-lightblue transition-colors">
          <span>Hebbal</span>
        </div>
        <div className="bg-white p-3 rounded text-center hover:bg-swargayatraa-lightblue transition-colors">
          <span>Marathahalli</span>
        </div>
      </div>
      
      <p className="mt-4 text-center text-gray-600">
        We provide services throughout Bangalore and surrounding areas.
      </p>
    </div>
  );
};

export default ServiceLocations;
