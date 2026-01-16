import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import VisionSection from "@/components/VisionSection";
import ManifestoSection from "@/components/ManifestoSection";
import WhyJamaatSection from "@/components/WhyJamaatSection";
import CommunitySection from "@/components/CommunitySection";
import EventsSection from "@/components/EventsSection";
import GallerySection from "@/components/GallerySection";
import DonationSection from "@/components/DonationSection";
import VolunteerSection from "@/components/VolunteerSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import PhotoFrameSection from "@/components/PhotoFrameSection";
import CampaignHighlightsSection from "@/components/CampaignHighlightsSection";
import PublicVoicesSection from "@/components/PublicVoicesSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <VisionSection />
        <ManifestoSection />
        <WhyJamaatSection />
        <CampaignHighlightsSection />
        <PublicVoicesSection />
        <PhotoFrameSection />
        <CommunitySection />
        <EventsSection />
        <GallerySection />
        <DonationSection />
        <VolunteerSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
