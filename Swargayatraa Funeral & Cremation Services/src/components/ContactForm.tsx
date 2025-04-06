
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone } from 'lucide-react';

const ContactForm = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold text-swargayatraa-purple mb-4">Contact Us</h3>
      <p className="mb-4 text-gray-700">For immediate assistance, please call our 24/7 support line or fill out this form and we'll contact you promptly.</p>
      
      <div className="bg-swargayatraa-lightblue/30 p-4 rounded-md flex items-center gap-3 mb-6">
        <Phone className="text-swargayatraa-blue" />
        <span className="font-semibold text-swargayatraa-blue">24/7 Helpline: +91 8999653202</span>
      </div>
      
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
          <Input id="name" placeholder="Your Name" />
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
          <Input id="phone" placeholder="Your Phone Number" type="tel" />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email (Optional)</label>
          <Input id="email" placeholder="Your Email Address" type="email" />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">How Can We Help?</label>
          <Textarea id="message" placeholder="Please describe how we can assist you" rows={4} />
        </div>
        
        <Button className="w-full bg-swargayatraa-blue hover:bg-swargayatraa-purple">
          Submit Request
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
