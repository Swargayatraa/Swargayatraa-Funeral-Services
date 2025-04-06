
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const services = [
  { name: 'Funeral Services', path: '/services/funeral-services' },
  { name: 'Cremation Services', path: '/services/cremation-services' },
  { name: 'Electric Cremation Services', path: '/services/electric-cremation-services' },
  { name: 'Wood Cremation Services', path: '/services/wood-cremation-services' },
  { name: 'Burial Services', path: '/services/burial-services' },
  { name: 'Dead Body Transportation by Air', path: '/services/transportation-by-air' },
  { name: 'Dead Body Transportation by Road', path: '/services/transportation-by-road' },
  { name: 'Post Funeral Rituals', path: '/services/post-funeral-rituals' },
  { name: 'Pandit for Funeral Services', path: '/services/pandit-services' },
  { name: 'Hearse Van Services', path: '/services/hearse-van-services' },
  { name: 'Freezer Box Rental Services', path: '/services/freezer-box-rental' },
];

const cities = [
  { name: 'Bangalore', path: '/cities/bangalore' },
  { name: 'Hyderabad', path: '/cities/hyderabad' },
  { name: 'Pune', path: '/cities/pune' },
  { name: 'Mumbai', path: '/cities/mumbai' },
  { name: 'Delhi', path: '/cities/delhi' },
  { name: 'Kolkata', path: '/cities/kolkata' },
  { name: 'Ahmedabad', path: '/cities/ahmedabad' },
  { name: 'Lucknow', path: '/cities/lucknow' },
  { name: 'Chennai', path: '/cities/chennai' },
  { name: 'Jaipur', path: '/cities/jaipur' },
  { name: 'Chandigarh', path: '/cities/chandigarh' },
];

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

const MainNavigation = () => {
  return (
    <header className="bg-swargayatraa-blue text-white py-4 shadow-md">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <div className="flex items-center mb-4 md:mb-0">
          <Link to="/">
            <h1 className="text-2xl font-semibold">Swargayatraa</h1>
            <span className="text-sm ml-2">Funeral Services</span>
          </Link>
        </div>
        
        <NavigationMenu className="max-w-none w-full justify-end">
          <NavigationMenuList className="gap-1">
            <NavigationMenuItem>
              <Link to="/" className={navigationMenuTriggerStyle({ className: "bg-transparent text-white hover:bg-swargayatraa-lightblue/20 hover:text-white" })}>
                Home
              </Link>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent text-white hover:bg-swargayatraa-lightblue/20 hover:text-white">Services</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {services.map((service) => (
                    <ListItem 
                      key={service.path}
                      title={service.name}
                      href={service.path}
                    >
                      Professional {service.name.toLowerCase()} with dignity and compassion
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent text-white hover:bg-swargayatraa-lightblue/20 hover:text-white">Cities</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {cities.map((city) => (
                    <ListItem 
                      key={city.path}
                      title={city.name}
                      href={city.path}
                    >
                      Funeral services in {city.name} and surrounding areas
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <Link to="/about" className={navigationMenuTriggerStyle({ className: "bg-transparent text-white hover:bg-swargayatraa-lightblue/20 hover:text-white" })}>
                About Us
              </Link>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <Link to="/contact" className={navigationMenuTriggerStyle({ className: "bg-transparent text-white hover:bg-swargayatraa-lightblue/20 hover:text-white" })}>
                Contact
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        
        <Button variant="outline" className="hidden lg:flex bg-white text-swargayatraa-blue hover:bg-swargayatraa-lightblue hover:text-swargayatraa-blue items-center gap-2 ml-4">
          <Phone size={16} /> 
          <span>+91 8999653202</span>
        </Button>
      </div>
    </header>
  );
};

export default MainNavigation;
