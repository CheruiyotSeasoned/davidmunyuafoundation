import { motion } from "framer-motion";
import heroImage from "@/assets/david-throwing.png";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
        style={{ backgroundImage: `url(${heroImage})` }}
        initial={{ scale: 1.2 }}
        animate={{ scale: 1.1 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6 pt-20">
        {/* Foundation Logo/Name */}
        <motion.div 
          className="mb-10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
      
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-extralight text-white tracking-tight">
            David Munyua
          </h1>
          <motion.p 
            className="text-3xl md:text-4xl lg:text-5xl font-serif font-light text-white/90 mt-3 tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            FOUNDATION
          </motion.p>
        </motion.div>
        
        {/* Tagline */}
        <motion.div 
          className="max-w-3xl mx-auto mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-lg md:text-xl lg:text-2xl text-white/85 font-light leading-relaxed italic">
            "It is a very big moment for the sport itself, for Africa and Kenya. 
            The sport can grow. I'm happy I did my best."
          </p>
          {/* <p className="text-xs tracking-[0.2em] uppercase text-white/50 mt-6 font-light">
            — David Munyua, December 2025
          </p> */}
        </motion.div>
        
        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <Button 
            size="lg" 
            className="bg-white text-black hover:bg-white/90 px-10 py-6 text-sm font-medium tracking-widest uppercase transition-all duration-500 hover:tracking-[0.2em] shadow-2xl hover:shadow-white/20"
            onClick={() => document.getElementById('donate')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Support the Foundation
          </Button>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        <span className="text-xs tracking-[0.2em] uppercase text-white/40 font-light">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-white/40" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
