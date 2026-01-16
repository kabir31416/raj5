import { Quote, ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const PublicVoicesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      quote: "মনজুর ভাই আমাদের গ্রামের একজন প্রকৃত বন্ধু। তাঁর সহায়তায় আমাদের স্কুলে নতুন শ্রেণীকক্ষ নির্মাণ হয়েছে।",
      name: "আবদুল করিম",
      area: "রাজশাহী সদর",
      occupation: "শিক্ষক"
    },
    {
      quote: "দুর্যোগের সময় তিনি সবার আগে আমাদের পাশে দাঁড়িয়েছিলেন। এমন নেতা খুব কমই আছেন।",
      name: "ফাতেমা বেগম",
      area: "পবা উপজেলা",
      occupation: "গৃহিণী"
    },
    {
      quote: "যুবকদের কর্মসংস্থানের জন্য তাঁর উদ্যোগ সত্যিই প্রশংসনীয়। আমি নিজে তাঁর সহায়তায় ব্যবসা শুরু করেছি।",
      name: "রাকিবুল হাসান",
      area: "গোদাগাড়ী",
      occupation: "উদ্যোক্তা"
    },
    {
      quote: "স্বাস্থ্য ক্যাম্পের মাধ্যমে বিনামূল্যে চিকিৎসা সেবা পেয়েছি। দরিদ্রদের জন্য তিনি আশীর্বাদ।",
      name: "হাসিনা খাতুন",
      area: "তানোর",
      occupation: "দিনমজুর"
    },
    {
      quote: "নারী ক্ষমতায়নে তাঁর কাজ অনুকরণীয়। মহিলা সমিতির মাধ্যমে আমরা স্বাবলম্বী হয়েছি।",
      name: "রওশন আরা",
      area: "বাগমারা",
      occupation: "সমিতি সভানেত্রী"
    },
    {
      quote: "সততা ও নিষ্ঠার প্রতীক মনজুর রহমান। তাঁর মতো নেতা দরকার আমাদের দেশের।",
      name: "মোহাম্মদ আলী",
      area: "চারঘাট",
      occupation: "কৃষক"
    }
  ];

  const visibleCount = typeof window !== 'undefined' && window.innerWidth >= 1024 ? 3 : typeof window !== 'undefined' && window.innerWidth >= 768 ? 2 : 1;
  const maxIndex = Math.max(0, testimonials.length - visibleCount);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, maxIndex]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <section id="public-voices" className="py-24 section-dark relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 pattern-bangladesh opacity-60" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-primary/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block px-5 py-2.5 bg-white/10 rounded-full mb-6">
            <span className="text-secondary text-sm font-bold">জনগণের মতামত</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            জনগণের কণ্ঠ
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            আমাদের এলাকার মানুষের অভিজ্ঞতা ও মতামত
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <Button
            onClick={handlePrev}
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 z-20 bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm hidden md:flex"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          
          <Button
            onClick={handleNext}
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 z-20 bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm hidden md:flex"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>

          {/* Cards Container */}
          <div className="overflow-hidden px-4 md:px-8">
            <div
              className="flex transition-transform duration-500 ease-out gap-6"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                >
                  <div className="glass-card-dark rounded-2xl p-8 h-full hover:bg-white/10 transition-all duration-300 group">
                    {/* Quote Icon */}
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-secondary/70 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Quote className="w-6 h-6 text-secondary-foreground" />
                    </div>

                    {/* Quote Text */}
                    <p className="text-white/90 text-lg leading-relaxed mb-6 italic">
                      "{testimonial.quote}"
                    </p>

                    {/* Author Info */}
                    <div className="border-t border-white/10 pt-6">
                      <p className="text-white font-bold text-lg mb-1">
                        {testimonial.name}
                      </p>
                      <p className="text-secondary text-sm mb-2">
                        {testimonial.occupation}
                      </p>
                      <div className="flex items-center gap-2 text-white/50 text-sm">
                        <MapPin className="w-4 h-4" />
                        <span>{testimonial.area}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8 md:hidden">
            <Button
              onClick={handlePrev}
              variant="outline"
              size="icon"
              className="bg-white/10 border-white/20 text-white hover:bg-white/20"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            
            {/* Dots indicator */}
            <div className="flex gap-2">
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setCurrentIndex(index);
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? "bg-secondary w-6" 
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>
            
            <Button
              onClick={handleNext}
              variant="outline"
              size="icon"
              className="bg-white/10 border-white/20 text-white hover:bg-white/20"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Desktop Dots */}
          <div className="hidden md:flex justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrentIndex(index);
                }}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? "bg-secondary w-8" 
                    : "bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PublicVoicesSection;
