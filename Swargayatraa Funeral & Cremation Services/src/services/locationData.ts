// This file contains data for all cities and areas served by Swargayatraa

export interface Area {
  name: string;
  slug: string;
}

export interface City {
  name: string;
  slug: string;
  areas: Area[];
}

export interface Service {
  name: string;
  slug: string;
  description: string;
}

// Services data
export const services: Service[] = [
  {
    name: 'Funeral Services',
    slug: 'funeral-services',
    description: 'Complete funeral arrangements with dignified care and support for grieving families'
  },
  {
    name: 'Cremation Services',
    slug: 'cremation-services',
    description: 'Respectful cremation services following cultural and religious traditions'
  },
  {
    name: 'Electric Cremation Services',
    slug: 'electric-cremation-services',
    description: 'Modern electric cremation with efficient and environmentally conscious practices'
  },
  {
    name: 'Wood Cremation Services',
    slug: 'wood-cremation-services',
    description: 'Traditional wood cremation services following time-honored customs'
  },
  {
    name: 'Burial Services',
    slug: 'burial-services',
    description: 'Dignified burial arrangements with attention to religious and personal preferences'
  },
  {
    name: 'Dead Body Transportation by Air',
    slug: 'transportation-by-air',
    description: 'Safe and compliant air transportation of deceased across cities and international locations'
  },
  {
    name: 'Dead Body Transportation by Road',
    slug: 'transportation-by-road',
    description: 'Reliable and respectful road transportation services for the deceased'
  },
  {
    name: 'Post Funeral Rituals',
    slug: 'post-funeral-rituals',
    description: 'Support for traditional post-funeral ceremonies and observances'
  },
  {
    name: 'Pandit for Funeral Services',
    slug: 'pandit-services',
    description: 'Experienced pandits to perform last rites according to religious customs'
  },
  {
    name: 'Hearse Van Services',
    slug: 'hearse-van-services',
    description: 'Specialized vehicles for dignified transportation of the deceased'
  },
  {
    name: 'Freezer Box Rental Services',
    slug: 'freezer-box-rental',
    description: 'Temperature-controlled preservation facilities available on rental basis'
  }
];

// Bangalore areas - updated with all requested areas
const bangaloreAreas: Area[] = [
  { name: 'Koramangala', slug: 'koramangala' },
  { name: 'Indiranagar', slug: 'indiranagar' },
  { name: 'Whitefield', slug: 'whitefield' },
  { name: 'Jayanagar', slug: 'jayanagar' },
  { name: 'JP Nagar', slug: 'jp-nagar' },
  { name: 'Bannerghatta', slug: 'bannerghatta' },
  { name: 'Electronic City', slug: 'electronic-city' },
  { name: 'Hebbal', slug: 'hebbal' },
  { name: 'Marathahalli', slug: 'marathahalli' },
  { name: 'HSR Layout', slug: 'hsr-layout' },
  { name: 'Yeshwanthpur', slug: 'yeshwanthpur' },
  { name: 'Malleshwaram', slug: 'malleshwaram' },
  { name: 'Rajajinagar', slug: 'rajajinagar' },
  { name: 'Vijayanagar', slug: 'vijayanagar' },
  { name: 'Basavanagudi', slug: 'basavanagudi' },
  { name: 'Banashankari', slug: 'banashankari' },
  { name: 'BTM Layout', slug: 'btm-layout' },
  { name: 'Mahadevapura', slug: 'mahadevapura' },
  { name: 'KR Puram', slug: 'kr-puram' },
  { name: 'Domlur', slug: 'domlur' },
  { name: 'Ulsoor', slug: 'ulsoor' },
  { name: 'Frazer Town', slug: 'frazer-town' },
  { name: 'Cox Town', slug: 'cox-town' },
  { name: 'Shivajinagar', slug: 'shivajinagar' },
  { name: 'RT Nagar', slug: 'rt-nagar' },
  { name: 'Sanjaynagar', slug: 'sanjaynagar' },
  { name: 'Vidyaranyapura', slug: 'vidyaranyapura' },
  { name: 'Sahakara Nagar', slug: 'sahakara-nagar' },
  { name: 'Yelahanka', slug: 'yelahanka' },
  { name: 'Peenya', slug: 'peenya' },
  { name: 'Nagarabhavi', slug: 'nagarabhavi' },
  { name: 'Magadi Road', slug: 'magadi-road' },
  { name: 'Chamarajpet', slug: 'chamarajpet' },
  { name: 'Wilson Garden', slug: 'wilson-garden' },
  { name: 'Seshadripuram', slug: 'seshadripuram' },
  { name: 'Nayandahalli', slug: 'nayandahalli' },
  { name: 'Kengeri', slug: 'kengeri' },
  { name: 'Rajarajeshwari Nagar', slug: 'rajarajeshwari-nagar' },
  { name: 'Uttarahalli', slug: 'uttarahalli' },
  { name: 'Padmanabhanagar', slug: 'padmanabhanagar' },
  { name: 'Kumaraswamy Layout', slug: 'kumaraswamy-layout' },
  { name: 'Arekere', slug: 'arekere' },
  { name: 'Bommanahalli', slug: 'bommanahalli' },
  { name: 'Hennur', slug: 'hennur' },
  { name: 'Horamavu', slug: 'horamavu' },
  { name: 'Ramamurthy Nagar', slug: 'ramamurthy-nagar' },
  { name: 'Kasturi Nagar', slug: 'kasturi-nagar' },
  { name: 'HBR Layout', slug: 'hbr-layout' },
  { name: 'Kammanahalli', slug: 'kammanahalli' },
  { name: 'Bagalagunte', slug: 'bagalagunte' },
  { name: 'Kudlu Gate', slug: 'kudlu-gate' },
  { name: 'Singasandra', slug: 'singasandra' }
];

// Hyderabad areas
const hyderabadAreas: Area[] = [
  { name: 'Banjara Hills', slug: 'banjara-hills' },
  { name: 'Jubilee Hills', slug: 'jubilee-hills' },
  { name: 'Gachibowli', slug: 'gachibowli' },
  { name: 'HITEC City', slug: 'hitec-city' },
  { name: 'Secunderabad', slug: 'secunderabad' },
  { name: 'Kukatpally', slug: 'kukatpally' },
  { name: 'Madhapur', slug: 'madhapur' },
  { name: 'Begumpet', slug: 'begumpet' },
  { name: 'Ameerpet', slug: 'ameerpet' },
  { name: 'Miyapur', slug: 'miyapur' },
  // Add more areas to reach 50
];

// Mumbai areas
const mumbaiAreas: Area[] = [
  { name: 'Andheri', slug: 'andheri' },
  { name: 'Bandra', slug: 'bandra' },
  { name: 'Colaba', slug: 'colaba' },
  { name: 'Dadar', slug: 'dadar' },
  { name: 'Juhu', slug: 'juhu' },
  { name: 'Malad', slug: 'malad' },
  { name: 'Powai', slug: 'powai' },
  { name: 'Worli', slug: 'worli' },
  { name: 'Goregaon', slug: 'goregaon' },
  { name: 'Borivali', slug: 'borivali' },
  // Add more areas to reach 50
];

// Delhi areas
const delhiAreas: Area[] = [
  { name: 'Connaught Place', slug: 'connaught-place' },
  { name: 'South Extension', slug: 'south-extension' },
  { name: 'Dwarka', slug: 'dwarka' },
  { name: 'Greater Kailash', slug: 'greater-kailash' },
  { name: 'Rohini', slug: 'rohini' },
  { name: 'Janakpuri', slug: 'janakpuri' },
  { name: 'Lajpat Nagar', slug: 'lajpat-nagar' },
  { name: 'Rajouri Garden', slug: 'rajouri-garden' },
  { name: 'Punjabi Bagh', slug: 'punjabi-bagh' },
  { name: 'Vasant Kunj', slug: 'vasant-kunj' },
  // Add more areas to reach 50
];

// Define more areas for other cities...

// All cities data
export const cities: City[] = [
  {
    name: 'Bangalore',
    slug: 'bangalore',
    areas: bangaloreAreas
  },
  {
    name: 'Hyderabad',
    slug: 'hyderabad',
    areas: hyderabadAreas
  },
  {
    name: 'Pune',
    slug: 'pune',
    areas: [] // Add Pune areas
  },
  {
    name: 'Mumbai',
    slug: 'mumbai',
    areas: mumbaiAreas
  },
  {
    name: 'Delhi',
    slug: 'delhi',
    areas: delhiAreas
  },
  {
    name: 'Kolkata',
    slug: 'kolkata',
    areas: [] // Add Kolkata areas
  },
  {
    name: 'Ahmedabad',
    slug: 'ahmedabad',
    areas: [] // Add Ahmedabad areas
  },
  {
    name: 'Lucknow',
    slug: 'lucknow',
    areas: [] // Add Lucknow areas
  },
  {
    name: 'Chennai',
    slug: 'chennai',
    areas: [] // Add Chennai areas
  },
  {
    name: 'Jaipur',
    slug: 'jaipur',
    areas: [] // Add Jaipur areas
  },
  {
    name: 'Chandigarh',
    slug: 'chandigarh',
    areas: [] // Add Chandigarh areas
  }
];

// Helper functions
export const getCityBySlug = (slug: string): City | undefined => {
  return cities.find(city => city.slug === slug);
};

export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find(service => service.slug === slug);
};

export const getAreaBySlug = (citySlug: string, areaSlug: string): Area | undefined => {
  const city = getCityBySlug(citySlug);
  if (!city) return undefined;
  return city.areas.find(area => area.slug === areaSlug);
};
