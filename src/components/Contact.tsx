import { motion } from "framer-motion";
import { Instagram, Mail, MapPin } from "lucide-react";
import { FadeInUp, StaggerContainer, StaggerItem, HoverLift } from "@/components/ui/animated-section";

const Contact = () => {
  const contactItems = [
    {
      icon: Mail,
      label: "EMAIL",
      value: "info@davidmunyuafoundation.org",
      href: "mailto:info@davidmunyuafoundation.org"
    },
    {
      icon: MapPin,
      label: "LOCATION",
      value: "Nairobi, Kenya",
      href: null
    },
    {
      icon: Instagram,
      label: "FOLLOW US",
      value: "@davidmunyua",
      href: "https://instagram.com/davidmunyua"
    }
  ];

  const partnershipItems = [
    "Equipment sponsorship",
    "Event sponsorship",
    "Youth program funding",
    "Training facility support"
  ];

  return (
    <section id="contact" className="py-28 md:py-36 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20">
            <div>
              <FadeInUp>
                <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-5 font-medium">
                  Get in Touch
                </p>
              </FadeInUp>
              
              <FadeInUp delay={0.1}>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-extralight text-foreground mb-10 leading-[1.1]">
                  Contact Us
                </h2>
              </FadeInUp>
              
              <FadeInUp delay={0.2}>
                <p className="text-lg text-muted-foreground leading-relaxed mb-14 font-light">
                  Whether you want to support our mission, partner with us, or learn more 
                  about how you can help grow darts in Kenya—we'd love to hear from you.
                </p>
              </FadeInUp>
              
              <StaggerContainer className="space-y-10">
                {contactItems.map((item, index) => (
                  <StaggerItem key={index}>
                    <motion.div 
                      className="flex items-start gap-6 group"
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center flex-shrink-0 group-hover:bg-foreground group-hover:text-background transition-all duration-500">
                        <item.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">{item.label}</h4>
                        {item.href ? (
                          <a 
                            href={item.href}
                            target={item.href.startsWith('http') ? '_blank' : undefined}
                            rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="text-xl font-serif font-light hover:text-muted-foreground transition-colors duration-300"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-xl font-serif font-light">{item.value}</p>
                        )}
                      </div>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
            
            <div className="space-y-8">
              <FadeInUp delay={0.2}>
                <HoverLift>
                  <div className="bg-muted/50 p-10">
                    <h3 className="text-xl font-serif font-light mb-6">Partner With Us</h3>
                    <p className="text-muted-foreground leading-relaxed mb-8 font-light">
                      We're looking for corporate sponsors, sports equipment companies, 
                      and organizations that share our vision for growing darts in Africa.
                    </p>
                    <ul className="space-y-4">
                      {partnershipItems.map((item, index) => (
                        <motion.li 
                          key={index}
                          className="flex items-center gap-4 text-muted-foreground font-light"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + index * 0.05 }}
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-foreground" />
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </HoverLift>
              </FadeInUp>
              
              <FadeInUp delay={0.3}>
                <HoverLift>
                  <div className="border border-border/50 p-10">
                    <h3 className="text-xl font-serif font-light mb-6">Media Inquiries</h3>
                    <p className="text-muted-foreground leading-relaxed font-light">
                      For press, interviews, and media requests, please contact us 
                      at{' '}
                      <a 
                        href="mailto:media@davidmunyuafoundation.org" 
                        className="text-foreground hover:text-muted-foreground transition-colors duration-300 underline underline-offset-4"
                      >
                        media@davidmunyuafoundation.org
                      </a>
                    </p>
                  </div>
                </HoverLift>
              </FadeInUp>
              
              {/* Footer Note */}
              <FadeInUp delay={0.4}>
                <div className="pt-10 border-t border-border/50">
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">
                    The David Munyua Foundation is committed to transparency and accountability. 
                    All donations are used to support our programs in growing darts across Kenya and Africa.
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

export default Contact;
