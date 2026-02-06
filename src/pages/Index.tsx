import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import AboutDavid from "@/components/AboutDavid";
import Mission from "@/components/Mission";
import Achievements from "@/components/Achievements";
import Donate from "@/components/Donate";
import Contact from "@/components/Contact";
import { FadeInUp } from "@/components/ui/animated-section";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <AboutDavid />
      <Mission />
      <Achievements />
      <Donate />
      <Contact />
      
      {/* Footer */}
      <footer className="py-12 bg-muted/30 border-t border-border/50">
        <div className="container mx-auto px-6">
          <FadeInUp>
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-3">
                <span className="text-xl font-serif font-light text-foreground">DMF</span>
                <span className="text-sm text-muted-foreground font-light">David Munyua Foundation</span>
              </div>
              <p className="text-sm text-muted-foreground text-center font-light">
                © {new Date().getFullYear()} David Munyua Foundation. All rights reserved.
              </p>
              <p className="text-sm text-muted-foreground font-light">
                Growing darts in Kenya 🇰🇪
              </p>
            </div>
          </FadeInUp>
        </div>
      </footer>
    </div>
  );
};

export default Index;
