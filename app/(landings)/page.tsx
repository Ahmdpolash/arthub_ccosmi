import NewsletterModal from "@/components/common/NewsLeterModal";
import { Hero } from "@/components/pages/home/Hero";
import { OpenCallsSection } from "@/components/pages/home/OpenCalls";
import Container from "@/components/shared/Container";

const HomePage = () => {
  return (
    <div className="bg-[#f3f3f3]">
      <Container>
        <Hero />
        <OpenCallsSection />
      </Container>
      {/* Newsletter Popup Modal */}
      <NewsletterModal />
    </div>
  );
};

export default HomePage;
