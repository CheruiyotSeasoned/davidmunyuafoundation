import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import Logo from "@/assets/lo.png";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (!isHomePage) {
      window.location.href = `/#${sectionId}`;
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navLinks = [
    { label: "ABOUT", action: () => scrollToSection('about') },
    { label: "MISSION", action: () => scrollToSection('mission') },
    { label: "GALLERY", to: "/gallery" },
    { label: "ACHIEVEMENTS", action: () => scrollToSection('achievements') },
    { label: "CONTACT", action: () => scrollToSection('contact') }
  ];

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-md border-b border-border/50 py-4" 
          : "bg-transparent py-6"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center">
  <motion.img 
    src={Logo}
    alt="MR Why Not"
    className={`h-20 md:h-24 w-auto object-contain transition-all duration-300 ${
      isScrolled ? "dark:invert" : "invert dark:invert-0"
    }`}
    whileHover={{ scale: 1.06 }}
    transition={{ duration: 0.3 }}
  />
</Link>


        
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => (
            link.to ? (
              <Link
                key={link.label}
                to={link.to}
                className={`text-xs tracking-[0.15em] font-medium transition-all duration-300 hover:opacity-60 ${
                  isScrolled ? "text-foreground" : "text-white"
                }`}
              >
                {link.label}
              </Link>
            ) : (
              <button
                key={link.label}
                onClick={link.action}
                className={`text-xs tracking-[0.15em] font-medium transition-all duration-300 hover:opacity-60 ${
                  isScrolled ? "text-foreground" : "text-white"
                }`}
              >
                {link.label}
              </button>
            )
          ))}
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button 
              size="sm" 
              className={`text-xs tracking-[0.15em] font-medium px-6 py-5 transition-all duration-500 ${
                isScrolled 
                  ? "bg-foreground text-background hover:bg-foreground/90" 
                  : "bg-white text-black hover:bg-white/90"
              }`}
              onClick={() => scrollToSection('donate')}
            >
              DONATE
            </Button>
          </motion.div>
        </div>

        <div className="hidden lg:flex items-center space-x-4">
          <ThemeToggle />
        </div>

        <Button
          variant="ghost"
          size="icon"
          className={`lg:hidden ${isScrolled ? "text-foreground" : "text-white"}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </Button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="lg:hidden bg-background border-b border-border"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="container mx-auto px-6 py-8 space-y-6">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {link.to ? (
                    <Link 
                      to={link.to}
                      className="block text-xs tracking-[0.2em] text-foreground font-medium py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <button 
                      onClick={link.action}
                      className="block w-full text-left text-xs tracking-[0.2em] text-foreground font-medium py-2"
                    >
                      {link.label}
                    </button>
                  )}
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
              >
                <Button 
                  className="w-full bg-foreground text-background hover:bg-foreground/90 text-xs tracking-[0.15em] py-5"
                  onClick={() => scrollToSection('donate')}
                >
                  DONATE
                </Button>
              </motion.div>
              
              {/* Mobile Theme Toggle */}
              <motion.div 
                className="pt-6 border-t border-border"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <ThemeToggle />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;
