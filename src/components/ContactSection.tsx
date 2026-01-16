import { MapPin, Phone, Mail, Facebook, Youtube, MessageCircle } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "অফিসের ঠিকানা",
      details: ["রাজশাহী সদর", "রাজশাহী-৬০০০", "বাংলাদেশ"],
    },
    {
      icon: Phone,
      title: "ফোন নম্বর",
      details: ["+880 1234-567890", "+880 1987-654321"],
    },
    {
      icon: Mail,
      title: "ইমেইল",
      details: ["info@monjurrahman.com", "contact@monjurrahman.com"],
    },
  ];

  const socialLinks = [
    { icon: Facebook, label: "Facebook", href: "#", hoverBg: "hover:bg-blue-600" },
    { icon: Youtube, label: "YouTube", href: "#", hoverBg: "hover:bg-red-600" },
    { icon: MessageCircle, label: "WhatsApp", href: "#", hoverBg: "hover:bg-green-600" },
  ];

  return (
    <section id="contact" className="py-24 section-light relative">
      {/* Section Divider */}
      <div className="absolute top-0 left-0 right-0 section-divider" />
      
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block px-5 py-2.5 bg-accent rounded-full mb-6">
            <span className="text-accent-foreground text-sm font-bold">যোগাযোগ</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            আমাদের সাথে যোগাযোগ করুন
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            আপনার যেকোনো প্রশ্ন, মতামত বা সহযোগিতার জন্য আমাদের সাথে যোগাযোগ করুন
          </p>
        </div>
        
        {/* Contact Grid - Glass cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((item, index) => (
            <div 
              key={index}
              className="glass-panel p-8 rounded-2xl text-center animate-slide-up hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-full glass-icon flex items-center justify-center mx-auto mb-6">
                <item.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">{item.title}</h3>
              {item.details.map((detail, idx) => (
                <p key={idx} className="text-muted-foreground text-lg">{detail}</p>
              ))}
            </div>
          ))}
        </div>
        
        {/* Social Media */}
        <div className="glass-panel rounded-2xl p-8 md:p-12 text-center animate-fade-in">
          <h3 className="text-2xl font-bold text-foreground mb-8">
            সোশ্যাল মিডিয়ায় অনুসরণ করুন
          </h3>
          <div className="flex justify-center gap-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className={`w-16 h-16 rounded-full bg-muted/80 flex items-center justify-center text-foreground transition-all duration-300 ${social.hoverBg} hover:text-primary-foreground hover:shadow-xl hover:scale-110`}
              >
                <social.icon className="w-7 h-7" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
