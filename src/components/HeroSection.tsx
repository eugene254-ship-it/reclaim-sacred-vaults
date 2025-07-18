import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles, Star, Globe } from "lucide-react";

export const HeroSection = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const revealTexts = [
    "$2 Trillion Sleeping...",
    "Forgotten Fortunes Awakening...",
    "Ancient Wealth Returning...",
    "The Reclamation Begins..."
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % revealTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-cosmic">
      {/* Cosmic Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Orbs */}
        <motion.div
          className="absolute top-20 left-20 w-4 h-4 bg-primary rounded-full"
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-40 right-32 w-3 h-3 bg-primary-glow rounded-full"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.9, 0.4]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div
          className="absolute bottom-32 left-40 w-2 h-2 bg-primary rounded-full"
          animate={{ 
            scale: [1, 1.8, 1],
            opacity: [0.2, 0.7, 0.2]
          }}
          transition={{ 
            duration: 5, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />

        {/* Sacred Geometry Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10">
          <motion.line
            x1="0" y1="50%" x2="100%" y2="50%"
            stroke="hsl(45 100% 70%)"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, ease: "easeInOut" }}
          />
          <motion.line
            x1="50%" y1="0" x2="50%" y2="100%"
            stroke="hsl(45 100% 70%)"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, ease: "easeInOut", delay: 1 }}
          />
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        {/* Sacred Symbol */}
        <motion.div
          className="mb-8 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <div className="relative">
            <motion.div
              className="w-20 h-20 border-2 border-primary rounded-full flex items-center justify-center"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Star className="w-8 h-8 text-primary" />
            </motion.div>
            <motion.div
              className="absolute inset-0 w-20 h-20 border border-primary-glow rounded-full"
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          className="text-6xl md:text-8xl font-serif font-bold mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeInOut", delay: 0.5 }}
        >
          <span className="bg-gradient-gold bg-clip-text text-transparent">
            RECLAIM
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.h2
          className="text-2xl md:text-3xl font-serif text-primary-glow mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.8 }}
        >
          Awaken Forgotten Wealth • Restore the Living World
        </motion.h2>

        {/* Animated Text Reveals */}
        <motion.div
          className="h-20 md:h-24 flex items-center justify-center mb-12"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 1.2 }}
        >
          <motion.p
            key={textIndex}
            className="text-3xl md:text-5xl font-serif text-foreground"
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            {revealTexts[textIndex]}
          </motion.p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeInOut", delay: 1.8 }}
        >
          <Button
            size="lg"
            className="group bg-gradient-gold text-primary-foreground hover:scale-105 transition-all duration-300 px-8 py-6 text-lg font-semibold rounded-lg shadow-gold"
          >
            <Sparkles className="w-5 h-5 mr-2 group-hover:animate-spin" />
            Begin Ritual to Reclaim
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 px-8 py-6 text-lg"
          >
            <Globe className="w-5 h-5 mr-2" />
            Explore the Sanctum
          </Button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 2.5 }}
        >
          <motion.div
            className="w-1 h-16 bg-gradient-to-b from-primary to-transparent rounded-full"
            animate={{ scaleY: [1, 1.5, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </section>
  );
};