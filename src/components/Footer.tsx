import { Scale } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "প্রার্থী পরিচিতি", href: "#about" },
    { label: "ভিশন ও মিশন", href: "#vision" },
    { label: "ইশতেহার", href: "#manifesto" },
    { label: "যোগাযোগ", href: "#contact" },
  ];

  return (
    <footer className="section-dark relative overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 pattern-bangladesh opacity-50" />
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Quote Section */}
        <div className="text-center mb-12 pb-12 border-b border-white/20">
          <div className="inline-flex items-center justify-center gap-3 mb-6">
            <Scale className="w-10 h-10 text-secondary" />
            <span className="text-secondary font-bold text-2xl">দাঁড়িপাল্লা</span>
          </div>
          <blockquote className="text-xl md:text-2xl text-white font-medium italic max-w-3xl mx-auto mb-4">
            "যারা ঈমান এনেছে এবং নেক আমল করেছে, তারাই জান্নাতের অধিবাসী।"
          </blockquote>
          <cite className="text-white/70 text-lg">— সূরা বাকারা, আয়াত ৮২</cite>
        </div>
        
        {/* Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">মনজুর রহমান</h3>
            <p className="text-white/90 leading-relaxed text-lg">
              বাংলাদেশ জামায়াতে ইসলামীর সংসদ সদস্য প্রার্থী। ন্যায়, সততা ও জনসেবার প্রতীক।
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">দ্রুত লিংক</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-white/90 hover:text-white transition-colors text-lg hover:underline">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* CTA */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">ভোট দিন</h3>
            <p className="text-white/90 mb-4 text-lg">ন্যায়, সততা ও পরিবর্তনের পক্ষে ভোট দিন।</p>
            <div className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-full font-bold text-lg shadow-lg">
              <Scale className="w-6 h-6" />
              <span>মার্কা: দাঁড়িপাল্লা</span>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/70">© {currentYear} মনজুর রহমান - সকল স্বত্ব সংরক্ষিত</p>
          <p className="text-secondary font-bold text-xl mt-3">"ন্যায়ের পথে, জনতার সাথে"</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
