import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Heart, Mail } from "lucide-react";
import { FadeInUp, HoverLift } from "@/components/ui/animated-section";

const Donate = () => {
  const bankDetails = [
    { label: "Account Name", value: "David Munyua Foundation" },
    { label: "Bank Name", value: "Equity Bank Kenya" },
    { label: "Account Number", value: "Contact for details" },
    { label: "Swift Code", value: "EABORENA" }
  ];

  return (
    <section id="donate" className="py-28 md:py-36 bg-foreground text-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20">
            {/* Left - Message */}
            <div>
              <FadeInUp>
                <p className="text-xs tracking-[0.3em] uppercase text-background/60 mb-5 font-medium">
                  Get Involved
                </p>
              </FadeInUp>
              
              <FadeInUp delay={0.1}>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-extralight text-background mb-10 leading-[1.1]">
                  Help Us Grow
                  <span className="block text-background/70"> Darts in Africa</span>
                </h2>
              </FadeInUp>
              
              <FadeInUp delay={0.2}>
                <p className="text-xl text-background/70 leading-relaxed mb-10 font-light">
                  Your contribution directly supports equipment for aspiring players, 
                  training facilities, youth programs, and helping talented Kenyans 
                  compete on the world stage.
                </p>
              </FadeInUp>
              
              <FadeInUp delay={0.3}>
                <blockquote className="border-l-2 border-background/30 pl-8 mb-10">
                  <p className="text-lg text-background/80 italic font-light leading-relaxed">
                    "I had to rely on sponsorship support to fund my journey from Nairobi to London. 
                    Together, we can ensure the next generation of African darts players 
                    have the support they need to achieve their dreams."
                  </p>
                </blockquote>
              </FadeInUp>
              
              <FadeInUp delay={0.4}>
                <div className="flex items-center gap-4 text-background/60">
                  <Heart className="w-5 h-5" />
                  <span className="font-light">All donations contribute directly to our programs</span>
                </div>
              </FadeInUp>
            </div>
            
            {/* Right - Donation Info */}
            <div className="space-y-8">
              {/* Bank Details */}
              <FadeInUp delay={0.2}>
                <HoverLift>
                  <div className="bg-background text-foreground p-10">
                    <h3 className="text-xl font-serif font-light mb-8">Bank Transfer</h3>
                    <div className="space-y-0">
                      {bankDetails.map((item, index) => (
                        <motion.div 
                          key={index}
                          className="flex justify-between py-4 border-b border-border/50 last:border-0"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + index * 0.05 }}
                        >
                          <span className="text-muted-foreground font-light">{item.label}</span>
                          <span className="font-medium">{item.value}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </HoverLift>
              </FadeInUp>
              
              {/* M-Pesa */}
              <FadeInUp delay={0.3}>
                <HoverLift>
                  <div className="bg-background/10 backdrop-blur-sm border border-background/20 p-10">
                    <h3 className="text-xl font-serif font-light text-background mb-4">M-Pesa (Kenya)</h3>
                    <p className="text-background/60 mb-8 font-light">
                      Quick and easy mobile money donations
                    </p>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-background/60 font-light">Paybill Number</span>
                        <span className="font-medium text-background">Coming Soon</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-background/60 font-light">Account Name</span>
                        <span className="font-medium text-background">David Munyua Foundation</span>
                      </div>
                    </div>
                  </div>
                </HoverLift>
              </FadeInUp>
              
              {/* Contact for Donations */}
              <FadeInUp delay={0.4}>
                <div className="text-center p-8 border border-background/20">
                  <p className="text-background/60 mb-6 font-light">
                    For sponsorship inquiries and large donations
                  </p>
                  <Button 
                    variant="outline" 
                    className="w-full bg-transparent border-background/30 text-background hover:bg-background hover:text-foreground transition-all duration-500" 
                    asChild
                  >
                    <a href="mailto:info@davidmunyuafoundation.org">
                      <Mail className="w-4 h-4 mr-3" />
                      Contact Us
                    </a>
                  </Button>
                </div>
              </FadeInUp>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donate;
