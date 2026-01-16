import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import candidateReal from "@/assets/candidate-real.jpg";
const HeroSection = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Deep Green Gradient Background */}
      <div className="absolute inset-0 hero-gradient" />
      
      {/* Subtle Geometric Pattern Overlay */}
      <div className="absolute inset-0 pattern-bangladesh opacity-80" />
      
      {/* Soft Light Gradient for Depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/3 via-transparent to-transparent" />
      
      {/* Top-left soft glow */}
      <div className="absolute top-0 left-0 w-2/3 h-1/2 bg-gradient-to-br from-white/5 to-transparent" />
      
      {/* Bottom accent glow */}
      <div className="absolute bottom-0 right-0 w-1/2 h-1/3 bg-gradient-to-tl from-secondary/8 to-transparent" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-24 pt-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-right order-2 lg:order-1 animate-fade-in">
            <div className="inline-block px-5 py-2.5 glass-card-dark rounded-full mb-6">
              <span className="text-white text-sm font-medium">
                নির্বাচনী এলাকা: রাজশাহী-০৫
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-shadow mb-6 leading-tight">
              মনজুর রহমান
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-4 font-medium">
              বাংলাদেশ জামায়াতে ইসলামী
            </p>
            
            <p className="text-2xl md:text-3xl text-secondary font-bold mb-8">
              "ন্যায়ের পথে, জনতার সাথে"
            </p>
            
            <p className="text-lg text-white/80 mb-10 max-w-xl mx-auto lg:mr-0 lg:ml-auto leading-relaxed">
              সততা, ন্যায়বিচার ও নৈতিক মূল্যবোধের ভিত্তিতে একটি সুন্দর বাংলাদেশ গড়ার প্রত্যয়ে আপনার পাশে আছি।
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end">
              <Button 
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 text-lg px-8 py-6"
                size="lg"
                onClick={() => scrollToSection("volunteer")}
              >
                আমাদের সাথে যুক্ত হোন
              </Button>
              <Button 
                className="glass-button text-white hover:bg-white/20 shadow-lg transition-all duration-300 text-lg px-8 py-6"
                size="lg"
                onClick={() => scrollToSection("vision")}
              >
                ভোট দিন ন্যায় ও সততার পক্ষে
              </Button>
            </div>
          </div>
          
          {/* Candidate Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-start animate-scale-in">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-6 bg-secondary/20 rounded-full blur-3xl" />
              
              {/* Glass frame */}
              <div className="relative glass-card-dark p-2 rounded-full">
                <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                  <img 
                    src={candidateReal} 
                    alt="মনজুর রহমান" 
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
              
              {/* Election Symbol Badge */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 glass-card px-6 py-3 rounded-full shadow-xl">
                <span className="text-primary font-bold text-lg">⚖️ দাঁড়িপাল্লা</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <button 
            onClick={() => scrollToSection("about")}
            className="text-white/60 hover:text-white transition-colors glass-button p-3 rounded-full"
            aria-label="Scroll down"
          >
            <ChevronDown className="w-8 h-8" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
