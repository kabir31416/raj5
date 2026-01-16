import { Shield, Scale, BookHeart, Users, GraduationCap, Heart } from "lucide-react";

const VisionSection = () => {
  const visionItems = [
    {
      icon: Shield,
      title: "দুর্নীতিমুক্ত সমাজ",
      description: "সকল স্তরে স্বচ্ছতা ও জবাবদিহিতা নিশ্চিত করে একটি দুর্নীতিমুক্ত সমাজ গড়ে তোলা।",
    },
    {
      icon: Scale,
      title: "ন্যায়বিচার প্রতিষ্ঠা",
      description: "সকল নাগরিকের জন্য সমান ন্যায়বিচার ও আইনের শাসন প্রতিষ্ঠা করা।",
    },
    {
      icon: BookHeart,
      title: "ইসলামী মূল্যবোধ",
      description: "ইসলামী আদর্শ ও নৈতিক মূল্যবোধের ভিত্তিতে সমাজ গঠন।",
    },
    {
      icon: Users,
      title: "যুব সমাজ ও কর্মসংস্থান",
      description: "যুবসমাজের জন্য কর্মসংস্থান সৃষ্টি ও দক্ষতা উন্নয়ন।",
    },
    {
      icon: GraduationCap,
      title: "শিক্ষা উন্নয়ন",
      description: "মানসম্মত শিক্ষা ও নৈতিক মূল্যবোধ সমৃদ্ধ শিক্ষা ব্যবস্থা গড়ে তোলা।",
    },
    {
      icon: Heart,
      title: "স্বাস্থ্য সেবা",
      description: "সকল নাগরিকের জন্য সুলভ ও মানসম্মত স্বাস্থ্য সেবা নিশ্চিত করা।",
    },
  ];

  return (
    <section id="vision" className="py-24 section-muted relative">
      {/* Section Divider */}
      <div className="absolute top-0 left-0 right-0 section-divider" />
      
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block px-5 py-2.5 bg-primary/10 rounded-full mb-6">
            <span className="text-primary text-sm font-bold">আমাদের লক্ষ্য</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            ভিশন ও মিশন
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            একটি সুন্দর, সমৃদ্ধ ও ন্যায়ভিত্তিক বাংলাদেশ গড়ার প্রত্যয়ে আমাদের সুনির্দিষ্ট লক্ষ্য ও পরিকল্পনা
          </p>
        </div>
        
        {/* Vision Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visionItems.map((item, index) => (
            <div 
              key={index}
              className="group glass-panel p-8 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-2xl glass-icon flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
