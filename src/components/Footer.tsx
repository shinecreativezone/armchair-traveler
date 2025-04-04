
import { Link } from "react-router-dom";
import { Globe, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-travel-blue text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <Globe className="h-6 w-6" />
              <span className="text-xl font-bold text-heading">Armchair Traveler</span>
            </Link>
            <p className="text-travel-sand-light max-w-xs">
              Explore the world without leaving home. Travel through stories, images, and virtual experiences.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-travel-sand-light">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-travel-sand-light">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-travel-sand-light">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-travel-sand-light">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4 text-heading">Explore</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/recommender" className="hover:text-travel-sand-light">
                  Destination Recommender
                </Link>
              </li>
              <li>
                <Link to="/countries" className="hover:text-travel-sand-light">
                  Countries
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-travel-sand-light">
                  Collections
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-travel-sand-light">
                  Travel Stories
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4 text-heading">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-travel-sand-light">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-travel-sand-light">
                  Our Mission
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-travel-sand-light">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-travel-sand-light">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4 text-heading">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-travel-sand-light">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-travel-sand-light">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-travel-sand-light">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-travel-sand-light">
                  Content Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-travel-blue-light mt-8 pt-8 text-center text-travel-sand-light">
          <p>© {new Date().getFullYear()} Armchair Traveler. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
