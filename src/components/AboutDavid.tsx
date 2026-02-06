import { motion } from "framer-motion";
import foundationEvent from "@/assets/foundation-event.png";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";

const AboutFoundation = () => {
  const foundationStats = [
    { label: "Founded", value: "2023" },
    { label: "Location", value: "Murang'a, Kenya" },
    { label: "Programs", value: "Youth Development & Sports" },
    { label: "Impact", value: "1000+ youths reached" },
  ];

  return (
    <section id="about" className="py-28 md:py-36 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            {/* Story Content */}
            <div>
              <FadeInUp>
                <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-5 font-medium">
                  About the Foundation
                </p>
              </FadeInUp>
              
              <FadeInUp delay={0.1}>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-extralight text-foreground mb-10 leading-[1.1]">
                  Empowering Youth & <span className="block text-foreground/70">Growing Darts in Kenya</span>
                </h2>
              </FadeInUp>
              
              <StaggerContainer className="space-y-7">
                <StaggerItem>
                  <p className="text-lg text-muted-foreground leading-relaxed font-light">
                    The David Munyua Dart Foundation is dedicated to nurturing young talent across Kenya,
                    providing access to sports facilities, mentorship, and education. Our mission is to 
                    inspire and empower the next generation through the sport of darts and holistic programs.
                  </p>
                </StaggerItem>
                
                <StaggerItem>
                  <p className="text-lg text-muted-foreground leading-relaxed font-light">
                    Since our founding in 2023, we have organized nationwide competitions, workshops, 
                    and community outreach programs, impacting over 1000 youths across the country.
                  </p>
                </StaggerItem>
                
                <StaggerItem>
                  <blockquote className="border-l-2 border-foreground/20 pl-8 my-10">
                    <p className="text-xl md:text-2xl font-serif font-light text-foreground/80 italic leading-relaxed">
                      "Our vision is to create opportunities where talent meets guidance, 
                      turning passion into success and inspiring a generation to achieve the extraordinary."
                    </p>
                  </blockquote>
                </StaggerItem>
                
                <StaggerItem>
                  <p className="text-lg text-muted-foreground leading-relaxed font-light">
                    By combining mentorship programs, professional coaching, and community engagement,
                    the Foundation ensures that sports are accessible, inspiring, and transformative 
                    for young Kenyans nationwide.
                  </p>
                </StaggerItem>
              </StaggerContainer>
            </div>
            
            {/* Image & Stats */}
            <div className="space-y-8 lg:sticky lg:top-32">
              {/* Featured Image */}
              <FadeInUp delay={0.2}>
                <motion.div 
                  className="relative overflow-hidden group"
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  <img 
                    src={foundationEvent} 
                    alt="David Munyua Foundation event"
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <p className="text-white font-serif font-light text-lg">Youth Empowerment Event</p>
                    <p className="text-white/60 text-sm mt-1 tracking-wide">2025</p>
                  </div>
                </motion.div>
              </FadeInUp>
              
              {/* Foundation Stats */}
              <FadeInUp delay={0.3}>
                <div className="bg-card p-8 border border-border/50">
                  <h3 className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-8 font-medium">
                    Foundation Stats
                  </h3>
                  <div className="grid grid-cols-2 gap-8">
                    {foundationStats.map((item, index) => (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      >
                        <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">{item.label}</p>
                        <p className="text-lg font-serif font-light">{item.value}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </FadeInUp>
              
              {/* Highlight */}
              <FadeInUp delay={0.4}>
                <div className="bg-foreground text-background p-8">
                  <h3 className="text-xs tracking-[0.3em] uppercase text-background/60 mb-5 font-medium">
                    Foundation Milestone
                  </h3>
                  <p className="text-3xl md:text-4xl font-serif font-extralight mb-3">
                    1000+ Youths
                  </p>
                  <p className="text-background/70 font-light">
                    Reached through programs, mentorship, and competitions across Kenya
                  </p>
                  <p className="text-xs tracking-[0.15em] uppercase text-background/50 mt-6">
                    Since 2023
                  </p>
                </div>
              </FadeInUp>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFoundation;
