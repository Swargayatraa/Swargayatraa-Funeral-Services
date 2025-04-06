
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { getServiceBySlug, getCityBySlug, getAreaBySlug, services, cities } from '@/services/locationData';

const AreaServicePage = () => {
  const { serviceSlug, citySlug, areaSlug } = useParams<{ 
    serviceSlug: string;
    citySlug: string;
    areaSlug: string;
  }>();
  
  const service = serviceSlug ? getServiceBySlug(serviceSlug) : undefined;
  const city = citySlug ? getCityBySlug(citySlug) : undefined;
  const area = citySlug && areaSlug ? getAreaBySlug(citySlug, areaSlug) : undefined;
  
  // If required data not found, show error
  if (!service || !city || !area) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-12">
          <h1 className="text-2xl font-bold text-red-600">Page not found</h1>
          <p className="mt-4">
            The service, city, or area you're looking for doesn't exist or hasn't been added to our database yet.
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
              {service.name} in {area.name}, {city.name} – 24/7 Funeral Support
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Compassionate support during your time of grief
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="prose max-w-none">
                <p className="text-lg mb-6">
                  Swargayatraa offers compassionate and dignified {service.name.toLowerCase()} in {area.name}, {city.name} with 24/7 professional support. During your time of grief, our experienced team is ready to assist you with all funeral arrangements, ensuring a peaceful farewell for your loved one.
                </p>
                
                <h2 className="text-2xl font-semibold text-swargayatraa-blue mt-10 mb-4">
                  Why Choose Swargayatraa for {service.name} in {area.name}, {city.name}
                </h2>
                
                <p className="mb-4">
                  At Swargayatraa, we understand that losing a loved one is one of life's most difficult experiences. Our dedicated team in {area.name}, {city.name} provides professional support with empathy and care, guiding you through every step of the funeral process during this challenging time.
                </p>
                
                <p className="mb-4">
                  Our compassionate staff offers immediate emergency assistance, available 24 hours a day, 7 days a week. We take care of all arrangements with attention to detail and respect for your cultural and religious traditions, allowing you to focus on honoring your loved one's memory without the burden of logistics.
                </p>
                
                <h2 className="text-2xl font-semibold text-swargayatraa-blue mt-10 mb-4">
                  Comprehensive {service.name} in {area.name}, {city.name}
                </h2>
                
                <p className="mb-4">
                  Our {service.name.toLowerCase()} in {area.name}, {city.name} includes complete end-to-end support for families in their time of need. We arrange for the dignified transport of the deceased, provide freezer box facilities when needed, and coordinate with local crematoriums or burial grounds to secure timely slots for the final rites.
                </p>
                
                <p className="mb-4">
                  Swargayatraa handles all necessary documentation and permits required by local authorities. We arrange for traditional ritual items (samagri) and can provide pandit services for performing the last rites according to your religious customs and family traditions.
                </p>
                
                <p className="mb-4">
                  The {area.name} area is well-supported by nearby cremation facilities, and our team has established relationships with these facilities to ensure smooth arrangements during your difficult time.
                </p>
                
                <h2 className="text-2xl font-semibold text-swargayatraa-blue mt-10 mb-4">
                  Key Features of Our Funeral Services in {area.name}
                </h2>
                
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Immediate assistance and slot booking for cremation or burial</li>
                  <li>Traditional ritual arrangements and pandit services</li>
                  <li>Dead body freezer box facilities on rental basis</li>
                  <li>Ambulance and transportation services throughout {city.name}</li>
                  <li>Complete assistance with documentation and permits</li>
                  <li>Funeral home and event coordination for memorial services</li>
                  <li>Floral arrangements and ritual materials (samagri)</li>
                  <li>Post-funeral guidance and support for families</li>
                </ul>
                
                <h2 className="text-2xl font-semibold text-swargayatraa-blue mt-10 mb-4">
                  Serving Families Across {city.name} with Compassion
                </h2>
                
                <p className="mb-4">
                  While we provide dedicated {service.name.toLowerCase()} in {area.name}, {city.name}, our team also extends support to families in neighboring localities. Our mobile teams can quickly reach any part of {city.name} to provide immediate assistance in your time of need.
                </p>
                
                <p className="mb-4">
                  Also available in {city.areas.filter(a => a.slug !== area.slug).slice(0, 3).map(a => a.name).join(', ')}, and other areas across {city.name}. No matter where in {city.name} you are located, Swargayatraa is ready to serve with compassion and dignity.
                </p>
                
                <h2 className="text-2xl font-semibold text-swargayatraa-blue mt-10 mb-4">
                  Contact Swargayatraa for {service.name} in {area.name}, {city.name}
                </h2>
                
                <p className="mb-4">
                  In your time of grief, remember that compassionate, professional {service.name.toLowerCase()} in {area.name}, {city.name} is just a call away with Swargayatraa. Our 24/7 support team is ready to assist you with all funeral arrangements, providing guidance and comfort when you need it most.
                </p>
                
                <p className="mb-6">
                  Contact us immediately for dignified funeral services that honor your loved one's memory with respect and care. Our team in {area.name}, {city.name} is standing by to provide the support you need during this difficult time.
                </p>
                
                <div className="bg-swargayatraa-lightblue/20 p-6 rounded-lg my-8">
                  <h3 className="text-xl font-semibold text-swargayatraa-blue mb-4">Other Services in {area.name}, {city.name}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {services
                      .filter(s => s.slug !== service.slug)
                      .slice(0, 6)
                      .map(otherService => (
                        <Link
                          key={otherService.slug}
                          to={`/services/${otherService.slug}/${city.slug}/${area.slug}`}
                          className="bg-white p-3 rounded shadow-sm hover:bg-swargayatraa-lightblue/50 transition-colors text-swargayatraa-blue hover:text-swargayatraa-purple"
                        >
                          {otherService.name} in {area.name}
                        </Link>
                      ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <ContactForm />
              
              <div className="bg-swargayatraa-cream p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-swargayatraa-purple mb-4">
                  {service.name} in Other Areas of {city.name}
                </h3>
                
                <div className="grid grid-cols-2 gap-2">
                  {city.areas
                    .filter(a => a.slug !== area.slug)
                    .slice(0, 10)
                    .map(otherArea => (
                      <div key={otherArea.slug} className="bg-white p-3 rounded text-center hover:bg-swargayatraa-lightblue transition-colors">
                        <Link 
                          to={`/services/${service.slug}/${city.slug}/${otherArea.slug}`}
                          className="text-swargayatraa-blue hover:text-swargayatraa-purple"
                        >
                          {otherArea.name}
                        </Link>
                      </div>
                    ))}
                </div>
                
                <h3 className="text-xl font-semibold text-swargayatraa-purple mt-6 mb-4">
                  {service.name} in Other Cities
                </h3>
                
                <div className="grid grid-cols-2 gap-2">
                  {cities
                    .filter(c => c.slug !== city.slug)
                    .slice(0, 6)
                    .map(otherCity => (
                      <div key={otherCity.slug} className="bg-white p-3 rounded text-center hover:bg-swargayatraa-lightblue transition-colors">
                        <Link 
                          to={`/services/${service.slug}?city=${otherCity.slug}`}
                          className="text-swargayatraa-blue hover:text-swargayatraa-purple"
                        >
                          {otherCity.name}
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

export default AreaServicePage;
