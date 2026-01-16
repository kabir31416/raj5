import { Shield, Copy, CheckCircle, Heart, HandHeart } from "lucide-react";
import { useState } from "react";

const DonationSection = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const paymentMethods = [
    {
      name: "বিকাশ",
      icon: "bkash",
      gradientFrom: "#E2136E",
      gradientTo: "#FF4081",
      accountNumber: "০১৭XX-XXXXXX",
      type: "সেন্ড মানি",
    },
    {
      name: "নগদ",
      icon: "nagad",
      gradientFrom: "#FF6B35",
      gradientTo: "#FF9F1C",
      accountNumber: "০১৮XX-XXXXXX",
      type: "সেন্ড মানি",
    },
    {
      name: "রকেট",
      icon: "rocket",
      gradientFrom: "#8E24AA",
      gradientTo: "#BA68C8",
      accountNumber: "০১৯XX-XXXXXX",
      type: "সেন্ড মানি",
    },
  ];

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text.replace(/X/g, ''));
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section id="donation" className="py-24 section-light relative overflow-hidden">
      {/* Section Divider */}
      <div className="absolute top-0 left-0 right-0 section-divider" />
      
      {/* Decorative Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-secondary/20 rounded-full mb-6">
            <HandHeart className="w-5 h-5 text-secondary-foreground" />
            <span className="text-secondary-foreground text-sm font-bold">আর্থিক সহায়তা</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            আর্থিক সহায়তা প্রদান করুন
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            ন্যায় ও সততার এই আন্দোলনে আপনার আর্থিক সহায়তা আমাদের অনুপ্রাণিত করবে
          </p>
        </div>
        
        {/* Creative Payment Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {paymentMethods.map((method, index) => (
            <div 
              key={index}
              className="group relative animate-slide-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Card Background with Gradient Border */}
              <div 
                className="absolute inset-0 rounded-3xl opacity-75 group-hover:opacity-100 transition-opacity duration-300 blur-sm"
                style={{ 
                  background: `linear-gradient(135deg, ${method.gradientFrom}, ${method.gradientTo})`,
                  transform: 'translate(4px, 4px)'
                }}
              />
              
              {/* Main Card */}
              <div className="relative bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                {/* Decorative Corner */}
                <div 
                  className="absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-20"
                  style={{ background: `linear-gradient(135deg, ${method.gradientFrom}, ${method.gradientTo})` }}
                />
                
                {/* Payment Icon */}
                <div 
                  className="w-20 h-20 rounded-2xl flex items-center justify-center mb-5 mx-auto shadow-lg transform group-hover:scale-110 transition-transform duration-300"
                  style={{ background: `linear-gradient(135deg, ${method.gradientFrom}, ${method.gradientTo})` }}
                >
                  <span className="text-white font-bold text-2xl">
                    {method.name.charAt(0)}
                  </span>
                </div>
                
                {/* Name & Type */}
                <h3 className="text-2xl font-bold text-foreground text-center mb-1">{method.name}</h3>
                <p className="text-muted-foreground text-center text-sm mb-5">{method.type}</p>
                
                {/* Account Number Box */}
                <div 
                  className="relative rounded-2xl p-4 border-2 border-dashed group-hover:border-solid transition-all duration-300"
                  style={{ borderColor: method.gradientFrom }}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">অ্যাকাউন্ট নম্বর</p>
                      <p className="text-xl font-bold text-foreground tracking-wider font-mono">
                        {method.accountNumber}
                      </p>
                    </div>
                    <button
                      onClick={() => copyToClipboard(method.accountNumber, index)}
                      className="p-3 rounded-xl transition-all duration-300 hover:scale-110"
                      style={{ background: `linear-gradient(135deg, ${method.gradientFrom}20, ${method.gradientTo}20)` }}
                    >
                      {copiedIndex === index ? (
                        <CheckCircle className="w-5 h-5 text-green-500" />
                      ) : (
                        <Copy className="w-5 h-5" style={{ color: method.gradientFrom }} />
                      )}
                    </button>
                  </div>
                </div>
                
                {/* Donate Heart Icon */}
                <div className="absolute bottom-3 right-3 opacity-10 group-hover:opacity-30 transition-opacity">
                  <Heart className="w-16 h-16" style={{ color: method.gradientFrom }} />
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Security Note */}
        <div className="glass-panel rounded-2xl p-6 max-w-3xl mx-auto animate-fade-in border border-primary/20">
          <div className="flex items-center gap-4 justify-center">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div className="text-left">
              <h4 className="font-bold text-foreground mb-1">নিরাপত্তা নিশ্চিতকরণ</h4>
              <p className="text-muted-foreground">
                আপনার অনুদান সম্পূর্ণ নিরাপদ এবং শুধুমাত্র নির্বাচনী প্রচারণায় ব্যবহৃত হবে।
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationSection;
