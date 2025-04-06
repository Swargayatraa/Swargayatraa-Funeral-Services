
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { Card, CardContent } from '@/components/ui/card';
import { getCityBySlug, services } from '@/services/locationData';

const CityPage = () => {
  const { citySlug } = useParams<{ citySlug: string }>();
  const city = citySlug ? getCityBySlug(citySlug) : undefined;
  
  // If city not found, show error
  if (!city) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-12">
          <h1 className="text-2xl font-bold text-red-600">City not found</h1>
          <p className="mt-4">
            The city you're looking for doesn't exist or hasn't been added to our database yet.
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
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Funeral Services in {city.name}</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Compassionate and dignified funeral support available 24/7 across {city.name}
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="prose max-w-none">
                <h2 className="text-2xl font-semibold text-swargayatraa-purple mb-6">
                  Our Services in {city.name}
                </h2>
                
                <p className="mb-6">
                  Swargayatraa provides comprehensive funeral services throughout {city.name}, offering compassionate support to families in their time of grief. Our professional team is available 24/7 to assist with all aspects of funeral arrangements, from transportation and documentation to ritual ceremonies and cremation services.
                </p>
                
                <h3 className="text-xl font-semibold text-swargayatraa-blue mt-8 mb-4">
                  Available Services in {city.name}
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {services.map(service => (
                    <Card key={service.slug} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-4">
                        <Link 
                          to={`/services/${service.slug}?city=${city.slug}`}
                          className="text-swargayatraa-blue hover:text-swargayatraa-purple font-medium"
                        >
                          {service.name}
                        </Link>
                        <p className="text-sm text-gray-600 mt-1">
                          {service.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                
                <h3 className="text-xl font-semibold text-swargayatraa-blue mt-8 mb-4">
                  Areas We Serve in {city.name}
                </h3>
                
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-8">
                  {city.areas.map(area => (
                    <div key={area.slug} className="bg-white p-3 rounded shadow-sm hover:shadow-md hover:bg-swargayatraa-lightblue/20 transition-all text-center">
                      <Link 
                        to={`/cities/${city.slug}/${area.slug}`}
                        className="text-swargayatraa-blue hover:text-swargayatraa-purple"
                      >
                        {area.name}
                      </Link>
                    </div>
                  ))}
                </div>
                
                <h3 className="text-xl font-semibold text-swargayatraa-blue mt-8 mb-4">
                  Why Choose Swargayatraa in {city.name}
                </h3>
                
                <ul className="list-disc pl-6 mb-8 space-y-2">
                  <li>24/7 assistance with immediate response</li>
                  <li>Comprehensive funeral services under one roof</li>
                  <li>Experienced team familiar with local regulations and customs</li>
                  <li>Dignified transportation and handling of the deceased</li>
                  <li>Support for paperwork and documentation</li>
                  <li>Arrangement of religious ceremonies as per family traditions</li>
                  <li>Transparent pricing with no hidden costs</li>
                </ul>
                
                <p className="mb-4">
                  During your time of grief, let Swargayatraa handle the logistical aspects of funeral arrangements so you can focus on honoring your loved one's memory. Our compassionate team in {city.name} is just a call away, ready to provide the support you need during this difficult time.
                </p>
              </div>
            </div>
            
            <div className="space-y-8">
              <ContactForm />
              
              <div className="bg-swargayatraa-cream p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-swargayatraa-purple mb-4">
                  Popular Services in {city.name}
                </h3>
                
                <div className="grid grid-cols-1 gap-2">
                  {services.slice(0, 6).map(service => (
                    <div key={service.slug} className="bg-white p-3 rounded text-center hover:bg-swargayatraa-lightblue transition-colors">
                      <Link 
                        to={`/services/${service.slug}?city=${city.slug}`}
                        className="text-swargayatraa-blue hover:text-swargayatraa-purple"
                      >
                        {service.name} in {city.name}
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

export default CityPage;
