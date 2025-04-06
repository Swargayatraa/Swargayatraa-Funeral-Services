import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-swargayatraa-blue text-white pt-10 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-xl font-semibold mb-4">Swargayatraa</h3>
            <p className="mb-4">Providing compassionate funeral services with dignity and respect during your time of need.</p>
            <div className="flex items-center gap-2 mb-2">
              <Phone size={16} />
              <span>+91 8999653202</span>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <Mail size={16} />
              <span>support@swargayatraa.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>Serving all of Bangalore</span>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-swargayatraa-lightblue transition-colors">Cremation Services</a></li>
              <li><a href="#" className="hover:text-swargayatraa-lightblue transition-colors">Burial Services</a></li>
              <li><a href="#" className="hover:text-swargayatraa-lightblue transition-colors">Transportation</a></li>
              <li><a href="#" className="hover:text-swargayatraa-lightblue transition-colors">Documentation Help</a></li>
              <li><a href="#" className="hover:text-swargayatraa-lightblue transition-colors">Ritual Arrangements</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Available 24/7</h3>
            <div className="flex items-center gap-2 mb-4">
              <Clock size={16} />
              <span>Emergency assistance available day and night</span>
            </div>
            <p className="mb-4">We understand that loss can occur at any time. Our compassionate team is always ready to provide immediate support.</p>
            <div className="bg-white text-swargayatraa-blue font-bold py-2 px-4 rounded text-center">
              Call us anytime: +91 8999653202
            </div>
          </div>
        </div>
        
        <div className="border-t border-swargayatraa-lightblue/30 mt-8 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Swargayatraa Funeral Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
