
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DestinationRecommender from "@/components/DestinationRecommender";

const RecommenderPage = () => {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1000"
              alt="Destination Recommender Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-heading">Destination Recommender</h1>
            <p className="max-w-2xl mx-auto text-lg text-travel-sand-light">
              Find your perfect virtual travel experience based on your preferences,
              interests, and travel style.
            </p>
          </div>
        </section>
        <DestinationRecommender />
      </main>
      <Footer />
    </>
  );
};

export default RecommenderPage;
