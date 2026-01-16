import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Heart, Users, Megaphone, HandHelping } from "lucide-react";

const VolunteerSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    area: "",
    supportType: "",
  });

  const supportTypes = [
    { icon: Users, label: "স্বেচ্ছাসেবক হিসেবে", value: "volunteer" },
    { icon: Megaphone, label: "প্রচারণায় সহায়তা", value: "campaign" },
    { icon: HandHelping, label: "আর্থিক সহায়তা", value: "financial" },
    { icon: Heart, label: "অন্যান্য", value: "other" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "ধন্যবাদ!",
      description: "আপনার আবেদন সফলভাবে জমা হয়েছে। শীঘ্রই আপনার সাথে যোগাযোগ করা হবে।",
    });
    setFormData({ name: "", phone: "", area: "", supportType: "" });
  };

  return (
    <section id="volunteer" className="py-24 section-muted relative">
      {/* Section Divider */}
      <div className="absolute top-0 left-0 right-0 section-divider" />
      
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-slide-up">
            <div className="inline-block px-5 py-2.5 bg-primary/10 rounded-full mb-6">
              <span className="text-primary text-sm font-bold">আমাদের সাথে যুক্ত হোন</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              পরিবর্তনের অংশ হোন
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              একটি ন্যায়ভিত্তিক ও দুর্নীতিমুক্ত সমাজ গড়তে আপনার অংশগ্রহণ অপরিহার্য। আমাদের সাথে যুক্ত হয়ে এই মহান কাজে অবদান রাখুন।
            </p>
            
            {/* Support Types */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {supportTypes.map((type, index) => (
                <button
                  key={index}
                  onClick={() => setFormData({ ...formData, supportType: type.value })}
                  className={`flex items-center gap-3 p-5 rounded-xl transition-all duration-300 border-2 ${
                    formData.supportType === type.value
                      ? "border-primary glass-icon text-primary-foreground shadow-lg"
                      : "border-border/50 glass-panel text-foreground hover:border-primary/50 hover:shadow-lg"
                  }`}
                >
                  <type.icon className="w-6 h-6" />
                  <span className="font-semibold">{type.label}</span>
                </button>
              ))}
            </div>
          </div>
          
          {/* Form */}
          <div className="glass-panel p-8 md:p-10 rounded-2xl animate-scale-in">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              আবেদন ফর্ম
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-foreground font-semibold mb-2">
                  আপনার নাম *
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="আপনার পূর্ণ নাম লিখুন"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="h-12 bg-background border-border focus:border-primary"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-foreground font-semibold mb-2">
                  মোবাইল নম্বর *
                </label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="০১XXXXXXXXX"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="h-12 bg-background border-border focus:border-primary"
                />
              </div>
              
              <div>
                <label htmlFor="area" className="block text-foreground font-semibold mb-2">
                  এলাকা/ঠিকানা *
                </label>
                <Textarea
                  id="area"
                  placeholder="আপনার থানা, জেলা লিখুন"
                  value={formData.area}
                  onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                  required
                  rows={3}
                  className="bg-background border-border focus:border-primary"
                />
              </div>
              
              <Button 
                type="submit" 
                size="lg" 
                className="w-full cta-gradient hover:opacity-90 text-primary-foreground font-bold shadow-md"
              >
                আবেদন জমা দিন
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VolunteerSection;
