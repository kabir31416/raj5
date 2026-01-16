import { Calendar, Clock, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const EventsSection = () => {
  const upcomingEvents = [
    {
      title: "জনসমাবেশ - রাজশাহী সদর",
      date: "১৫ জানুয়ারি, ২০২৫",
      time: "বিকাল ৪:০০ টা",
      location: "রাজশাহী কেন্দ্রীয় ঈদগাহ মাঠ",
      attendees: "৫,০০০+",
      type: "সমাবেশ",
    },
    {
      title: "যুব সম্মেলন",
      date: "১৮ জানুয়ারি, ২০২৫",
      time: "সকাল ১০:০০ টা",
      location: "রাজশাহী টাউন হল, রাজশাহী",
      attendees: "১,০০০+",
      type: "সম্মেলন",
    },
    {
      title: "দোয়া মাহফিল",
      date: "২০ জানুয়ারি, ২০২৫",
      time: "ফজরের পর",
      location: "কেন্দ্রীয় জামে মসজিদ, রাজশাহী",
      attendees: "২,০০০+",
      type: "ধর্মীয়",
    },
    {
      title: "মহিলা সমাবেশ",
      date: "২২ জানুয়ারি, ২০২৫",
      time: "বিকাল ৩:০০ টা",
      location: "মহিলা কলেজ মাঠ, রাজশাহী",
      attendees: "৩,০০০+",
      type: "সমাবেশ",
    },
  ];

  const scrollToVolunteer = () => {
    document.getElementById("volunteer")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="events" className="py-24 section-muted relative">
      {/* Section Divider */}
      <div className="absolute top-0 left-0 right-0 section-divider" />
      
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block px-5 py-2.5 bg-primary/10 rounded-full mb-6">
            <span className="text-primary text-sm font-bold">আসন্ন কার্যক্রম</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            ইভেন্ট ও ক্যাম্পেইন আপডেট
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            আমাদের আসন্ন সমাবেশ ও কার্যক্রমে অংশ নিন
          </p>
        </div>
        
        {/* Events Grid - Glass cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {upcomingEvents.map((event, index) => (
            <div 
              key={index}
              className="glass-panel rounded-2xl hover:shadow-xl transition-all duration-300 overflow-hidden animate-slide-up group hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Event Type Badge */}
              <div className="cta-gradient px-6 py-3 flex items-center justify-between">
                <span className="text-primary-foreground font-bold">{event.type}</span>
                <div className="flex items-center gap-2 text-primary-foreground/90">
                  <Users className="w-4 h-4" />
                  <span className="text-sm font-medium">{event.attendees}</span>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-4">{event.title}</h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Calendar className="w-4 h-4 text-primary" />
                    </div>
                    <span className="font-medium">{event.date}</span>
                  </div>
                  
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Clock className="w-4 h-4 text-primary" />
                    </div>
                    <span className="font-medium">{event.time}</span>
                  </div>
                  
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <MapPin className="w-4 h-4 text-primary" />
                    </div>
                    <span className="font-medium">{event.location}</span>
                  </div>
                </div>
                
                <Button 
                  onClick={scrollToVolunteer}
                  variant="cta"
                  className="w-full font-bold"
                >
                  ইভেন্টে যোগ দিন
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
