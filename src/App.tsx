
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import RecommenderPage from "./pages/RecommenderPage";
import CountriesPage from "./pages/CountriesPage";
import CountryPage from "./pages/CountryPage";
import DestinationPage from "./pages/DestinationPage";
import NotFound from "./pages/NotFound";
import BahrainCountry from "./pages/countries/BahrainCountry";
import AfghanistanCountry from "./pages/countries/AfghanistanCountry";
import AlbaniaCountry from "./pages/countries/AlbaniaCountry";
import AlgeriaCountry from "./pages/countries/AlgeriaCountry";
import AndorraCountry from "./pages/countries/AndorraCountry";
import AngolaCountry from "./pages/countries/AngolaCountry";
import AntiguaAndBarbudaCountry from "./pages/countries/AntiguaAndBarbudaCountry";
// Note: Import additional country components as they are created

// Create a client
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/recommender" element={<RecommenderPage />} />
          <Route path="/countries" element={<CountriesPage />} />
          <Route path="/country/:countrySlug" element={<CountryPage />} />
          
          {/* Individual country routes */}
          <Route path="/country/afghanistan" element={<AfghanistanCountry />} />
          <Route path="/country/albania" element={<AlbaniaCountry />} />
          <Route path="/country/algeria" element={<AlgeriaCountry />} />
          <Route path="/country/andorra" element={<AndorraCountry />} />
          <Route path="/country/angola" element={<AngolaCountry />} />
          <Route path="/country/antigua-and-barbuda" element={<AntiguaAndBarbudaCountry />} />
          <Route path="/country/bahrain" element={<BahrainCountry />} />
          {/* More country routes will be added as their components are created */}
          
          <Route path="/destination/:destinationSlug" element={<DestinationPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
