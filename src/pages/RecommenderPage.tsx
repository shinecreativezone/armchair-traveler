
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DestinationRecommender from "@/components/DestinationRecommender";

const RecommenderPage = () => {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-travel-blue text-white py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-heading">Destination Recommender</h1>
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
