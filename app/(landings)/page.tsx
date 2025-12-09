import NewsletterModal from "@/components/common/NewsLeterModal";
import Articles from "@/components/pages/home/Articles";
import { Events } from "@/components/pages/home/Events";
import { FeatureArtWork } from "@/components/pages/home/FeatureArtWork";
import { Hero } from "@/components/pages/home/Hero";
import { OpenCallsSection } from "@/components/pages/home/OpenCalls";
import Container from "@/components/shared/Container";

const HomePage = () => {
  return (
    <div className="bg-[#f3f3f3]">
      <Container>
        <Hero />
        <OpenCallsSection />
        <FeatureArtWork />
        <Events />
        <Articles />
      </Container>
      {/* Newsletter Popup Modal */}
      <NewsletterModal />
    </div>
  );
};

export default HomePage;
