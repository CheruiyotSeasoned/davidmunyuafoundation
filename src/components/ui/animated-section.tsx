import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export const FadeInUp = ({ children, className, delay = 0 }: AnimatedSectionProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ 
      duration: 0.8, 
      delay,
      ease: [0.16, 1, 0.3, 1]
    }}
    className={className}
  >
    {children}
  </motion.div>
);

export const FadeIn = ({ children, className, delay = 0 }: AnimatedSectionProps) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ 
      duration: 0.6, 
      delay,
      ease: [0.16, 1, 0.3, 1]
    }}
    className={className}
  >
    {children}
  </motion.div>
);

export const ScaleIn = ({ children, className, delay = 0 }: AnimatedSectionProps) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ 
      duration: 0.6, 
      delay,
      ease: [0.16, 1, 0.3, 1]
    }}
    className={className}
  >
    {children}
  </motion.div>
);

export const StaggerContainer = ({ children, className }: { children: ReactNode; className?: string }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    variants={{
      visible: {
        transition: {
          staggerChildren: 0.1
        }
      }
    }}
    className={className}
  >
    {children}
  </motion.div>
);

export const StaggerItem = ({ children, className }: { children: ReactNode; className?: string }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: {
          duration: 0.6,
          ease: [0.16, 1, 0.3, 1]
        }
      }
    }}
    className={className}
  >
    {children}
  </motion.div>
);

export const HoverScale = ({ children, className, scale = 1.02 }: { children: ReactNode; className?: string; scale?: number }) => (
  <motion.div
    whileHover={{ scale }}
    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

export const HoverLift = ({ children, className }: { children: ReactNode; className?: string }) => (
  <motion.div
    whileHover={{ y: -4 }}
    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);
