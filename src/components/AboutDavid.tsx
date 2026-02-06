import { motion } from "framer-motion";
import davidCelebrating from "@/assets/david-celebrating.png";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";

const AboutDavid = () => {
  const profileItems = [
    { label: "FULL NAME", value: "David Munyua" },
    { label: "AGE", value: "30 Years" },
    { label: "BIRTHPLACE", value: "Murang'a, Kenya" },
    { label: "PROFESSION", value: "Veterinarian" }
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
                  About David
                </p>
              </FadeInUp>
              
              <FadeInUp delay={0.1}>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-extralight text-foreground mb-10 leading-[1.1]">
                  From Murang'a to 
                  <span className="block text-foreground/70"> World Stage</span>
                </h2>
              </FadeInUp>
              
              <StaggerContainer className="space-y-7">
                <StaggerItem>
                  <p className="text-lg text-muted-foreground leading-relaxed font-light">
                    David Munyua is a 30-year-old Kenyan professional darts player who made history 
                    at the PDC World Darts Championship by stunning world No.18 Mike De Decker 
                    in a dramatic first-round upset at Alexandra Palace in London.
                  </p>
                </StaggerItem>
                
                <StaggerItem>
                  <p className="text-lg text-muted-foreground leading-relaxed font-light">
                    The Murang'a-born veterinarian became the first Kenyan player ever to win a match 
                    at the World Darts Championship, guaranteeing himself a minimum payout of £15,000 
                    (approximately Ksh 2.59 million).
                  </p>
                </StaggerItem>
                
                <StaggerItem>
                  <blockquote className="border-l-2 border-foreground/20 pl-8 my-10">
                    <p className="text-xl md:text-2xl font-serif font-light text-foreground/80 italic leading-relaxed">
                      "I first picked up darts in a bar while having a drink with a friend. 
                      When my friend stepped up to play, I joined in thinking 'This looks fun.' 
                      The next day, I bought my own board."
                    </p>
                  </blockquote>
                </StaggerItem>
                
                <StaggerItem>
                  <p className="text-lg text-muted-foreground leading-relaxed font-light">
                    Away from darts, David works full-time as a veterinarian—balancing his professional 
                    career with a sporting journey that began only three years ago. His remarkable 
                    rise proves that with passion and dedication, extraordinary things are possible.
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
                    src={davidCelebrating} 
                    alt="David Munyua celebrating at the World Darts Championship"
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <p className="text-white font-serif font-light text-lg">Historic Victory at Alexandra Palace</p>
                    <p className="text-white/60 text-sm mt-1 tracking-wide">December 2025</p>
                  </div>
                </motion.div>
              </FadeInUp>
              
              {/* Profile Card */}
              <FadeInUp delay={0.3}>
                <div className="bg-card p-8 border border-border/50">
                  <h3 className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-8 font-medium">
                    Profile
                  </h3>
                  <div className="grid grid-cols-2 gap-8">
                    {profileItems.map((item, index) => (
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
              
              {/* Achievement Highlight */}
              <FadeInUp delay={0.4}>
                <div className="bg-foreground text-background p-8">
                  <h3 className="text-xs tracking-[0.3em] uppercase text-background/60 mb-5 font-medium">
                    Historic Achievement
                  </h3>
                  <p className="text-3xl md:text-4xl font-serif font-extralight mb-3">
                    First Kenyan
                  </p>
                  <p className="text-background/70 font-light">
                    to win a match at the PDC World Darts Championship
                  </p>
                  <p className="text-xs tracking-[0.15em] uppercase text-background/50 mt-6">
                    December 18, 2025 • Alexandra Palace, London
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

export default AboutDavid;
