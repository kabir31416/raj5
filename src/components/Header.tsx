import { useState, useEffect } from "react";
import { Menu, X, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "পরিচিতি", href: "#about" },
    { label: "ভিশন", href: "#vision" },
    { label: "ইশতেহার", href: "#manifesto" },
    { label: "জামায়াত", href: "#why-jamaat" },
    { label: "সেবা", href: "#community" },
    { label: "ইভেন্ট", href: "#events" },
    { label: "সহায়তা", href: "#donation" },
    { label: "যোগাযোগ", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "glassmorphism-dark-scrolled border-b border-white/10" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo with Daripalla Symbol */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-xl glass-button flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:bg-white/20">
              <Scale className="w-6 h-6 text-secondary" />
            </div>
            <div>
              <span className="font-bold text-lg block leading-tight text-white">
                মনজুর রহমান
              </span>
              <span className="text-xs text-secondary font-medium">
                রাজশাহী-০৫
              </span>
            </div>
          </a>
          
          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-1">
            {navLinks.map((link, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(link.href)}
                className="px-3 py-2 rounded-lg font-medium text-sm text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300"
              >
                {link.label}
              </button>
            ))}
          </nav>
          
          {/* CTA Button */}
          <div className="hidden xl:block">
            <Button 
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
              onClick={() => scrollToSection("#volunteer")}
            >
              যুক্ত হোন
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="xl:hidden p-2 rounded-lg glass-button transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="xl:hidden glass-card-dark rounded-2xl shadow-2xl mb-4 overflow-hidden animate-scale-in">
            <nav className="p-4 space-y-1">
              {navLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.href)}
                  className="block w-full text-left px-4 py-3 rounded-xl text-white/90 hover:bg-white/10 hover:text-white font-medium transition-all duration-200"
                >
                  {link.label}
                </button>
              ))}
              <Button 
                className="w-full mt-4 bg-secondary text-secondary-foreground hover:bg-secondary/90"
                onClick={() => scrollToSection("#volunteer")}
              >
                যুক্ত হোন
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
