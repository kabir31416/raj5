import { CheckCircle, Star, Users, History } from "lucide-react";

const WhyJamaatSection = () => {
  const reasons = [
    {
      icon: Star,
      title: "আদর্শভিত্তিক রাজনীতি",
      description: "জামায়াতে ইসলামী ইসলামী আদর্শ ও নৈতিক মূল্যবোধের ভিত্তিতে রাজনীতি করে। কোনো প্রকার অনৈতিক কাজে জড়িত হয় না।",
    },
    {
      icon: History,
      title: "সেবার দীর্ঘ ইতিহাস",
      description: "১৯৭১ সাল থেকে জামায়াত সমাজসেবা, শিক্ষা ও জনকল্যাণমূলক কাজে নিয়োজিত। দেশের বিভিন্ন প্রান্তে হাজারো স্কুল, মাদ্রাসা ও হাসপাতাল পরিচালনা করছে।",
    },
    {
      icon: Users,
      title: "জবাবদিহিমূলক নেতৃত্ব",
      description: "জামায়াত নেতারা জনগণের কাছে জবাবদিহি করেন। সম্পদের হিসাব স্বচ্ছ ও প্রকাশ্য।",
    },
    {
      icon: CheckCircle,
      title: "ভিন্নতা অন্যদের থেকে",
      description: "অন্যান্য দলের মতো পারিবারিক রাজনীতি নয়, জামায়াতে যোগ্যতার ভিত্তিতে নেতৃত্ব নির্বাচিত হয়।",
    },
  ];

  const coreValues = [
    "ঈমান ও তাকওয়া",
    "সততা ও স্বচ্ছতা",
    "ন্যায়বিচার",
    "জনসেবা",
    "ত্যাগ ও কোরবানি",
    "ঐক্য ও শৃঙ্খলা",
  ];

  return (
    <section id="why-jamaat" className="py-24 hero-gradient relative overflow-hidden">
      {/* Subtle light pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.5'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block px-5 py-2.5 bg-primary-foreground/20 backdrop-blur-sm rounded-full mb-6">
            <span className="text-primary-foreground text-sm font-bold">কেন জামায়াত?</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 text-shadow">
            কেন বাংলাদেশ জামায়াতে ইসলামী?
          </h2>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            আদর্শ, সেবা ও নৈতিকতার ভিত্তিতে একটি ভিন্ন রাজনৈতিক দল
          </p>
        </div>
        
        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="bg-primary-foreground/10 backdrop-blur-md p-8 rounded-2xl border border-primary-foreground/20 hover:bg-primary-foreground/15 transition-all duration-300 animate-slide-up shadow-lg"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-2xl bg-primary-foreground flex items-center justify-center mb-6 shadow-md">
                <reason.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary-foreground mb-4">{reason.title}</h3>
              <p className="text-primary-foreground/90 leading-relaxed text-lg">{reason.description}</p>
            </div>
          ))}
        </div>
        
        {/* Core Values */}
        <div className="bg-primary-foreground/10 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-primary-foreground/20 animate-fade-in shadow-xl">
          <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-8 text-center">
            মূল মূল্যবোধ
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {coreValues.map((value, index) => (
              <span 
                key={index}
                className="px-6 py-3 bg-primary-foreground text-primary font-bold rounded-full shadow-lg hover:scale-105 transition-transform duration-300 text-lg"
              >
                {value}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyJamaatSection;
