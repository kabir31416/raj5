import { Heart, BookOpen, Stethoscope } from "lucide-react";
import communityWork from "@/assets/community-work-1.jpg";
import educationWork from "@/assets/education-work.jpg";
import healthcareWork from "@/assets/healthcare-work.jpg";

const CommunitySection = () => {
  const achievements = [
    { number: "৫০০+", label: "পরিবারকে ত্রাণ সহায়তা" },
    { number: "১০,০০০+", label: "শিক্ষার্থীকে বৃত্তি প্রদান" },
    { number: "২৫+", label: "বিনামূল্যে মেডিকেল ক্যাম্প" },
    { number: "১০০+", label: "দরিদ্র পরিবারকে গৃহ নির্মাণ" },
  ];

  const workAreas = [
    {
      icon: Heart,
      title: "ত্রাণ কার্যক্রম",
      description: "বন্যা, মহামারী ও প্রাকৃতিক দুর্যোগে ক্ষতিগ্রস্তদের পাশে দাঁড়ানো।",
      image: communityWork,
    },
    {
      icon: BookOpen,
      title: "শিক্ষা উদ্যোগ",
      description: "দরিদ্র মেধাবী শিক্ষার্থীদের বৃত্তি ও শিক্ষা উপকরণ প্রদান।",
      image: educationWork,
    },
    {
      icon: Stethoscope,
      title: "স্বাস্থ্য সেবা",
      description: "বিনামূল্যে স্বাস্থ্য ক্যাম্প ও ওষুধ বিতরণ কার্যক্রম।",
      image: healthcareWork,
    },
  ];

  return (
    <section id="community" className="py-24 section-muted relative">
      {/* Section Divider */}
      <div className="absolute top-0 left-0 right-0 section-divider" />
      
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block px-5 py-2.5 bg-primary/10 rounded-full mb-6">
            <span className="text-primary text-sm font-bold">সেবার ইতিহাস</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            সমাজসেবা ও অর্জন
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            জনগণের সেবায় আমাদের নিরলস প্রচেষ্টা ও অবদান
          </p>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {achievements.map((item, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-2xl border border-border shadow-sm text-center animate-scale-in hover:shadow-lg transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{item.number}</div>
              <div className="text-muted-foreground font-medium">{item.label}</div>
            </div>
          ))}
        </div>
        
        {/* Work Areas */}
        <div className="grid md:grid-cols-3 gap-8">
          {workAreas.map((area, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all duration-300 group animate-slide-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Image */}
              <div className="h-56 overflow-hidden">
                <img 
                  src={area.image} 
                  alt={area.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="w-14 h-14 rounded-xl cta-gradient flex items-center justify-center mb-4 -mt-14 relative z-10 shadow-lg">
                  <area.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{area.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{area.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
