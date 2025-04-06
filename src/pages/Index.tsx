
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import ContactForm from '@/components/ContactForm';
import { services, cities } from '@/services/locationData';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-grow">
        <div className="bg-swargayatraa-blue py-16">
          <div className="container mx-auto px-4 text-center text-white">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Compassionate Funeral Services</h1>
            <p className="text-xl max-w-3xl mx-auto">Supporting families with dignity and respect during their time of grief</p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="prose max-w-none">
                <h2 className="text-2xl font-semibold text-swargayatraa-purple mb-6">
                  Our Funeral Services
                </h2>
                
                <p className="mb-6">
                  Swargayatraa provides comprehensive funeral services with dignity and respect. Our experienced team understands the emotional challenges during times of loss and offers professional support to ease the burden on grieving families.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {services.map(service => (
                    <div key={service.slug} className="bg-white p-4 rounded shadow-sm hover:shadow-md transition-shadow">
                      <Link 
                        to={`/services/${service.slug}`}
                        className="text-swargayatraa-blue hover:text-swargayatraa-purple font-medium text-lg"
                      >
                        {service.name}
                      </Link>
                      <p className="text-gray-600 mt-2">
                        {service.description}
                      </p>
                    </div>
                  ))}
                </div>
                
                <h2 className="text-2xl font-semibold text-swargayatraa-purple mt-10 mb-6">
                  Cities We Serve
                </h2>
                
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
                  {cities.map(city => (
                    <div key={city.slug} className="bg-white p-4 rounded shadow-sm hover:shadow-md transition-shadow text-center">
                      <Link 
                        to={`/cities/${city.slug}`}
                        className="text-swargayatraa-blue hover:text-swargayatraa-purple font-medium"
                      >
                        {city.name}
                      </Link>
                    </div>
                  ))}
                </div>
                
                <h2 className="text-2xl font-semibold text-swargayatraa-purple mt-10 mb-6">
                  Why Choose Swargayatraa
                </h2>
                
                <ul className="list-disc pl-6 mb-8 space-y-2">
                  <li>24/7 assistance with immediate response</li>
                  <li>Experienced team with deep understanding of cultural and religious practices</li>
                  <li>Complete end-to-end support throughout the funeral process</li>
                  <li>Transparent pricing with no hidden costs</li>
                  <li>Professional and dignified handling of all arrangements</li>
                </ul>
                
                <p className="mb-6">
                  During your time of grief, let Swargayatraa handle the logistics so you can focus on what truly matters. Our compassionate team is just a call away, ready to provide the support and guidance you need.
                </p>
              </div>
            </div>
            
            <div className="space-y-8">
              <ContactForm />
              
              <div className="bg-swargayatraa-cream p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-swargayatraa-purple mb-4">
                  Quick Links
                </h3>
                
                <div className="grid grid-cols-1 gap-2">
                  {services.slice(0, 6).map(service => (
                    <div key={service.slug} className="bg-white p-3 rounded text-center hover:bg-swargayatraa-lightblue transition-colors">
                      <Link 
                        to={`/services/${service.slug}`}
                        className="text-swargayatraa-blue hover:text-swargayatraa-purple"
                      >
                        {service.name}
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

export default Index;
