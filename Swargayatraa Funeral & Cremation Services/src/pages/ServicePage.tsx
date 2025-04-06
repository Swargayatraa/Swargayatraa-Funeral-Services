
import React from 'react';
import { useParams, Link, useSearchParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { Card, CardContent } from '@/components/ui/card';
import { getServiceBySlug, cities, services } from '@/services/locationData';

const ServicePage = () => {
  const { serviceSlug } = useParams<{ serviceSlug: string }>();
  const [searchParams] = useSearchParams();
  const cityParam = searchParams.get('city');
  
  const service = serviceSlug ? getServiceBySlug(serviceSlug) : undefined;
  
  // If service not found, show error
  if (!service) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-12">
          <h1 className="text-2xl font-bold text-red-600">Service not found</h1>
          <p className="mt-4">
            The service you're looking for doesn't exist or hasn't been added to our database yet.
          </p>
          <Link to="/" className="text-swargayatraa-blue hover:underline mt-4 inline-block">
            Return to Home
          </Link>
        </main>
        <Footer />
      </div>
    );
  }
  
  // Convert service name to title case
  const serviceTitle = service.name;
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-grow">
        <div className="bg-swargayatraa-blue py-16">
          <div className="container mx-auto px-4 text-center text-white">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{serviceTitle}</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Professional and compassionate {service.name.toLowerCase()} with 24/7 support
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="prose max-w-none">
                <h2 className="text-2xl font-semibold text-swargayatraa-purple mb-6">
                  About Our {serviceTitle}
                </h2>
                
                <p className="mb-6">
                  Swargayatraa provides comprehensive {service.name.toLowerCase()} with dignity and respect. Our experienced team understands the emotional challenges during times of loss and offers professional support to ease the burden on grieving families.
                </p>
                
                <h3 className="text-xl font-semibold text-swargayatraa-blue mt-8 mb-4">
                  What Our {serviceTitle} Include
                </h3>
                
                <p className="mb-4">
                  Our {service.name.toLowerCase()} are designed to provide complete support during your time of need. We handle all aspects of the funeral process with professional care and attention to detail, allowing you to focus on honoring your loved one's memory.
                </p>
                
                <ul className="list-disc pl-6 mb-8 space-y-2">
                  <li>24/7 assistance and immediate response</li>
                  <li>Dignified handling and transportation of the deceased</li>
                  <li>Arrangement of religious ceremonies according to family traditions</li>
                  <li>Guidance through paperwork and legal requirements</li>
                  <li>Coordination with crematoriums or burial grounds</li>
                  <li>Assistance with post-funeral rituals and ceremonies</li>
                </ul>
                
                <h3 className="text-xl font-semibold text-swargayatraa-blue mt-8 mb-4">
                  Cities Where We Offer {serviceTitle}
                </h3>
                
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-8">
                  {cities.map(city => (
                    <div key={city.slug} className="bg-white p-3 rounded shadow-sm hover:shadow-md transition-shadow">
                      <Link
                        to={`/services/${service.slug}?city=${city.slug}`}
                        className={`${cityParam === city.slug ? 'text-swargayatraa-purple font-bold' : 'text-swargayatraa-blue'} hover:text-swargayatraa-purple`}
                      >
                        {city.name}
                      </Link>
                    </div>
                  ))}
                </div>
                
                {cityParam && (
                  <>
                    <h3 className="text-xl font-semibold text-swargayatraa-blue mt-8 mb-4">
                      {serviceTitle} in {cities.find(c => c.slug === cityParam)?.name || ''}
                    </h3>
                    
                    <p className="mb-4">
                      We provide specialized {service.name.toLowerCase()} throughout {cities.find(c => c.slug === cityParam)?.name || ''}, with dedicated teams available 24/7 to assist families in their time of need. Our local knowledge ensures smooth coordination with relevant authorities and facilities.
                    </p>
                    
                    <div className="bg-swargayatraa-cream p-4 rounded-md mb-8">
                      <h4 className="font-semibold mb-2">Popular areas we serve in {cities.find(c => c.slug === cityParam)?.name || ''}:</h4>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                        {cities.find(c => c.slug === cityParam)?.areas.slice(0, 9).map(area => (
                          <Link 
                            key={area.slug}
                            to={`/services/${service.slug}/${cityParam}/${area.slug}`}
                            className="bg-white p-2 rounded text-center text-swargayatraa-blue hover:bg-swargayatraa-lightblue hover:text-swargayatraa-purple transition-colors"
                          >
                            {area.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                )}
                
                <h3 className="text-xl font-semibold text-swargayatraa-blue mt-8 mb-4">
                  Why Choose Swargayatraa for {serviceTitle}
                </h3>
                
                <ul className="list-disc pl-6 mb-8 space-y-2">
                  <li>Experienced team with deep understanding of cultural and religious practices</li>
                  <li>Complete end-to-end support throughout the funeral process</li>
                  <li>Transparent pricing with no hidden costs</li>
                  <li>Professional and dignified handling of all arrangements</li>
                  <li>Immediate response and assistance, available 24/7</li>
                </ul>
                
                <p className="mb-4">
                  During your time of grief, let Swargayatraa handle the logistics so you can focus on what truly matters. Our compassionate team is just a call away, ready to provide the support and guidance you need.
                </p>
              </div>
            </div>
            
            <div className="space-y-8">
              <ContactForm />
              
              <div className="bg-swargayatraa-cream p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-swargayatraa-purple mb-4">
                  Other Services We Offer
                </h3>
                
                <div className="grid grid-cols-1 gap-2">
                  {services
                    .filter(s => s.slug !== service.slug)
                    .slice(0, 8)
                    .map(otherService => (
                      <div key={otherService.slug} className="bg-white p-3 rounded text-center hover:bg-swargayatraa-lightblue transition-colors">
                        <Link 
                          to={`/services/${otherService.slug}${cityParam ? `?city=${cityParam}` : ''}`}
                          className="text-swargayatraa-blue hover:text-swargayatraa-purple"
                        >
                          {otherService.name}
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

export default ServicePage;
