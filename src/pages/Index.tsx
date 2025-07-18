import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { ProblemSection } from "@/components/ProblemSection";
import { VisionSection } from "@/components/VisionSection";
import { WealthCounter } from "@/components/WealthCounter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Mail, ArrowRight } from "lucide-react";

const Index = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      // Here you would integrate with your email service
      console.log("Email submitted:", email);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Problem Section */}
      <ProblemSection />
      
      {/* Vision Section */}
      <VisionSection />
      
      {/* Live Counter Section */}
      <WealthCounter />
      
      {/* Movement Section */}
      <section className="py-24 bg-gradient-mystic">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              <span className="text-foreground">Join the </span>
              <span className="bg-gradient-gold bg-clip-text text-transparent">
                Movement
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Become a custodian of forgotten wealth. Help awaken sleeping capital 
              and direct it toward planetary regeneration. The Earth is waiting.
            </p>

            {!isSubmitted ? (
              <motion.form
                onSubmit={handleEmailSubmit}
                className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="flex-1">
                  <Input
                    type="email"
                    placeholder="your.email@domain.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-14 text-lg bg-card/50 border-primary/20 focus:border-primary"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="h-14 px-8 bg-gradient-gold text-primary-foreground hover:scale-105 transition-all duration-300 shadow-gold"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Join Movement
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </motion.form>
            ) : (
              <motion.div
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-green-500 rounded-full flex items-center justify-center">
                  <motion.svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <motion.path d="m9 12 2 2 4-4" />
                  </motion.svg>
                </div>
                <h3 className="text-2xl font-serif font-bold text-primary mb-2">
                  Welcome, Custodian
                </h3>
                <p className="text-muted-foreground">
                  Your journey to awaken forgotten wealth begins soon. 
                  Check your email for next steps.
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-background border-t border-primary/10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            className="flex items-center justify-center space-x-3 mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-10 h-10 border-2 border-primary rounded-full flex items-center justify-center">
              <motion.svg
                className="w-5 h-5 text-primary"
                fill="currentColor"
                viewBox="0 0 20 20"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </motion.svg>
            </div>
            <span className="text-2xl font-serif font-bold bg-gradient-gold bg-clip-text text-transparent">
              RECLAIM
            </span>
          </motion.div>
          <p className="text-muted-foreground">
            Awakening forgotten wealth • Restoring the living world
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
