
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ServicePage from "./pages/ServicePage";
import CityPage from "./pages/CityPage";
import AreaPage from "./pages/AreaPage";
import AreaServicePage from "./pages/AreaServicePage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          
          {/* Service Pages */}
          <Route path="/services/:serviceSlug" element={<ServicePage />} />
          
          {/* City Pages */}
          <Route path="/cities/:citySlug" element={<CityPage />} />
          
          {/* Area Pages - New */}
          <Route path="/cities/:citySlug/:areaSlug" element={<AreaPage />} />
          
          {/* Area + Service Pages */}
          <Route path="/services/:serviceSlug/:citySlug/:areaSlug" element={<AreaServicePage />} />
          
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
