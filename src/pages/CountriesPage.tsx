
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { countriesList, continentsList } from "@/data/destinations";

const CountriesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedContinent, setSelectedContinent] = useState<string | null>(null);
  
  const filteredCountries = countriesList.filter(country => {
    const matchesSearch = country.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });
  
  const groupedByFirstLetter: Record<string, string[]> = {};
  
  filteredCountries.forEach(country => {
    const firstLetter = country.charAt(0).toUpperCase();
    if (!groupedByFirstLetter[firstLetter]) {
      groupedByFirstLetter[firstLetter] = [];
    }
    groupedByFirstLetter[firstLetter].push(country);
  });
  
  const alphabetLetters = Object.keys(groupedByFirstLetter).sort();

  return (
    <>
      <Navbar />
      <main>
        <section className="bg-travel-blue text-white py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-heading">Countries Directory</h1>
            <p className="max-w-2xl mx-auto text-lg text-travel-sand-light">
              Explore our comprehensive guide to countries around the world and their unique destinations.
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 py-8">
          {/* Search and filter */}
          <div className="max-w-lg mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search countries..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          
          {/* Continent filter */}
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            <button
              className={`px-4 py-2 rounded-full ${
                selectedContinent === null
                  ? "bg-travel-blue text-white"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
              onClick={() => setSelectedContinent(null)}
            >
              All
            </button>
            {continentsList.map((continent) => (
              <button
                key={continent}
                className={`px-4 py-2 rounded-full ${
                  selectedContinent === continent
                    ? "bg-travel-blue text-white"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
                onClick={() => setSelectedContinent(continent)}
              >
                {continent}
              </button>
            ))}
          </div>

          {/* Alphabet navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {alphabetLetters.map(letter => (
              <a
                key={letter}
                href={`#section-${letter}`}
                className="w-8 h-8 flex items-center justify-center bg-travel-sand-light rounded-full hover:bg-travel-terracotta hover:text-white transition"
              >
                {letter}
              </a>
            ))}
          </div>

          {/* Countries list */}
          {filteredCountries.length > 0 ? (
            <div>
              {alphabetLetters.map(letter => (
                <div key={letter} id={`section-${letter}`} className="mb-12">
                  <h2 className="text-4xl font-bold mb-6 text-heading border-b pb-2">{letter}</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-3">
                    {groupedByFirstLetter[letter].map(country => (
                      <Link
                        key={country}
                        to={`/country/${country.toLowerCase().replace(/\s+/g, '-')}`}
                        className="py-2 px-4 hover:bg-travel-sand-light rounded-lg transition"
                      >
                        {country}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold mb-2">No countries found</h3>
              <p className="text-gray-600">Try adjusting your search criteria</p>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default CountriesPage;
