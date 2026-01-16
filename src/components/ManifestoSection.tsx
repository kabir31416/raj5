import { Briefcase, GraduationCap, Stethoscope, ShieldCheck, Users, Laptop } from "lucide-react";

const ManifestoSection = () => {
  const manifestoItems = [
    {
      icon: Briefcase,
      title: "অর্থনীতি ও কর্মসংস্থান",
      points: [
        "ক্ষুদ্র ও মাঝারি শিল্পের বিকাশে বিশেষ প্রণোদনা",
        "বেকারত্ব দূরীকরণে কার্যকর পদক্ষেপ",
        "স্বল্প সুদে ঋণ সুবিধা প্রদান",
        "কৃষি খাতে আধুনিকায়ন",
      ],
    },
    {
      icon: GraduationCap,
      title: "শিক্ষা সংস্কার",
      points: [
        "নৈতিক শিক্ষা বাধ্যতামূলক করা",
        "প্রযুক্তি ও কারিগরি শিক্ষার প্রসার",
        "গ্রামীণ এলাকায় মানসম্মত শিক্ষা প্রতিষ্ঠান",
        "শিক্ষকদের যথাযথ প্রশিক্ষণ ও সম্মান",
      ],
    },
    {
      icon: Stethoscope,
      title: "স্বাস্থ্যসেবা",
      points: [
        "প্রতিটি ইউনিয়নে আধুনিক স্বাস্থ্য কেন্দ্র",
        "সুলভ মূল্যে ওষুধ সরবরাহ",
        "দরিদ্রদের জন্য বিনামূল্যে চিকিৎসা",
        "স্বাস্থ্য বীমা ব্যবস্থা চালু",
      ],
    },
    {
      icon: ShieldCheck,
      title: "দুর্নীতি দমন",
      points: [
        "সরকারি কাজে স্বচ্ছতা নিশ্চিত",
        "দুর্নীতিবাজদের কঠোর শাস্তি",
        "জনপ্রতিনিধিদের সম্পদের হিসাব প্রকাশ",
        "ই-গভর্নেন্স চালু",
      ],
    },
    {
      icon: Users,
      title: "সামাজিক ন্যায়বিচার",
      points: [
        "সকল ধর্মের মানুষের অধিকার রক্ষা",
        "নারী ও শিশু নির্যাতন রোধ",
        "প্রতিবন্ধীদের জন্য বিশেষ সুবিধা",
        "বয়স্কদের ভাতা বৃদ্ধি",
      ],
    },
    {
      icon: Laptop,
      title: "ডিজিটাল বাংলাদেশ",
      points: [
        "গ্রামে ইন্টারনেট সংযোগ সম্প্রসারণ",
        "ই-কমার্স ও অনলাইন ব্যবসায় সহায়তা",
        "সরকারি সেবা অনলাইনে প্রদান",
        "তথ্য প্রযুক্তি প্রশিক্ষণ কেন্দ্র",
      ],
    },
  ];

  return (
    <section id="manifesto" className="py-24 section-light relative">
      {/* Section Divider */}
      <div className="absolute top-0 left-0 right-0 section-divider" />
      
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block px-5 py-2.5 bg-secondary/20 rounded-full mb-6">
            <span className="text-secondary-foreground text-sm font-bold">নির্বাচনী প্রতিশ্রুতি</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            নির্বাচনী ইশতেহার
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            জনগণের কাছে আমাদের প্রতিশ্রুতি ও কর্মপরিকল্পনা
          </p>
        </div>
        
        {/* Manifesto Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {manifestoItems.map((item, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-slide-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Header */}
              <div className="cta-gradient p-6 flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-primary-foreground/20 flex items-center justify-center backdrop-blur-sm">
                  <item.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-primary-foreground">{item.title}</h3>
              </div>
              
              {/* Points */}
              <div className="p-6">
                <ul className="space-y-4">
                  {item.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-2.5 h-2.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                      <span className="text-foreground leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ManifestoSection;
