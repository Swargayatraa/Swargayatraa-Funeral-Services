
import React from 'react';

interface ServiceContentProps {
  service: string;
  area: string;
  city: string;
}

const ServiceContent: React.FC<ServiceContentProps> = ({ service, area, city }) => {
  return (
    <div className="prose max-w-none">
      <h1 className="text-3xl md:text-4xl font-bold text-swargayatraa-purple mb-6">{service} in {area}, {city} – 24/7 Funeral Support</h1>
      
      <p className="text-lg mb-6">
        Swargayatraa offers compassionate and dignified {service} in {area}, {city} with 24/7 professional support. During your time of grief, our experienced team is ready to assist you with all funeral arrangements, ensuring a peaceful farewell for your loved one.
      </p>
      
      <h2 className="text-2xl font-semibold text-swargayatraa-blue mt-10 mb-4">Why Choose Swargayatraa for {service} in {area}, {city}</h2>
      
      <p className="mb-4">
        At Swargayatraa, we understand that losing a loved one is one of life's most difficult experiences. Our dedicated team in {area}, {city} provides professional support with empathy and care, guiding you through every step of the funeral process during this challenging time.
      </p>
      
      <p className="mb-4">
        Our compassionate staff offers immediate emergency assistance, available 24 hours a day, 7 days a week. We take care of all arrangements with attention to detail and respect for your cultural and religious traditions, allowing you to focus on honoring your loved one's memory without the burden of logistics.
      </p>
      
      <h2 className="text-2xl font-semibold text-swargayatraa-blue mt-10 mb-4">Comprehensive {service} in {area}, {city}</h2>
      
      <p className="mb-4">
        Our {service} in {area}, {city} includes complete end-to-end support for families in their time of need. We arrange for the dignified transport of the deceased, provide freezer box facilities when needed, and coordinate with local crematoriums or burial grounds to secure timely slots for the final rites.
      </p>
      
      <p className="mb-4">
        Swargayatraa handles all necessary documentation and permits required by local authorities, including BBMP documentation in Bangalore areas. We arrange for traditional ritual items (samagri) and can provide pandit services for performing the last rites according to your religious customs and family traditions.
      </p>
      
      <p className="mb-4">
        The {area} area is well-supported by nearby cremation facilities, and our team has established relationships with these facilities to ensure smooth arrangements during your difficult time.
      </p>
      
      <h2 className="text-2xl font-semibold text-swargayatraa-blue mt-10 mb-4">Key Features of Our Funeral Services in {area}</h2>
      
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Immediate assistance and slot booking for cremation or burial</li>
        <li>Traditional ritual arrangements and pandit services</li>
        <li>Dead body freezer box facilities on rental basis</li>
        <li>Ambulance and transportation services throughout {city}</li>
        <li>Complete assistance with documentation and permits</li>
        <li>Funeral home and event coordination for memorial services</li>
        <li>Floral arrangements and ritual materials (samagri)</li>
        <li>Post-funeral guidance and support for families</li>
      </ul>
      
      <h2 className="text-2xl font-semibold text-swargayatraa-blue mt-10 mb-4">Serving Families Across {city} with Compassion</h2>
      
      <p className="mb-4">
        While we provide dedicated {service} in {area}, {city}, our team also extends support to families in neighboring localities. Our mobile teams can quickly reach any part of {city} to provide immediate assistance in your time of need.
      </p>
      
      <p className="mb-4">
        Also available in Rajajinagar, Kengeri, Indiranagar, and other areas across {city}. No matter where in {city} you are located, Swargayatraa is ready to serve with compassion and dignity.
      </p>
      
      <h2 className="text-2xl font-semibold text-swargayatraa-blue mt-10 mb-4">Contact Swargayatraa for {service} in {area}, {city}</h2>
      
      <p className="mb-4">
        In your time of grief, remember that compassionate, professional {service} in {area}, {city} is just a call away with Swargayatraa. Our 24/7 support team is ready to assist you with all funeral arrangements, providing guidance and comfort when you need it most.
      </p>
      
      <p className="mb-6">
        Contact us immediately for dignified funeral services that honor your loved one's memory with respect and care. Our team in {area}, {city} is standing by to provide the support you need during this difficult time.
      </p>
    </div>
  );
};

export default ServiceContent;
