import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Leaf, Droplets, Zap, Heart, Globe, Users } from "lucide-react";

export const VisionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const impacts = [
    {
      icon: Leaf,
      title: "Reforestation",
      description: "Restore ancient forests and plant billion new trees",
      color: "from-green-400 to-emerald-600"
    },
    {
      icon: Droplets,
      title: "Clean Water",
      description: "Purify rivers and provide water access globally",
      color: "from-blue-400 to-cyan-600"
    },
    {
      icon: Zap,
      title: "Renewable Energy",
      description: "Power communities with solar, wind, and sacred tech",
      color: "from-yellow-400 to-orange-600"
    },
    {
      icon: Heart,
      title: "Cultural Renewal",
      description: "Revive wisdom traditions and sacred practices",
      color: "from-pink-400 to-rose-600"
    },
    {
      icon: Globe,
      title: "Ecosystem Healing",
      description: "Repair coral reefs, wetlands, and biodiversity",
      color: "from-teal-400 to-green-600"
    },
    {
      icon: Users,
      title: "Community Empowerment",
      description: "Fund local guardians and regenerative projects",
      color: "from-purple-400 to-indigo-600"
    }
  ];

  return (
    <section ref={ref} className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6">
            <span className="text-foreground">The </span>
            <span className="bg-gradient-gold bg-clip-text text-transparent">
              Vision
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Imagine reclaimed wealth flowing like sacred rivers toward planetary healing. 
            Every forgotten dollar becomes a force for regeneration, restoration, and renewal.
          </p>
        </motion.div>

        {/* Vision Flow */}
        <div className="mb-16">
          <motion.div
            className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {/* Step 1 */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="w-32 h-32 mx-auto mb-4 bg-gradient-mystic rounded-full flex items-center justify-center border-2 border-primary/30">
                <span className="text-3xl font-serif font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Discover</h3>
              <p className="text-muted-foreground">AI awakens your forgotten wealth</p>
            </motion.div>

            {/* Arrow */}
            <motion.div
              className="hidden md:block"
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <div className="w-12 h-1 bg-gradient-gold rounded-full" />
            </motion.div>

            {/* Step 2 */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="w-32 h-32 mx-auto mb-4 bg-gradient-mystic rounded-full flex items-center justify-center border-2 border-primary/30">
                <span className="text-3xl font-serif font-bold text-primary">2</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Choose</h3>
              <p className="text-muted-foreground">Direct wealth to regenerative vaults</p>
            </motion.div>

            {/* Arrow */}
            <motion.div
              className="hidden md:block"
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <div className="w-12 h-1 bg-gradient-gold rounded-full" />
            </motion.div>

            {/* Step 3 */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <div className="w-32 h-32 mx-auto mb-4 bg-gradient-mystic rounded-full flex items-center justify-center border-2 border-primary/30">
                <span className="text-3xl font-serif font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Heal</h3>
              <p className="text-muted-foreground">Watch the Earth regenerate</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Impact Grid */}
        <motion.h3
          className="text-3xl font-serif font-bold text-center mb-12 text-foreground"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Where Your Reclaimed Wealth Flows
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {impacts.map((impact, index) => {
            const Icon = impact.icon;
            return (
              <motion.div
                key={impact.title}
                className="group"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  duration: 0.6,
                  delay: 0.9 + index * 0.1,
                  ease: "easeInOut"
                }}
              >
                <div className="h-full p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-primary/10 hover:border-primary/30 transition-all duration-300 group-hover:shadow-cosmic">
                  <motion.div
                    className={`w-16 h-16 mb-4 bg-gradient-to-br ${impact.color} rounded-lg flex items-center justify-center`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h4 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {impact.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {impact.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};