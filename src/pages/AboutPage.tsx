
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-grow">
        <div className="bg-swargayatraa-blue py-16">
          <div className="container mx-auto px-4 text-center text-white">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">About Swargayatraa</h1>
            <p className="text-xl max-w-3xl mx-auto">Compassionate care during life's most difficult moments</p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="prose max-w-none">
                <h2 className="text-2xl font-semibold text-swargayatraa-purple mb-6">Our Mission</h2>
                <p className="mb-4">
                  At Swargayatraa, our mission is to provide dignified and compassionate funeral services to families during their time of grief. We understand that losing a loved one is one of life's most challenging experiences, and we are committed to easing this burden by offering professional support with empathy and care.
                </p>
                
                <h2 className="text-2xl font-semibold text-swargayatraa-purple mt-8 mb-6">Our Story</h2>
                <p className="mb-4">
                  Swargayatraa was founded with a deep understanding of the emotional and logistical challenges families face when dealing with the loss of a loved one. Our founders recognized the need for a service that not only handles the practical aspects of funeral arrangements but does so with genuine compassion and cultural sensitivity.
                </p>
                
                <p className="mb-4">
                  What began as a small family-operated service has grown into a trusted name across major Indian cities, including Bangalore, Mumbai, Delhi, and beyond. Despite our growth, we remain committed to our core values of dignity, respect, and personalized care for each family we serve.
                </p>
                
                <h2 className="text-2xl font-semibold text-swargayatraa-purple mt-8 mb-6">Our Approach</h2>
                <p className="mb-4">
                  We take a holistic approach to funeral services, addressing both the practical and emotional needs of grieving families:
                </p>
                
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>24/7 availability to respond promptly to your needs</li>
                  <li>Comprehensive services including transportation, cremation, burial, and ritual arrangements</li>
                  <li>Respect for diverse religious and cultural traditions</li>
                  <li>Transparent pricing with no hidden costs</li>
                  <li>Guidance through administrative procedures and documentation</li>
                  <li>Emotional support throughout the process</li>
                </ul>
                
                <h2 className="text-2xl font-semibold text-swargayatraa-purple mt-8 mb-6">Our Presence</h2>
                <p className="mb-4">
                  Swargayatraa now serves families across 11 major cities in India, with dedicated teams in Bangalore, Hyderabad, Pune, Mumbai, Delhi, Kolkata, Ahmedabad, Lucknow, Chennai, Jaipur, and Chandigarh. Within each city, we operate in numerous localities to ensure prompt and efficient service delivery.
                </p>
                
                <p className="mb-4">
                  Our network of crematoriums, burial grounds, and transport services allows us to provide seamless assistance regardless of your location. We continue to expand our presence to reach more families in need of compassionate funeral support.
                </p>
                
                <h2 className="text-2xl font-semibold text-swargayatraa-purple mt-8 mb-6">Our Commitment</h2>
                <p className="mb-4">
                  At Swargayatraa, we are committed to being a pillar of support during your time of need. We pledge to handle each aspect of the funeral process with utmost dignity, respect, and professionalism, allowing you to focus on honoring your loved one's memory and beginning the healing process.
                </p>
                
                <p className="mb-6">
                  Our team remains available 24/7 to assist you with compassionate guidance and support. We consider it our duty and privilege to help families navigate through one of life's most difficult journeys with dignity and peace.
                </p>
              </div>
            </div>
            
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
