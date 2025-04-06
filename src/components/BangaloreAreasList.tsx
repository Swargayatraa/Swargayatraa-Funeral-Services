
import React from 'react';
import { Link } from 'react-router-dom';
import { getCityBySlug } from '@/services/locationData';

const BangaloreAreasList = () => {
  const bangalore = getCityBySlug('bangalore');
  
  if (!bangalore) {
    return <div>City data not found</div>;
  }
  
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-2xl font-semibold text-swargayatraa-blue mb-6">
        Areas We Serve in Bangalore
      </h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {bangalore.areas.map((area) => (
          <div key={area.slug} className="bg-gray-50 hover:bg-swargayatraa-lightblue transition-colors rounded p-3 text-center">
            <Link 
              to={`/cities/bangalore/${area.slug}`}
              className="text-swargayatraa-blue hover:text-swargayatraa-purple"
            >
              {area.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BangaloreAreasList;
