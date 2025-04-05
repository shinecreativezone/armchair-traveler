import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Index from "./pages/Index";
import RecommenderPage from "./pages/RecommenderPage";
import CountriesPage from "./pages/CountriesPage";
import CountryPage from "./pages/CountryPage";
import DestinationPage from "./pages/DestinationPage";
import FestivalsPage from "./pages/FestivalsPage";
import NotFound from "./pages/NotFound";
import BahrainCountry from "./pages/countries/BahrainCountry";
import AfghanistanCountry from "./pages/countries/AfghanistanCountry";
import AlbaniaCountry from "./pages/countries/AlbaniaCountry";
import AlgeriaCountry from "./pages/countries/AlgeriaCountry";
import AndorraCountry from "./pages/countries/AndorraCountry";
import AngolaCountry from "./pages/countries/AngolaCountry";
import AntiguaAndBarbudaCountry from "./pages/countries/AntiguaAndBarbudaCountry";
import ArmeniaCountry from "./pages/countries/ArmeniaCountry";
import ArgentinaCountry from "./pages/countries/ArgentinaCountry";
import AustraliaCountry from "./pages/countries/AustraliaCountry";
import AustriaCountry from "./pages/countries/AustriaCountry";
import AzerbaijanCountry from "./pages/countries/AzerbaijanCountry";
import BrazilCountry from "./pages/countries/BrazilCountry";
import CanadaCountry from "./pages/countries/CanadaCountry";
import DenmarkCountry from "./pages/countries/DenmarkCountry";
import EgyptCountry from "./pages/countries/EgyptCountry";
import FranceCountry from "./pages/countries/FranceCountry";
import GermanyCountry from "./pages/countries/GermanyCountry";
import BahamasCountry from "./pages/countries/BahamasCountry";
import BangladeshCountry from "./pages/countries/BangladeshCountry";
import BarbadosCountry from "./pages/countries/BarbadosCountry";
import BelarusCountry from "./pages/countries/BelarusCountry";
import BelgiumCountry from "./pages/countries/BelgiumCountry";
import BelizeCountry from "./pages/countries/BelizeCountry";
import BeninCountry from "./pages/countries/BeninCountry";
import BhutanCountry from "./pages/countries/BhutanCountry";
import BoliviaCountry from "./pages/countries/BoliviaCountry";
import BosniaAndHerzegovinaCountry from "./pages/countries/BosniaAndHerzegovinaCountry";
import BotswanaCountry from "./pages/countries/BotswanaCountry";
import BruneiCountry from "./pages/countries/BruneiCountry";
import BulgariaCountry from "./pages/countries/BulgariaCountry";
import BurkinaFasoCountry from "./pages/countries/BurkinaFasoCountry";
import BurundiCountry from "./pages/countries/BurundiCountry";
import CaboVerdeCountry from "./pages/countries/CaboVerdeCountry";
import CambodiaCountry from "./pages/countries/CambodiaCountry";
// Note: Import additional country components as they are created

// Create a client
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <HashRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/recommender" element={<RecommenderPage />} />
            <Route path="/countries" element={<CountriesPage />} />
            <Route path="/festivals" element={<FestivalsPage />} />
            <Route path="/country/:countrySlug" element={<CountryPage />} />
            
            {/* Individual country routes */}
            <Route path="/country/afghanistan" element={<AfghanistanCountry />} />
            <Route path="/country/albania" element={<AlbaniaCountry />} />
            <Route path="/country/algeria" element={<AlgeriaCountry />} />
            <Route path="/country/andorra" element={<AndorraCountry />} />
            <Route path="/country/angola" element={<AngolaCountry />} />
            <Route path="/country/antigua-and-barbuda" element={<AntiguaAndBarbudaCountry />} />
            <Route path="/country/argentina" element={<ArgentinaCountry />} />
            <Route path="/country/armenia" element={<ArmeniaCountry />} />
            <Route path="/country/australia" element={<AustraliaCountry />} />
            <Route path="/country/austria" element={<AustriaCountry />} />
            <Route path="/country/azerbaijan" element={<AzerbaijanCountry />} />
            <Route path="/country/bahamas" element={<BahamasCountry />} />
            <Route path="/country/bahrain" element={<BahrainCountry />} />
            <Route path="/country/bangladesh" element={<BangladeshCountry />} />
            <Route path="/country/barbados" element={<BarbadosCountry />} />
            <Route path="/country/belarus" element={<BelarusCountry />} />
            <Route path="/country/belgium" element={<BelgiumCountry />} />
            <Route path="/country/belize" element={<BelizeCountry />} />
            <Route path="/country/benin" element={<BeninCountry />} />
            <Route path="/country/bhutan" element={<BhutanCountry />} />
            <Route path="/country/bolivia" element={<BoliviaCountry />} />
            <Route path="/country/bosnia-and-herzegovina" element={<BosniaAndHerzegovinaCountry />} />
            <Route path="/country/botswana" element={<BotswanaCountry />} />
            <Route path="/country/brazil" element={<BrazilCountry />} />
            <Route path="/country/brunei" element={<BruneiCountry />} />
            <Route path="/country/bulgaria" element={<BulgariaCountry />} />
            <Route path="/country/burkina-faso" element={<BurkinaFasoCountry />} />
            <Route path="/country/burundi" element={<BurundiCountry />} />
            <Route path="/country/cabo-verde" element={<CaboVerdeCountry />} />
            <Route path="/country/cambodia" element={<CambodiaCountry />} />
            <Route path="/country/canada" element={<CanadaCountry />} />
            <Route path="/country/denmark" element={<DenmarkCountry />} />
            <Route path="/country/egypt" element={<EgyptCountry />} />
            <Route path="/country/france" element={<FranceCountry />} />
            <Route path="/country/germany" element={<GermanyCountry />} />
            {/* More country routes will be added as their components are created */}
            
            <Route path="/destination/:destinationSlug" element={<DestinationPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </HashRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
