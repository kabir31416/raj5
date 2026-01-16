import { useState } from "react";
import { X } from "lucide-react";
import communityWork from "@/assets/community-work-1.jpg";
import campaignRally from "@/assets/campaign-rally.jpg";
import educationWork from "@/assets/education-work.jpg";
import healthcareWork from "@/assets/healthcare-work.jpg";

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    { src: campaignRally, alt: "নির্বাচনী সমাবেশ", category: "সমাবেশ" },
    { src: communityWork, alt: "ত্রাণ বিতরণ কার্যক্রম", category: "সেবা" },
    { src: educationWork, alt: "শিক্ষা কার্যক্রম", category: "শিক্ষা" },
    { src: healthcareWork, alt: "স্বাস্থ্য সেবা ক্যাম্প", category: "স্বাস্থ্য" },
  ];

  return (
    <section id="gallery" className="py-24 section-light relative">
      {/* Section Divider */}
      <div className="absolute top-0 left-0 right-0 section-divider" />
      
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block px-5 py-2.5 bg-accent rounded-full mb-6">
            <span className="text-accent-foreground text-sm font-bold">ছবির ঝলক</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            ফটো গ্যালারি
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            জনগণের সাথে আমাদের কার্যক্রম ও সম্পৃক্ততার কিছু চিত্র
          </p>
        </div>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div 
              key={index}
              className={`relative group cursor-pointer overflow-hidden rounded-2xl animate-scale-in shadow-sm hover:shadow-xl transition-all duration-300 ${
                index === 0 ? "col-span-2 row-span-2" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedImage(image.src)}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover aspect-square group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end p-6">
                <span className="text-primary-foreground font-bold text-lg text-center">{image.alt}</span>
                <span className="text-primary-foreground/80 text-sm mt-1 px-3 py-1 bg-primary-foreground/20 rounded-full">{image.category}</span>
              </div>
            </div>
          ))}
        </div>
        
        {/* Lightbox */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-foreground/95 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-card flex items-center justify-center text-foreground hover:bg-accent transition-colors shadow-lg"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6" />
            </button>
            <img 
              src={selectedImage} 
              alt="Selected" 
              className="max-w-full max-h-[90vh] rounded-2xl shadow-2xl"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;
