import { GraduationCap, BookOpen, Users, Heart } from "lucide-react";
import candidatePortrait from "@/assets/candidate-portrait.jpg";

const AboutSection = () => {
  const highlights = [
    { icon: GraduationCap, text: "রাজশাহী বিশ্ববিদ্যালয় থেকে আইন বিভাগে স্নাতক" },
    { icon: BookOpen, text: "ইসলামী বিশ্ববিদ্যালয় থেকে ইসলামিক স্টাডিজে স্নাতকোত্তর" },
    { icon: Users, text: "২৫+ বছর রাজনৈতিক অভিজ্ঞতা" },
    { icon: Heart, text: "সমাজসেবা ও জনকল্যাণে নিবেদিত" },
  ];

  return (
    <section id="about" className="py-24 section-light relative">
      {/* Section Divider */}
      <div className="absolute top-0 left-0 right-0 section-divider" />
      
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative animate-slide-up">
            <div className="absolute -inset-6 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-2xl" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-card">
              <img 
                src={candidatePortrait} 
                alt="মনজুর রহমান" 
                className="w-full h-auto"
              />
            </div>
            {/* Quote Badge - Glass effect */}
            <div className="absolute -bottom-6 -right-6 glass-panel p-6 rounded-2xl max-w-xs">
              <p className="text-foreground font-medium italic text-lg">
                "আল্লাহর সন্তুষ্টি ও মানুষের কল্যাণই আমার জীবনের একমাত্র লক্ষ্য।"
              </p>
            </div>
          </div>
          
          {/* Content */}
          <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="inline-block px-5 py-2.5 bg-primary/10 rounded-full mb-6">
              <span className="text-primary text-sm font-bold">প্রার্থী পরিচিতি</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              মনজুর রহমান
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              মনজুর রহমান একজন নিবেদিতপ্রাণ সমাজসেবক ও রাজনৈতিক নেতা। তিনি রাজশাহীর একটি সম্ভ্রান্ত মুসলিম পরিবারে জন্মগ্রহণ করেন। ছাত্রজীবন থেকেই তিনি নৈতিক আদর্শ ও সামাজিক ন্যায়বিচারের প্রতি অঙ্গীকারবদ্ধ।
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              গত ২৫ বছরে তিনি বিভিন্ন সামাজিক ও জনকল্যাণমূলক কাজে সক্রিয় ভূমিকা পালন করেছেন। দুর্নীতিমুক্ত সমাজ প্রতিষ্ঠা, শিক্ষার প্রসার, দরিদ্রদের সাহায্য ও নৈতিক মূল্যবোধ প্রতিষ্ঠায় তাঁর অবদান অনস্বীকার্য।
            </p>
            
            {/* Highlights - Glass cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 p-5 glass-panel rounded-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-xl glass-icon flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <span className="text-foreground font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
