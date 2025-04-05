import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface ContentPageProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

const ContentPage: React.FC<ContentPageProps> = ({ title, subtitle, children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold mb-2">{title}</h1>
            {subtitle && <p className="text-lg text-muted-foreground">{subtitle}</p>}
          </div>
          
          <div className="prose prose-blue max-w-none">
            {children}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ContentPage; 