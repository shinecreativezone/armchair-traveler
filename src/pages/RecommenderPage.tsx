
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DestinationRecommender from "@/components/DestinationRecommender";

const RecommenderPage = () => {
  return (
    <>
      <Navbar />
      <main className="pb-12">
        <DestinationRecommender />
      </main>
      <Footer />
    </>
  );
};

export default RecommenderPage;
