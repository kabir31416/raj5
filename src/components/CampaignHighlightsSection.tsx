import { 
  Target, 
  Award, 
  Users, 
  Heart, 
  Briefcase, 
  GraduationCap, 
  Shield, 
  Leaf,
  CheckCircle
} from "lucide-react";

const CampaignHighlightsSection = () => {
  const highlights = [
    {
      icon: Shield,
      title: "দুর্নীতিমুক্ত সমাজ",
      description: "সকল স্তরে স্বচ্ছতা ও জবাবদিহিতা নিশ্চিত করে দুর্নীতিমুক্ত প্রশাসন গঠন",
      category: "মূল প্রতিশ্রুতি",
      color: "from-emerald-500 to-teal-600"
    },
    {
      icon: GraduationCap,
      title: "মানসম্মত শিক্ষা",
      description: "সকল শিশুর জন্য বিনামূল্যে মানসম্মত প্রাথমিক ও মাধ্যমিক শিক্ষা নিশ্চিতকরণ",
      category: "শিক্ষা",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: Briefcase,
      title: "কর্মসংস্থান সৃষ্টি",
      description: "স্থানীয় শিল্প ও ক্ষুদ্র ব্যবসায় উদ্যোগ সমর্থনের মাধ্যমে বেকারত্ব দূরীকরণ",
      category: "অর্থনীতি",
      color: "from-amber-500 to-orange-600"
    },
    {
      icon: Heart,
      title: "স্বাস্থ্যসেবা",
      description: "গ্রামীণ এলাকায় সাশ্রয়ী মূল্যে মানসম্মত স্বাস্থ্যসেবা পৌঁছে দেওয়া",
      category: "স্বাস্থ্য",
      color: "from-rose-500 to-pink-600"
    },
    {
      icon: Users,
      title: "নারী ক্ষমতায়ন",
      description: "নারীদের সামাজিক ও অর্থনৈতিক উন্নয়নে বিশেষ উদ্যোগ গ্রহণ",
      category: "সামাজিক",
      color: "from-purple-500 to-violet-600"
    },
    {
      icon: Leaf,
      title: "পরিবেশ সংরক্ষণ",
      description: "সবুজ বাংলাদেশ গড়তে বৃক্ষরোপণ ও পরিবেশ সচেতনতা কার্যক্রম",
      category: "পরিবেশ",
      color: "from-green-500 to-emerald-600"
    }
  ];

  const achievements = [
    { number: "১০০+", label: "সমাজসেবা প্রকল্প" },
    { number: "৫০০০+", label: "পরিবারকে সহায়তা" },
    { number: "২৫+", label: "বছরের অভিজ্ঞতা" },
    { number: "১০০%", label: "সততা ও নিষ্ঠা" }
  ];

  const communityFocus = [
    "কৃষকদের ন্যায্য মূল্য নিশ্চিতকরণ",
    "যুবকদের দক্ষতা উন্নয়ন প্রশিক্ষণ",
    "প্রবীণদের জন্য সামাজিক সুরক্ষা",
    "প্রতিবন্ধী ব্যক্তিদের পুনর্বাসন"
  ];

  return (
    <section id="highlights" className="py-24 section-muted relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pattern-light-geo opacity-40" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-secondary/5 to-transparent rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block px-5 py-2.5 bg-primary/10 rounded-full mb-6">
            <span className="text-primary text-sm font-bold">আমাদের অঙ্গীকার</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            ক্যাম্পেইন হাইলাইটস
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            জনগণের কল্যাণে আমাদের মূল প্রতিশ্রুতি ও অর্জনসমূহ
          </p>
        </div>

        {/* Key Promises Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="group glass-panel rounded-2xl p-6 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Category badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold text-primary/70 bg-primary/10 px-3 py-1 rounded-full">
                  {item.category}
                </span>
              </div>

              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Achievements Counter */}
        <div className="glass-panel rounded-3xl p-8 md:p-12 mb-16 animate-fade-in">
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-2xl glass-icon flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">মূল অর্জনসমূহ</h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((item, index) => (
              <div
                key={index}
                className="text-center group"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                  {item.number}
                </div>
                <p className="text-muted-foreground font-medium">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Community Focus */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="animate-slide-up">
            <div className="w-16 h-16 rounded-2xl glass-icon flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              কমিউনিটি ফোকাস পয়েন্ট
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              আমাদের সমাজের প্রতিটি স্তরের মানুষের কল্যাণে বিশেষ মনোযোগ দিয়ে কাজ করা আমাদের অঙ্গীকার।
            </p>
          </div>

          <div className="space-y-4 animate-slide-up" style={{ animationDelay: "0.15s" }}>
            {communityFocus.map((item, index) => (
              <div
                key={index}
                className="glass-panel rounded-xl p-4 flex items-center gap-4 group hover:shadow-lg hover:-translate-x-1 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <CheckCircle className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-foreground font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampaignHighlightsSection;
