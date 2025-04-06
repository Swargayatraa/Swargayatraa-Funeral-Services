
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-grow">
        <div className="bg-swargayatraa-blue py-16">
          <div className="container mx-auto px-4 text-center text-white">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Swargayatraa</h1>
            <p className="text-xl max-w-3xl mx-auto">We're here for you 24/7 - reach out anytime for immediate assistance</p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold text-swargayatraa-purple mb-6">Reach Out to Us</h2>
              <p className="mb-6 text-gray-700">
                We understand that during times of grief, reaching out for help can be difficult. Our compassionate team is available 24 hours a day, 7 days a week to provide immediate assistance and guidance.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="bg-swargayatraa-lightblue/30 p-3 rounded-full">
                    <Phone className="text-swargayatraa-blue h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-swargayatraa-blue text-lg">24/7 Helpline</h3>
                    <p className="text-gray-700">Our support team is available around the clock</p>
                    <p className="font-semibold text-lg mt-1">+91 8999653202</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-swargayatraa-lightblue/30 p-3 rounded-full">
                    <Mail className="text-swargayatraa-blue h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-swargayatraa-blue text-lg">Email Support</h3>
                    <p className="text-gray-700">For inquiries and non-urgent matters</p>
                    <p className="font-semibold mt-1">support@swargayatraa.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-swargayatraa-lightblue/30 p-3 rounded-full">
                    <Clock className="text-swargayatraa-blue h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-swargayatraa-blue text-lg">Hours of Operation</h3>
                    <p className="text-gray-700">Emergency services are available at all times</p>
                    <p className="font-semibold mt-1">24 hours a day, 7 days a week</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-swargayatraa-lightblue/30 p-3 rounded-full">
                    <MapPin className="text-swargayatraa-blue h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-swargayatraa-blue text-lg">Service Locations</h3>
                    <p className="text-gray-700">We provide services in the following cities:</p>
                    <div className="mt-2">
                      <p>Bangalore • Hyderabad • Pune • Mumbai • Delhi</p>
                      <p>Kolkata • Ahmedabad • Lucknow • Chennai • Jaipur • Chandigarh</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <h2 className="text-2xl font-semibold text-swargayatraa-purple mb-4 mt-8">Our Promise</h2>
              <p className="text-gray-700">
                When you contact Swargayatraa, we promise to respond with compassion, respect, and urgency. Our team understands the sensitivity of your situation and is trained to provide both practical assistance and emotional support during difficult times.
              </p>
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

export default ContactPage;
