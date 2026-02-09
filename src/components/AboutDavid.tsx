import { motion } from "framer-motion";
import davidCelebrating from "@/assets/david-celebrating.png";
import foundationEvent from "@/assets/foundation-event.png";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";

const AboutFoundation = () => {
  const profileItems = [
    { label: "FOUNDER", value: "David Munyua" },
    { label: "YEAR ESTABLISHED", value: "2023" },
    { label: "HEADQUARTERS", value: "Murang'a, Kenya" },
    { label: "FOCUS AREAS", value: "Youth, Education, Wildlife & Animal Welfare" }
  ];

  return (
    <section id="about" className="py-28 md:py-36 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            {/* Story & Mission Content */}
            <div>
              <FadeInUp>
                <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-5 font-medium">
                  About the Foundation
                </p>
              </FadeInUp>
              
              <FadeInUp delay={0.1}>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-extralight text-foreground mb-10 leading-[1.1]">
                  From Professional Darts to 
                  <span className="block text-foreground/70"> Community Impact</span>
                </h2>
              </FadeInUp>
              
              <StaggerContainer className="space-y-7">
                {/* David’s Story Intro */}
                <StaggerItem>
                  <p className="text-lg text-muted-foreground leading-relaxed font-light">
                    Our founder made history as the first Kenyan to win a match at the PDC World Darts Championship, proving that with belief, discipline, and opportunity,
                     Kenyan talent can stand proudly on the world stage. That moment was more than a personal victory —it was a symbol of what is possible for young people across Kenya and Africa who dare to dream..
                  </p>
                </StaggerItem>

                {/* Transition to Foundation Mission */}
                <StaggerItem>
                  <p className="text-lg text-muted-foreground leading-relaxed font-light">
                    Inspired by his own journey, our founder established the <strong>David Munyua Dart Foundation</strong> to create the same opportunities that shaped his life.
                     He envisioned a platform dedicated to nurturing youth talent through training, mentorship, and the provision of professional darts kits — giving young people not just equipment, but belief, structure, 
                    and a pathway to excellence. Through the Foundation, our founder is committed to building Africa’s next generation of champions, both in sport and in life.
                  </p>
                </StaggerItem>

                {/* Vision & Impact */}
                <StaggerItem>
                  <p className="text-lg text-muted-foreground leading-relaxed font-light">
                    Beyond sport, our founder is a veterinarian deeply devoted to his community, working to improve animal health and welfare. 
                    His connection to animals and nature, combined with his experience representing Kenya on the global stage, inspired a deeper purpose. 
                    Our founder believes that the same platform that elevated his voice in sport can be used to promote and preserve Kenya’s rich wildlife and biodiversity,
                     and to inspire others to value and protect the country’s natural heritage.
                  </p>
                </StaggerItem>

                {/* Quote */}
                <StaggerItem>
                  <blockquote className="border-l-2 border-foreground/20 pl-8 my-10">
                    <p className="text-xl md:text-2xl font-serif font-light text-foreground/80 italic leading-relaxed">
                      "Our mission is to combine passion, education, and care for the environment, 
                      creating opportunities for youth to grow, learn, and make a lasting impact."
                    </p>
                  </blockquote>
                </StaggerItem>

                {/* Animal & Education Focus */}
                <StaggerItem>
                  <p className="text-lg text-muted-foreground leading-relaxed font-light">
                    The David Munyua Dart Foundation reflects our founder’s personal mission — to give back, to open doors, and to use sport, education, and conservation as tools for lasting impact.
                     His story is not only about breaking barriers, but about building pathways so that others can rise, believe in themselves, and shape a stronger future for Kenya.
                  </p>
                </StaggerItem>
              </StaggerContainer>
            </div>
            
            {/* Images & Stats */}
            <div className="space-y-8 lg:sticky lg:top-32">
              {/* Celebration Image */}
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
                    <p className="text-white font-serif font-light text-lg">Historic Victory</p>
                    <p className="text-white/60 text-sm mt-1 tracking-wide">December 2025</p>
                  </div>
                </motion.div>
              </FadeInUp>

              {/* Foundation Event Image */}
              <FadeInUp delay={0.25}>
                <motion.div 
                  className="relative overflow-hidden group"
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  <img 
                    src={foundationEvent} 
                    alt="David Munyua Foundation community event"
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <p className="text-white font-serif font-light text-lg">Community & Wildlife Programs</p>
                    <p className="text-white/60 text-sm mt-1 tracking-wide">2025</p>
                  </div>
                </motion.div>
              </FadeInUp>

              {/* Foundation Stats */}
              <FadeInUp delay={0.3}>
                <div className="bg-card p-8 border border-border/50">
                  <h3 className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-8 font-medium">
                    Foundation Profile
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
              
              {/* Milestone Highlight */}
              <FadeInUp delay={0.4}>
                <div className="bg-foreground text-background p-8">
                  <h3 className="text-xs tracking-[0.3em] uppercase text-background/60 mb-5 font-medium">
                    Impact Highlight
                  </h3>
                  <p className="text-3xl md:text-4xl font-serif font-extralight mb-3">
                    1000+ Youths
                  </p>
                  <p className="text-background/70 font-light">
                    Engaged through sports, education, and wildlife conservation programs across Kenya
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
