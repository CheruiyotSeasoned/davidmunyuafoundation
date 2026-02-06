import { motion } from "framer-motion";
import { Target, Users, Trophy, Heart } from "lucide-react";
import { FadeInUp, StaggerContainer, StaggerItem, HoverLift } from "@/components/ui/animated-section";

const Mission = () => {
  const pillars = [
    {
      icon: Target,
      title: "Grow Darts in Kenya",
      description: "Establish darts clubs, training facilities, and youth programs across Kenya to nurture the next generation of champions."
    },
    {
      icon: Users,
      title: "Youth Development",
      description: "Provide opportunities for young Kenyans to discover and develop their talent in darts through scholarships and training."
    },
    {
      icon: Trophy,
      title: "Competitive Excellence",
      description: "Support talented players to compete at international levels and represent Kenya on the world stage."
    },
    {
      icon: Heart,
      title: "Community Impact",
      description: "Use sports as a vehicle for positive change, teaching discipline, focus, and determination to youth across Africa."
    }
  ];

  const shortTermGoals = [
    "Establish the first professional darts training center in Nairobi",
    "Launch youth darts programs in 10 counties across Kenya",
    "Provide equipment and training to 100+ aspiring players"
  ];

  const longTermGoals = [
    "Make Kenya a recognized force in international darts",
    "Establish the African Darts Championship as a premier event",
    "Create sustainable pathways for African players to compete globally"
  ];

  return (
    <section id="mission" className="py-28 md:py-36 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-24">
            <FadeInUp>
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-5 font-medium">
                About the Foundation
              </p>
            </FadeInUp>
            <FadeInUp delay={0.1}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-extralight text-foreground mb-8 leading-[1.1]">
                My Mission
              </h2>
            </FadeInUp>
            <FadeInUp delay={0.2}>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
                The David Munyua Foundation is dedicated to growing the sport of darts in Kenya 
                and across Africa, providing opportunities for talented youth to discover their 
                potential and represent our continent on the world stage.
              </p>
            </FadeInUp>
          </div>
          
          {/* Vision Quote */}
          <FadeInUp delay={0.3}>
            <div className="border-l-2 border-foreground/20 pl-10 md:pl-16 mb-24 max-w-4xl mx-auto">
              <blockquote className="text-2xl md:text-3xl font-serif font-extralight text-foreground/90 italic leading-relaxed mb-6">
                "I want to inspire the next generation. From picking up darts in a bar to 
                making history at Alexandra Palace—if I can do it, any young Kenyan can. 
                The sport can grow, and together we can put African darts on the world map."
              </blockquote>
              <cite className="text-sm tracking-[0.2em] uppercase text-muted-foreground font-medium not-italic">
                — David Munyua
              </cite>
            </div>
          </FadeInUp>
          
          {/* Pillars */}
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            {pillars.map((pillar, index) => (
              <StaggerItem key={index}>
                <HoverLift>
                  <div className="group p-8 bg-card border border-border/50 hover:border-foreground/20 transition-all duration-500 h-full">
                    <motion.div 
                      className="w-14 h-14 rounded-full bg-muted flex items-center justify-center mb-7 group-hover:bg-foreground group-hover:text-background transition-all duration-500"
                      whileHover={{ rotate: 5 }}
                    >
                      <pillar.icon className="w-6 h-6" />
                    </motion.div>
                    <h3 className="text-xl font-serif font-light mb-4 text-foreground">
                      {pillar.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed font-light text-sm">
                      {pillar.description}
                    </p>
                  </div>
                </HoverLift>
              </StaggerItem>
            ))}
          </StaggerContainer>
          
          {/* Goals */}
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
            <FadeInUp delay={0.1}>
              <div>
                <h3 className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-8 font-medium">
                  Short-Term Goals
                </h3>
                <ul className="space-y-6">
                  {shortTermGoals.map((goal, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-start gap-5 group"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    >
                      <span className="text-2xl font-serif font-extralight text-foreground/30 group-hover:text-foreground transition-colors duration-300">
                        {index + 1}
                      </span>
                      <span className="text-muted-foreground font-light leading-relaxed pt-1">
                        {goal}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </FadeInUp>
            <FadeInUp delay={0.2}>
              <div>
                <h3 className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-8 font-medium">
                  Long-Term Vision
                </h3>
                <ul className="space-y-6">
                  {longTermGoals.map((goal, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-start gap-5 group"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    >
                      <span className="text-2xl font-serif font-extralight text-foreground/30 group-hover:text-foreground transition-colors duration-300">
                        {index + 1}
                      </span>
                      <span className="text-muted-foreground font-light leading-relaxed pt-1">
                        {goal}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </FadeInUp>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
