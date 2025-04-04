
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
          <Route path="/country/bahrain" element={<BahrainCountry />} />
          <Route path="/destination/:destinationSlug" element={<DestinationPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
