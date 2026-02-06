import { motion } from "framer-motion";
import davidChelsea from "@/assets/david-chelsea.png";
import { FadeInUp, StaggerContainer, StaggerItem, HoverLift } from "@/components/ui/animated-section";

const Achievements = () => {
  const milestones = [
    {
      year: "2022",
      title: "The Beginning",
      description: "First picked up darts at a local bar in Kenya. What started as fun with a friend became a passion that would change everything."
    },
    {
      year: "2024",
      title: "African Champion",
      description: "Won the African Darts Group Championship qualifier, defeating Cameron Carolissen in the final to secure a spot at the World Championship."
    },
    {
      year: "2025",
      title: "Making History",
      description: "Became the first Kenyan to qualify for the PDC World Darts Championship at Alexandra Palace, London."
    },
    {
      year: "Dec 2025",
      title: "The Upset",
      description: "Stunned world No.18 Mike De Decker 3-2, becoming the first Kenyan to win a match at the World Championship."
    }
  ];

  const matchStats = [
    { label: "Sets Won", value: "3" },
    { label: "Historic Checkout", value: "135" },
    { label: "Match Darts", value: "4th" },
    { label: "Prize Won", value: "£15K" }
  ];

  return (
    <section id="achievements" className="py-28 md:py-36 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-24">
            <FadeInUp>
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-5 font-medium">
                Milestones
              </p>
            </FadeInUp>
            <FadeInUp delay={0.1}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-extralight text-foreground mb-8 leading-[1.1]">
                A Historic Journey
              </h2>
            </FadeInUp>
            <FadeInUp delay={0.2}>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
                From a bar in Murang'a to the iconic Alexandra Palace—follow the incredible 
                journey that made David Munyua a pioneer for African darts.
              </p>
            </FadeInUp>
          </div>
          
          {/* Featured Match */}
          <FadeInUp delay={0.3}>
            <div className="bg-card border border-border/50 p-10 md:p-14 mb-24">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
                <div>
                  <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3 font-medium">
                    Historic Victory
                  </p>
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif font-extralight text-foreground">
                    Munyua 3 - 2 De Decker
                  </h3>
                  <p className="text-muted-foreground mt-3 font-light">
                    PDC World Darts Championship • December 18, 2025
                  </p>
                </div>
              </div>
              
              <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                {matchStats.map((stat, index) => (
                  <StaggerItem key={index}>
                    <HoverLift>
                      <div className="text-center p-6 bg-muted/50 border border-border/30">
                        <p className="text-3xl md:text-4xl font-serif font-extralight text-foreground">{stat.value}</p>
                        <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mt-3">{stat.label}</p>
                      </div>
                    </HoverLift>
                  </StaggerItem>
                ))}
              </StaggerContainer>
              
              <div className="bg-foreground/5 border-l-2 border-foreground/20 p-8">
                <p className="text-lg text-muted-foreground leading-relaxed font-light">
                  Coming from 2-0 down, Munyua produced one of the tournament's defining moments—a 
                  stunning outer bull, treble 20, bullseye checkout of 135 to level the match. 
                  With the Ally Pally crowd roaring, he sealed victory on his fourth match dart 
                  with double 20.
                </p>
              </div>
            </div>
          </FadeInUp>
          
          {/* Beyond Darts Section */}
          <FadeInUp delay={0.2}>
            <div className="mb-24">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-5 font-medium">
                    Beyond the Board
                  </p>
                  <h3 className="text-3xl md:text-4xl font-serif font-extralight text-foreground mb-8 leading-[1.1]">
                    A Global Ambassador
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-5 font-light">
                    David's historic achievement has opened doors beyond the world of darts. 
                    His journey has inspired millions across Africa and garnered recognition 
                    from global sports communities.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed font-light">
                    From Alexandra Palace to Stamford Bridge, David continues to represent 
                    Kenya with pride, proving that African athletes can compete at the 
                    highest levels in any sport.
                  </p>
                </div>
                <motion.div 
                  className="relative overflow-hidden group"
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  <img 
                    src={davidChelsea} 
                    alt="David Munyua at Chelsea FC - Stamford Bridge"
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <p className="text-white font-serif font-light text-lg">David at Stamford Bridge</p>
                    <p className="text-white/60 text-sm mt-1 tracking-wide">Chelsea FC, London</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </FadeInUp>
          
          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border/50 md:-translate-x-1/2" />
            
            {/* Milestones */}
            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <motion.div 
                  key={index} 
                  className={`relative flex flex-col md:flex-row gap-10 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {/* Timeline Dot */}
                  <motion.div 
                    className="absolute left-0 md:left-1/2 w-3 h-3 rounded-full bg-foreground -translate-x-1/2 mt-2"
                    whileHover={{ scale: 1.5 }}
                  />
                  
                  {/* Content */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-20 md:text-right' : 'md:pl-20'} pl-8 md:pl-0`}>
                    <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3 font-medium">
                      {milestone.year}
                    </p>
                    <h3 className="text-2xl md:text-3xl font-serif font-light text-foreground mb-4">
                      {milestone.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed font-light">
                      {milestone.description}
                    </p>
                  </div>
                  
                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
