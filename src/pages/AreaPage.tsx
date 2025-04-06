
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { getCityBySlug, getAreaBySlug, services } from '@/services/locationData';

const AreaPage = () => {
  const { citySlug, areaSlug } = useParams<{ 
    citySlug: string;
    areaSlug: string;
  }>();
  
  const city = citySlug ? getCityBySlug(citySlug) : undefined;
  const area = citySlug && areaSlug ? getAreaBySlug(citySlug, areaSlug) : undefined;
  
  // If required data not found, show error
  if (!city || !area) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-12">
          <h1 className="text-2xl font-bold text-red-600">Area not found</h1>
          <p className="mt-4">
            The area you're looking for doesn't exist or hasn't been added to our database yet.
          </p>
          <Link to="/" className="text-swargayatraa-blue hover:underline mt-4 inline-block">
            Return to Home
          </Link>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-grow">
        <div className="bg-swargayatraa-blue py-16">
          <div className="container mx-auto px-4 text-center text-white">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Funeral Services in {area.name}, {city.name}
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              24/7 Compassionate funeral support in {area.name}
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="prose max-w-none">
                <p className="text-lg mb-6">
                  Swargayatraa offers comprehensive funeral services in {area.name}, {city.name} with 24/7 professional and compassionate support. Our experienced team is ready to assist families in {area.name} during their time of loss with complete funeral arrangements.
                </p>
                
                <h2 className="text-2xl font-semibold text-swargayatraa-blue mt-10 mb-4">
                  Our Services in {area.name}, {city.name}
                </h2>
                
                <p className="mb-4">
                  We provide a range of funeral services in {area.name} to support grieving families with dignity and respect. Our team understands the emotional challenges during times of loss and offers professional guidance to ease the burden.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {services.map(service => (
                    <div key={service.slug} className="bg-white p-4 rounded shadow-sm hover:shadow-md transition-shadow">
                      <Link 
                        to={`/services/${service.slug}/${city.slug}/${area.slug}`}
                        className="text-swargayatraa-blue hover:text-swargayatraa-purple font-medium text-lg"
                      >
                        {service.name} in {area.name}
                      </Link>
                      <p className="text-gray-600 mt-2">
                        {service.description} in {area.name}
                      </p>
                    </div>
                  ))}
                </div>
                
                <h2 className="text-2xl font-semibold text-swargayatraa-blue mt-10 mb-4">
                  Why Choose Swargayatraa in {area.name}, {city.name}
                </h2>
                
                <ul className="list-disc pl-6 mb-8 space-y-2">
                  <li>Local team in {area.name} available 24/7 with immediate response</li>
                  <li>Deep understanding of cultural and religious practices in {area.name}</li>
                  <li>Complete end-to-end funeral support throughout the process</li>
                  <li>Transparent pricing with no hidden costs</li>
                  <li>Professional and dignified handling of all arrangements</li>
                  <li>Established relationships with local crematoriums and burial grounds in and around {area.name}</li>
                </ul>
                
                <p className="mb-6">
                  Contact our {area.name} team for immediate assistance with funeral arrangements. We're available 24/7 to provide the compassionate support you need during this difficult time.
                </p>
              </div>
            </div>
            
            <div className="space-y-8">
              <ContactForm />
              
              <div className="bg-swargayatraa-cream p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-swargayatraa-purple mb-4">
                  Our Services in {area.name}
                </h3>
                
                <div className="grid grid-cols-1 gap-2">
                  {services.slice(0, 6).map(service => (
                    <div key={service.slug} className="bg-white p-3 rounded text-center hover:bg-swargayatraa-lightblue transition-colors">
                      <Link 
                        to={`/services/${service.slug}/${city.slug}/${area.slug}`}
                        className="text-swargayatraa-blue hover:text-swargayatraa-purple"
                      >
                        {service.name} in {area.name}
                      </Link>
                    </div>
                  ))}
                </div>
                
                <h3 className="text-xl font-semibold text-swargayatraa-purple mt-6 mb-4">
                  Nearby Areas in {city.name}
                </h3>
                
                <div className="grid grid-cols-2 gap-2">
                  {city.areas
                    .filter(a => a.slug !== area.slug)
                    .slice(0, 8)
                    .map(otherArea => (
                      <div key={otherArea.slug} className="bg-white p-3 rounded text-center hover:bg-swargayatraa-lightblue transition-colors">
                        <Link 
                          to={`/cities/${city.slug}/${otherArea.slug}`}
                          className="text-swargayatraa-blue hover:text-swargayatraa-purple"
                        >
                          {otherArea.name}
                        </Link>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AreaPage;
