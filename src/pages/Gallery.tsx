import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "@/components/Navigation";
import davidThrowing from "@/assets/david-throwing.png";
import davidCelebrating from "@/assets/david-celebrating.png";
import davidChelsea from "@/assets/david-chelsea.png";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";
import { X, Play, ChevronDown, ChevronUp } from "lucide-react";

interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
  category: string;
  story: string;
  videoUrl?: string;
  date: string;
}

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [activeFilter, setActiveFilter] = useState("all");
  const [expandedStory, setExpandedStory] = useState<string | null>(null);

  const images: GalleryImage[] = [
    {
      src: davidThrowing,
      alt: "David Munyua competing at PDC World Championship",
      caption: "David in action at Alexandra Palace, December 2025",
      category: "competition",
      date: "December 15, 2025",
      story: `The atmosphere at Alexandra Palace was electric as David Munyua stepped up to the oche for his first-round match at the PDC World Darts Championship. The crowd, a sea of passionate fans from around the globe, erupted as the Kenyan qualifier made his entrance.

For David, this moment was the culmination of years of dedication, countless hours of practice in Murang'a, and an unwavering belief in the impossible. Growing up in Kenya, where darts was virtually unknown, David had discovered the sport through a chance encounter at a local sports club. What started as curiosity quickly became an obsession.

"I remember watching videos of Phil Taylor and Michael van Gerwen online," David recalls. "I thought to myself, 'Why can't a Kenyan compete at this level?' That question drove me every single day."

The road to Alexandra Palace wasn't easy. With limited access to professional equipment and no established darts infrastructure in Kenya, David had to be creative. He practiced for hours each day, sometimes in sweltering heat, perfecting his throw, studying the angles, and developing the mental fortitude required to compete at the highest level.

His breakthrough came at the African Darts Championship, where he dominated the competition, securing his spot in the PDC World Championship qualifiers. The qualifying tournament in Nairobi was a nerve-wracking affair, but David's precision and composure under pressure saw him through.

Now, standing on the world's biggest stage, David wasn't just representing himself – he was carrying the hopes and dreams of an entire nation. Every dart he threw was a statement: Kenya belongs in world darts.

The match itself was a masterclass in determination. David's opponent, a seasoned professional from England, underestimated the Kenyan newcomer. But David's accuracy was stunning – his three-dart averages consistently above 95, his checkout percentage remarkable for a debut appearance.

As the final dart hit the double 16 to seal his first-round victory, David raised his arms in triumph. The crowd's roar was deafening. History had been made. David Munyua had become the first Kenyan to win a match at the PDC World Darts Championship.`,
      videoUrl: "https://www.youtube.com/embed/ZppJc9N3Tyw" // Replace with actual video
    },
    {
      src: davidCelebrating,
      alt: "David Munyua celebrating historic victory",
      caption: "The moment of victory — first Kenyan to win at the World Championship",
      category: "victory",
      date: "December 15, 2025",
      story: `The moment the winning dart hit double 16, time seemed to stand still. David Munyua's arms shot up in the air, his face a mixture of disbelief, joy, and pure euphoria. The roar from the crowd at Alexandra Palace was thunderous, a standing ovation that seemed to shake the very foundations of the historic venue.

This wasn't just another victory in professional darts – this was a defining moment in sports history. David had become the first Kenyan ever to win a match at the PDC World Darts Championship, breaking barriers and shattering preconceptions about where darts excellence could come from.

In the post-match interview, David's voice trembled with emotion. "This is for Kenya," he said, tears welling in his eyes. "This is for every kid back home who's been told their dreams are too big, too impossible. I want them to know – nothing is impossible."

The significance of the moment wasn't lost on anyone. Messages of congratulation flooded in from across Africa and around the world. The Kenyan President tweeted his pride, sports personalities from various disciplines celebrated the achievement, and most importantly, young people across Kenya began to see darts – and themselves – differently.

Back in Murang'a, where David had honed his craft, the local community gathered to watch the match. When the winning dart landed, the celebration erupted. People poured into the streets, dancing, singing, celebrating not just David's victory, but what it represented – possibility, hope, and the power of unwavering determination.

David's coach, who had worked with him for five years, was overcome with emotion. "I always knew David had something special," he said. "But to see him handle the pressure, the expectation, the magnitude of this moment – that's what separates good players from champions."

The victory celebration continued long into the night. David's phone buzzed constantly with messages from fellow players, sports legends, and aspiring young dartists from Kenya and beyond. But perhaps the most touching moment came when David video-called his mother back in Kenya.

"Mama," he said, his voice breaking with emotion, "we did it. We showed the world what Kenyans can do."

This wasn't just a personal triumph – it was a cultural moment, a shift in perception, a door kicked open for future generations. David Munyua had proven that talent knows no borders, that excellence can emerge from anywhere, and that with dedication and belief, the impossible becomes possible.`,
      videoUrl: "https://www.youtube.com/embed/9lqfmk9Aa44" // Replace with actual video
    },
    {
      src: davidChelsea,
      alt: "David Munyua at Stamford Bridge",
      caption: "David at Stamford Bridge, London",
      category: "journey",
      date: "December 10, 2025",
      story: `Five days before his historic debut at the PDC World Championship, David Munyua stood on the hallowed turf of Stamford Bridge, home of Chelsea Football Club. For a lifelong Chelsea supporter from Murang'a, this moment was almost as surreal as his upcoming world championship appearance.

"Growing up in Kenya, I would wake up at odd hours to watch Chelsea matches," David reflected, his eyes scanning the iconic stadium. "Drogba, Lampard, Terry – these were my heroes. I learned about mental strength, about performing under pressure, from watching them. In many ways, they prepared me for this moment."

The visit to Stamford Bridge was arranged through a sponsor connection, but for David, it held deeper significance. Football and darts, while vastly different sports, share fundamental principles – precision, mental fortitude, handling pressure, and the ability to perform when it matters most.

As he walked through the stadium, David was invited to the Chelsea dressing room, the same room where legends had prepared for Champions League finals and crucial Premier League matches. The parallels weren't lost on him. In less than a week, he would be in his own dressing room at Alexandra Palace, preparing to make history.

A Chelsea club representative presented David with a personalized jersey – "MUNYUA 180" emblazoned on the back, combining his name with darts' perfect score. The symbolism was powerful: excellence recognizing excellence, one sport's elite acknowledging another's rising star.

"Standing here, I'm reminded that greatness isn't about where you come from," David said, his voice filled with determination. "It's about where you're going, what you're willing to sacrifice, and how badly you want to achieve your dreams."

David took to the pitch for a moment, standing at the center circle, taking in the atmosphere of the empty stadium. He closed his eyes and visualized the coming week – the walk to the oche, the crowd's energy, the weight of expectation, and the opportunity to show the world what Kenyan darts could achieve.

The Chelsea visit became a source of motivation. Back in his London hotel room, David placed the personalized jersey where he could see it every morning. It served as a reminder that he belonged on the world stage, that his journey from Murang'a to global competition was valid, worthy, and inspiring.

Local Chelsea supporters groups in London learned about David's upcoming championship appearance. Several pledged to attend his matches at Alexandra Palace, creating an unexpected Kenyan-Chelsea supporter contingent that would add to his cheering section.

This moment at Stamford Bridge represented more than sports tourism – it was a bridge between David's past dreams and his imminent reality, a connection between the boy who watched football from 8,000 kilometers away and the man about to compete for darts' greatest prize.`,
      videoUrl: "https://www.youtube.com/embed/Gu_JFhgl60E" // Replace with actual video
      
    }
  ];

  const categories = [
    { id: "all", label: "All" },
    { id: "competition", label: "Competition" },
    { id: "victory", label: "Victory" },
    { id: "journey", label: "Journey" }
  ];

  const filteredImages = activeFilter === "all" 
    ? images 
    : images.filter(img => img.category === activeFilter);

  const toggleStory = (src: string) => {
    setExpandedStory(expandedStory === src ? null : src);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 border-b border-border/50">
        <StaggerContainer className="max-w-7xl mx-auto">
          <StaggerItem>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-6">
                Gallery
              </h1>
              <div className="h-px w-24 bg-foreground mx-auto mb-8" />
              <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed">
                The Journey
              </p>
              <p className="text-sm md:text-base text-muted-foreground/70 mt-4 font-light">
                Capturing the historic moments of David Munyua's journey from Murang'a to the world stage at Alexandra Palace.
              </p>
            </motion.div>
          </StaggerItem>
        </StaggerContainer>
      </section>

      {/* Filter */}
      <section className="py-12 px-6 border-b border-border/50">
        <motion.div 
          className="max-w-7xl mx-auto flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`text-xs tracking-[0.2em] uppercase px-6 py-3 transition-all duration-300 border font-medium ${
                activeFilter === category.id
                  ? "border-foreground bg-foreground text-background"
                  : "border-border/50 text-muted-foreground hover:text-foreground hover:border-foreground"
              }`}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            layout
            className="grid grid-cols-1 gap-12"
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.src}
                  layout
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 40 }}
                  transition={{ 
                    duration: 0.6,
                    delay: index * 0.15,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  className="group"
                >
                  {/* Image and Video Section */}
                  <div className="grid md:grid-cols-2 gap-8 mb-6">
                    {/* Image */}
                    <motion.div
                      onClick={() => setSelectedImage(image)}
                      className="cursor-pointer overflow-hidden bg-muted/20 border border-border/50 aspect-[4/3]"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.4 }}
                    >
                      <motion.img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        layoutId={`image-${image.src}`}
                      />
                    </motion.div>

                    {/* Video */}
                    {image.videoUrl && (
                      <motion.div
                        className="relative overflow-hidden bg-black border border-border/50 aspect-[4/3]"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.4 }}
                      >
                        <iframe
                          src={image.videoUrl}
                          title={`Video: ${image.caption}`}
                          className="w-full h-full"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </motion.div>
                    )}
                  </div>

                  {/* Caption and Metadata */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs tracking-wider uppercase text-muted-foreground/70">
                        {image.category} • {image.date}
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-light mb-4">
                      {image.caption}
                    </h3>
                  </div>

                  {/* Story Section */}
                  <div className="border border-border/50 rounded-sm overflow-hidden">
                    <button
                      onClick={() => toggleStory(image.src)}
                      className="w-full px-6 py-4 flex items-center justify-between bg-muted/10 hover:bg-muted/20 transition-colors"
                    >
                      <span className="text-sm tracking-wider uppercase font-medium">
                        {expandedStory === image.src ? "Hide Story" : "Read the Full Story"}
                      </span>
                      <motion.div
                        animate={{ rotate: expandedStory === image.src ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown size={20} />
                      </motion.div>
                    </button>

                    <AnimatePresence>
                      {expandedStory === image.src && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 py-8 bg-muted/5">
                            <div className="prose prose-sm md:prose-base max-w-none">
                              {image.story.split('\n\n').map((paragraph, i) => (
                                <motion.p
                                  key={i}
                                  initial={{ opacity: 0, y: 20 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: i * 0.1 }}
                                  className="text-muted-foreground leading-relaxed mb-4 last:mb-0"
                                >
                                  {paragraph}
                                </motion.p>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Divider */}
                  {index < filteredImages.length - 1 && (
                    <div className="h-px w-full bg-border/50 mt-12" />
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* No results message */}
          {filteredImages.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-muted-foreground text-lg">
                No images found in this category
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 cursor-zoom-out backdrop-blur-sm"
          >
            <motion.button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white/80 hover:text-white z-10 p-2 hover:bg-white/10 rounded-full transition-colors"
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.95 }}
            >
              <X size={32} strokeWidth={1.5} />
            </motion.button>

            <motion.div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-6xl w-full cursor-default"
              layoutId={`image-${selectedImage.src}`}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto max-h-[85vh] object-contain rounded-sm"
              />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-6 text-center"
              >
                <p className="text-white text-lg font-light mb-2">
                  {selectedImage.caption}
                </p>
                <span className="text-white/60 text-sm tracking-wider uppercase">
                  {selectedImage.category}
                </span>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="border-t border-border/50 py-16 px-6 mt-20">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-2xl font-light mb-4">David Munyua Foundation</h3>
          <p className="text-muted-foreground text-sm mb-6">
            © {new Date().getFullYear()} All rights reserved.
          </p>
          <p className="text-muted-foreground/70 text-sm font-light">
            Growing darts in Kenya 🇰🇪
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Gallery;